boxes = document.querySelectorAll('.box')
player = document.querySelector('.player')

let images = [];
images[0] = new Image();
images[0].src = 'x.png';

images[1] = new Image();
images[1].src = 'o.png';

let isSecondPlayerPlaying = true;
player.innerHTML = "The first (X) player's turn!";

boxes.forEach(function(box){
    box.addEventListener('click', (e)=>{
        const img = e.target.querySelector('.image');

        if(isSecondPlayerPlaying){
            img.src = images[0].src;
            isSecondPlayerPlaying = false;
            player.innerHTML = "The second (O) player's turn!";
        }
        else{
            img.src = images[1].src;
            isSecondPlayerPlaying = true;
            player.innerHTML = "The first (X) player's turn!";
        }
        findWinner();
    })
});


function findWinner(){
    const oFields = [];
    const xFields = [];

    //horizontalno
    const w1 = [0, 1, 2];
    const w2 = [3, 4, 5];
    const w3 = [6, 7, 8];

    //vodoravno
    const f1 = [0, 3, 6];
    const f2 = [1, 4, 7];
    const f3 = [2, 5, 8];

    //dijagonala
    const d1 = [0, 4, 8];
    const d2 = [2, 4, 6];

    boxes.forEach((box, index) => {
        if(box.querySelector("img").src === "file:///C:/Users/Suzana/code/tictactoe/o.png"){
            oFields.push(index);
        }
    });
   
    boxes.forEach((box, index) => {
        if(box.querySelector("img").src === "file:///C:/Users/Suzana/code/tictactoe/x.png"){
            xFields.push(index);
        }
    });
 
    if (w1.every((i) => oFields.includes(i)) === true || w2.every((i) => oFields.includes(i)) === true || w3.every((i) => oFields.includes(i)) === true || f1.every((i) => oFields.includes(i)) === true || f2.every((i) => oFields.includes(i)) === true || f3.every((i) => oFields.includes(i)) === true || d1.every((i) => oFields.includes(i)) === true || d2.every((i) => oFields.includes(i)) === true){
        player.innerHTML = "Second player (O) is the winner!";
    }
    if (w1.every((i) => xFields.includes(i)) === true || w2.every((i) => xFields.includes(i)) === true || w3.every((i) => xFields.includes(i)) === true || f1.every((i) => xFields.includes(i)) === true || f2.every((i) => xFields.includes(i)) === true || f3.every((i) => xFields.includes(i)) === true || d1.every((i) => xFields.includes(i)) === true || d2.every((i) => xFields.includes(i)) === true){
        player.innerHTML = "First player (X) is the winner!";
    }
};


