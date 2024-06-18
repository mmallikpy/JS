// Onload handler
window.onload = () => {
    main();
}

function main(){
    let background = document.getElementById('button')
    let bodyColor = document.body

    // handle the click event
    
    background.addEventListener('click', function() {
        let rgb = rgbGenerator()
        bodyColor.style.backgroundColor = rgb
    })
}

// Random color generator function
function rgbGenerator(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`
}


