const DEFAULT_OPTIONS = {
  decimals: 2,
  suffix: 'fps'
};

/**
 * Transform a frame-rate value into an human readable string
 * 29.97002997 ->  "29.97fps"
 * "30000/1001" -> "29.97fps"
 * @param {number|string} input frame-rate value
 * @param {object} opts decimals = 2, suffix = 'fps'
 * @returns {string|null} result
 */
const prettyFrameRate = (input, opts = {}) => {
  const options = Object.assign({}, DEFAULT_OPTIONS, typeof opts === 'object' && opts !== null ? opts : {});

  let frameRate;
  if (typeof input === 'string') {
    if (input.indexOf('/') !== -1) {
      const splittedFrameRate = input.split('/');
      frameRate = splittedFrameRate[0] / splittedFrameRate[1];
    } else {
      frameRate = parseInt(input, 10);
    }
  } else {
    frameRate = input;
  }

  if (typeof frameRate !== 'number' || isNaN(frameRate) || !isFinite(frameRate)) {
    return null;
  }

  const pow = 10 ** options.decimals;
  return `${Math.round(frameRate * pow) / pow}${options.suffix}`;
};

module.exports = prettyFrameRate;
