
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import Person from './Person'
import { FIND_PERSON } from '../queries'


const Persons=({ persons }) => {
  const [ nameToSearch ,setNameToSearch]=useState(null)
  const result=useQuery(FIND_PERSON,{
    variables:{ nameToSearch },
    skip:!nameToSearch
    //skip option parameter run the useQuery as per true condition
    //useLazyQuery instead also
  })
  //console.log(result);
  if( nameToSearch && result.data){
    return <Person person={result.data.findPerson}
      handleClose={() => setNameToSearch(null)} />
  }
  return(<div>
    <h2>Persons</h2>
    {
      persons.map(person => <div key={person.name}>
        {person.name} {person.phone ? person.phone:':not given'}
        <button onClick={() => setNameToSearch(person.name)}>show Address</button>
      </div>)
    }
  </div>)
}

export default Persons