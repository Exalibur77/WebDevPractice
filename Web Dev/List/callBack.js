
function getCheese(callback){

    setTimeout(() => {
        
        let cheese = '🧀';
        console.log('The cheese is :' , cheese);
        callback(cheese);

    }, 2000);

}

const x = (y) =>{
    console.log('received the cheese' , y);
}

getCheese(x);