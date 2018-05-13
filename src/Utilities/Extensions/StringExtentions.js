String.prototype.ConvertMoneyStringToDouble = function() {

    let money = this;
    money = money.replace('$','');
    money = money.split(',').join('');
    money = Number(money);

    return money;

};

String.prototype.ConvertMoneyStringToDouble = function() {


    let money = this ? this : '';

    money = money.replace('$','');
    money = money.split(',').join('');
    money = Number(money);

    if(isNaN(money)){

        return this;

    }

    return money;

};


export function toCurrency(){

    let numberFormat = Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits:2,
    });

    return numberFormat.format(number);

}

export function CreateGUID(){

    let guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });

    return guid;

}

