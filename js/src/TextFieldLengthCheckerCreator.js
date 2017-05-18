import React from 'react';

/**
 * Experiment 3: Customise TextField to alert on change if its value does not
 * match a pattern.
s */
export default (TextField) => (props) => {
  props.limit = 40;
  const {limit, value } = props;
  const invalid = limit !== undefined && value.length > limit;

  return (
    <div>
      <TextField {...props} />
      {invalid &&
      <span style={{color: 'red'}}>
          {`Text is too long! Must be ${limit} characters`}
        </span>
      }
    </div>
  );
}
