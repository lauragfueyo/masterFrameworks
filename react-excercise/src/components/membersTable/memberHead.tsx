import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18,
  },
}))(TableCell);

export const MemberHead = () =>
<TableHead>
    <TableRow>
        <CustomTableCell>
            Avatar
        </CustomTableCell>
        <CustomTableCell>
            Id
            </CustomTableCell>
        <CustomTableCell>
            Name
            </CustomTableCell>
       </TableRow>
</TableHead>
