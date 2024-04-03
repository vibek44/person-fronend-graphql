
const Person = ({ person,handleClose }) => {
  return (
    <div>
      <h2>{person.name}</h2>
      <div>
        {person.address.street} {person.address.city}
      </div>
      <div>{person.phone}</div>
      <button onClick={handleClose}>close</button>
    </div>
  )
}

export default Person