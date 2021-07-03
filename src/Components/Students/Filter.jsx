import React from 'react'
import { Box, Button, Input, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    width: 1225
  },
}));

function Filter ({ setSearch, setValue}) {
  const classes = useStyles()

  const handleChange = () => {
    setSearch(false)
  }
  return (
    <div>
      <Box>
        <Typography color="primary" variant='h5'>Поиск студента</Typography>
        <Button color={"primary"} variant={"outlined"} onClick={handleChange}>Скрыть фильтр</Button>
      </Box>
      <Box>
        <TextField    placeholder={'Поиск по имени...'} onChange={(e) => setValue(e.target.value)} classes={{root: classes.root}}/>
      </Box>
    </div>
  )
}

export default Filter