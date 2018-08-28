# pretty-frame-rate [![Build Status][travis badge]][travis link] [![Coverage Status][coveralls badge]][coveralls link]

Transform a frame-rate value into an human readable string.

## Usage

```console
$ npm install pretty-frame-rate
```

```js
const prettyFrameRate = require('pretty-frame-rate');

prettyFrameRate(30000 / 1001);
//=> '29.97fps'

prettyFrameRate('30000/1001');
//=> '29.97fps'

prettyFrameRate(60);
//=> '60fps'

prettyFrameRate(30000 / 1001, { decimals: 0 });
//=> '30fps'

prettyFrameRate(30, { suffix: 'ips' });
//=> '30ips'
```

The default options are:

```js
const DEFAULT_OPTIONS = {
  decimals: 2,
  suffix: 'fps'
};
```

## Related

- [pretty-ms][pretty-ms] - Convert milliseconds to a human readable string: 
`1337000000` → `15d 11h 23m 20s`
- [pretty-bytes][pretty-bytes] - Convert bytes to a human readable string: 
1337 → 1.34 kB

## License

This project is licensed under the [MIT license](LICENSE).

[travis badge]: https://travis-ci.com/dimitrinicolas/pretty-frame-rate.svg?branch=master
[travis link]: https://travis-ci.com/dimitrinicolas/pretty-frame-rate
[coveralls badge]: https://coveralls.io/repos/github/dimitrinicolas/pretty-frame-rate/badge.svg?branch=master
[coveralls link]: https://coveralls.io/github/dimitrinicolas/pretty-frame-rate?branch=master

[pretty-ms]: https://github.com/sindresorhus/pretty-ms
[pretty-pretty-bytes]: https://github.com/sindresorhus/pretty-pretty-bytes
