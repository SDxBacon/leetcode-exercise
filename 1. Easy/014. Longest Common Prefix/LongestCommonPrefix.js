function longestCommonPrefix(strs) {
  let i = 0;
  const refString = strs[0];
  const strsLength = strs.length;

  if (strsLength === 1) return strs[0];

  for (let refCharacter of strs[0]) {
    /**
     * comparing with the rest of strings collection
     */
    for (let j = 1; j < strsLength; j += 1) {
      // if diversity found, return the current prefix
      if (strs[j].charAt(i) !== refCharacter) {
        return refString.slice(0, i);
      }
    }

    i += 1;
  }

  return refString;
}
