import { useState,useEffect } from 'react'
import { useMutation } from '@apollo/client'

import { EDIT_NUMBER } from '../queries'

const EditPhoneForm = ({ handleNotify }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [ changeNumber,result ] = useMutation(EDIT_NUMBER)

  const submit = (event) => {
    event.preventDefault()
    if(!(name&&phone)){
      handleNotify('name or phone is missing')
      return
    }
    changeNumber({ variables: { name, phone } })
    setName('')
    setPhone('')
  }
  useEffect(() => {
    if(result.data && result.data.editPerson===null){
      handleNotify('person not found')
    }
  },[result.data])

  return (
    <div>
      <h2>Edit number</h2>

      <form onSubmit={submit}>
        <div>
          name: <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          phone: <input
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <button type='submit'>change number</button>
      </form>
    </div>
  )
}

export default EditPhoneForm