const accordians = document.querySelectorAll('.accordian');



accordians.forEach(acc => {
    
    acc.addEventListener('click' ,()=>{
        console.log('Accordina Clicked');
    }) 

    const icon = acc.querySelector('.icon');
    const answer = acc.querySelector('.answer');

    acc.addEventListener('click' , ()=>{

        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        }
    
        else{
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }


    })



});