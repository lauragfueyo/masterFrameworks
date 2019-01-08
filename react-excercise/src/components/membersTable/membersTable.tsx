import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';
import { OrganizationNameComponent } from './memberEdit';
import {} from 'core-js';

interface Props {
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  organizationName: string;
  members: Array<MemberEntity>
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class MembersTableComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = { 
      members: [],
      organizationName: 'lemoncode'
    };
  }

  setOrganizationName = (newName: string) => {
    this.setState({organizationName: newName})
  }

  loadMembers = () => {
    memberAPI.getAllMembers(this.state.organizationName).then((members) =>
      this.setState({ members: members })
    );
  }

  public render() {

    return (
      <div className="row">
        <h2> Members Page</h2>
        <OrganizationNameComponent
          organizationName={this.state.organizationName}
          onChange={this.setOrganizationName}
        />
        <button onClick={this.loadMembers}>Load</button>
        <table className="table">
          <thead>
            <MemberHead />
          </thead>
          <tbody>
            {
              this.state.members.map((member: MemberEntity) =>
                <MemberRow key={member.id} member={member} />
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}
