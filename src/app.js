
import {  Grid, Icon, IconButton, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { Component } from 'react';
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Stack mt={10} >
     
          <Container >
          <Typography textAlign={'left'}  >
              Quick Acess
          </Typography>
          <Grid container rowSpacing={2} columnSpacing={ { xs:10 , md:12, lg:12}}  >
          {/* -------------First Row----------------- */}
            <Grid item xs={12} md={3} lg={4}   >
              <Box className="box1-1-b" >
              </Box>
              <Box className="box1-1-g" >
              </Box>

              </Grid>
            <Grid item xs={12} md={3} lg={4}  >
              <Box className="box1-2-b" >
              </Box>
              <Box className="box1-2-g" >
              </Box>
              </Grid>
            <Grid item xs={12} md={3} lg={4}  >
              <Box className="box1-3-b" >
              </Box>
              <Box className="box1-3-g" >
              </Box>
              </Grid>

          {/* --------------Second Row---------------- */}
              <Grid item xs={12} md={3} lg={4}  >
              <Box className="box2-1-b" >
              </Box>
              <Box className="box2-1-g" >
              </Box>
              </Grid>
            <Grid item xs={12} md={3} lg={4}  >
              <Box className="box2-2-b" >
              </Box>
              <Box className="box2-2-g" >
              </Box>
              </Grid>
            <Grid item xs={12} md={3} lg={4}  >
              <Box className="box2-3-b" >
              </Box>
              <Box className="box2-3-g" >
              </Box>
              </Grid>

          </Grid>
          </Container>
        </Stack>
      </div>
    )
  }
}

