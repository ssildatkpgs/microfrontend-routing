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
    itemId: PropTypes.number,
    styleObject: PropTypes.object,
  }

  static defaultProps = {
    itemId: 1,
    styleObject: {
      backgroundColor: '#888',
      color: '#222'
    }
  }

  isMounted = false;

  componentDidMount() {
    this.isMounted = true;

    fetch('assets/comments.json')
      .then(response => response.json())
      .then(data => {
        if(this.isMounted) {
          const filteredComments = data.comments
            .filter(comment => comment.id === this.props.itemId.toString());

          this.setState({ comments: filteredComments });
        }
      });
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  render() {
    const { styleObject } = this.props;
    const { comments } = this.state;

    return (
      <div className="reactCommentsComponent">
        <h3 style={styleObject}
            className="reactCommentsComponent__commentsTitle">Komentarze ({comments.length})</h3>
        <div className="reactCommentsComponent__comments">
          {comments.map((comment, index) =>
            <div className="reactCommentsComponent__commentBox" key={index}>
              <div className="reactCommentsComponent__commentTop">
                <h4 className="reactCommentsComponent__commentTitle">{comment.title}</h4>
                <span className="reactCommentsComponent__commentDate">Dodano: {comment.date}</span>
              </div>
              <p className="reactCommentsComponent__commentContent">{comment.content}</p>
            </div>
          )}
        </div>
        {this.props.children}
      </div>
    )
  }
}

