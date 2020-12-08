import React from 'react';
import {
  Button, Tooltip,
  Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from "@material-ui/core";

export default function ResultDialog(props) {

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

// TODO make into table instead of stringify 
const TooltipTable = (stats) => {

  return (
    <p>{JSON.stringify(stats, null, 4)}</p>
    // <TableContainer component={Paper}>
    //   <Table size="small">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Stat</TableCell>
    //         <TableCell align="center">Age</TableCell>
    //         <TableCell align="center">Height</TableCell>
    //         <TableCell align="center">Weight&nbsp;(lb)</TableCell>
    //         <TableCell align="center">Team</TableCell>
    //         <TableCell align="center">University</TableCell>
    //         <TableCell align="center">Position</TableCell>
    //         <TableCell align="center">Number</TableCell>
    //         <TableCell align="center">Stats</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {props.content.result.map( player => (
    //         <TableRow key={player.name}>
    //           <TableCell component="th" scope="row" children={player.name} />
    //           <TableCell align="center" children={player.age} />
    //           <TableCell align="center" children={player.height} />
    //           <TableCell align="center" children={player.weight} />
    //           <TableCell align="center" children={player.team} />
    //           <TableCell align="center" children={player.university} />
    //           <TableCell align="center" children={player.position} />
    //           <TableCell align="center" children={player.number} />
    //           <TableCell align="center" children={
    //             <Tooltip title="Delete">
    //               <Paper children={
    //                 player.stats
    //               }/>
    //             </Tooltip>
    //           } />
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}