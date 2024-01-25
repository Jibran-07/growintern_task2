
function display(val){
    document.getElementById("screen").value += val;
}
function clr(){
    document.getElementById("screen").value = "";
}
function del() {
    var currentInput = document.getElementById('screen').value;
    document.getElementById('screen').value = currentInput.slice(0, -1);
  }
function sol(){
    expr = document.getElementById("screen").value;
    result = eval(expr);
    document.getElementById("screen").value = result;
}
