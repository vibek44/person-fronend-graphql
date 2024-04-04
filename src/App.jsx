import { useState } from 'react'
import { useQuery } from '@apollo/client'
import Persons from './components/Persons'
import { ALL_PERSONS } from './queries'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import EditPhoneForm from './components/EditPhoneForm'

const App = () => {
  const [errorMessage ,setErrorMessage]=useState(null)
  const result = useQuery(ALL_PERSONS)
  const handleNotify=(message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    },3000)
  }
  if (result.loading) {
    return <div>loading...</div>
  }
  return <div>
    <Notification errorMessage={errorMessage}/>
    < Persons persons={result.data.allPersons}/>
    < PersonForm handleNotify={handleNotify}/>
    <EditPhoneForm handleNotify={handleNotify}/>
  </div>
}

export default App
