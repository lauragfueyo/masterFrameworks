import { combineReducers} from 'redux';
import { memberReducer, memberState} from './memberReducer';
import { OrganizationNameRedurcer, OrganizationState } from './organizationReducer';

export interface State {  
  memberReducer : memberState;
  OrganizationNameRedurcer : OrganizationState;
};

export const reducers = combineReducers<State>({
  memberReducer,
  OrganizationNameRedurcer,
});
