const initialState = {
    count: 0,
    dispatch: 'hi'
}

const SHARE_ANIMAL_COUNT = "SHARE_ANIMAL_COUNT";

export function shareAnimalCount(count){
    return {
        type: SHARE_ANIMAL_COUNT,
        payload: count
    }
}

export default function reducer(state=initialState, action) {
    console.log(action)
    switch(action.type) {
        case SHARE_ANIMAL_COUNT:
            return Object.assign({}, state, {count: action.payload})
        default:
            return state;
    }
}