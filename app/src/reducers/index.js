import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../actions/index';

const initialState = {
    isLoading: false,
    error: '',
    character: [

    ]
};

export const reducer = (state =initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                character: action.payload
            };
            default:
                return state;
    }
};

