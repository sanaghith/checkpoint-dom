function plus(event){
    console.log(event.target.parentNode.querySelector("span"))
    var num=event.target.parentNode.querySelector("span")
    num.innerHTML=Number(num.innerHTML)+1
    total()
}

function moin(event){
    console.log(event.target.parentNode.querySelector("span"))
    var num=event.target.parentNode.querySelector("span")
    num.innerHTML=Number(num.innerHTML)-1
    total()
}
function supprime(event){
    console.log(event.target.parentNode.parentNode.parentNode)
    var supp=event.target.parentNode.parentNode.parentNode
    supp.remove()
    total()
}
function like(event){
    console.log(event.target)
var jm=event.target
// jm.style.color="red"
if(jm.style.color=="red"){
      jm.style.color="black"
    }
    else{jm.style.color="red"}
    
}
function total(){
    var t1=document.getElementsByClassName("unit-price")
    var t2=document.getElementsByClassName("quantity")
    var sum=0
    for(var i=0;i<t1.length;i++){
        sum=sum+Number(t1[i].innerHTML)*Number(t2[i].innerHTML)
    }
    
    console.log(t1,t2,sum)
    var t=document.querySelector(".total")
    t.innerHTML=sum
}

total()