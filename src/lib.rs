mod utils;

use std::collections::VecDeque;
use wasm_bindgen::prelude::*;

extern crate js_sys;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

pub enum SnakeTickOutcomes {
    None,
    GenerateNewFood,
    CollidedWithSelf,
}

#[repr(u8)]
#[wasm_bindgen]
pub enum UniverseTickOutcomes {
    Continue,
    Loss,
    Win,
}

#[wasm_bindgen]
pub struct Universe {
    snake: Snake,
    food: Block,
    rows: u8,
    cols: u8,
    paused: bool,
}

#[wasm_bindgen]
impl Universe {
    #[wasm_bindgen]
    pub fn new(rows: u8, cols: u8) -> Self {
        let snake = Snake::new(rows, cols);
        let food = Block(random_in_range(rows), random_in_range(cols));
        Self {
            snake,
            food,
            cols,
            rows,
            paused: false,
        }
    }

    #[wasm_bindgen]
    pub fn tick(&mut self) -> UniverseTickOutcomes {
        if self.paused {
            return UniverseTickOutcomes::Continue;
        }

        match self.snake.tick(&self.food) {
            SnakeTickOutcomes::None => UniverseTickOutcomes::Continue,
            SnakeTickOutcomes::CollidedWithSelf => UniverseTickOutcomes::Loss,
            SnakeTickOutcomes::GenerateNewFood => {
                if self.snake.length == (self.rows * self.cols) as usize {
                    UniverseTickOutcomes::Win
                } else {
                    self.generate_new_food();
                    UniverseTickOutcomes::Continue
                }
            }
        }
    }

    #[wasm_bindgen]
    pub fn rows(&self) -> u8 {
        self.rows
    }

    #[wasm_bindgen]
    pub fn cols(&self) -> u8 {
        self.cols
    }

    #[wasm_bindgen]
    pub fn snake_to_coordinates(&self) -> Vec<u8> {
        self.snake.to_coordinates()
    }

    #[wasm_bindgen]
    pub fn snake_buffer_direction(&mut self, d: Direction) -> () {
        self.snake.buffer_direction(d)
    }

    #[wasm_bindgen]
    pub fn food_to_coordinates(&self) -> Vec<u8> {
        vec![self.food.0, self.food.1]
    }

    #[wasm_bindgen]
    pub fn toggle_pause(&mut self) {
        self.paused = !self.paused;
    }

    #[wasm_bindgen]
    pub fn snake_length(&self) -> usize {
        self.snake.length
    }

    // Assumes that there's at least one empty cell.
    pub fn generate_new_food(&mut self) {
        let mut collision: bool = true;
        let mut food: Block = Block(0, 0);

        while collision {
            let food_row: u8 = random_in_range(self.rows);
            let food_col: u8 = random_in_range(self.cols);

            food = Block(food_row, food_col);

            if !self.snake.to_blocks().iter().any(|b| *b == food) {
                collision = false;
            }
        }

        self.food = food
    }
}

fn random_in_range(max: u8) -> u8 {
    js_sys::Math::floor(js_sys::Math::random() * max as f64) as u8
}

#[derive(Debug, Copy, Clone, PartialEq)]
#[repr(u8)]
#[wasm_bindgen]
pub enum Direction {
    Up,
    Down,
    Left,
    Right,
}

impl Direction {
    pub fn get_opposite(&self) -> Direction {
        match self {
            Self::Up => Self::Down,
            Self::Down => Self::Up,
            Self::Left => Self::Right,
            Self::Right => Self::Left,
        }
    }
}

#[derive(Debug, Copy, Clone, PartialEq, Eq)]
#[wasm_bindgen]
// (row, col)
pub struct Block(u8, u8);

pub struct Snake {
    head: Block,
    tail: VecDeque<Block>,
    curr_direction: Option<Direction>,
    buffered_direction: Option<Direction>,
    rows: u8,
    cols: u8,
    length: usize,
}

impl Snake {
    pub fn new(rows: u8, cols: u8) -> Self {
        Snake {
            head: Block(rows / 2, cols / 2),
            tail: VecDeque::new(),
            curr_direction: None,
            buffered_direction: None,
            rows,
            cols,
            length: 1,
        }
    }

    pub fn tick(&mut self, food: &Block) -> SnakeTickOutcomes {
        if self.buffered_direction.is_some() {
            self.curr_direction = self.buffered_direction; // This should be a copy
            self.buffered_direction = None;
        }

        self.tail.push_front(self.head); // This is also a copy

        // (row, col)
        let delta_movement: (u8, u8) = match self.curr_direction {
            Some(Direction::Up) => (self.rows - 1, 0),
            Some(Direction::Down) => (1, 0),
            Some(Direction::Left) => (0, self.cols - 1),
            Some(Direction::Right) => (0, 1),
            None => (0, 0),
        };

        // Update the head, also use wrapping to allow the snake to go across the walls.
        self.head = Block(
            (self.head.0 + delta_movement.0) % self.rows,
            (self.head.1 + delta_movement.1) % self.cols,
        );

        // Check to see if we've crashed into ourselves:
        if self.curr_direction.is_some() && self.tail.iter().any(|b| *b == self.head) {
            return SnakeTickOutcomes::CollidedWithSelf;
        }

        // Check if we've collided with the food
        if self.head == *food {
            self.length += 1;
            return SnakeTickOutcomes::GenerateNewFood;
        } else if self.tail.len() > 0 {
            self.tail.pop_back();
        }

        SnakeTickOutcomes::None
    }

    pub fn buffer_direction(&mut self, d: Direction) -> () {
        if self
            .curr_direction
            .map(|curr_d| curr_d.get_opposite() != d)
            .unwrap_or(true)
        {
            self.buffered_direction = Some(d);
        }
    }

    pub fn to_blocks(&self) -> Vec<Block> {
        let mut blocks: Vec<Block> = Vec::from(self.tail.clone());
        blocks.push(self.head.clone());
        blocks
    }

    pub fn to_coordinates(&self) -> Vec<u8> {
        self.to_blocks()
            .iter()
            .flat_map(|b| vec![b.0, b.1])
            .collect::<Vec<u8>>()
    }
}
