import React from 'react'

async function GetPeople(){
  const res = await fetch(`https://swapi.dev/api/people`);
  

  const people = await res.json();
  return people.results;
}

const PeoplePage = async () => {
 
  const people = await GetPeople()
  

  return (
    <div>
      
     {people && people.map((person) => <h1 key={person.name}>{person.name}</h1>)}
    </div>
  )
}

export default PeoplePage