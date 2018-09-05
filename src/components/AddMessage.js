import React, { Component } from 'react';
import PropTypes from 'prop-types';

const AddMessageComponent = props => {
  let input;

  return (
    <section id='new-message'>
      <input
        type="text"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            props.dispatch(input.value, 'Todo change name');
            input.value = '';
          }
        }}
        ref={(node) => {
          input = node
        }}
      />
    </section>
  )
};


AddMessageComponent.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default AddMessageComponent;