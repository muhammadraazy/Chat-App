const tombol1 = document.querySelector('.tombolInput');
const tombol2 = document.querySelector('.tombolInput2');
const inputin = document.querySelector('.inputin1');
const inputin2 = document.querySelector('.inputin2');

// key press for trigger button

// trigger 1
inputin.addEventListener('keyup', function(i) {
    if(i.keyCode === 13) {
        i.preventDefault();
        tombol1.click();
    } 
})

// trigger 2

inputin2.addEventListener('keyup', function(j) {
    if(j.keyCode === 13) {
        j.preventDefault();
        tombol2.click();
    }
})


// button first
tombol1.addEventListener('click', function() {
    const chatEl = document.createElement('p')
    const inputin1 = document.querySelector('.inputin1').value;
    const chatTeks = document.createTextNode(inputin1);
    chatEl.appendChild(chatTeks);

    const cobaInput = document.querySelector('.coba-input');
    cobaInput.appendChild(chatEl).classList.add('textNode2')
})

// second button clicked
tombol2.addEventListener('click', function() {
    const chatEl = document.createElement('p')
    const inputin2 = document.querySelector('.inputin2').value;
    const chatTeks = document.createTextNode(inputin2);
    chatEl.appendChild(chatTeks);

    const cobaInput = document.querySelector('.coba-input');
    cobaInput.appendChild(chatEl).classList.add('textNode')
})


