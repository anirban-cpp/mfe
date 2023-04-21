import { mount } from 'dashboard/DashboardApp'
import React, { useRef, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const DashboardApp = ({ currentUser }) => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  if(!currentUser) return <Redirect to='/'/>

  return <div ref={ref} />
}

export default DashboardApp
