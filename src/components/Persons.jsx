
const Persons=({ persons }) => {
  console.log(persons)
  return<div>
    <h2>Persons</h2>
    {
      persons.map(person => <div key={person.name}>
        {person.name} {person.phone ? person.phone:':not given'}
      </div>)
    }
  </div>
}

export default Persons