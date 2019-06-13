import React from "react"
import { navigate } from "@reach/router"
import Form from "./Form"

export default () => {
  return (
    <Form onCreate={async (contact) => {
        console.log(contact)
        await fetch("https://guarded-hamlet-40615.herokuapp.com/",{
            method: "POST", 
            body: JSON.stringify(contact)
        })
        navigate('/')
    }} />
      
  )
}