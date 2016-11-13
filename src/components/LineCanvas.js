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
  }

  isValid(keyCode) {
    return (keyCode === Move.UP) || (keyCode === Move.PLACE) || (keyCode === Move.DOWN);
  }

  componentDidMount() {

    this.drawGrid();
    const ctx = this.getContext();
    ctx.strokeStyle = this.props.lineColor;

    document.addEventListener("keydown", (event) => {

      const line = Object.assign([], this.state.line);

      if (this.isValid(event.which) && (line.length <= this.props.rows)) {

        event.preventDefault();
        let from = line.pop();
        let to = from;

        switch(event.which) {
          case Move.UP:
            if (from < this.props.stage - 1) to++;
            else return;
            break;
          case Move.DOWN:
            if (from >= 1) to--;
            else return;
            break;
          case Move.PLACE:
            break;
        }

        ctx.beginPath();
        line.push(from);
        ctx.moveTo(this.props.padding + (from * this.getColumnWidth()),
                   this.getLineOffset() + (line.length - 1) * this.getLineHeight());
        line.push(to);
        ctx.lineTo(this.props.padding + (to * this.getColumnWidth()),
                   this.getLineOffset() + (line.length - 1) * this.getLineHeight());
        ctx.stroke();
        ctx.closePath();

        this.setState({ line });

      }

    });

  }

}

LineCanvas.propTypes = {
  lineColor: PropTypes.string
};

LineCanvas.defaultProps = Object.assign({}, GridCanvas.defaultProps, {
  lineColor: "blue"
});

export default LineCanvas;
