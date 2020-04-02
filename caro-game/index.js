var squares= document.querySelectorAll('.square');
var playerTurn= true;
var winner=document.querySelector('.winner-hidden');


console.log(squares)
// function win(){
//     if( }{

//     }
// }

function mark(){
        squares.forEach(obj=> obj.addEventListener('click', ()=>{
            if(obj.textContent.length===0 ){
                switch(playerTurn){
                    case(true):
                    obj.textContent='X'
                    obj.style.color='red'
                    playerTurn=!playerTurn
                    break;
                    case(false):
                    obj.textContent='O'
                    obj.style.color='blue'
                    playerTurn=!playerTurn
                    break;
                }}}))
       
}

mark();


 