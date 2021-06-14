use wasm_bindgen::prelude::*;
use std::io::stdin;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

fn add( x:f32, y:f32)->f32
{
    return x+y
}
fn substract( x:f32, y:f32)->f32
{
    return x-y
}
fn multiply( x:f32, y:f32)->f32
{
    return x*y
}
fn divide( x:f32, y:f32)->f32
{
    return x/y
}

