import { DeleteCategory } from "./DeleteCategory";
import { CategoryCard } from "./CategoryCard";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const CategoryGrid = ({ category, onDeleteCategory }) => {

  const { images, isLoading} = useFetchGifs(category.name);

  return (
    <>
      <h4>
        {category.name} |{" "}
        <DeleteCategory id={category.id} onDeleteCategory={onDeleteCategory} />
      </h4>
      {isLoading && <p>Loading...</p>}
      <ul id="category">
        {images.map((image) => (
          <CategoryCard key={image.id} {...image} />
        ))}
      </ul>
    </>
  );
};
