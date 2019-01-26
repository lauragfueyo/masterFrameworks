import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

export const MemberRow = (props: { member: MemberEntity }) =>
  
    <TableRow>
      <CustomTableCell>
        <Avatar alt={props.member.login} src={props.member.avatar_url}  />
      </CustomTableCell>
      <CustomTableCell>
        <span>{props.member.id}</span>
      </CustomTableCell>
      <CustomTableCell>
        <span>{props.member.login}</span>
      </CustomTableCell>
    </TableRow>
