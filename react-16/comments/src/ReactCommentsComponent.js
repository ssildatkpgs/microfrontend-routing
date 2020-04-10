import * as React from 'react';
import PropTypes from 'prop-types';
import './ReactCommentsComponent.css';

export class ReactCommentsComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: [
        {
          id: '1',
          title: 'First comment',
          content: 'Comment text'
        }
      ]
    };
  }

  static propTypes = {
    styleObject: PropTypes.object,
  }

  static defaultProps = {
    styleObject: {
      backgroundColor: '#888',
      color: '#111'
    }
  }

  componentDidMount() {
    fetch('assets/comments.json')
      .then(response => response.json())
      .then(data => this.setState({ comments: data.comments }));
  }

  render() {
    const { styleObject } = this.props;
    const { comments } = this.state;

    return (
      <div className="reactCommentsComponent">
        <p style={styleObject}>Komentarze</p>
        <p>{comments[0].title}</p>
        {this.props.children}
      </div>
    )
  }
}

