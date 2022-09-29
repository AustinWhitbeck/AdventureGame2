import { Box, Button, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
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
  console.log('playerCharacterData', playerCharacterData);
  // States
  const [characterData, setCharacterData] = useState<CharacterCreateData>({
    name: '',
    age: 0,
    class: '',
  })

  // Functions

  const handleConfirmCharacter = () => {
    playerCharacterData.updateCharacter();
  }

  return (
    <>
      <Box sx={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h1" color="primary">Adventure Game</Typography>
          <Box sx={{ display: 'flex'}}>
            <Button variant="outlined" color='secondary'> Start?</Button>
          </Box>
      </Box>
      <Box textAlign="center" display="flex" justifyContent="center" padding="20px">
          <Paper sx={{ width: '400px', padding: '60px', display: 'flex', flexDirection: 'column'}}>
            <Typography> Character Creation</Typography>
            <TextField id="characterName" label="Name" inputProps={{ maxLength: 10 }} onChange={(e) => setCharacterData({name: e.target.value, age: characterData.age, class: characterData.class})} value={characterData.name}></TextField>
            <Select id="characterName" label="Class" onChange={(e) => setCharacterData({name: characterData.name, age: characterData.age, class: e.target.value})} value={characterData.class}>
                <MenuItem value="mystic">Mystic</MenuItem>
                <MenuItem value="dj">DJ</MenuItem>
            </Select>
            <Button onClick={handleConfirmCharacter}> Submit </Button>
          </Paper>
      </Box>
    </>
  )
}

export default StartScreen;
