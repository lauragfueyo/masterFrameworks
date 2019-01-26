import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';
import { OrganizationNameComponent } from './memberEdit';
import { } from 'core-js';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';

interface Props {
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  organizationName: string;
  members: Array<MemberEntity>
}

const CustomTable = withStyles(theme => ({
  root: {
    margin: "30px 0",
    width: "50%",
  },
}))(Table);

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
    this.setState({ organizationName: newName })
  }

  loadMembers = () => {
    memberAPI.getAllMembers(this.state.organizationName).then((members) =>
      this.setState({ members: members })
    );
  }



  public render() {
    return (
      <>
        <Typography component="h1" variant="h2" gutterBottom>
          Members Page
          </Typography>
        <Grid
          container
          spacing={16}
          alignItems="center"
        >
          <Grid item>
            <OrganizationNameComponent
              organizationName={this.state.organizationName}
              onChange={this.setOrganizationName}
            />
          </Grid>
          <Grid item>
            <Button value="center" variant="contained" size="medium" color="primary" onClick={this.loadMembers}>Load</Button>
          </Grid>
        </Grid>

        <CustomTable>
          <MemberHead />
          <TableBody>
            {
              this.state.members.map((member: MemberEntity) =>
                <MemberRow key={member.id} member={member} />
              )
            }
          </TableBody>
        </CustomTable>
      </>
    );
  }
}