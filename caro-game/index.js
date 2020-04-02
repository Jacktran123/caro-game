var squares= document.querySelectorAll('.square');
var playerTurn= true;
var winner=document.querySelector('.winner-hidden');
var collectionOfArray=[];

console.log(squares);

function gameStart(){
  
  for(var i = 0; i< 765;i++){
     var  winArray=[];
       winArray[0]=i;
       winArray[1]=i+1;
       winArray[2]=i+2;
       winArray[3]=i+3;
       winArray[4]=i+4;
       collectionOfArray.push(winArray);
      console.log(winArray);
      console.log(collectionOfArray);
      
  }};

  function winLogic(){
      
    
    for (var i= 0; i< 765; i++){
    if (squares[collectionOfArray[i][0]].textContent.includes('X')  && squares[collectionOfArray[i][1]].textContent.includes('X')  && squares[collectionOfArray[i][2]].textContent.includes('X')  && squares[collectionOfArray[i][3]].textContent.includes('X')  && squares[collectionOfArray[i][4]].textContent.includes('X')){
         winner.classList.add('winner-show');
          }}
  }




//   function winLogic(text,winArray){
//   if( squares[text[0]].textContent.includes('X')  && squares[text[1]].textContent.includes('X')  && squares[text[2]].textContent.includes('X')  && squares[text[3]].textContent.includes('X')  && squares[text[4]].textContent.includes('X') ){
//       winner.classList.add('winner-show');
//   } else if (squares[text[0]].textContent.includes('O')  && squares[text[1]].textContent.includes('O')  && squares[text[2]].textContent.includes('O')  && squares[text[3]].textContent.includes('O')  && squares[text[4]].textContent.includes('O') ){
//     winner.classList.add('winner-show');
//   } else if (squares[winArray[0]].textContent.includes('X')  && squares[winArray[1]].textContent.includes('X')  && squares[winArray[2]].textContent.includes('X')  && squares[winArray[3]].textContent.includes('X')  && squares[winArray[4]].textContent.includes('X')){
//     winner.classList.add('winner-show');
//   }
// } winLogic(text,winArray)}


function mark(){
        
        squares.forEach(obj=> obj.addEventListener('click', ()=>{
            if(obj.textContent.length===0 ){
                switch(playerTurn){
                    case(true):
                    obj.textContent='X'
                    obj.style.color='red'
                    playerTurn=!playerTurn
                    winLogic();
                    break;
                    case(false):
                    obj.textContent='O'
                    obj.style.color='blue'
                    playerTurn=!playerTurn
                    winLogic();
                   break;
                }} }))
       
}

function play(){
    gameStart();
    mark();
    winLogic();
}

play();



 