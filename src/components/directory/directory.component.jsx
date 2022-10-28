import "./directory.style.scss";
import CategoryItem from "../category-item/category-item.component";
const Directory = ({ categories }) => {
  return (
    <section className="options">
      <div className="container">
        <div className="border-top"></div>
        <div className="option-list">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directory;
