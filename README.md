<div align="center">

  <h1><code>snake-wasm</code></h1>

  <strong>A beginners first attempt at using rust + wasm</strong>

</div>

## About

This project was written to get a feel for both rust + wasm at the same time, being my first project that uses either 
tool.  

Control the Snake using the arrow keys; pause the game with Space, and reset the game with Escape. Note: the snake may 
wrap from edge of the screen to the other!

## Resources Used
* [The Rust + WebAssembly Book](https://rustwasm.github.io/docs/book/introduction.html)
* [Making the canvas appear sharp](https://stackoverflow.com/questions/8696631/canvas-drawings-like-lines-are-blurry)

## Changes I'd make looking back
There are two major design decisions I'd like to update:
1. I'd look to represent Blocks (snake segments + food) in a wasm-compatible manner, so I could freely pass data 
  structures between rust and JS. 
2. If this game were larger, rather than rendering the entirety of the universe each tick, I'd pass only a list of 
  blocks that were updated between the two ticks (e.g., where the new head is and where the old tail was). 
3. I'd pick a larger color palette -- then the food wouldn't be the same color as the background of the webpage! 