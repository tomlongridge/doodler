import test from 'ava';
import Method from '../../../src/domain/Method';
import fs from 'fs';

test.beforeEach(t => {
  t.context.method = new Method("MethodName",
                            1,
                            "S",
                            "MethodNotation",
                            "LeadHeadCode");
});

test('Full name calculation', t => {
  t.is(t.context.method.getFullName(), "MethodName Surprise Unus");
});

test('Generate Full Notation - Plain Hunt Minimus', t => {
  t.context.method.notation = "-14-14,14";
  t.deepEqual(["-","14","-","14","-","14","-","14"],
              t.context.method.getFullNotation());
});

test('Generate Full Notation - Cambridge S Minor', t => {
  t.context.method.notation = "-36-14-12-36-14-56,12";
  t.deepEqual(["-","36","-","14","-","12","-","36","-","14","-","56",
               "-","14","-","36","-","12","-","14","-","36","-", "12"],
              t.context.method.getFullNotation());
});

test('Generate Full Notation - London S Minor', t => {
  t.context.method.notation = "36-36.14-12-36.14-14.36,12";
  t.deepEqual(["36","-","36","14","-","12","-","36","14","-","14","36",
               "14","-","14","36","-","12","-","14","36","-","36", "12"],
              t.context.method.getFullNotation());
});

test('Generate Full Notation - Edge Cases', t => {
  t.context.method.notation = "--";
  t.deepEqual(["-","-","-"], t.context.method.getFullNotation());
  t.context.method.notation = "-.-";
  t.deepEqual(["-","-","-"], t.context.method.getFullNotation());
  t.context.method.notation = ".-.-.";
  t.deepEqual(["-","-","-"], t.context.method.getFullNotation());
  t.context.method.notation = "ET.TE";
  t.deepEqual(["ET","TE","ET"], t.context.method.getFullNotation());
});

test('Grid creation - crossed row', t => {
  t.is(t.context.method.cross("1"), "1", "Unus");
  t.is(t.context.method.cross("12"), "21", "Micromus");
  t.is(t.context.method.cross("123"), "213", "Singles");
  t.is(t.context.method.cross("1234"), "2143", "Minimus");
  t.is(t.context.method.cross("1", "1"), "1", "Unus with places");
  t.is(t.context.method.cross("12", "1"), "12", "Micromus with places");
  t.is(t.context.method.cross("12", "2"), "12", "Micromus with places");
  t.is(t.context.method.cross("123", "1"), "132", "Singles with places");
});

test.cb('Grid creation - Plain Hunt Minimus', t => {
  t.plan(1);
  t.context.method.notation = "-14-14,-";
  t.context.method.stage = 4;

  fs.readFile('../../mocks/plain_hunt_minimus.txt', (err, data) => {
    const expectedGrid = data.toString().trim().split("\n");
    t.deepEqual(expectedGrid, t.context.method.getGrid());
    t.end();
  });

});

test.cb('Grid creation - Cambridge S Minor', t => {
  t.plan(1);
  t.context.method.notation = "-36-14-12-36-14-56,12";
  t.context.method.stage = 6;

  fs.readFile('../../mocks/cambridge_surprise_minor.txt', (err, data) => {
    const expectedGrid = data.toString().trim().split("\n");
    t.deepEqual(expectedGrid, t.context.method.getGrid());
    t.context.method.getGrid().forEach(row => console.log(row));
    t.end();
  });

});

test.cb('Grid creation - London S Minor', t => {
  t.plan(1);
  t.context.method.notation = "36-36.14-12-36.14-14.36,12";
  t.context.method.stage = 6;

  fs.readFile('../../mocks/london_surprise_minor.txt', (err, data) => {
    const expectedGrid = data.toString().trim().split("\n");
    t.deepEqual(expectedGrid, t.context.method.getGrid());
    t.end();
  });

});

test.cb('Grid creation - Bristol S Maximus', t => {
  t.plan(1);
  t.context.method.notation = "-5T-14.5T-5T.36.14-7T.58.16-9T.70.18-18.9T-18-1T,12";
  t.context.method.stage = 12;

  fs.readFile('../../mocks/bristol_surprise_maximus.txt', (err, data) => {
    const expectedGrid = data.toString().trim().split("\n");
    t.deepEqual(expectedGrid, t.context.method.getGrid());
    t.end();
  });

});
