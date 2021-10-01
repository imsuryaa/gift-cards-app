import React from 'react'
import notFound from '../../../assets/images/404.png'
const ErrorPage = () => {
  return (
    <img src={notFound} alt = "404: Page not found" style={{width:'100%', height: '100vh'}} />
  )
}

export default ErrorPage
