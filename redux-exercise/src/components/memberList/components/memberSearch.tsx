import * as React from 'react';
import { MemberEntity } from '../../../model/member';

interface Props {
    members: Array<MemberEntity>;
    loadMembers: () => any;
    organizationName : string;
    onChange : (name : string) => void;
}

export const MemberSearchComponent = (props : Props) => {
  return (
  <div>
      <h1> Members Page</h1>
      <form>
        <label>Organization Name:</label>
        <input
          value={props.organizationName}
          onChange={(e) => props.onChange(e.target.value)}
        />
        <input type="submit"
          value="load"
          className="btn btn-default"
          onClick={() => props.loadMembers()}
        />
      </form>
  </div>
  );
}
