let result = document.getElementById("output");

let calc=(number) => {
    result.value += number;
}

let Result = () => {
    result.value = eval(result.value)
}
function clr() {
    result.value = '';
}

function del() {
    result.value = result.value.slice(0, -1)
}