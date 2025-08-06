import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  function handleSelect (e){
    setFruit(e.target.value)
    console.log(`${name} selected ${fruit}`)
  }

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select
        id="select-input"
        value={fruit}
        onChange={(e) => handleSelect(e)}
      >
        <option value="apple">Apple</option>
        <option value="peach">Peach</option>
        <option value="melon">Melon</option>

      </select>
    </div>
  );
  
};
export default Exercise2;
