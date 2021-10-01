import { combineReducers } from 'redux';
import giftsReducer from '../modules/gifts/state/reducers/giftsReducer';
import loginReducer from '../modules/header/state/reducers/loginReducer';
import usersReducer from '../modules/user/state/reducers/usersReducer';

const rootReducer = combineReducers({
  gifts: giftsReducer,
  login: loginReducer,
  users: usersReducer
});

export default rootReducer;
