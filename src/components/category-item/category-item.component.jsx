import "./category-item.styles.scss";
const CategoryItem = ({ category }) => {
  const { id, image, title, price } = category;
  return (
    <div data-id={id} className="item">
      <img src={`${image}`} alt={`${title}`} />
      <div className="description">
        <h3>{title}</h3>
        <p>${price}.00</p>
      </div>
    </div>
  );
};

export default CategoryItem;
