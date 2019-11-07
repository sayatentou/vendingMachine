const input = document.getElementById('input');
const change = document.getElementById('change');
const purchase = document.querySelectorAll('.purchase');
const emit = document.getElementById('emit');

let rest;


document.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        rest = input.value;    
        input.disabled = true;
        ability();
    }
});

function pushButton(price) {
    if (rest > price) {
        rest -= price;
        change.innerHTML = rest + "円";
        ability();
    } else if (rest == price) {
        reset();
    }

}

function ability() {
    purchase.forEach(function(element) {

        const price = element.getAttribute("price");

        if (price - rest > 0) {
            element.disabled = true;
            element.classList.remove('purchasable');
        } else {
            element.disabled = false;
            element.classList.add('purchasable');
        } 

    });
}

function reset() {
    location.reload();
}


purchase.forEach(function(element) {

    element.addEventListener('click', function () {
        element.parentNode.classList.add('animated');
    }, false);

    element.parentNode.addEventListener('transitionend', function () {
        element.parentNode.classList.remove('animated');
        console.log('end');
    }, false);

});









