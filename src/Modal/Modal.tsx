import * as React from "react";
import * as PropTypes from "prop-types";
import styles from "./Modal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => {};
}

const Title = (props: any) => {
  const { children } = props;
  return <div className={styles.title}>{children}</div>;
};

const Body = (props: any) => {
  const { children } = props;
  return <div className={styles.body}>{children}</div>;
};

const Footer = (props: any) => {
  const { children } = props;
  return <div className={styles.footer}>{children}</div>;
};

class Modal extends React.Component<Props> {
  static propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func
  };

  static defaultProps = {
    isOpen: false,
    onClose: () => {}
  };

  static Title = Title;
  static Body = Body;
  static Footer = Footer;

  stopPropagation(event: React.MouseEvent | React.UIEvent | React.TouchEvent) {
    event.stopPropagation();
    event.preventDefault();
  }

  render() {
    const { children, isOpen, onClose } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div className={styles.container} onClick={onClose}>
        <div className={styles.card} onClick={evt => this.stopPropagation(evt)}>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
