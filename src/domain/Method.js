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

  getFullNotation() {

    let [notation, leadEnd] = this.notation.split(",");

    let fullNotation = [];
    for (let i = 0; i < notation.length; i++) {
      if (notation[i] == '-') {
        fullNotation.push(notation[i]);
      } else if ((i<notation.length-2) && (notation[i] == '-')) {
        fullNotation.push(notation[i++]);
      } else if (/[0-9ET]/.test(notation[i])) {
        if ((i>0) && /[0-9ET]/.test(notation[i-1])) {
          fullNotation.push(fullNotation.pop() + notation[i]);
        } else {
          fullNotation.push(notation[i]);
        }
      }
    }

    let last = fullNotation.pop();
    let forward = [...fullNotation];
    let reverse = [...fullNotation.reverse()];
    let lead = [...forward, last, ...reverse];
    if (typeof leadEnd !== 'undefined') lead.push(leadEnd);
    return lead;

  }

  getBellLabel(bellNumber) {
    switch(bellNumber) {
      case 10: return '0';
      case 11: return 'E';
      case 12: return 'T';
      default: return bellNumber;
    }
  }

  getGrid() {

    const grid = [];

    // Add start row
    let row = '';
    for (let i = 1; i <= this.stage; i++) {
      row += this.getBellLabel(i);
    }
    grid.push(row);

    const notation = this.getFullNotation();
    for (let i = 0; i < notation.length; i++) {
      if (notation[i] === '-') {
        row = this.cross(row);
      } else {
        row = this.cross(row, notation[i]);
      }
      grid.push(row);
    }
    return grid;
  }

  cross(row, places="") {
    let crossedRow = '';
    let rowPart = '';
    let bells = row.split("");
    for (let i = 1; i <= bells.length; i++) {
      if (places.indexOf(this.getBellLabel(i)) > -1) {
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
