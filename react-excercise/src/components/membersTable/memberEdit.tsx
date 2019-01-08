import * as React from 'react';

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
            <label>Organization name: </label>
            <input 
                value={props.organizationName}
                onChange={onInputChange(props)}
            />
        </>
    )
}