import { combineReducers } from 'redux';
import { createStore } from 'redux';

const actions = {
    CHANGING_THEME: 'CHANGING_THEME',
};

const defaultReducer = {
    status: 'CHANGING_THEME',
    theme: 'light',
};



combineReducers({
    theme: themeReducer,
});


export default createStore( themeReducer, defaultReducer  );


function themeReducer(state , {type, theme} ) {
    switch (type) {
        case actions.CHANGING_THEME:
            return {
                ...state,
                theme,
            };

        default:
            return state;
    }
}


