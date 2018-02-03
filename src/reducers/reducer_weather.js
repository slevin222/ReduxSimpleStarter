import { FETCH_WEATHER } from '../actions/index';


export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]);
            return [action.payload.data, ...state];
        ///Need to create a new array with concat or es6 instead of using push and mutating state
    }

    return state;

}