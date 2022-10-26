const STR_ZERO = "0";
const DEC_ZERO = STR_ZERO.charCodeAt(0);

/**
 * 43. Multiply Strings
 */
function multiply(num1: string, num2: string): string {
  const strlen1 = num1.length;
  const strlen2 = num2.length;

  /**
   * create and generate 0-filled array
   *
   * references:
   * https://stackoverflow.com/questions/1295584/most-efficient-way-to-create-a-zero-filled-javascript-array
   * https://stackoverflow.com/questions/54481918/how-does-v8-optimise-the-creation-of-very-large-arrays
   */
  const product: number[] = new Array(strlen1 + strlen2);
  for (let i = 0; i < strlen1 + strlen2; ++i) product[i] = 0;

  /**
   * start processing
   */
  for (let i = strlen1 - 1; i >= 0; i -= 1) {
    for (let j = strlen2 - 1; j >= 0; j -= 1) {
      const p1 = i + j;
      const p2 = p1 + 1;

      const mul =
        (num1.charCodeAt(i) - DEC_ZERO) * (num2.charCodeAt(j) - DEC_ZERO);
      const temp = mul + product[p2];

      product[p1] += Math.floor(temp / 10);
      product[p2] = temp % 10;
    }
  }

  /**
   * build output string
   */
  const sb = product.reduce((acc: string, value: number) => {
    if (value === 0 && !acc) return acc;
    return acc.concat(value.toString());
  }, "");

  if (!sb) return STR_ZERO;
  return sb;
}
