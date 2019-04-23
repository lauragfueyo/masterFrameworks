import { combineReducers} from 'redux';
import { memberReducer, memberState } from './memberReducer';
import { organizationReducer, organizationName} from './organizationReducer';


export interface State {
  [x: string]: any;  
  memberReducer : memberState;
  organizationReducer: organizationName;
};

export const reducers = combineReducers<State>({
  memberReducer,
  organizationReducer,
});
