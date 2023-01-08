

let name = prompt ('Введите сюда свое имя сударь')
let year = +prompt ('В каком году вы появились на свет?')
let date = new Date() .getFullYear()

function birthday() {
    let age = date - year
    return age
}
    alert('Ваше имя ' + name + ' ваш возраст ' + birthday() )



function rand(min,max) {
    return Math.floor(Math.random() * (max - 1 + min) + min)
}

let a =+prompt ('Сколько примерчиков хотим решить СЭР?')

for(let i = 0; i < a; i++){
    
    let one = rand (1,50);
    let two = rand (1,50);
    let symbol = rand (1,4);
    
    if (symbol == 1){
        let primer =+prompt (one + ' + ' + two + '=')
        let resTrue = one + two
        alert (primer == resTrue ? 'Вы угадали Сэр, правильный ответ ' + resTrue : 'Увы Сэр, но это не совсем верный ответ, правильный ответ ' + resTrue  )
    }else if (symbol == 2){
        let primer =+prompt (one + ' - ' + two + '=')
        let resTrue = one - two
        alert (primer == resTrue ? 'Вы угадали Сэр, правильный ответ ' + resTrue : 'Увы Сэр, но это не совсем верный ответ, правильный ответ' + resTrue  )
    }else if (symbol == 3){
        let primer =+prompt (one + ' * ' + two + '=')
        let resTrue = one * two
        alert (primer == resTrue ? 'Вы угадали Сэр, правильный ответ ' + resTrue : 'Увы Сэр, но это не совсем верный ответ, правильный ответ' + resTrue  )
    }else if (symbol == 4){
        let primer =+prompt (one + ' / ' + two + '=')
        let resTrue = one / two
        alert (primer == resTrue ? 'Вы угадали Сэр, правильный ответ ' + resTrue : 'Увы Сэр, но это не совсем верный ответ, правильный ответ ' + resTrue  )  
}
}