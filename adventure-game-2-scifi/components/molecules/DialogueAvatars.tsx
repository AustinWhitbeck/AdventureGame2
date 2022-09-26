import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const DialogueAvatars = () => {
  return (
    <Box id="Charactersbox"sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Box>
            <Typography>Name 1</Typography>
            <Avatar sx={{ width: '100px', height: '100px'}}>Avatar</Avatar>
        </Box>
        <Box>
            <Typography>Name 1</Typography>
            <Avatar sx={{ width: '100px', height: '100px'}}>Avatar</Avatar>
        </Box>
    </Box>
  )
}

export default DialogueAvatars