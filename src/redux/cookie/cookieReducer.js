import {BUY_COOKIE} from '../cookie/cookieType'

const initialState={
    numOfCookies:10
}

const cookieReducer=(state=initialState,action)=>{
    switch (action.type) {
        case BUY_COOKIE:
            return {
              ...state,
                numOfCookies:state.numOfCookies-1
            }
        default:
            return state;
    }
}
export default cookieReducer;