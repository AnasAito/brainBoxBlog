import React from "react";
import omit from "lodash/omit";
export default class FieldStyle extends React.Component {
  constructor(props) {
    super(props);

    // init counter
    this.count = 0;

    // init state
    this.state = {
      value: props.value,
    };
  }
  componentDidMount() {
    this.ref && this.ref.focus();
  }

  render() {
    const { autoFocus, ...rest } = this.props;

    // auto focus
    const ref = autoFocus
      ? (ref) => {
          this.ref = ref;
        }
      : null;
    return (
      <input
        className="form-input block w-full sm:text-sm sm:leading-5"
        ref={ref}
        type="text"
        {...omit(rest, ["onSave"])}
      />
    );
  }
}
