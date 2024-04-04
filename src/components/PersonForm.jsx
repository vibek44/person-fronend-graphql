import { useState } from 'react'
import { useMutation } from '@apollo/client'
import  { ALL_PERSONS, CREATE_PERSON } from '../queries'


const PersonForm = ({handleNotify}) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  //pass as many query for update like ALL_PERSON
  const [ createPerson ] = useMutation(CREATE_PERSON,{ refetchQueries:[{ query:ALL_PERSONS }],
    onError:(error) => {
      const messageError=error.graphQLErrors.map( e => e.message).join('\n')
      handleNotify(messageError)
    } })

  const submit = (event) => {
    event.preventDefault()
    if( !(name && street && city)){
      handleNotify('name,street or address is missing')
      return
    }
    createPerson({  variables: { name, phone, street, city } })
    setName('')
    setPhone('')
    setStreet('')
    setCity('')
  }

  return (
    <div>
      <h2>Add person</h2>
      <form onSubmit={submit}>
        <div>
          name: <input value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          phone: <input value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <div>
          street: <input value={street}
            onChange={({ target }) => setStreet(target.value)}
          />
        </div>
        <div>
          city: <input value={city}
            onChange={({ target }) => setCity(target.value)}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default PersonForm