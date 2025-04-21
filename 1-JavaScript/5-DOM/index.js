// toggle theme black/white
function changeTheme(themeColor,text, textColor){
    document.body.style.backgroundColor= themeColor;
    themeBtn.style.backgroundColor=themeColor;
    themeBtn.style.color=textColor;
    themeBtn.innerText=text;
    document.body.style.color=textColor;
}



const themeBtn= document.getElementById('themeBtn');
themeBtn.style.backgroundColor='white';

themeBtn.addEventListener('click', ()=>{
    console.log("This is bk clr", document.body.style.backgroundColor);

    const color= document.body.style.backgroundColor;

    if(!color || color === 'white'){
        changeTheme('black','Light Theme','white');        
    }

    else{
        changeTheme('white', 'Dark Theme','black');
        
    }

})

