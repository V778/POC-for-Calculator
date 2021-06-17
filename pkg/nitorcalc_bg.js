import * as wasm from './nitorcalc_bg.wasm';

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function add(a, b) {
    var ret = wasm.add(a, b);
    return ret;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function sub(a, b) {
    var ret = wasm.sub(a, b);
    return ret;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function mul(a, b) {
    var ret = wasm.mul(a, b);
    return ret;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function div(a, b) {
    var ret = wasm.div(a, b);
    return ret;
}

