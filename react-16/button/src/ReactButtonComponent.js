import * as React from 'react';
import PropTypes from 'prop-types';
import './ReactButtonComponent.css';

export class ReactButtonComponent extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    styleObject: PropTypes.object,
    onReactEvent: PropTypes.func
  }

  static defaultProps = {
    message: 'Domyślna wiadomość',
    styleObject: {
      backgroundColor: '#888',
      color: '#111'
    }
  }

  render() {
    const { message, styleObject, onReactEvent } = this.props;

    return (
      <div className="reactButtonComponent">
        <p>Wiadomość: <strong>{message}</strong></p>
        <button className="reactButtonComponent__button" onClick={onReactEvent} style={styleObject}>React button</button>
        {this.props.children}
      </div>
    )
  }
}

