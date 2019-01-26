import * as React from 'react';
import TextField from '@material-ui/core/TextField';

interface Props{
    organizationName: string;
    onChange: (newName : string) => void;
}

const onInputChange = (props) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value)
}
export const OrganizationNameComponent = (props: Props) => {
    return (
        <>
            <TextField
            value={props.organizationName}
            onChange={onInputChange(props)}
            id="outlined-name"
            label="Organization name"
            className="textField"
            margin="dense"
            variant="outlined"
            />
        </>
    )
}