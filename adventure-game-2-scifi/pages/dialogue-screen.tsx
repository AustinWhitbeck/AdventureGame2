import { Box, Typography } from '@mui/material';
import React from 'react'
import DialogueAvatars from '../components/molecules/DialogueAvatars';
import DialogueText from '../components/molecules/DialogueText';

const SampleDialogue1 = [
    "Sentence 1",
    "Sentence 2",
    "Sentence 3",
]

const DialogueScreen = () => {
  return (
    <>
    <div>dialogue-screen</div>
    <DialogueAvatars />
    <DialogueText dialogues={SampleDialogue1}/>
    </>
  )
}

export default DialogueScreen;