let turn = 'o';
let total = 0;

let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let board_array = new Array(9).fill("E");

function check() {
    for (let [index0, index1, index2] of winner) {
        if (board_array[index0] != "E" && board_array[index0] == board_array[index1] && board_array[index1] == board_array[index2]) {
            return true;
        }
    }
    return false;
}

const printer = (event) => {
    const element = event.target;

    if (board_array[element.id] == "E") {
        total++;
        if (turn == "o") {
            element.innerHTML = "O";
            board_array[element.id] = "O";

        
            const image2 = document.getElementById("image2");
            image2.classList.add("enlarged");
            setTimeout(() => {
                image2.classList.remove("enlarged");
            }, 500); 


            if (check()) {
                document.getElementById("winningMessage").innerHTML = "Winner is O!";
                board.removeEventListener('click', printer);
                return;
            }
            turn = 'x';
        } else {
            element.innerHTML = 'X';
            board_array[element.id] = "X";

            const image1 = document.getElementById("image1");
            image1.classList.add("enlarged");
            setTimeout(() => {
                image1.classList.remove("enlarged");
            }, 500); 

            if (check()) {
                document.getElementById("winningMessage").innerHTML = "Winner is X!";
                board.removeEventListener('click', printer);
                return;
            }
            turn = 'o';
        }

        if (total == 9) {
            document.getElementById("winningMessage").innerHTML = "It's a draw!";
            board.removeEventListener('click', printer);
        }
    }
};

const board = document.querySelector('.board');
board.addEventListener('click', printer);

const restart = document.getElementById("restartbutton");
restart.addEventListener('click', () => {
    let cells = document.getElementsByClassName('cell');

    Array.from(cells).forEach((cell) => {
        cell.innerHTML = "";
    });

    turn = 'o';
    total = 0;
    board_array = new Array(9).fill("E");
    document.getElementById("winningMessage").innerHTML = "";

 
    board.addEventListener('click', printer);
});
