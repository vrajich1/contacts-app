import React, { useState, useEffect } from 'react'

export default ({ editContact, onCreate }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')

  useEffect(() => {
    if (editContact) {
      setFirstName(editContact.firstName)
      setLastName(editContact.lastName)
      setEmailAddress(editContact.email)
    }
  })

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          onCreate({ firstName, lastName })
        }}
      >
        <div className="row">
          <div className="col">
            <label htmlFor="FirstName">First Name</label>
            <input type="text" className="form-control" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className="col">
            <label htmlFor="LastName">Last Name</label>
            <input type="text" className="form-control" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="EmailAddress">Email Address</label>
            <input type="text" className="form-control" placeholder="Email Address" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
          </div>
        </div>
        <div className="row col">
          {editContact && <a href="/">Back</a>}

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}
