import React from 'react';
import {
  Select, MenuItem, Slider, Button, Switch,
  Grid, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from "@material-ui/core";

export default function ResultDialog(props) {

  return (
    <Dialog fullWidth={true} maxWidth='md' open={props.showDialog} aria-labelledby="max-width-dialog-title">
      <DialogTitle id="max-width-dialog-title">Result</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.setShowDialog(false)} color="default">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
