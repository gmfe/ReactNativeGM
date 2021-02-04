const UUID = {
  /**
   * Generates a version 4 UUID as a hexadecimal string.
   * @returns {string} Hexadecimal UUID string.
   */
  generate(): string {
    const rand = this.getRandomInt;
    const hex = this.hexAligner;
    return (
      hex(rand(32), 8) + // time_low
      '-' +
      hex(rand(16), 4) + // time_mid
      '-' +
      hex(0x4000 | rand(12), 4) + // time_hi_and_version
      '-' +
      hex(0x8000 | rand(14), 4) + // clock_seq_hi_and_reserved clock_seq_low
      '-' +
      hex(rand(48), 12)
    ); // node
  },
  /**
   * Returns an unsigned x-bit random integer.
   * @param {int} x Positive integer ranging from 0 to 53, inclusive.
   * @returns {int} Unsigned x-bit random integer (0 <= f(x) < 2^x).
   */
  getRandomInt(x: number): number {
    if (x < 0 || x > 53) {
      return NaN;
    }
    const n = 0 | (Math.random() * 0x40000000); // 1 << 30
    return x > 30
      ? n + (0 | (Math.random() * (1 << (x - 30)))) * 0x40000000
      : n >>> (30 - x);
  },

  /**
   * Converts an integer to a zero-filled hexadecimal string.
   * @private
   * @param {int} num
   * @param {int} length
   * @returns {string}
   */
  hexAligner(num: number, length: number): string {
    let str = num.toString(16);
    let i = length - str.length;
    let z = '0';
    for (; i > 0; i >>>= 1, z += z) {
      if (i & 1) {
        str = z + str;
      }
    }
    return str;
  },
};

export default UUID;
