import './App.css'
import { useState } from 'react'
import { puppyList } from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPuppy = puppies.find((puppy) => puppy.id === featPupId)

  console.log('featuredPuppy', featuredPuppy)

  // if featPupId === null, something === null
  // if featPupId !== null, something === "something"
  const something = featPupId && "something"

  return (
    <div className="App">
      { featPupId &&
        <div>
          <h2>{featuredPuppy.name}</h2>
          <ul>
            <li>Age: {featuredPuppy.age}</li>
            <li>Email: {featuredPuppy.email}</li>
          </ul>
        </div>
      }
      {
        puppies.map((puppy) => {
          return <p onClick={() => setFeatPupId(puppy.id)}
                  key={puppy.id}>{puppy.name}</p>
        })
      }
    </div>
  );
}

export default App