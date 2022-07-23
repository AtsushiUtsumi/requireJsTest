
class Iphone {
    constructor() {
    }

    call(){
        console.log('call');
    }

    mail(){
        console.log('mail');
    }

}


class android {
    constructor() {
    }

    call(){
        console.log('call');
    }

    mail(){
        console.log('mail');
    }

}

console.log('バリデータモジュールをロード(これは1回しか呼ばれない)')

function validate() {
    console.log('123');
}

function validate2() {
    console.log('456');
}
// module.exports.(他ファイル内ではここの名前で呼ばれる) = (使って欲しい関数とかオブジェクトとか)
module.exports.validate = validate;
module.exports.Validate2 = validate2;