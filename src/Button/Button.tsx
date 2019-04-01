import * as React from "react";
import styles from "./Button.module.css";

interface Props {}

export default class Button extends React.PureComponent<Props> {
  render() {
    return (
      <button className={styles.button} {...this.props}>
        {this.props.children}
      </button>
    );
  }
}
