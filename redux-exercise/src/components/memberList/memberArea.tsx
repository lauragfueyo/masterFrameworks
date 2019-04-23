import * as React from 'react';
import {MemberTableComponent} from './components/memberTable';
import {MemberEntity} from '../../model/member';


interface Props {
  members: Array<MemberEntity>;
  loadMembers: (organizationName: string) => any;
  onChange: (organizationName: string) => any;
  organizationName: string;
}

export class MemberAreaComponent extends React.Component<Props> {

  constructor(props: Props) {
      super(props);
      this.changeOrganizationName = this.changeOrganizationName.bind(this);
  }

  changeOrganizationName = (event) => {
    this.props.onChange(event.target.value);
    this.props.loadMembers(event.target.value);
  }

  public render() {
    return (
      <div>
          <p>
            <label>Organización Name: </label>
            <input
                type="text"
                value={this.props.organizationName}
                onChange={event => this.props.onChange(event.target.value)}
            />
            <input type="submit"
                    value="load"
                    className="btn btn-default"
                    onClick={() => this.props.loadMembers(this.props.organizationName)}
            />
          </p>
          
          <MemberTableComponent members={this.props.members}/>
          
      </div>
    );
  }
}
