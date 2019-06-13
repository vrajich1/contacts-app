import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router'

const getContacts = async () => fetch('https://guarded-hamlet-40615.herokuapp.com/').then(res => res.json())

const deleteContact = async id =>
  fetch('https://guarded-hamlet-40615.herokuapp.com/' + id, {
    method: 'DELETE',
  }).then(res => res.json())

export default () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    getContacts().then(contacts => setContacts(contacts))
  }, [])

  return (
    <>
      <div>
        {contacts.map((person, index) => (
          <div key={index}>
            <span>{person.firstName + ' ' + person.lastName}</span>

            <button
              onClick={async e => {
                navigate('/edit/' + person._id)
              }}
            >
              Edit
            </button>

            <button
              variant="contained"
              onClick={async e => {
                await deleteContact(person._id)
                const newContacts = await getContacts()
                setContacts(newContacts)
                alert(person.firstName + ' ' + person.lastName + ' was deleted!')
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
