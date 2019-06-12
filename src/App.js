import React from 'react'
import { Router, Link } from '@reach/router'
import CreateContact from './CreateContact'
import Contacts from './Contacts'
import Edits from './EditContact'
import './App.css'

const ContactsPage = () => (
  <div>
    <Contacts />
  </div>
)

const CreateContactsPage = () => (
  <div>
    <CreateContact />
  </div>
)

const EditPage = props => (
  <div>
    <Edits {...props} />
  </div>
)

export default () => (
  <>
    <nav>
      <Link to="/">Home</Link> <Link to="/new">New User</Link>{' '}
    </nav>
    <Router>
      <ContactsPage path="/" />
      <CreateContactsPage path="new" />
      <Edits path="edit/:id" />
    </Router>
  </>
)
