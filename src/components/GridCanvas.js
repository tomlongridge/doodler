import React, {PropTypes} from 'react';

class GridCanvas extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  getContext() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.font = this.props.textSize + 'pt ' + this.props.textFont;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    return ctx;
  }

  initialise(ctx) {
  }

  getLineOffset() {
    return this.props.padding + this.props.textSize + this.props.dotSize + 5;
  }

  getLineHeight() {
    return (this.props.height - this.getLineOffset() - this.props.padding) / this.props.rows
  }

  getColumnWidth() {
    return (this.props.width - (2 * this.props.padding)) / this.props.stage;
  }

  drawGrid() {

    const ctx = this.getContext();

    const lineOffset = this.getLineOffset();
    const lineHeight = this.getLineHeight();
    const columnWidth = this.getColumnWidth();

    for(var i = 0; i < this.props.stage; i++) {
      // Draw place bell number
      ctx.fillStyle = this.props.textColor;
      ctx.fillText(i + 1,
                   this.props.padding + (i * columnWidth),
                   this.props.padding);

      // Draw vertical line
      ctx.strokeStyle = this.props.gridColor;
      ctx.fillStyle = this.props.gridColor;
      ctx.beginPath();
      ctx.moveTo(this.props.padding + (i * columnWidth),
                 lineOffset);
      ctx.lineTo(this.props.padding + (i * columnWidth),
                 lineOffset + (this.props.rows * lineHeight));
      ctx.stroke();
      ctx.closePath();
    }

    // Draw start dot
    ctx.strokeStyle = this.props.dotColor;
    ctx.fillStyle = this.props.dotColor;
    ctx.arc(this.props.padding + ((this.props.startPlaceBell - 1)* columnWidth),
            lineOffset,
            this.props.dotSize,
            0,
            2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    // Draw end dot
    ctx.arc(this.props.padding + ((this.props.endPlaceBell - 1) * columnWidth),
            lineOffset + (this.props.rows * lineHeight),
            this.props.dotSize,
            0,
            2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  render() {
    return (
      <canvas ref="canvas" width={this.props.width} height={this.props.height}></canvas>
    );
  }

}

GridCanvas.propTypes = {
  textFont: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
  dotColor: PropTypes.string,
  gridColor: PropTypes.string,
  dotSize: PropTypes.number,
  padding: PropTypes.number,
  stage: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  startPlaceBell: PropTypes.number.isRequired,
  endPlaceBell: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

GridCanvas.defaultProps = {
  textFont: "sans-serif",
  textColor: "black",
  textSize: 12,
  dotColor: "black",
  gridColor: "darkgray",
  dotSize: 5,
  padding: 10
};

export default GridCanvas;
