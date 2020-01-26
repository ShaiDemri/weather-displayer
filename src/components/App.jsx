import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonAppBar from "./ButtonAppBar";
import CityCard from "./CityCard";
import {useDispatch} from "react-redux";
import {fetchWeather} from '../store/weather/actions';
import {CITIES_NAME as cityNameList}from '../store/city/reducer';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        margin: theme.spacing(0.5),
        textAlign: 'center',
    },
    btn:{
        background: 'linear-gradient(30deg, #106BFB 20%, #90AFF0 70%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
    }
}));

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = ()=>{
        dispatch(fetchWeather());
    };

    return (
        <>
            <ButtonAppBar/>
            <Grid className={classes.root} container spacing={1} justify="space-around">
                {cityNameList.map((cityName, index) => {
                    return (
                        <Grid key={index} className={classes.grid} item xs={2}>
                            <CityCard cityName={cityName}/>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container item xs={'auto'} justify={'center'} >
                <Button classes={{root:classes.btn}} size="large" variant="outlined" color="primary" onClick={handleSubmit}>Submit</Button>
            </Grid>
        </>
    );
}

export default App;
