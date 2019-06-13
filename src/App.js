import React from 'react'
import { Router, Link } from '@reach/router'
import CreateContact from './CreateContact'
import Contacts from './Contacts'
import Edits from './EditContact'
import './App.css'


export default () => (
  <>
    <nav>
      <Link to="/">Home</Link> <Link to="/new">New User</Link>{' '}
    </nav>
    <Router>
      <Contacts path="/" />
      <CreateContact path="new" />
      <Edits path="edit/:id" />
    </Router>
  </>
)
