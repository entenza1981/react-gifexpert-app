export const AddCategory = ({ handleAdd }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAdd(event.target.value);

      event.target.value = "";
    }
  };
  return <input type="text" onKeyDown={handleKeyDown} />;
};
