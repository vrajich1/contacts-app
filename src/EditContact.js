import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import Form from './Form'

const getContact = async id =>
  fetch('http://localhost:3000/' + id, {
    method: 'GET',
  }).then(res => res.json())


export default props => {
  const [contact, setContact] = useState({})

  useEffect(() => {
    getContact(props.id).then(contact => setContact(contact))
  }, [props.id])

  return (
    <Form
      editContact={contact}
      onCreate={async contact => {
        console.log(contact)
        await fetch('http://localhost:3000', {
          method: 'PUT',
          body: JSON.stringify(contact),
        })
        navigate('/')
      }}
    />
  )
}
