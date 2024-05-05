import './components/vacancy.css';
export function calc(a, b) {
    return a + b;
}

const axios = require('axios').default;

axios
    .get('https://api.hh.ru/vacancies/97597458')
    .then((response) => {
        console.log(response.data);
        let worker = document.querySelector('.worker').textContent = response.data.name;
        let salary = document.querySelector('.salary').textContent = "Зарплата: от " + response.data.salary.from + " до " + response.data.salary.to;
        let company = document.querySelector('.company').textContent = "Компани: " + response.data.employer.name;
        let address = document.querySelector('.address').textContent = "Адресс: " + response.data.address.city + ", " + response.data.address.street;
        let experience = document.querySelector('.experience').textContent = "Опыт работы: " + response.data.experience.name;
    })
    .catch((error) => { console.error(error); });
console.log(response.data);