import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MyFormGroup from "./MyFormGroup";
import {FC, useState} from "react";

const MyFormContainer:FC = () => {

  const [inputName, setInputName] = useState('Name')
  const [inputDescription, setInputDescription] = useState('Description')



  return (
    <React.Fragment>
      <CssBaseline />
      <Container  fixed>
        <Box color='primary' sx={{height: '172px', mt: '30px' }}>
          <MyFormGroup inputName={inputName} inputDescription={inputDescription}/>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default MyFormContainer