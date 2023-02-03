import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Notebook() {
  const [rows,setRows]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8888/money2023mysql/select.php').then((res)=>{
     console.log(res.data)
    })
  },[])
  return (
    <div>Notebook</div>
  )
}
