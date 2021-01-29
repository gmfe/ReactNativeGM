const is = {};

// 简单判断是否 promise
// 和 web 不一样，不能通过 toString.call(arg) === '[object promise]'
is.promise = (arg) => arg && arg.then;

export default is;
