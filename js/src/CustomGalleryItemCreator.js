import React from 'react';

export default (File) => (props) => {
  props.item.title = 'U.C. owns this space';
  return <File {...props} />
};