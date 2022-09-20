// import contacts from contacts.json
import contacts from "./contacts.json"
// import useState from react
import  { useState } from "react"
import "./App.css";

// create a state variable storing an array containing the first 5 contacts.
const firstFiveContacts = contacts.splice(0, 5);

function App() {
  const [people, setPeople] = useState(firstFiveContacts);
  // console.log(people);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => {
            {/* console.log(person) */}
            return (
              <tr key={person.id}>
                <td>
                  <img
                    src={person.pictureUrl}
                    width="100px"
                    height="120px"
                    alt="Person"  
                  />
                </td>
                <td>{person.name}</td>
                <td>{person.popularity.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
