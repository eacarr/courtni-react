import "./menu.styles.scss";
const Menu = () => {
  return (
    <section className="menu fade-in-element">
      <div className="container">
        <div className="menu_links">
          <div className="specific-option ">
            <p className="hidden">All</p>
          </div>
          <div className="border hidden"></div>
          <div className="specific-option tumbler">
            <p>Tumblers</p>
          </div>
          <div className="border"></div>
          <div className="specific-option cup">
            <p>Cups</p>
          </div>
          <div className="border"></div>
          <div className="specific-option shirt">
            <p>Shirts</p>
          </div>
          <div className="border"></div>
          <div className="specific-option other-item">
            <p>Other Items</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
