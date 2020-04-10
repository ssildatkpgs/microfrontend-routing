import React from 'react';
import ReactDOM from 'react-dom';
import htmlToReact from 'html-to-react';
import './index.css';

import { ReactButtonComponent } from './ReactButtonComponent';

class ReactButton extends HTMLElement {
  constructor() {
    super();
    this.observer = new MutationObserver(() => this.updateReactComponent());
    this.observer.observe(this, { attributes: true });

    this.excludedProps = ['id', 'style'];
  }

  connectedCallback() {
    this._innerHTML = this.innerHTML;
    this.mountReactComponent();
  }

  disconnectedCallback() {
    this.unmountReactComponent();
    this.observer.disconnect();
  }

  mountReactComponent() {
    const propTypes = ReactButtonComponent.propTypes ? ReactButtonComponent.propTypes : {};
    const props = {
      ...this.getProps(this.attributes, propTypes),
      ...this.getEvents(propTypes),
      children: this.parseHtmlToReact(this._innerHTML)
    };

    ReactDOM.render(<ReactButtonComponent {...props} />, this);
  }

  unmountReactComponent() {
    ReactDOM.unmountComponentAtNode(this);
  }

  updateReactComponent() {
    this.unmountReactComponent();
    this.mountReactComponent();
  }

  parseHtmlToReact(html) {
    return html && new htmlToReact.Parser().parse(html);
  }

  getProps(attributes, propTypes) {
    return [ ...attributes ]
      .filter(attribute => !this.excludedProps.includes(attribute.name))
      .map(attribute => this.convertToProp(propTypes, attribute.name, attribute.value))
      .reduce((props, prop) => (
        {
          ...props,
          [prop.name]: prop.value
        }
      ), {});
  }

  getEvents(propTypes) {
    return Object.keys(propTypes)
      .filter(key => /on([A-Z].*)/.exec(key))
      .reduce((events, event) => (
        {
          ...events,
          [event]: params => this.dispatchEvent(new CustomEvent(event, { ...params }))
        }
      ), {});
  }

  convertToProp(propTypes, attributeName, attributeValue) {
    const propName = Object.keys(propTypes)
      .find(key => key.toLowerCase() === attributeName);
    let transformedValue = attributeValue;

    if(attributeValue === 'true' || attributeValue === 'false') {
      transformedValue = attributeValue === 'true';
    } else if (!isNaN(attributeValue) && attributeValue !== '') {
      transformedValue = +attributeValue;
    } else if (/^{.*}/.exec(attributeValue)) {
      transformedValue = JSON.parse(attributeValue);
    }

    return {
      name: propName ? propName : attributeName,
      value: transformedValue
    };
  }
}

window.customElements.define('react-button', ReactButton);
