import React, {PropTypes} from 'react';
import GridCanvas from './GridCanvas';

const Move = {
  UP: 39,
  DOWN: 37,
  PLACE: 40
};

class LineCanvas extends GridCanvas {

  constructor(props, context) {
    super(props, context);

    this.state = {
      line: [this.props.startPlaceBell - 1]
    };

    this.keyDown = this.keyDown.bind(this);
  }

  isValidMove(keyCode) {
    return (keyCode === Move.UP) || (keyCode === Move.PLACE) || (keyCode === Move.DOWN);
  }

  keyDown(event) {
    if (this.isValidMove(event.which) && (this.state.line.length <= this.props.rows)) {
      event.preventDefault();
      this.drawLine(event.which);
    }
  }

  drawLine(move) {

    const line = Object.assign([], this.state.line);
    const ctx = this.getContext();
    ctx.strokeStyle = this.props.lineColor;

    let fromPos = line.pop();
    let toPos = fromPos;

    // Calculate horizontal move
    switch(move) {
      case Move.UP:
        if (fromPos < this.props.stage - 1) toPos++;
        else return;
        break;
      case Move.DOWN:
        if (fromPos >= 1) toPos--;
        else return;
        break;
      case Move.PLACE:
        break;
    }

    // Draw line
    ctx.beginPath();
    line.push(fromPos);
    ctx.moveTo(this.props.padding + (fromPos * this.getColumnWidth()),
               this.getLineOffset() + (line.length - 1) * this.getLineHeight());
    line.push(toPos);
    ctx.lineTo(this.props.padding + (toPos * this.getColumnWidth()),
               this.getLineOffset() + (line.length - 1) * this.getLineHeight());
    ctx.stroke();
    ctx.closePath();

    this.setState({ line });

  }

  componentDidMount() {
    this.drawGrid();
    document.addEventListener("keydown", this.keyDown);
  }

}

LineCanvas.propTypes = {
  lineColor: PropTypes.string
};

LineCanvas.defaultProps = Object.assign({}, GridCanvas.defaultProps, {
  lineColor: "blue"
});

export default LineCanvas;
