import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LabeledCheckbox from "./LabeledCheckbox";

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function CityCard({cityName='Ohio'}) {
    const classes = useStyles();

    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="primary" gutterBottom>
                    City: {cityName}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Temperature: {"--"} °C
                </Typography>
            </CardContent>
            <CardActions>
                <LabeledCheckbox label={"select"} labelPlacement={"end"} value={cityName}/>
            </CardActions>
        </Card>
    );
}
