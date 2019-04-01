import * as React from "react";
import styles from "./Carousel.module.css";
import rightArrow from "./right-arrow.svg";
import leftArrow from "./left-arrow.svg";

interface Props {
  images: string[];
  size: "small" | "medium" | "large";
}

interface State {
  currentImageIdx: number;
}

export default class Carousel extends React.Component<Props, State> {
  static defaultProps = {
    images: [
      "https://www.firstaidacademy.co.uk/app/themes/ibex-theme/img/no-img.gif"
    ],
    size: "medium"
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      currentImageIdx: 0
    };
  }

  nextImage() {
    const totalImages = this.props.images.length;
    const { currentImageIdx } = this.state;

    if (currentImageIdx + 1 === totalImages) {
      this.setState({
        currentImageIdx: 0
      });
    } else {
      this.setState({
        currentImageIdx: currentImageIdx + 1
      });
    }
  }

  previousImage() {
    const totalImages = this.props.images.length;
    const { currentImageIdx } = this.state;

    if (currentImageIdx - 1 === -1) {
      this.setState({
        currentImageIdx: totalImages - 1
      });
    } else {
      this.setState({
        currentImageIdx: currentImageIdx - 1
      });
    }
  }

  render() {
    const { images, size } = this.props;
    const { currentImageIdx } = this.state;
    return (
      <div className={styles.container}>
        <div
          className={`${styles.pager} ${styles.leftPager}`}
          onClick={() => this.previousImage()}
        >
          <img src={leftArrow} />
        </div>
        <img
          src={images[currentImageIdx]}
          className={`${styles.image} ${styles[size]}`}
        />
        <div
          className={`${styles.pager} ${styles.rightPager}`}
          onClick={() => this.nextImage()}
        >
          <img src={rightArrow} />
        </div>
      </div>
    );
  }
}
