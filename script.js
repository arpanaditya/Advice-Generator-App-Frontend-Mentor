let number = document.getElementById('id');
let content = document.getElementById('advice');
let API_URL = 'https://api.adviceslip.com/advice';
let btn = document.getElementById('btn');

btn.addEventListener('click', getData);

async function getData() {
    let response = await fetch(API_URL);
    let data = await response.json();
    let {slip: {id, advice}} = data;
    
    number.textContent = id;
    content.textContent = advice;
    return data;
}
