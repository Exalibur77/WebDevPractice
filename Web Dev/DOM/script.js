const box1 = document.getElementById("box-1");

box1.addEventListener('click' , ()=>{
    console.log('Box-1 was clicked');
})

box1.addEventListener('mouseover' , ()=>{

    console.log('Hover Event Triggered');

})

const nameInput = document.getElementById("nameInput");

nameInput.addEventListener('keydown' , (e)=>{

    console.log('Key is being pressed' , e.key);

})