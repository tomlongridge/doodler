class Method {

  constructor(name, stage, type, notation, leadHeadCode) {
    this.name = name;
    this.stage = stage;
    this.type = type;
    this.notation = notation;
    this.leadHeadCode = leadHeadCode;
  }

  getStageName() {
    switch(this.stage) {
      case 1: return "Unus";
      case 2: return "Micromus";
      case 3: return "Singles";
      case 4: return "Minimus";
      case 5: return "Doubles";
      case 6: return "Minor";
      default: return "!UNKNOWN STAGE! " + this.stage;
    }
  }

  getTypeName() {
    switch(this.type) {
      case "S": return "Surprise";
      case "P": return "";
      default: return "!UNKNOWN TYPE! " + this.type;
    }
  }

  getFullName() {
    return this.name + ' ' + this.getTypeName() + ' ' + this.getStageName();
  }

  getGrid() {

    const grid = [];

    // Add start row
    let row = '';
    for (let i = 1; i <= this.stage; i++) {
      row += i;
    }
    grid.push(row);

    let [notation, leadEnd] = this.notation.split(",");

    let places = "";
    for (let i = 0; i < notation.length; i++) {
      if (notation[i] === '-') {
        if (places.length > 0) {
          row = this.cross(row, places);
          places = "";
          grid.push(row);
        }
        row = this.cross(row);
        grid.push(row);
      } else {
        places += notation[i];
      }
    }
    if (places.length > 0) {
      row = this.cross(row, places);
      grid.push(row);
    }

    if (this.notation.indexOf(",") > -1) {
      row = this.cross(row, leadEnd);
      grid.push(row);
    }

    return grid;
  }

  cross(row, places="") {
    let crossedRow = '';
    let rowPart = '';
    let bells = row.split("");
    for (let i = 1; i <= bells.length; i++) {
      if (places.indexOf(''+i) > -1) {
        crossedRow += rowPart + bells[i-1];
        rowPart = '';
      } else {
        rowPart += bells[i-1];
        if (rowPart.length == 2) {
          crossedRow += rowPart[1] + rowPart[0];
          rowPart = '';
        }
      }
    }
    if (rowPart.length > 0) {
      crossedRow += rowPart;
    }
    return crossedRow;
  }

}

export default Method;
