// Onload handler
window.onload = () => {
    main()
}

function main() {
    let bg = document.getElementById('centered-div');
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
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

function copy(){
    let copy = document.getElementById("copy");
    let val = document.getElementById('value');
    copy.addEventListener('click', function(){
        let copyColor = navigator.clipboard.writeText(val.value);
        let div_name = document.createElement("div");
        div_name.classList.add("tostmessage", "tost_animation_in");
        div_name.innerHTML = "Color copyed";
        document.body.appendChild(div_name);

        div_name.addEventListener('click', function(){
            div_name.classList.remove("tost_animation_in");
            div_name.classList.add("tost_animation_out");
            div_name.addEventListener('animationend', function(){
                div_name.remove();
            })
        })
        document.body.appendChild(div_name);
    });
}

copy()

