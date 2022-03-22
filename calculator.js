function number(num) {
    document.form.window.value += num;
}
function ochistkaC() {
    document.form.window.value = ""
}
function back() {
    let nazad = document.form.window.value;
    document.form.window.value = nazad.substring(0,nazad.length -1)
}
function calculator() {
    let nazad = document.form.window.value;
    if (nazad) {
        document.form.window.value = eval(nazad);
    }
}