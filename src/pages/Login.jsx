import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <Link to={'/taskboards'}><Button variant="contained">get started</Button></Link>
      </div>
  )
}

export default Login