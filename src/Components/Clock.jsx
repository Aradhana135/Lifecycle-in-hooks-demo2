import React, { useEffect, useState } from 'react'

const Clock = () => {
    const[currentDateTime,setCurrentdateTime]=useState(new Date());
    useEffect(()=>{
        let setTime =()=>{
            console.log("setTime is called")
            setCurrentdateTime(new Date())
        }
        let interval =setInterval(setTime,1000)
        return()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <>
    <h1>The current time is {currentDateTime.toString()}</h1>
    </>
  )
}

export default Clock