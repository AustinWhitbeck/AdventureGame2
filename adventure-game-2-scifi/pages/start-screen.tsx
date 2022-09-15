import { Box, Button, Typography } from '@mui/material';
import React from 'react'

const StartScreen = () => {
  return (
    <Box sx={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h1" color="primary">Adventure Game</Typography>
        <Box sx={{ display: 'flex'}}>
          <Button variant="outlined" color='secondary'> Start?</Button>
        </Box>
    </Box>
  )
}

export default StartScreen;
