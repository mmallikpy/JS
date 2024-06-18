// Onload handler
window.onload = () => {
    main()
}

function main() {
    let bg = document.body;
    let btn = document.getElementById('button');
    let val = document.getElementById('value');

    btn.addEventListener('click', function(){
        let bghexcolor = hexColorGenerator();
        bg.style.backgroundColor = bghexcolor;
        val.value = bghexcolor;
    })
}

// Hex color generator function
function hexColorGenerator(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    // let hred = red.toString(16);
    // let hgreen = green.toString(16);
    // let hblue = blue.toString(16);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}