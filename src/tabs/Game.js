import React from 'react';
import { useForm, ErrorMessage, Controller } from 'react-hook-form';
import {
    Select, MenuItem, Slider, Button, Switch,
    Grid, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  } from "@material-ui/core";
import { GameDialog } from './cmpt/ResultDialogs.js';


export default function Game() {
    const { handleSubmit, errors, control } = useForm();
    const onSubmit = data => {
    if(data.team_a === "Team A") delete data.team_a;
    if(data.team_b === "Team B") delete data.team_b;

      fetch( buildURL(data) )
        .then(response => response.json())
        .then(games => {
          setDialogContent(games);
          setShowDialog(true);
        });
    };

    const [showDialog, setShowDialog] = React.useState(false);
    const [dialogContent, setDialogContent] = React.useState({result:[]});

    return (<>
      <form onSubmit={ handleSubmit(onSubmit) }>

        <Grid container justify='center' style={{ paddingBottom:40 }}>

        <Grid item xs={3} container justify='center'>
              <Controller
                as={
                  <Select variant='outlined' >
                    <MenuItem children="Team A" value="Team A" />
                    {teams.map(team => (
                      <MenuItem children={team} value={team} key={team} />
                    ))}
                  </Select>
                }
                name="team_a" control={control} defaultValue="Team A"
              />
            </Grid>

            <Grid item xs={3} container justify='center'>
              <Controller
                as={
                  <Select variant='outlined' >
                    <MenuItem children="Team B" value="Team B" />
                    {teams.map(team => (
                      <MenuItem children={team} value={team} key={team} />
                    ))}
                  </Select>
                }
                name="team_b" control={control} defaultValue="Team B"
              />
            </Grid>

          </Grid>


        <Grid item container justify='center' xs={12}>
        <Button type="submit" children="Submit" variant="contained" color="primary" />        
        </Grid>

      </form>
      <GameDialog showDialog={showDialog} setShowDialog={setShowDialog} content={dialogContent} />
  </>)
}

// below this line: helper functions & constants

const teams = [
  // NFC
  'Arizona Cardinals', 'Atlanta Falcons', 'Carolina Panthers', 'Chicago Bears', 'Dallas Cowboys',
  'Detroit Lions', 'Green Bay Packers', 'Los Angeles Rams', 'Minnesota Vikings', 'New Orleans Saints',
  'New York Giants', 'Philadelphia Eagles', 'San Francisco 49ers', 'Seattle Seahawks', 'Tampa Bay Buccaneers',
  'Washington Redskins', 
  
  // AFC
  'Baltimore Ravens', 'Buffalo Bills', 'Cincinnati Bengals', 'Cleveland Browns', 'Denver Broncos',
  'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs',
  'Las Vegas Raiders', 'Los Angeles Chargers', 'Miami Dolphins', 'New England Patriots',
  'New York Jets', 'Pittsburgh Steelers', 'Tennesee Titans',
]

function buildURL(data) {
    var URL = 'http://kicker-almanac-backend.herokuapp.com/games?';
    var propertyCount = 0;

    const props = ['team_a', 'team_b'];

    props.forEach( (prop)=>{
        if (data.hasOwnProperty(prop)) {
        propertyCount++;
        if (propertyCount > 1) {
            URL = URL.concat('&');
        }
        URL = URL.concat(`${prop}=${data[prop]}`);
        }
    });

    return URL;
}