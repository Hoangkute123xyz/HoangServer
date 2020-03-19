exports.calculate = function (a,b,operator) {
    return a+" "+ operator+" "+b+" = "+eval(a+operator+b);
};