import React, { useState } from 'react';

export default (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.onCreate({ firstName, lastName })
      }}>
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
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}
