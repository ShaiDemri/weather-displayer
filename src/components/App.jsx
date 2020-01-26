import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonAppBar from "./ButtonAppBar";
import CityCard from "./CityCard";

const cityNameList = ["Miami", "Oakland", "Chicago", "Houston", "Dallas", "Austin", "Seattle", "Boston", "Detroit", "Memphis"];
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        margin: theme.spacing(0.5),
        textAlign: 'center',
    }
}));

function App() {
    const classes = useStyles();

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
                <Grid item xs={2} >
                    <Button size="large" variant="outlined" color="primary">Submit</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default App;
