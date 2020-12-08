import React from 'react';
import { useForm, ErrorMessage, Controller } from 'react-hook-form';
import {
    Select, MenuItem, Slider, Button, Switch,
    Grid, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  } from "@material-ui/core";
import ResultDialog from './cmpt/ResultDialog.js';

// TODO: ResultDialog->map content to table(s)
export default function Player() {
    const { handleSubmit, errors, control } = useForm();
    const onSubmit = _data => {
      const data = { ..._data, height: displayInches(height), weight: weight };
      if(data.position === "Position") delete data.position;
      if(data.team === "Team") delete data.team;
      if(!enableSliders.height) delete data.height;
      if(!enableSliders.weight) delete data.weight;

      fetch( buildURL(data) )
        .then(response => response.json())
        .then(players => {
          setDialogContent(JSON.stringify(players));
          setShowDialog(true);
          console.log(players);
        });
    };    

    const [height, setHeight] = React.useState(72);
    const changeHeight = (event, newValue) => { setHeight(newValue); };
    const [weight, setWeight] = React.useState(200);
    const changeWeight = (event, newValue) => { setWeight(newValue); };

    const [enableSliders, setEnableSliders] = React.useState({
      height: false, weight: false
    });
    const changeEnableSliders = (newValue, name) => {
      setEnableSliders({...enableSliders, [name]: newValue});
    };

    const [showDialog, setShowDialog] = React.useState(false);
    const [dialogContent, setDialogContent] = React.useState('');

    return (<>
      <form onSubmit={ handleSubmit(onSubmit) }>

          <Grid container justify='center' style={{ paddingBottom:40 }}>

            <Grid item xs={3} container justify='center'>
              <Controller
                as={
                  <Select variant='outlined' >
                    <MenuItem children="Position" value="Position" />
                    {positions.map(position => (
                      <MenuItem children={position[1]} value={position[0]} key={position[0]} />
                    ))}
                  </Select>
                }
                name="position" control={control} defaultValue="Position"
              />
            </Grid>

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

          <Grid container spacing={4} justify='center' style={{ paddingBottom:5 }}>

            <Grid item container xs={5}> {/* HEIGHT SLIDER */}
              <Switch 
                onChange={(event, newValue)=> changeEnableSliders(newValue, "height")} 
                checked={enableSliders.height} color="primary" size='small' 
              />
              <Typography id="height" gutterBottom children='Height' />
              <Slider
                value={height} onChange={changeHeight}
                step={1} min={48} max={96} track={false}
                disabled={!enableSliders.height}
                valueLabelDisplay="auto" aria-labelledby="height"
                valueLabelFormat={(x)=>displayInches(x)}
              />
            </Grid>

          </Grid>
          <Grid container spacing={4} justify='center' style={{ paddingBottom:40 }}>

            <Grid item container xs={5}> {/* WEIGHT SLIDER */}
              <Switch 
                onChange={(event, newValue)=> changeEnableSliders(newValue, "weight")} 
                checked={enableSliders.weight} color="primary" size='small' 
              />
              <Typography id="weight" gutterBottom children='Weight' />
              <Slider
                value={weight} onChange={changeWeight}
                step={1} min={150} max={400} track={false}
                disabled={!enableSliders.weight}
                valueLabelDisplay="auto" 
                aria-labelledby="weight"
              />
            </Grid>

          </Grid>

          <Grid item container justify='center' xs={12}>
            <Button type="submit" children="Submit" variant="contained" color="primary" />        
          </Grid>

      </form>
      <ResultDialog showDialog={showDialog} setShowDialog={setShowDialog} content={dialogContent} />
    </>)
}

// below this line: helper functions & constants

// use if alternate variable name is wanted for SQL
const positions = [
  ['C', 'Center'], ['OG', 'Offensive Guard'], ['OT', 'Offensive Tackle'],
  ['QB', 'Quarterback'],['RB', 'Running Back'],['WR', 'Wide Receiver'],['TE', 'Tight End'],
  ['DT', 'Defensive Tackle'],['DE', 'Defensive End'],['MLB', 'Middle Linebacker'],
  ['OLB', 'Outside Linebacker'],['CB', 'Cornerback'],['S', 'Safety'],
  ['K', 'Kicker'],['P', 'Punter'],['H', 'Holder'],['LS', 'Long snapper'],
  ['KR', 'Kick Returner'],['PR', 'Punt Returner'],
]

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

function displayInches(_inches) {
  const feet = Math.floor(_inches / 12);
  const inches = _inches % 12;
  return `${feet}'${inches}"`;
}

function buildURL(data) {
  var URL = 'http://kicker-almanac-backend.herokuapp.com/players?';
  var propertyCount = 0;

  const props = ['position', 'team', 'height', 'weight'];

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

// <TableContainer component={Paper}>
//   <Table>
//     <TableHead>
//       <TableRow>
//         <TableCell>Player</TableCell>
//         <TableCell>Team</TableCell>
//         <TableCell>Number</TableCell>
//         <TableCell>Weight</TableCell>
//         <TableCell>Height</TableCell>
//         <TableCell>Age</TableCell>
//         <TableCell>Birthday</TableCell>
//         <TableCell>University</TableCell>
//         <TableCell>Position</TableCell>
//       </TableRow>
//     </TableHead>
//   </Table>
//   <TableBody>
//   <TableRow>
//         <TableCell>Russel Wilson</TableCell>
//         <TableCell>Seattle Seahawks</TableCell>
//         <TableCell>3</TableCell>
//         <TableCell>218</TableCell>
//         <TableCell>6'2"</TableCell>
//         <TableCell>30</TableCell>
//         <TableCell>&nbsp;</TableCell>
//         <TableCell>West Virginia</TableCell>
//         <TableCell>QB</TableCell>
//       </TableRow>
//   </TableBody>
// </TableContainer>