var Move = {
	UP: 39,
	DOWN: 37,
	PLACE: 40,
	isValid: function(keyCode) {
		return (keyCode == Move.UP) || (keyCode == Move.PLACE) || (keyCode == Move.DOWN);
	}
};

function drawGrid(ctx, stage, rows, rowOffset, startPlaceBell, endPlaceBell) {

	ctx.font = "12pt sans-serif";
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
		
	for(var i = 1; i <= stage; i++) {
		ctx.fillText(i, (i * 20), 20);

		ctx.beginPath();
		ctx.strokeStyle = '#999999';
		ctx.moveTo(i * 20, rowOffset);
		ctx.lineTo(i * 20, rowOffset + rows * 20);
		ctx.stroke();
		ctx.closePath();
	}

	ctx.arc(startPlaceBell * 20, rowOffset, 5, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.arc(endPlaceBell * 20, rowOffset + rows * 20, 5, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();
}