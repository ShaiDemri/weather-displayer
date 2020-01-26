import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function LabeledCheckbox({labelPlacement = 'bottom', value, label = 'city'}) {
    const onChangeSelect = React.useCallback((event,value)=>{
        if(event.target.checked){
            console.log(value, "Selected!")
        }else {
            console.log(value, "UN-Selected!")
        }
    },[value]);
    return (
        <FormControlLabel
            value={value}
            control={<Checkbox color="primary" onChange={(event)=>{onChangeSelect(event,value)}}/>}
            label={label}
            labelPlacement={labelPlacement}
        />
    );
}
