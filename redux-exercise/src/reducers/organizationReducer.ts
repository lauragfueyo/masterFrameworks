import {actionsEnums} from '../common/actionsEnums';
import {MemberEntity} from '../model/member';

export interface OrganizationState{
  organizationName: string;
}

const defaultOrganization = () : OrganizationState => ({
  organizationName: 'lemoncode',
});

export const OrganizationNameRedurcer = (state = defaultOrganization(), action): OrganizationState => {
  switch(action.type) {
    case actionsEnums.MEMBER_ORGANIZATION_NAME:
    return handleMemberOrganizationNamedAction(state, action.playload);
  }
  return state;
};

const handleMemberOrganizationNamedAction = (state: OrganizationState, organizationName: string) : OrganizationState => ({
  ...state,
  organizationName: organizationName,
});