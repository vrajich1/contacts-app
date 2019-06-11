import React from "react"
import Form from "./Form"

export default () => {
  return (
    <Form onCreate={(contact) => {
        console.log(contact)
        fetch("http://localhost:3000",{
            method: "POST", 
            body: JSON.stringify(contact)
        })
    }} />
      
  )
}