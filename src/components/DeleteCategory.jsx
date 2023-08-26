// export const DeleteCategory = ({ id, handleDelete }) => {
//   const handleDeleteCategory = (event, categoryId) => {
//     event.preventDefault();
//     handleDelete(categoryId);
//   };
//   return <span onClick={(e) => handleDeleteCategory(e, id)}>delete</span>;
// };


export const DeleteCategory = ({ id, onDeleteCategory }) => {
  const handleDeleteCategory = (event) => {
    event.preventDefault();
    onDeleteCategory(id);
  };
  return <span onClick={handleDeleteCategory}>delete</span>;
};