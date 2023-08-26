import { useState } from "react";

export const AddCategory2 = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
