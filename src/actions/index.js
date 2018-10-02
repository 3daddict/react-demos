import types from './types';

export function tick(){
    return {
        type: types.UPDATE_TIME
    }
}

export function increaseDate(days = 1){
    const increaseInMilliseconds = 1000 * 60 * 60 * 24 * days; //milliseconds in a day

    return {
        type: types.INCREASE_DATE,
        payload: increaseInMilliseconds
    }

}

export function decreaseDate(days = 1){
    const decreaseInMilliseconds = 1000 * 60 * 60 * 24 * days; //milliseconds in a day

    return {
        type: types.DECREASE_DATE,
        payload: decreaseInMilliseconds
    }
}

export function login(username){
    return {
        type: types.LOGIN,
        username: username
    }
}