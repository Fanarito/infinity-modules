import * as React from "react";
import styles from "./CartoonNetworkSpinner.module.css";

interface Props {
  interval: number;
}

export default class CartoonNetworkSpinner extends React.PureComponent<Props> {
  static defaultProps = {
    interval: 3
  };

  render() {
    const characters = [
      "http://worldartsme.com/images/cartoon-network-characters-clipart-1.jpg",
      "https://banner2.kisspng.com/20180403/vpw/kisspng-gumball-watterson-richard-watterson-cartoon-networ-amazing-5ac3d9dcdfac78.4861128615227847329162.jpg",
      "https://www.pinclipart.com/picdir/middle/1-17496_images-were-colored-and-clipped-by-cartoon-clipart.png",
      "https://www.thoughtco.com/thmb/rkFZRh7wSN8BjubVvIkrdsh2tGo=/1367x875/filters:no_upscale():max_bytes(150000):strip_icc()/powerpuff_girls-56a00bc45f9b58eba4aea61d.jpg",
      "https://ya-webdesign.com/images/character-transparent-cartoon-network-11.png"
    ];

    const character = characters[Math.floor(Math.random() * characters.length)];
    console.log(character);

    return (
      <img
        className={styles.img}
        src={character}
        style={{ animationDuration: `${this.props.interval}s` }}
      />
    );
  }
}
