import React from 'react'
import Navbar from '../src/components/Navigation/Navbar'
import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material'
import PersonCard from '../src/components/Elements/Card/PersonCard'

const People = () => {
  const [age, setAge] = React.useState('')
  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <Box
      sx={{
        background:
          'linear-gradient(200deg, rgba(20,39,78,1) 35%, rgba(57,72,103,1) 100%)',
      }}
    >
      <Navbar />
      <Box
        sx={{
          height: 'auto',
          paddingTop: 10,
          paddingLeft: 36,
          paddingRight: 36,
        }}
      >
        <Grid container xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bolder',
                color: '#F1F6F9',
                fontSize: 48,
                flexGrow: 1,
              }}
              variant={'h1'}
            >
              People
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                minWidth: 410,
              }}
            >
              <TextField
                sx={{
                  background: 'white',
                  marginRight: '6px',
                  borderRadius: '4px',
                }}
                variant={'filled'}
                size={'small'}
                id="outlined-select-currency"
                select
                label="Sort by phase"
                value={age}
                onChange={handleChange}
                fullWidth
                // helperText="Please select your currency"
              >
                <MenuItem value={10}>Ascending</MenuItem>
                <MenuItem value={20}>Descending</MenuItem>
              </TextField>
              <TextField
                sx={{ background: 'white', borderRadius: '4px' }}
                variant={'filled'}
                size={'small'}
                id="outlined-select-currency"
                select
                label="Sort by member count"
                value={age}
                onChange={handleChange}
                fullWidth
                // helperText="Please select your currency"
              >
                <MenuItem value={10}>Ascending</MenuItem>
                <MenuItem value={20}>Descending</MenuItem>
              </TextField>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            marginTop: 6,
            paddingBottom: 4,
            alignItems: 'center',
          }}
          container
          xs={12}
        >
          <Grid item xs={4}>
            <PersonCard />
          </Grid>{' '}
          <Grid item xs={4}>
            <PersonCard />
          </Grid>{' '}
          <Grid item xs={4}>
            <PersonCard />
          </Grid>{' '}
          <Grid item xs={4}>
            <PersonCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default People
