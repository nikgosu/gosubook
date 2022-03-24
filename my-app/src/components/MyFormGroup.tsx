import * as React from 'react';
import {FC} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";

interface placeholderValues {
  inputName: string
  inputDescription?: string
}

const MyFormGroup:FC <placeholderValues> = ({inputName, inputDescription}) => {
  return (
    <>
      <TextField
        fullWidth
        placeholder={inputName}
        id="fullWidth"
      />
      <TextField
        fullWidth
        margin='dense'
        placeholder={inputDescription}
        id="fullWidth"
        multiline
        rows={2}
      />
      <Button  variant="contained">Сreate card</Button>
    </>
  );
}

export default MyFormGroup