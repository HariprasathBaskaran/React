// import React from "react";

// function ListRendering() {
//   const names = ["hari", "lishan", "velan", "siva"];
//   return (
//     <div>
//       {names.map((name) => (
//         <h2>{name}</h2>
//       ))}
//     </div>
//   );
// }

// export default ListRendering;

import React from "react";

function ListRendering() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  return (
    <div>
      {persons.map((person) => (
        <h3 key={person.id}>
          my is {person.name}, I'm {person.age} years old and having the{" "}
          {person.skill} skill
        </h3>
      ))}
    </div>
  );
}

export default ListRendering;
