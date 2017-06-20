import React from 'react';

export default (FormAction) => {
  class ConfirmingFormAction extends React.Component {
    constructor(props) {
      super(props);
      this.state = {confirming: false};
      this.confirm = this.confirm.bind(this);
      this.cancel = this.cancel.bind(this);
      this.preClick = this.preClick.bind(this);
    }
    
    confirm(e) {
      this.props.handleClick(e, this.props.name || this.props.id);
      console.log('called handleclick', this.props.handleClick);
      this.setState({ confirming: false });
    }
    
    cancel() {
      this.setState({ confirming: false });
    }
    
    preClick(event) {
      event.preventDefault();
      this.setState( {confirming: true });
    }

    render() {
      const extraButtons = [];
      const { confirmText, cancelText } = this.props;
      const buttonProps = {
        ...this.props,
        extraClass: 'ss-ui-action-constructive',
        attributes: {
          ...this.props.attributes,
          type: 'button'
        },
      };
      delete buttonProps.name;
      delete buttonProps.type;

      const hideStyle = {
        display: this.state.confirming ? null : 'none'
      };

      return (
        <div>
          <FormAction { ...buttonProps } handleClick={this.preClick} />
          <button style={hideStyle} key="confirm" type="submit" name={this.props.name} onClick={this.confirm}>
            {confirmText}
          </button>
          <button style={hideStyle} key="cancel" type="button" onClick={this.cancel}>{cancelText}</button>
        </div>
      );
    }
  }

  return ConfirmingFormAction;
}