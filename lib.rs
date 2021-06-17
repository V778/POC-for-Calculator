mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn add(a: f32,b: f32)-> f32 {
    let c: f32=a+b;
    return c;
    
}
#[wasm_bindgen]
pub fn sub(a: f32,b: f32)-> f32 {
    let c: f32=a-b;
    return c;
    
}
#[wasm_bindgen]
pub fn mul(a: f32,b: f32)-> f32 {
    let c: f32=a*b;
    return c;
    
}
#[wasm_bindgen]
pub fn div(a: f32,b: f32)-> f32 {
    let c: f32=a/b;
    return c;
    
}

