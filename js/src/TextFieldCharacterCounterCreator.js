import React from 'react';

/**
 * Experiment 2: Add a character count to all TextField instances
 */
export default (TextField) => {
    return class FancyText extends React.Component {
      constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          characterCount: props.value.length
        }
      }

      handleChange(e) {
        this.setState({
          characterCount: e.target.value.length
        });

        this.props.onChange(e);
      }

      render() {
        return (
          <div>
            <TextField {...this.props} onChange={this.handleChange} />
            <small>Character count: {this.state.characterCount}</small>
          </div>
        )
      }
    }
}