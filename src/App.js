import "bulma/css/bulma.min.css";
import { useState, useEffect } from "react";
import Cat from "./components/Cat";
import NavBar from "./components/NavBar";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  const [shoppingCartActiveClass, setShoppingCartActiveClass] = useState("");
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cart, setCart] = useState([])
  const [totalCost, setTotalCost] = useState(0.0)
  const toggleShoppingCart = () => {
    if (shoppingCartActiveClass === "") {
      setShoppingCartActiveClass("is-active");
    } else {
      setShoppingCartActiveClass("");
    }
  };

  const clearCart = () => {
    setCart([])
    setTotalCost(0.0)
  }

  const addCatToCart = (e) => {
    const cat = {
      id: e.target.dataset.catId,
      name: e.target.dataset.name,
      price: e.target.dataset.price,
      image: e.target.dataset.imgSrc
    }
    console.log("adding cat to cart: " + JSON.stringify(cat));
    setTotalCost(totalCost + parseFloat(cat.price))
    setCart([...cart, cat])
  };

  useEffect(() => {
    fetch("http://localhost:3001/cats/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCats(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [cats]);

  return (
    <div classname="main is-clipped">
      <NavBar
        toggleShoppingCart={toggleShoppingCart}
        shoppingCartActiveClass={shoppingCartActiveClass}
        cart={cart}
        totalCost={totalCost}
        clearCart={clearCart}
      />

      <section>
        {error && <div>Error: {error.message}</div>}
        {!isLoaded && <div>Loading...</div>}
        {!error && isLoaded && (
          <div className="columns is-multiline 	">
            {cats.map((cat) => (
              <div className="column is-one-quarter is-justify-content-center" key={"cat_" + cat.id}>
                <Cat
                  name={cat.name}
                  price={cat.price}
                  imgSrc={cat.image}
                  button={<button onClick={addCatToCart} data-name={cat.name}
                  data-price={cat.price}
                  data-img-src={cat.image}
                  data-cat-id={cat.id}>Add Cat To Cart</button>}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
