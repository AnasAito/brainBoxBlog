import React from "react";
import Field from "./field";

export default class EditableContainer extends React.Component {
  constructor(props) {
    super(props);

    // init counter
    this.count = 0;

    // init state
    this.state = {
      edit: false,
      value: props.value,
    };
  }

  componentDidUpdate(oldProps) {
    // By duplicating the data, you have to then
    // keep the local copy in sync with the
    // updated props...
    if (oldProps.value !== this.props.value) {
      // This triggers an unnecessary re-render
      this.setState({
        value: this.props.value,
      });
    }
  }

  componentWillUnmount() {
    // cancel click callback
    if (this.timeout) clearTimeout(this.timeout);
  }

  handleClick(e) {
    // cancel previous callback
    if (this.timeout) clearTimeout(this.timeout);

    // increment count
    this.count++;

    // schedule new callback  [timeBetweenClicks] ms after last click
    this.timeout = setTimeout(() => {
      // listen for double clicks
      if (this.count === 2) {
        // turn on edit mode
        this.setState({
          edit: true,
        });
      }

      // reset count
      this.count = 0;
    }, 300); // 250 ms
  }

  handleBlur(e) {
    // handle saving here
    // close edit mode
    this.props.onSave(this.props.id, this.state.value);
    this.setState({
      edit: false,
    });
  }

  render() {
    const { children, ...rest } = this.props;
    const { edit } = this.state;
    console.log(this.state);
    if (edit) {
      // edit mode
      return (
        <Field
          autoFocus
          {...rest}
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
          onBlur={this.handleBlur.bind(this)}
        />
      );
    } else {
      // view mode
      return <span onClick={this.handleClick.bind(this)}>{children}</span>;
    }
  }
}
