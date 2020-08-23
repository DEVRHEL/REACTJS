import * as types from '../constants'

const computeReducer = (state = {}, action) => {
    switch (action.type){
        case types.GET_API:
            //console.log('GET_API', action)
            return state;
        case types.GET_API_SUCCESS:
            //console.log('GET_API_SUCCESS', action)
            return {...state, action};
        case types.GET_API_FAIL:
            //onsole.log('GET_API_FAIL', action)
            return {...state, action};
        default:
            return state;
    }
}

export default computeReducer