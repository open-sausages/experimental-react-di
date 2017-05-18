import React from 'react';

/**
 * Experiment 2: Add a character count to all TextField instances
 */
export default (TextField) => (props) => {
    props.warningBuffer = 10;
    const { warningBuffer, limit, value: { length } } = props;
    const remainingChars = limit - length;
    const showWarning = length + warningBuffer >= limit;
    return (
        <div>
            <TextField {...props} />
            {showWarning &&
            	<small>Characters remaining: {remainingChars}</small>
            }
        </div>
    );
}
