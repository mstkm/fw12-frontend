/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

function WithAuthUserPayment ({ children }) {
  const token = useSelector((state) => state?.auth?.token)
  const movieScheduleId = useSelector((state) => state?.transactions?.movieScheduleId)
  const decode = token && jwt_decode(token)
  const role = decode?.role
  if (token && movieScheduleId && role === '2') {
    return children
  } else if (token && role === '2') {
    return <Navigate to="/orderHistory" replace />
  } else if (token) {
    return <Navigate to="/dashboard" replace />
  } else {
    return <Navigate to="/" replace />
  }
}

export default WithAuthUserPayment
