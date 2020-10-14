module.exports = function reverse(n) {
    let abs = Math.abs(n);

    let str = String(abs);
    let arr = str.split("");
    arr.reverse();
    let newStr = arr.join("");

    return Number(newStr);
};
