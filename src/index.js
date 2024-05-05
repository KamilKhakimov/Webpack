// import { calc } from "./test";
import './components/App.css';

console.log("Hello World!");
// console.log(calc(5, 6));

function getValue() {
    let select = document.querySelector('.type');
    let value = select.value;
    // Первый селект    
    let selectPercent = document.querySelector('.percentOne');
    let valueSelectPercent = selectPercent.value;
    // Второй селект
    let selectPercent2 = document.querySelector('.percentTwo');
    let valueSelectPercent2 = selectPercent2.value;

    // alert(value);
    if (value == 'Пополняемый') {
        // alert(valueSelectPercent);
    } else {
        let needOne = document.querySelector('.percentOne');
        needOne.style = 'display: none;';
        let needTwo = document.querySelector('.percentTwo');
        needTwo.style = 'display: block;'
        // alert(valueSelectPercent2);
    }

    let input = document.querySelector('.sum');
    // alert(input.value);
    let result = 0;


    if (valueSelectPercent == 'firstSix' || valueSelectPercent2 == 'secondThree') {
        result = parseInt(input.value * 0.2) + parseInt(input.value);
        // alert(result);
    }
    if (valueSelectPercent == 'firstYear' || valueSelectPercent2 == 'secondSix') {
        result = parseInt(input.value * 0.22) + parseInt(input.value);
        // alert(result);
    }
    if (valueSelectPercent == 'firstSixYearHalf' || valueSelectPercent2 == 'secondYearTwo') {
        result = parseInt(input.value * 0.15) + parseInt(input.value);
        // alert(result);
    }
    if (valueSelectPercent == 'firstSixYearTwo') {
        result = parseInt(input.value * 0.1) + parseInt(input.value);
        // alert(result);
    }
    if (valueSelectPercent == 'secondYear') {
        result = parseInt(input.value * 0.24) + parseInt(input.value);
        // alert(result);
    }
    if (valueSelectPercent == 'secondYearHalf') {
        result = parseInt(input.value * 0.18) + parseInt(input.value);
        // alert(result);
    }

    // Табличка справа
    let youDates = document.querySelector('.you-dates');
    // let outDates = document.querySelector('.out-dates');
    youDates.innerHTML = 'Вы выбрали вклад: ' + value;

    let outDates = document.querySelector('.out-dates');
    outDates.innerHTML = 'В конце срока вы получите сумму: ' + result + ' рублей';
}

document.querySelector('.btn').addEventListener('click', function () {
    getValue();
})