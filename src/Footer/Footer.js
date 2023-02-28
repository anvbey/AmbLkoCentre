import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box sx={{ width: '100%',
     marginTop: '100px',
    marginBottom: '10px',display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', 
            alignContent: 'center'}}>
      
      <Typography variant="h6" gutterBottom>
        Amb Lko Centre
      </Typography>
      <Typography align= 'center' variant="overline" display="block" gutterBottom >
      Copyright © 2022 Avatar Meher Baba Perpetual Public Charitable Trust, Ahmednagar, India. All quotes of Meher Baba copyright © Avatar Meher Baba Perpetual Public Charitable Trust, unless otherwise indicated. Photos copyright © Meher Nazar Publications and Mani S. Irani, M.S.I. collection; all rights reserved.
      </Typography>
    </Box>
  );
}