import React, { useState } from 'react'

const Regform = () => {
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [blood,setBlood] = useState("")
    const [course,setCourse] = useState("")
    const [isSubmit,setIsSubmit] = useState(false)

const handleSubmit = (e)=>{
e.preventDefault()
}

  return (
    <div>
        <header>Reg Form</header>
 <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Name' value= {name} onChange={e=>setName(e.target.value)}
     />
    <input type="number" placeholder='age'
    value= {age} onChange={e=>setAge(e.target.value)} 
    />
    <select name="bloodgrp" onChange={e=>setBlood(e.target.value)}>
        <option value="">SELECT</option>
        <option value="a+">a+</option>
        <option value="a-">a-</option>
        <option value="b+">b+</option>
        <option value="b-">b-</option>
        <option value="o">o</option>
    </select>
    <br />
    <input type="radio" name="course" value="IT" onChange={e=>setCourse(e.target.value)} />IT
    <input type="radio" name="course" value= "CSE" onChange={e=>setCourse(e.target.value)}  />CSE
    <input type="radio" name="course" value= "DS" onChange={e=>setCourse(e.target.value)}  />DS
    <input type="radio" name="course" value="CIVIL" onChange={e=>setCourse(e.target.value)}   />CIVIL
<br />
    <button onClick={()=>setIsSubmit(!isSubmit)}>submit</button>
    
   
 </form>
 {isSubmit && (
        <div className='details'>
        <h1>Your name is <b>{name}</b> </h1>
        <h1>Your age is  <b>{age}</b> </h1>
        <h1>Your blood group is <b>{blood}</b>  </h1>
        <h1>your course is <b>{course}</b> </h1>
        </div>
        )}
    </div>
  )
}

export default Regform