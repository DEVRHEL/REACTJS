import { call, put, take, takeLatest, select, actionChannel, all } from 'redux-saga/effects';
import * as types from '../constants';
import axios from 'axios';
import { fetchData } from "./fetchData";

function* addNumberFunc(action){
    try{
        const rawdata = action.number
        console.log('RAWDATA', rawdata)
        const data = yield call(fetchData, rawdata);
        yield put({type: types.GET_API_SUCCESS, data})
    }
    catch(error)
    {
        yield put({type: types.GET_API_FAIL, error})
    }
}

export default function* rootSaga(){
    yield all([
        takeLatest(types.GET_API, addNumberFunc)
    ])
}