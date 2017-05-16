import React from 'react';

/**
 * Experiment 4: Customise FormAction to confirm clicks. When in a loading
 * state, change the button style.
 */
export default (FormAction) => (props) => {
  const newProps = {
    ...props,
    data: {
      ...props.data,
      buttonStyle: props.loading ? 'danger' : props.data.buttonStyle
    },
    handleClick(e) {
      if(window.confirm('Did you really mean to click this?')) {
        props.handleClick(e);
      }
    }
  }

  return <FormAction {...newProps} />
}