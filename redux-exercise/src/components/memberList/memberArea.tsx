import * as React from 'react';
import {MemberTableComponent} from './components/memberTable';
import {MemberEntity} from '../../model/member'
import { MemberSearchComponent } from './components/memberSearch';

interface Props {
  members: Array<MemberEntity>;
  loadMembers: () => any;
  organizationName: string;
}

export const MemberAreaComponent = (props : Props) => {
  return (
  <div>
      <h1> Members Page</h1>
      <MemberSearchComponent organizationName={props.organizationName} />
      <MemberTableComponent members={props.members}/>
  </div>
  );
}
