// https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = (strs: string[]): string => {
  const strMinLength = strs
    .map((str) => str.length)
    .reduce((prevStr, nextStr) => Math.min(prevStr, nextStr));

  const strMin = strs.find((str) => str.length === strMinLength) || "";

  let prefix = "";

  for (let i = 0; i < strMinLength; i += 1) {
    const prefixCandidate = strMin.slice(0, strMin.length - i);
    const regexp = new RegExp(`^${prefixCandidate}.*`, "g");

    const isMatched = strs.every((str) => {
      return !!str.match(regexp);
    });

    if (isMatched) {
      prefix = prefixCandidate;
      break;
    }
  }

  return prefix;
};

export default longestCommonPrefix;
