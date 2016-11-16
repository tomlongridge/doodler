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

test('Grid creation - Plain Hunt Minimus', t => {
  t.context.method.notation = "-14-14-14-14";
  t.context.method.stage = 4;

  fs.readFile('./plain_hunt_minimus.txt', (err, data) => {
    const expectedGrid = data.toString().trim().split("\n");
    t.deepEqual(expectedGrid, t.context.method.getGrid());
  });

});

test('Grid creation - Plain Hunt Minimus with lead end', t => {
  t.context.method.notation = "-14-14-14-,14";
  t.context.method.stage = 4;

  fs.readFile('./plain_hunt_minimus.txt', (err, data) => {
    const expectedGrid = data.toString().trim().split("\n");
    t.deepEqual(expectedGrid, t.context.method.getGrid());
  });

});
