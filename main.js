let wrapper = document.querySelector(`.wrapper`);

let a = prompt(`Ism kiriting`);

wrapper.style.height=`100vh`
wrapper.style.background=`blue`
wrapper.classList.add( `wrapper`)

function inthescreen() {
    wrapper.innerHTML = ``; 
    let p = document.createElement('p');
    p.classList.add(`p`)
    p.textContent = a; 
    wrapper.appendChild(p); 
}

inthescreen();