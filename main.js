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

    })
});


let isBoxClicked = false;


