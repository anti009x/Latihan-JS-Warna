

const klik = document.getElementById('tekan')

klik.addEventListener('click',function(){

    document.body.classList.toggle('warna')

    // alert('ok')

})


const createTombolBaru = document.createElement ('button')

const createTeks = document.createTextNode ('Ubah Tiap Warna')

createTombolBaru.appendChild(createTeks)

createTombolBaru.setAttribute('type','button')
createTombolBaru.setAttribute('id','changecolor')

klik.after(createTombolBaru)

const ubahtiapwarna = document.getElementById('changecolor')

ubahtiapwarna.addEventListener('click',function(){

    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';




})

const changecolor1 = document.getElementById('slider1');
const changecolor2 = document.getElementById('slider2');
const changecolor3 = document.getElementById('slider3');

function updateBackgroundColor() {
    const r = changecolor1.value;
    const g = changecolor2.value;
    const b = changecolor3.value;

    document.body.style.background = `rgb(${r},${g},${b})`;
}

changecolor1.addEventListener('input', updateBackgroundColor);
changecolor2.addEventListener('input', updateBackgroundColor);
changecolor3.addEventListener('input', updateBackgroundColor);