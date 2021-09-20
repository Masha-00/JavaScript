import { COLOR_RED, COLOR_GREEN, COLOR_BLUE } from "../contants";

const defaulrValues = {
    style: {
        backgroundColor: ''
    }
}

export const colorsReducer = (state = defaulrValues, action) => {
    switch (action.type) {
        case COLOR_RED: {
           return {
               style: {
                   backgroundColor: 'red'
               }
           };  
        }
        case COLOR_GREEN: {
            return {
                style: {
                    backgroundColor: 'green'
                }
            };  
        }
        case COLOR_BLUE: {
            return {
                style: {
                    backgroundColor: 'blue'
                }
            };  
        }
        default: return state;
    }
};