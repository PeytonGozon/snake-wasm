import { Direction, Universe, UniverseTickOutcomes } from "snake-wasm";

const canvas = document.getElementById("snake-canvas");
const statusField = document.getElementById("status");
const ctx = canvas.getContext('2d');

const COLOR_BACKGROUND   = "#d4f1f4";
const COLOR_SNAKE_PIECE_FILL   = "#75E6DA";
const COLOR_SNAKE_PIECE_BORDER = "#189AB4";
const COLOR_FOOD = "#05445E";
const FPS = 15;
const ROWS = 40;
const COLS = 40;

let universe = null;
let gameLoopIntervalId = -1;
let gameOver = false;

const render = () => {
    const snakeCoordinates = universe.snake_to_coordinates();

    const cellWidth  = canvas.width  / universe.cols();
    const cellHeight = canvas.height / universe.rows();

    ctx.beginPath();

    // Clear the canvas
    ctx.fillStyle = COLOR_BACKGROUND;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the snake pieces
    ctx.fillStyle = COLOR_SNAKE_PIECE_FILL;
    ctx.strokeStyle = COLOR_SNAKE_PIECE_BORDER;

    const to_pixel = (i, size) => i * size + 0.5;

    for (let i = 0; i < snakeCoordinates.length; i += 2) {
        const cellRow = snakeCoordinates[i];
        const cellCol = snakeCoordinates[i+1];

        // Adding 0.5 to x and y to "straddle the pixels" -- this is done to make the rendering on the canvas not blurry.
        // https://stackoverflow.com/questions/8696631/canvas-drawings-like-lines-are-blurry
        const x = to_pixel(cellCol, cellWidth);
        const y = to_pixel(cellRow, cellHeight);

        ctx.fillRect(x, y, cellWidth, cellHeight);  // Draw the cell
        ctx.rect(x, y, cellWidth, cellHeight);      // Draw a small boarder around each snake piece.
    }

    // Draw the food
    const foodCoordinates = universe.food_to_coordinates();
    const foodX = to_pixel(foodCoordinates[1], cellWidth);
    const foodY = to_pixel(foodCoordinates[0], cellHeight);

    ctx.fillStyle = COLOR_FOOD;
    ctx.fillRect(foodX, foodY, cellWidth, cellHeight);
    ctx.rect(foodX, foodY, cellWidth, cellHeight);

    ctx.stroke();
}

const gameLoop = () => {
    const universeUpdateCode = universe.tick();

    if(!gameOver) {
        gameOver = universeUpdateCode !== UniverseTickOutcomes.Continue;
        renderStatusMessage();
        requestAnimationFrame(render);
    } else {
        if (universeUpdateCode === UniverseTickOutcomes.Win) {
            renderStatusMessage("Congratulations -- You won! That's no small feat :^)");
        } else {  // We have universe.tick returned UniverseTickOutcomes.Loss
            renderStatusMessage("You lost! Press {esc} to play again!");
        }

        // Stop updating the game every 15 fps.
        clearInterval(gameLoopIntervalId);
    }
}

const resetGame = () => {
    universe = Universe.new(ROWS, COLS);
    gameOver = false;
    renderStatusMessage();
    gameLoopIntervalId = setInterval(gameLoop, 1000/FPS);
}

const onReady = () => {
    resetGame();

    document.addEventListener("keydown", (event) => {
        switch (event.code) {
            case "ArrowUp":    universe.snake_buffer_direction(Direction.Up);    break;
            case "ArrowDown":  universe.snake_buffer_direction(Direction.Down);  break;
            case "ArrowLeft":  universe.snake_buffer_direction(Direction.Left);  break;
            case "ArrowRight": universe.snake_buffer_direction(Direction.Right); break;
            case "Space":      universe.toggle_pause(); break;
            case "Escape":     resetGame(); break;
        }
    });
}

const renderStatusMessage = (message) => {
    if (message === undefined) {
        message = "You got this!";
    }
    statusField.innerText = message + "\n" + lengthToMessage(universe.snake_length());
}

const lengthToMessage = (length) => {
    let str = "Snake length: " + length + ". ";

    if (length < 5) {
        str += "Very smol :^)";
    } else if (length < 10) {
        str += "smol :o";
    } else if (length < 20) {
        str += "big boi =^-^=";
    } else {
        str += "woahhhhhh!";
    }

    return str;
}

if (document.readyState !== "loading") {
    onReady();
} else {
    document.addEventListener("DOMContentLoaded", onReady);
}