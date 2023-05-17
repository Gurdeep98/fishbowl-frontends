import React from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const useStyles = styled({
  gridItem: {
    width: '300px',
    height: '200px',
    border: '1px solid black',
    borderRadius: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '24px',
  },
});
export default function Dashbord1() {
  const classes = useStyles();
  return (
    <>
      <Box p={2} >
        <h2>Small Pack</h2>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={4} className={classes.gridItem} sx={{ bgcolor: 'red' }}>
          <Typography variant="body1" align="center">
          Counter Sale
          </Typography>
          <Typography variant="caption" align="center">
            1
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.gridItem} sx={{ bgcolor: 'green' }}>
          <Typography variant="body1" align="center">
          Counter Sale
          </Typography>
          <Typography variant="caption" align="center">
            2
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ bgcolor: 'red' }}>
          <Typography variant="body1" align="center">
          Ship Today
          </Typography>
          <Typography variant="caption" align="center">
            3
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ bgcolor: 'yellow' }}>
          <Typography variant="body1" align="center">
          Pickable
          </Typography>
          <Typography variant="caption" align="center">
            4
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ bgcolor: 'red' }}>
          <Typography variant="body1" align="center">
          Picking
          </Typography>
          <Typography variant="caption" align="center">
            5
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ bgcolor: 'green' }}>
          <Typography variant="body1" align="center">
          Packable
          </Typography>
          <Typography variant="caption" align="center">
            6
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ bgcolor: '#87CEEB' }}>
          <Typography variant="body1" align="center">
          Packed Today
          </Typography>
          <Typography variant="caption" align="center">
            7
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ bgcolor: '#87CEEB' }}>
          <Typography variant="body1" align="center">
          Packed this Week
          </Typography>
          <Typography variant="caption" align="center">
            8
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ bgcolor: '#87CEEB' }}>
          <Typography variant="body1" align="center">
          Packed this Month
          </Typography>
          <Typography variant="caption" align="center">
            9
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
