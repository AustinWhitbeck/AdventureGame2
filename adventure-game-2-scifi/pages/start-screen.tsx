import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import playerCharacterContext from '../context/player-character-context';

interface CharacterCreateData {
  name: string;
  age: number;
  class: string;
}

const StartScreen = () => {

  // Context
  const playerCharacterData = useContext(playerCharacterContext);

  // States
  const [characterData, setCharacterData] = useState<CharacterCreateData>({
    name: '',
    age: 0,
    class: '',
  })
  return (
    <>
      <Box sx={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h1" color="primary">Adventure Game</Typography>
          <Box sx={{ display: 'flex'}}>
            <Button variant="outlined" color='secondary'> Start?</Button>
          </Box>
      </Box>
      <Box textAlign="center" display="flex" justifyContent="center" padding="20px">
          <Paper sx={{ width: '400px', padding: '60px'}}>
            <TextField id="characterName" label="Name"></TextField>
            <TextField id="characterName" label="Class"></TextField>
          </Paper>
      </Box>
    </>
  )
}

export default StartScreen;
