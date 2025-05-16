import React, { useEffect } from 'react'

function Services() {
    useEffect(()=>{
        console.log("service is created")
        return()=>{
            console.log("service is deleted")
        }
    })
  return (
    <div>Services</div>
  )
}

export default Services