import React from 'react';

const HideableComponent = ({Component, ...props}) => (
  props.shouldHide ? null : <Component {...props} />
);

HideableComponent.propTypes = {
  shouldHide: React.PropTypes.boolean
};

HideableComponent.defaultProps = {
  shouldHide: false
};

export default (Component) => (props) => (
  props.shouldHide ? <span>hidden</span> : <Component {...props} />
);