import React from 'react';

export default (props) => {
  const [area, exchange, ext] = props.value.split('-');
  function handleChange (i, e) {
    const parts = props.value.split('-');
    parts[i] = e.target.value;
    const formatted = parts.join('-');
    props.onChange(formatted, e);
  };
  return (
    <div>
      (<input type="text" value={area} onChange={handleChange.bind(null, 0)}/>)
      <input type="text" value={exchange} onChange={handleChange.bind(null, 1)}/> -
      <input type="text" value={ext} onChange={handleChange.bind(null, 2)}/>
    </div>
  );
};