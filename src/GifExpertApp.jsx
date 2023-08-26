import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { ListCategory } from "./components/ListCategory";
import { categoryInitialData } from "./components/categories.data";
import { AddCategory2 } from "./components/AddCategory2";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(categoryInitialData);

	const formatCategory = (categoryName) => {
		return categoryName[0].toUpperCase() + categoryName.slice(1).toLowerCase();
	}

  const handleAdd = (categoryName) => {
		categoryName = formatCategory(categoryName);
    const exist = categories.find((category) => category.name === categoryName);
    if (!exist) {
      setCategories([
        {
          id: categories.length + 1,
          name: categoryName,
        },
        ...categories,
      ]);
    }
  };

  const handleDelete = (categoryId) => {
    setCategories(categories.filter((category) => category.id !== categoryId));
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory2 onNewCategory={(value) => handleAdd(value)} />

      <ListCategory categories={categories} onDeleteCategory={handleDelete} />
    </>
  );
};

export default GifExpertApp;
