import React from 'react';

/**
 * Experiment 1: Customise the GalleryItem.File component by forcing a
 * static value for a prop.
 */
export default (File) => (props) => {
  props.item.title = 'U.C. owns this space';
  return <File {...props} />
};