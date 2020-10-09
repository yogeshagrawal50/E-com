import React from 'react'


const test = () => {
  return fetch(`${API}/products`, {
    method: "GET",
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

function App() {
  return (
    <div>
      <h1>
        Hi {test()}
      </h1>
    </div>
  )
}


export default App