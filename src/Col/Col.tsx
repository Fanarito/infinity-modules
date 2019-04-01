import * as React from "react";

interface Props {
  size: number;
}

export default class Col extends React.PureComponent<Props> {
  static defaultProps = {
    size: 1
  };

  render() {
    const { size } = this.props;

    const actualSize = size * (100 / 12);

    return (
      <div {...this.props} style={{ width: `${actualSize}%` }}>
        {this.props.children}
      </div>
    );
  }
}
