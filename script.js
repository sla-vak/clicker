let clicker = document.querySelector('#clicker');
let h1 = document.querySelector('h1');
let number = 0;
let autoclickerButton = document.querySelector('#autoclicker-button');
//let autoclickerOFF = document.querySelector('#autoclicker-OFF');

//alert('score the 1000 and see what happens!');

clicker.onclick = function () {
    number++;

    h1.textContent = number;

    if (number == 100) {
        alert('Dont give up!!');
    }

    if (number == 500) {
        alert('half left');
    }

    if (number == 1000) {
        let a = document.querySelector('a');
        a.style.display = 'block';
    }
}

function ON_OF_autoclicker() {

    let isActive = false;
    let autoclicker = 0;

        autoclickerButton.onclick = function () {

            if (isActive == false) {

                isActive = true;

                autoclickerButton.textContent = 'Autoclicker OFF';

                autoclicker = setInterval(() => {
                    number++;
                    h1.textContent = number;
                }, 1000);
            }

        autoclickerButton.onclick = function() {

            if (isActive == true) {

                isActive = false;

                autoclickerButton.textContent = 'Autoclicker ON';

                clearInterval(autoclicker);

            }
        }
    }
}

ON_OF_autoclicker();