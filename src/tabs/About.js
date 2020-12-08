import React from 'react';
import { useForm, ErrorMessage, Controller } from 'react-hook-form';
import { Typography, TextField, Grid, Button } from '@material-ui/core';

export default function About() {
    const { handleSubmit, errors, control } = useForm();
    const onSubmit = () => {
        
        if (suggestion !== '') {
            setSuggestion('');
            alert('Submitted suggestion. Thank you.');
        }

        // if (suggestion === '') return;
        // (async (suggestion) => {
        //     const rawResponse = await fetch('http://kicker-almanac-backend.herokuapp.com/user_suggestions', {
        //         method: 'POST',
        //         headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({'suggestion': suggestion})
        //     });
        //     const content = await rawResponse.json();

        //     alert('Submitted suggestion. Thank you.');
        // })();
    };    

    const [suggestion, setSuggestion] = React.useState('');
    const changeSuggestion = (event, newValue) => {
        setSuggestion(event.target.value);
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
        <Typography style={{paddingBottom:20}} children=
            "This application was developed as part of a project in a database class at Texas A&M. 
            As a result of the group members' love of football and the NFL in particular,
            we have decided to make a database web application that shares the statistics of the
            2019 NFL season. If this were to be expanded in the future, we could add different 
            years but due to the limits given by the free Heroku database (10,000 line maximum,
            we decided to only show one season."
        />
        <Typography style={{paddingBottom:20}} children=
            "This application was developed in two separate segments. The first is the React based
            front end which you are currently interacting with. The second is a REST API build in 
            Flask. The API interacts with a PostgreSQL database provided free by Heroku.
            The two parts interact in a Restful way and are both currently hosted on Heroku."
        />
        <Typography style={{paddingBottom:20}} children=
            "There are tables in the database for players, teams, games, seasons, and individual 
            statistics. The database is currently limited by the scope 
            of the free Heroku database. The data is all normalized to limit redundant data."
        />
        <Typography style={{paddingBottom:40}} children=
            "If you are to spot an issue with the data given or have suggestions on how to make
            our app better, feel free to submit a suggestion below."
        />
        
            <TextField
                placeholder="Suggestion"
                value={suggestion} onChange={changeSuggestion}
                multiline
                rows={2}
                rowsMax={4}
                fullWidth={true}
                variant='outlined'
                style={{paddingBottom:10}}
            />
            <Grid item container justify='center' xs={12}>
            <Button type="submit" children="Submit" variant="contained" color="primary" />        
          </Grid>
        </form>
    )
}