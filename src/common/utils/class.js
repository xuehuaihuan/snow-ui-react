/**
 * class of - 是否为Class
 * @param  { String } className Class name in JavaScript
 * @return { Function } as follows: - 如下：
 */
const classOf = (className) => {
  return function (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === `${className}`;
  };
};

/**
 * is object - 是否为Object类型
 * @param  { Null | Undefined |  String | Boolean | Number ｜ Object | Symbol } obj any Object of JavaScript
 * @return { Boolean }
 */
export const isObject = classOf('Object');

/**
 * is boolean - 是否为Boolean类型
 * @param  { Null | Undefined |  String | Boolean | Number ｜ Object | Symbol } obj any Object of JavaScript
 * @return { Boolean }
 */
export const isBoolean = classOf('Boolean');

/**
 * is number - 是否为Number类型
 * @param  { Null | Undefined |  String | Boolean | Number ｜ Object | Symbol } obj any Object of JavaScript
 * @return { Boolean }
 */
export const isNumber = classOf('Number');
