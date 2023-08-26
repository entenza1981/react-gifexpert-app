import { CategoryGrid } from "./CategoryGrid";

export const ListCategory = ({ categories, onDeleteCategory }) => {
  
  return (
    <ol>
      {categories.map((category) => {
        return (
          <CategoryGrid
            key={category.id}
            category={category}
            onDeleteCategory={onDeleteCategory}
          />
        );
      })}
    </ol>
  );
};
