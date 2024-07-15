let input_by_user = document.getElementById("inputbyuser")
let reset = document.getElementById("reset")
let submit = document.getElementById("submit")
let outputSpan = document.getElementById("outputSpan")
let outputDiv = document.getElementById("outputDiv")


outputDiv.style.display = 'none'
reset.addEventListener('click', function () {
    input_by_user.value = ''
    outputDiv.style.display = 'none'
})

submit.addEventListener('click', function () {
    let inputval = input_by_user.value
    if (inputval != "") {
        outputSpan.innerHTML = inputval
        outputDiv.style.display = 'block'
    }
    else {
        alert("Give an input")
    }

})