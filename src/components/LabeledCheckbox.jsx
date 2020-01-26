import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useDispatch} from "react-redux";
import {selectCity} from "../store/city/actions"

export default function LabeledCheckbox({labelPlacement = 'bottom', value, label = 'city'}) {
    const dispatch = useDispatch();
    const onChangeSelect = React.useCallback((event,value)=>{
            dispatch(selectCity(value))
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
