import { actionsEnums } from '../common/actionsEnums';
import { MemberEntity } from '../model/member';
import { memberAPI } from '../api/member';

export const memberRequestCompleted = (members: MemberEntity[]) => {
  return {
    type: actionsEnums.MEMBER_REQUEST_COMPLETED,
    payload: members
  }
}

export const memberRequest = (organizationNewName: string) => (dispatcher) => {
  const promise = memberAPI.getAllMembers(organizationNewName);

  promise.then(
    (data) => dispatcher(memberRequestCompleted(data))
  );

  return promise;
}

export const organizationNewName = (organizationName: string) => {
  return {
      type: actionsEnums.MEMBER_ORGANIZATION_NAME,
      payload: organizationName,
  };
};