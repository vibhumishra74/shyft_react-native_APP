
import { createStore, combineReducers } from 'redux'; //suggested to use toolkit but im using redux that is why this show deprecated msg
import UserReducer from '../reducers/User'
import loan from '../reducers/loan';


const rootReducer = combineReducers({
  Loan:loan,
  user:UserReducer
});

let store = createStore(rootReducer);
export default store;
