/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function WithAuthProfile ({ children }) {
  const token = useSelector((state) => state?.auth?.token)
  if (token) {
    return children
  } else {
    return <Navigate to="/" replace />
  }
}

export default WithAuthProfile
