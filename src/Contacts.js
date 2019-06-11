import React, { useEffect, useState } from 'react';

const getContacts = async () => fetch('http://localhost:3000').then(res => res.json())


export default () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then(contacts => setContacts(contacts))
  }, [])


  return (
    <>
      {contacts.map((person, index) => (
        <div key={index}>{person.firstName + ' ' + person.lastName}</div>
      ))}
    </>
  )
}
