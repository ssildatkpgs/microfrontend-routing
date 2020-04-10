import * as React from 'react';
import PropTypes from 'prop-types';
import './ReactHitsComponent.css';

export class ReactHitsComponent extends React.Component {
  static propTypes = {
    hits: PropTypes.number
  }

  static defaultProps = {
    hits: '0'
  }

  render() {
    const { hits } = this.props;

    return (
      <div className="reactHitsComponent">
        <p className="reactHitsComponent__info">Liczba wyświetleń: <strong>{hits}</strong></p>
        {this.props.children}
      </div>
    )
  }
}

