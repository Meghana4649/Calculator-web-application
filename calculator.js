let input=document.getElementById('input')
function val(a){
    input.value +=a
    // console.log(typeof input.value);
    
}
function result(){
    input.value=eval(input.value)
}
function clear1(){
    input.value=' '
}