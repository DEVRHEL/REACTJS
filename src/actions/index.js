import * as types from '../constants';

export const getApi = (number) => ({
    type: types.GET_API,
    number
});