import React from 'react';
import { useForm, ErrorMessage, Controller } from 'react-hook-form';
import {
    Select, MenuItem, Slider,
    Grid,Typography,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  } from "@material-ui/core";

export default function Player() {
    const { handleSubmit, errors, control } = useForm();
    const onSubmit = _data => {
      const data = { ..._data, height: height, weight: weight };
      if(data.position === "Position") delete data.position;
      if(data.team === "Team") delete data.team;
      if((JSON.stringify(data.height.sort()) === JSON.stringify([48, 96]))) delete data.height;
      if((JSON.stringify(data.weight.sort()) === JSON.stringify([100, 600]))) delete data.weight;

      alert(JSON.stringify(data)); // next, formSQL() in place of stringify
    };    

    const [height, setHeight] = React.useState([48, 96]);
    const changeHeight = (event, newValue) => {
      setHeight(newValue);
    };
    const [weight, setWeight] = React.useState([100, 600]);
    const changeWeight = (event, newValue) => {
      setWeight(newValue);
    };

    return (
      <form onSubmit={ handleSubmit(onSubmit) }>
        <Grid container spacing={4} justify='center' >

          <Grid container item spacing={4} justify='center' padding={5} >

            <Grid item>
              <Controller
                as={
                  <Select variant='outlined' >
                    <MenuItem children="Position" value="Position" />
                    {positions.map(position => (
                      <MenuItem children={position} value={position} key={position} />
                    ))}
                  </Select>
                }
                name="position"
                control={control}
                defaultValue="Position"
              />
            </Grid>

            <Grid item>
              <Controller
                as={
                  <Select variant='outlined' >
                    <MenuItem children="Team" value="Team" />
                    {teams.map(team => (
                      <MenuItem children={team} value={team} key={team} />
                    ))}
                  </Select>
                }
                name="team"
                control={control}
                defaultValue="Team"
              />
            </Grid>

          </Grid>

          <Grid container item spacing={4} justify='center' padding={5} >

            <Grid item>
              <Controller
                as={ <>
                  <Typography id="height" gutterBottom>
                    Height (inches, will be in ft'in")
                  </Typography>
                  <Slider
                    aria-labelledby="height"
                    value={height}
                    onChange={changeHeight}
                    step={1}
                    min={48}
                    max={96}
                    getAriaValueText={displayInches}
                    valueLabelDisplay="auto"
                  />
                </>}
                name="height"
                control={control}
              />
            </Grid>

            <Grid item>
              <Controller
                  as={ <>
                    <Typography id="weight" gutterBottom>
                      Weight (lb)
                    </Typography>
                    <Slider
                      aria-labelledby="weight"
                      value={weight}
                      onChange={changeWeight}
                      // defaultValue={48}
                      step={10}
                      min={100}
                      max={600}
                      // getAriaValueText={displayInches}
                      valueLabelDisplay="auto"
                    />
                  </>}
                  name="weight"
                  control={control}
                />
              </Grid>

          </Grid>

          <Grid item container sm={12} justify='center' >
              <p>TODO: jersey number, age, bday, uni, cooler button </p>

          </Grid>

          <Grid item><input type="submit" value="submit" /></Grid>

          <TableContainer component={Paper}>
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
          </TableContainer>
          <p>results will go here. table header will be hidden if results arent here</p>
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
  'Washington Football Team', 
  
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

// function formQuery(data) {

//   const positionSQL = data.hasAttribute('position') ? 'WHERE position = ' + 

//   return 'select * from players where' + positionSQL + teamSQL + heightSQL + weightSQL; // address case where no conditions applied, dont have a blank where
// }
