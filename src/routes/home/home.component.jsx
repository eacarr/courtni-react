import Header from "../../components/header/header.component";
import Menu from "../../components/menu/menu.component";
import Directory from "../../components/directory/directory.component";
import Footer from "../../components/footer/footer.component";
const Home = () => {
  const categories = [
    {
      id: 1,
      image: require("../../assets/img/tumbler.png"),
      title: "Queen Tumbler",
      description: "tumbler",
      price: 30,
    },
    {
      id: 2,
      image: require("../../assets/img/pink-pearl-cup.jpg"),
      title: "Pink Pearl cup",
      description: "cup",
      price: 30,
    },
    {
      id: 3,
      image: require("../../assets/img/sparkle-shirt.jpg"),
      title: "sparkle shirt",
      description: "shirt",
      price: 30,
    },
    {
      id: 4,
      image: require("../../assets/img/brown-skin-canvas.jpg"),
      title: "brown skin canvas",
      description: "other-item",
      price: 30,
    },
    {
      id: 5,
      image: require("../../assets/img/half-holy-tumbler.jpg"),
      title: "half-holy-tumbler",
      description: "tumbler",
      price: 30,
    },
    {
      id: 6,
      image: require("../../assets/img/orange-gold-pearl-mug.jpg"),
      title: "orange gold pearl",
      description: "cup",
      price: 30,
    },
    {
      id: 7,
      image: require("../../assets/img/christmas-shirt.jpg"),
      title: "christmas shirt",
      description: "shirt",
      price: 30,
    },
    {
      id: 8,
      image: require("../../assets/img/acrylic-sign-other.jpg"),
      title: "acrylic sign",
      description: "other-item",
      price: 30,
    },
    {
      id: 9,
      image: require("../../assets/img/sports-tumbler.jpg"),
      title: "sports tumbler",
      description: "tumbler",
      price: 30,
    },
    {
      id: 10,
      image: require("../../assets/img/woman-mug.jpg"),
      title: "phenomenal woman cup",
      description: "cup",
      price: 30,
    },
    {
      id: 11,
      image: require("../../assets/img/woke-up-shirt.jpg"),
      title: "woke up shirt",
      description: "shirt",
      price: 30,
    },
    {
      id: 12,
      image: require("../../assets/img/hope-mat.jpg"),
      title: "hope mat",
      description: "other-item",
      price: 30,
    },
  ];
  return (
    <div>
      <Header />
      <Menu />
      <Directory categories={categories} />
      <Footer />
    </div>
  );
};

export default Home;
