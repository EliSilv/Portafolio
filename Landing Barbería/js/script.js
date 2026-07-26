const boton = document.querySelector('.boton1');
const boton2 = document.querySelector('.boton2');
const boton3 = document.querySelector('.boton3');

boton.addEventListener('click', function() {
    this.style.backgroundColor = '#f5f5f5';
    this.style.color = '#121212';
})

boton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
    this.style.color = '';
    this.style.border = '';
})

boton2.addEventListener('click', function() {
    this.style.backgroundColor = '#f5f5f5';
    this.style.color = '#121212';
})

boton2.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#121212';
    this.style.color = '#f5f5f5';
    this.style.border = '1px solid #f5f5f5';
})

boton2.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
    this.style.color = '';
    this.style.border = '';
})

boton3.addEventListener('click', function() {
    this.style.backgroundColor = '#f5f5f5';
    this.style.color = '#121212';
})

boton3.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#121212';
    this.style.color = '#f5f5f5';
    this.style.border = '1px solid #f5f5f5';
})

boton3.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
    this.style.color = '';
    this.style.border = '';
})