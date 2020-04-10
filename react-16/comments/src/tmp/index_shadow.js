import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ReactButtonComponent } from './ReactButtonComponent';

class ReactButton extends HTMLElement {
  mountPoint;
  
  connectedCallback() {
    this.mountReactComponent();
  }
  
  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }
  
  mountReactComponent() {
    if (!this.mountPoint) {
      this.mountPoint = document.createElement('div');
      this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint);
    }

    ReactDOM.render(<ReactButtonComponent />, this.mountPoint);
  }
}

window.customElements.define('react-button', ReactButton);
