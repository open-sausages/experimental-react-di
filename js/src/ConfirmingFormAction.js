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
      if (this.state.confirming) {
        extraButtons.push(
          <button key="confirm" type="submit" name={this.props.name} onClick={this.confirm}>
            {confirmText}
          </button>
        );
        extraButtons.push(<button key="cancel" onClick={this.cancel}>{cancelText}</button>);
      }

      return (
        <div>
          <FormAction { ...this.props } handleClick={this.preClick} />
          {extraButtons}
        </div>
      );
    }
  }

  return ConfirmingFormAction;
}