/**
 * isSvg generator - isSvg生成器
 * @param  { String } isSvg
 * @return { Boolean }
 */
const genIsSvg = () => {
  const reg = /(\.svg)$/;

  return (src) => {
    return reg.test(src);
  };
};

/**
 * is svg - 是否为svg
 * @param  { String } isSvg
 * @return { Boolean }
 */
export const isSvg = genIsSvg();
