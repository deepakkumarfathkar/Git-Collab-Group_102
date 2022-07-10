var Form=document.querySelector("form").addEventListener("submit",click)
var array=[]
function click(event){
    event.preventDefault()
    var Name=document.querySelector("#name").value
    var Email=document.querySelector("#email").value
    var Organization=document.querySelector("#organization").value
    var Submit=document.querySelector("#sub").value
    var Return=document.querySelector("#retn").value
    

    var lakshmi={
        Name:Name,
        Email:Email,
        Organization:Organization,
    }
    array.push(lakshmi)
    console.log(array)
    display(array)

}


function display(array){

for(var a=0;a<array.length;a=a+1){
    console.log(array[a]["Name"])
    console.log(array[a]["Email"])
    console.log(array[a]["Organization"])
}
document.querySelector("#retn").addEventListener("click",touch)
function touch(event){
    event.preventDefault()
    console.log(event.target.innerText="")
}


}