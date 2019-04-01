import React, { Component } from "react";

import {
  Modal,
  Button,
  Carousel,
  Row,
  Col,
  DatePicker,
  CartoonNetworkSpinner
} from "infinity-modules";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      date: new Date()
    };
  }

  render() {
    return (
      <div>
        <h1>Modal</h1>
        <Button onClick={() => this.setState({ isOpen: true })}>
          Open Modal
        </Button>
        <Modal
          isOpen={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
        >
          <Modal.Title>Wow</Modal.Title>
          <Modal.Body>No</Modal.Body>
          <Modal.Footer>Yes</Modal.Footer>
        </Modal>
        <hr />

        <h1>Carousel</h1>
        <Carousel
          size="small"
          images={[
            "http://pngimg.com/uploads/number1/number1_PNG14874.png",
            "http://pngimg.com/uploads/number2/Number%202%20PNG%20images%20free%20download_PNG14936.png",
            "http://idolosol.com/images/three-4.jpg"
          ]}
        />
        <hr />

        <h1>Row and Col</h1>
        <Row>
          <Col size={6}>6</Col>
          <Col size={6}>6</Col>
          <Col size={4}>4</Col>
          <Col size={6}>6</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
        </Row>
        <hr />

        <h1>Date Picker</h1>
        <DatePicker
          date={this.state.date}
          onDatePick={date => this.setState({ date })}
        />
        <hr />

        <h1>Spinner</h1>
        <CartoonNetworkSpinner />
      </div>
    );
  }
}
