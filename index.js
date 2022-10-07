let hr =document.querySelector('.hour');
let mn =document.querySelector('.minute');
let sc =document.querySelector('.second');

setInterval(() => {
    let day=new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotate(${ss}deg)`;
});




