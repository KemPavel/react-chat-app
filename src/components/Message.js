import React from 'react';
import PropTypes from 'prop-types';

const MessageComponent = ({ message, author }) => (
  <p>
    <i>{author}</i>: {message} {console.log(message, author)}
  </p>
);


MessageComponent.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default MessageComponent;