let myImg = document.querySelector('img');
myImg.onclick=function(){
    let Current_src = myImg.getAttribute('src')
    if(Current_src==='images/1.png')
    
    myImg.setAttribute('src','images/2.png');
    
    else
    
    myImg.setAttribute('src','images/1.png');
    
}

let MyButton=document.querySelector('button');
let MyH1=document.querySelector('h1');
let Title=MyH1.textContent;
let qwe;
let UserID=localStorage.getItem('name');
function setUserName(){
    UserID=prompt('please enter your name.');
    localStorage.setItem('name',UserID);
    
    
    if(!UserID)
    setUserName()
   
    MyH1.textContent=Title+UserID;  

}
if(!UserID)
setUserName();
MyH1.textContent=Title+UserID;
MyButton.onclick=function(){
    setUserName();
    
}



