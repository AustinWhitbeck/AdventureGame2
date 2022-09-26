import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

interface Props {
    dialogues: string[];
}

const DialogueText = ({ dialogues }: Props) => {

    const [dialogueStep, setDialogueStep] = useState<number>(0);

    const increaseStep = () => {
        if (dialogueStep === dialogues.length - 1) {
            return console.log('last step already, do nothing');
        }
        setDialogueStep(dialogueStep + 1);
    }

    const decreaseStep = () => {
        if (dialogueStep === 0) {
            return console.log('first step already, do nothing');
        }
        setDialogueStep(dialogueStep - 1);
    }
  return (
    <Box sx={{ border: 'solid 5px', borderColor: 'secondary', textAlign: 'center'}}>
        <Typography>{dialogues[dialogueStep]}</Typography>
        <Box>
            <Button variant="contained" color='secondary' onClick={decreaseStep} disabled={dialogueStep === 0}>Prev</Button>
            <Button variant="contained" onClick={increaseStep} disabled={dialogueStep === dialogues.length - 1}>Next</Button>
        </Box>
    </Box>
  )
}

export default DialogueText