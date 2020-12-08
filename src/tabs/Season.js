import React from 'react';
import { useForm, ErrorMessage, Controller } from 'react-hook-form';
import {
    Select, MenuItem, Slider, Button, Switch,
    Grid, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  } from "@material-ui/core";
import { SeasonDialog } from './cmpt/ResultDialogs.js';


export default function Season() {
    const { handleSubmit, errors, control } = useForm();
    const onSubmit = data => {

      fetch( `http://kicker-almanac-backend.herokuapp.com/seasons?team=${data.team}` )
        .then(response => response.json())
        .then(team => {
          setDialogContent(team);
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
                    <MenuItem children="Team" value="Team" />
                    {teams.map(team => (
                      <MenuItem children={team} value={team} key={team} />
                    ))}
                  </Select>
                }
                name="team" control={control} defaultValue="Team"
              />
            </Grid>
        </Grid>


        <Grid item container justify='center' xs={12}>
        <Button type="submit" children="Submit" variant="contained" color="primary" />        
        </Grid>

      </form>
      <SeasonDialog showDialog={showDialog} setShowDialog={setShowDialog} content={dialogContent} />
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

