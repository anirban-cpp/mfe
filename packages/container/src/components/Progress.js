import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => {
  return createStyles({
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
  })
})

const Progress = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  )
}

export default Progress
