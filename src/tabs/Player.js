import React from 'react';
import { useForm, ErrorMessage, Controller } from 'react-hook-form';
import {
    Select, MenuItem, Slider, Button, Switch,
    Grid, Typography,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  } from "@material-ui/core";

export default function Player() {
    const { handleSubmit, errors, control } = useForm();
    const onSubmit = _data => {
      const data = { ..._data, height: height, weight: weight, number: number, age: age };
      if(data.position === "Position") delete data.position;
      if(data.team === "Team") delete data.team;
      if(!enableSliders.height) delete data.height;
      if(!enableSliders.weight) delete data.weight;
      if(!enableSliders.number) delete data.number;
      if(!enableSliders.age) delete data.age;

      alert(JSON.stringify(data));
      //alert(buildRequest(data));
    };    

    const [height, setHeight] = React.useState(72);
    const changeHeight = (event, newValue) => { setHeight(newValue); };
    const [weight, setWeight] = React.useState(200);
    const changeWeight = (event, newValue) => { setWeight(newValue); };
    const [number, setNumber] = React.useState(1);
    const changeNumber = (event, newValue) => { setNumber(newValue); };
    const [age, setAge] = React.useState(25);
    const changeAge = (event, newValue) => { setAge(newValue); };

    const [enableSliders, setEnableSliders] = React.useState({
      height: false, weight: false, number: false, age: false
    });
    const changeEnableSliders = (newValue, name) => {
      setEnableSliders({...enableSliders, [name]: newValue});
    };

    return (
      <form onSubmit={ handleSubmit(onSubmit) }>

          <Grid container justify='center'  style={{ paddingBottom:40 }}>

            <Grid item xs={3} container justify='center'>
              <Controller
                as={
                  <Select variant='outlined' >
                    <MenuItem children="Position" value="Position" />
                    {positions.map(position => (
                      <MenuItem children={position} value={position} key={position} />
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

          <Grid container spacing={4} justify='center' style={{ paddingBottom:40 }}>

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
                  getAriaValueText={displayInches} 
                />
            </Grid>

            <Grid item container xs={5}> {/* WEIGHT SLIDER */}
                <Switch 
                  onChange={(event, newValue)=> changeEnableSliders(newValue, "weight")} 
                  checked={enableSliders.weight} color="primary" size='small' 
                />
                <Typography id="weight" gutterBottom children='Weight' />
                <Slider
                  value={weight} onChange={changeWeight}
                  step={10} min={100} max={600} track={false}
                  disabled={!enableSliders.weight}
                  valueLabelDisplay="auto" aria-labelledby="weight"
                  getAriaValueText={displayInches} 
                />
            </Grid>

            <Grid item container xs={5}> {/* NUMBER SLIDER */}
                <Switch 
                  onChange={(event, newValue)=> changeEnableSliders(newValue, "number")} 
                  checked={enableSliders.number} color="primary" size='small' 
                />
                <Typography id="number" gutterBottom children='Number' />
                <Slider
                  value={number} onChange={changeNumber}
                  step={1} min={1} max={99} track={false}
                  disabled={!enableSliders.number}
                  valueLabelDisplay="auto" aria-labelledby="number"
                  getAriaValueText={displayInches} 
                />
            </Grid>

            <Grid item container xs={5}> {/* AGE SLIDER */}
                <Switch 
                  onChange={(event, newValue)=> changeEnableSliders(newValue, "age")} 
                  checked={enableSliders.age} color="primary" size='small' 
                />
                <Typography id="age" gutterBottom children='Age' />
                <Slider
                  value={age} onChange={changeAge}
                  step={1} min={18} max={60} track={false}
                  disabled={!enableSliders.age}
                  valueLabelDisplay="auto" aria-labelledby="age"
                  getAriaValueText={displayInches} 
                />
            </Grid>

          </Grid>

          <Grid item container justify='center' xs={12}>
            <Button type="submit" children="Submit" variant="contained" color="primary" />        
          </Grid>

      </form>
    )
}

// below this line: helper functions & constants

// use if alternate variable name is wanted for SQL
// const positions = [
//   ['C', 'Center'], ['OG', 'Offensive Guard'], ['OT', 'Offensive Tackle'],
//   ['QB', 'Quarterback'],['RB', 'Running Back'],['WR', 'Wide Receiver'],['TE', 'Tight End'],
//   ['DT', 'Defensive Tackle'],['DE', 'Defensive End'],['MLB', 'Middle Linebacker'],
//   ['OLB', 'Outside Linebacker'],['CB', 'Cornerback'],['S', 'Safety'],
//   ['K', 'Kicker'],['P', 'Punter'],['H', 'Holder'],['LS', 'Long snapper'],
//   ['KR', 'Kick Returner'],['PR', 'Punt Returner'],
// ]

const positions = [
  'Center', 'Offensive Guard', 'Offensive Tackle',
  'Quarterback', 'Running Back', 'Wide Receiver', 'Tight End',
  'Defensive Tackle','Defensive End', 'Middle Linebacker',
  'Outside Linebacker', 'Cornerback', 'Safety',
  'Kicker', 'Punter', 'Holder', 'Long snapper',
  'Kick Returner', 'Punt Returner',
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

function displayInches(inches) {
  const _ft = inches / 12;
  const _inch = inches - _ft*12;
  return `${_ft}'${_inch}"`;
}

function buildRequest(data) {

  const position = data.hasOwnProperty('position') ? '?position=' + data.position : '';
  const team = data.hasOwnProperty('team') ? '?team=' + data.team : '';

  return `http://kicker-almanac-backend.herokuapp.com/players?${position}${team}`;
}


// fetch('http://kicker-almanac-backend.herokuapp.com/players?position=QB&limit=2')
//   .then(response => response.json())
//   .then(data => console.log(data));

          {/* <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Player</TableCell>
                  <TableCell>Team</TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>Weight</TableCell>
                  <TableCell>Height</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Birthday</TableCell>
                  <TableCell>University</TableCell>
                  <TableCell>Position</TableCell>
                </TableRow>
              </TableHead>
            </Table>
            <TableBody>
            <TableRow>
                  <TableCell>Russel Wilson</TableCell>
                  <TableCell>Seattle Seahawks</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>218</TableCell>
                  <TableCell>6'2"</TableCell>
                  <TableCell>30</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>West Virginia</TableCell>
                  <TableCell>QB</TableCell>
                </TableRow>
            </TableBody>
          </TableContainer> */}