let Nu = 25; // актуальная переменная
const BIRTH = "19.12.1995"; // ее не переопределишь
console.log('Переменная равна '+ Nu);

let num = 5.4;
let abc = Number('150');
let c = num + abc;
c++;
console.log(c);

Math.PI;
Math.E;
console.log(Math.min(4, -8, 6, 9));

let number = 15;

if(number == 5) {
    console.log('it is five');
} else if(number <= 7) 
{
   console.log('it is 7');
}
else {
    console.log('it is  not five');
}

let stroka = 'word';

switch(stroka) {
    case '4': console.log(' four');
    break;
    case '5': console.log(' five');
    break;
    case '6': console.log('six');
    break;
    case 'word': console.log(' word!');
    break;
    default:
        console.log('default');
    }