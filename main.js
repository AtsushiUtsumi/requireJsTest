// node.js で実行したいので import はせず require で行う
console.log("ロード前");
const a = require('./validator');
console.log("ロード後");
const b = require('./validator');
console.log("2度目はロード(といううかモジュールのインスタンス化する処理(?))されない");
b.Validate2();// しかしこれは実行されているところを見ると、シングルトン的なイメージで同じインスタンスが返ってきていると思われる。
a.validate();
a.Validate2();
console.log(typeof a)