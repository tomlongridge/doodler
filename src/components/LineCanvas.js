import React, {PropTypes} from 'react';

const Move = {
  UP: 39,
  DOWN: 37,
  PLACE: 40
};

class LineCanvas extends React.Component {

  isValid(keyCode) {
    return (keyCode === Move.UP) || (keyCode === Move.PLACE) || (keyCode === Move.DOWN);
  }

  drawGrid(ctx, stage, rows, rowOffset, rowHeight, startPlaceBell, endPlaceBell) {

    ctx.font = "12pt sans-serif";
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';

    for(var i = 1; i <= stage; i++) {
    ctx.fillText(i, (i * rowHeight), rowHeight);

    ctx.beginPath();
    ctx.strokeStyle = '#999999';
    ctx.moveTo(i * rowHeight, rowOffset);
    ctx.lineTo(i * rowHeight, rowOffset + rows * rowHeight);
    ctx.stroke();
    ctx.closePath();
    }

    ctx.arc(startPlaceBell * rowHeight, rowOffset, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.arc(endPlaceBell * rowHeight, rowOffset + rows * rowHeight, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  componentWillMount() {

  }

  componentDidMount() {
    let ctx = this.refs.canvas.getContext("2d");

    var stage = 6;
    var rows = 20;

    var verticalOffset = 30;
    var rowHeight = 20;
    var startPlace = 2;
    var endPlace = 6;
    this.drawGrid(ctx, stage, rows, verticalOffset, rowHeight, startPlace, endPlace);

    ctx.strokeStyle = 'blue';
    var verticalPos = 0;
    var line = [startPlace];

      document.addEventListener("keydown", (event) => {

    if (this.isValid(event.which) && (line.length <= rows)) {

    event.preventDefault();

    var from = line.pop();
    var to = from;

    switch(event.which) {
    case Move.UP:
    if (from <= stage - 1) to++;
    else return;
    break;
    case Move.DOWN:
    if (from >= 2) to--;
    else return;
    break;
    case Move.PLACE:
    break;
    }

    ctx.beginPath();
    line.push(from);
    ctx.moveTo(from * rowHeight, verticalOffset + (line.length - 1) * rowHeight);
    line.push(to);
    ctx.lineTo(to * rowHeight, verticalOffset + (line.length - 1) * rowHeight);
    ctx.stroke();
    ctx.closePath();

  }

  });

  }

  render() {
    return (
      <canvas ref="canvas" width="600" height="600"></canvas>
    );
  }

}

export default LineCanvas;
