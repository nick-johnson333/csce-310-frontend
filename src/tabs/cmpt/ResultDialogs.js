import React from 'react';
import {
  Button, Tooltip,
  Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from "@material-ui/core";

export function PlayerDialog(props) {

  return (
    <Dialog fullWidth={true} maxWidth='md' open={props.showDialog} aria-labelledby="max-width-dialog-title">
      <DialogTitle id="max-width-dialog-title">Result</DialogTitle>
      <DialogContent>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Player</TableCell>
                  <TableCell align="center">Age</TableCell>
                  <TableCell align="center">Height</TableCell>
                  <TableCell align="center">Weight&nbsp;(lb)</TableCell>
                  <TableCell align="center">Team</TableCell>
                  <TableCell align="center">University</TableCell>
                  <TableCell align="center">Position</TableCell>
                  <TableCell align="center">Number</TableCell>
                  <TableCell align="center">Stats</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.content.result.map( player => (
                  <TableRow key={player.name}>
                    <TableCell component="th" scope="row" children={player.name} />
                    <TableCell align="center" children={player.age} />
                    <TableCell align="center" children={player.height} />
                    <TableCell align="center" children={player.weight} />
                    <TableCell align="center" children={player.team} />
                    <TableCell align="center" children={player.university} />
                    <TableCell align="center" children={player.position} />
                    <TableCell align="center" children={player.number} />
                    <TableCell align="center" children={
                      <Tooltip title={<TooltipTable stats={player.stats} />}>
                        <Paper variant='outlined' style={{padding:10}}children='View' />
                      </Tooltip>
                    } />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.setShowDialog(false)} color="default">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export function TeamDialog(props) {
  const team = props.content.result;

  return (
    <Dialog fullWidth={true} maxWidth='md' open={props.showDialog} aria-labelledby="max-width-dialog-title">
      <DialogTitle id="max-width-dialog-title">Result</DialogTitle>
      <DialogContent>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Team</TableCell>
                  <TableCell align="center">State</TableCell>
                  <TableCell align="center">Division</TableCell>
                  <TableCell align="center">Conference</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" children={team.name} />
                    <TableCell align="center" children={team.state} />
                    <TableCell align="center" children={team.division} />
                    <TableCell align="center" children={team.conference} />
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.setShowDialog(false)} color="default">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export function GameDialog(props) {

  return (
    <Dialog fullWidth={true} maxWidth='md' open={props.showDialog} aria-labelledby="max-width-dialog-title">
      <DialogTitle id="max-width-dialog-title">Result</DialogTitle>
      <DialogContent>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Home Team</TableCell>
                  <TableCell align="center">Away Team</TableCell>
                  <TableCell align="center">Home Score</TableCell>
                  <TableCell align="center">Away Score</TableCell>
                  <TableCell align="center">Winner</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.content.result.map( game => (
                  <TableRow key={`${game.home_team}${game.away_team}`}>
                    <TableCell align="center" children={game.home_team} />
                    <TableCell align="center" children={game.away_team} />
                    <TableCell align="center" children={game.home_score} />
                    <TableCell align="center" children={game.away_score} />
                    <TableCell align="center" children={game.winner} />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.setShowDialog(false)} color="default">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export function SeasonDialog(props) {
  const team = props.content.result;

  return (
    <Dialog fullWidth={true} maxWidth='md' open={props.showDialog} aria-labelledby="max-width-dialog-title">
      <DialogTitle id="max-width-dialog-title">Result</DialogTitle>
      <DialogContent>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Team</TableCell>
                  <TableCell align="center">Wins</TableCell>
                  <TableCell align="center">Losses</TableCell>
                  <TableCell align="center">Ties</TableCell>
                  <TableCell align="center">Playoffs?</TableCell>
                  <TableCell align="center">Superbowl Champion?</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" children={team.name} />
                    <TableCell align="center" children={team.wins} />
                    <TableCell align="center" children={team.losses} />
                    <TableCell align="center" children={team.ties} />
                    <TableCell align="center" children={team.playoffs} />
                    <TableCell align="center" children={team.superbowl_champ} />
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.setShowDialog(false)} color="default">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

// TODO make into table instead of stringify 
const TooltipTable = (stats) => {
  return (
    <p>{JSON.stringify(stats, null, 4)}</p>
  );
}