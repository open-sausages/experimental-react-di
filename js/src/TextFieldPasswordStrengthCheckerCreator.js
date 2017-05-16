import React from 'react';
import { compose } from 'redux';

/**
 * Experiment 3: Customise TextField to alert on change if its value does not
 * match a pattern.
s */
export default (TextField) => (props) => {
  let timeout;
  const passwordCheck = (e) => {
    e.persist();
    timeout && window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      if (!e.target.value.match(/\d{2}/)) {
        alert('The text must contain at least two consecutive digits');
      }
    }, 1000);

    return e;
  };
  const newProps = {
    ...props,
    onChange: compose(props.onChange, passwordCheck)
  };

  return <TextField {...newProps} />
}