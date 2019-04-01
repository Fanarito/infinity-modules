import * as React from "react";
import styles from "./Row.module.css";

interface Props {}

export default class Row extends React.PureComponent<Props> {
  render() {
    return (
      <div {...this.props} className={styles.row}>
        {this.props.children}
      </div>
    );
  }
}
