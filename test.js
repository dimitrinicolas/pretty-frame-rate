import test from 'ava';

import prettyFrameRate from '.';

test('30000 / 1001', async t => {
  t.is(prettyFrameRate(30000 / 1001), '29.97fps');
});

test("'30000/1001'", async t => {
  t.is(prettyFrameRate('30000/1001'), '29.97fps');
});

test('60', async t => {
  t.is(prettyFrameRate(60), '60fps');
});

test("'60'", async t => {
  t.is(prettyFrameRate('60'), '60fps');
});

test('Decimals option', async t => {
  t.is(prettyFrameRate(30000 / 1001, { decimals: 0 }), '30fps');
});

test('Suffix option', async t => {
  t.is(prettyFrameRate(30, { suffix: 'ips' }), '30ips');
});

test('null', async t => {
  t.is(prettyFrameRate(null), null);
});

test("Infinite '30000/0'", async t => {
  t.is(prettyFrameRate('30000/0'), null);
});

test('Invalid options', async t => {
  t.is(prettyFrameRate(60, null), '60fps');
});
