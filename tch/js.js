const overview = document.querySelector('#overview');
const mission = document.querySelector('#mission');
const service = document.querySelector('#service');
const ach = document.querySelector('#ach');
const obj = document.querySelector('#obj');
const container = document.querySelectorAll('.container');
const container2 = document.querySelectorAll('.container2');
const container3 = document.querySelectorAll('.container3');
const container4 = document.querySelectorAll('.container4');
const container5 = document.querySelectorAll('.container5');






overview.addEventListener('click', function () {
    for (let x = 0; x < container.length; x++) {
        container[x].classList.toggle('visible');
    }
    // for (let x = 0; x < container.length; x++) {
    //     container[x].classList.remove('hide');
    // }
    console.log("working");

})

mission.addEventListener('click', function () {
    // overview.disabled = true;
    for (let x = 0; x < container2.length; x++) {
        container2[x].classList.toggle('visible');
    }

    // for (let x = 0; x < container.length; x++) {
    //     container[x].classList.add('hide');
    // }
    // for (let x = 0; x < container3.length; x++) {
    //     container3[x].classList.toggle('hide');
    // }
    // for (let x = 0; x < container4.length; x++) {
    //     container4[x].classList.toggle('hide');
    // }
    // for (let x = 0; x < container5.length; x++) {
    //     container5[x].classList.toggle('hide');
    // }

    console.log("working");



})

service.addEventListener('click', function () {
    for (let x = 0; x < container3.length; x++) {
        container3[x].classList.toggle('visible');
    }
    console.log("working");

})

ach.addEventListener('click', function () {
    for (let x = 0; x < container4.length; x++) {
        container4[x].classList.toggle('visible');
    }
    console.log("working");

})

obj.addEventListener('click', function () {
    for (let x = 0; x < container5.length; x++) {
        container5[x].classList.toggle('visible');
    }
    console.log("working");

})