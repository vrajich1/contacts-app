import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import Form from './Form'

const getContact = async id =>
  fetch('https://guarded-hamlet-40615.herokuapp.com/' + id, {
    method: 'GET',
  }).then(res => res.json())


export default props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')

  useEffect(() => {
    getContact(props.id).then(contact => {
      setFirstName(contact.firstName)
      setLastName(contact.lastName)
      setEmailAddress(contact.emailAddress)
    })
  }, [props.id])


  return (
    <Form
    editContact={{firstName, lastName, emailAddress}}  
    onCreate={async contact => {
        await fetch('https://guarded-hamlet-40615.herokuapp.com/' + props.id, {
          method: 'PUT',
          body: JSON.stringify(contact)
        })
        navigate('/')
      }}
    />
  )
}
