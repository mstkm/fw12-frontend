/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

function WithAuthAdmin ({ children }) {
  const token = useSelector((state) => state?.auth?.token)
  const decode = token && jwt_decode(token)
  const role = decode?.role
  if (token && role === '1') {
    return children
  } else {
    return <Navigate to="/" replace />
  }
}

export default WithAuthAdmin
