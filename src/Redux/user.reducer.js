import {UserActionTypes} from './user.types';

const INITAL_STATE= {

    currentUser:null
}
//User Reducer

const userReducer=(state=INITAL_STATE,action)=>
{
         switch(action.type)
         {
                case UserActionTypes.SET_CURRENT_USER:
                     return{
                         ...state,
                         currentUser:action.payload
                       }
                default:
                  return state;     
        }      
}

export default userReducer;