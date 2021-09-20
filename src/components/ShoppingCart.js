import Cat from "./Cat";

const ShoppingCart = (props) => {
  return (
    <div className={`modal ${props.isActive}`}>
      <div
        className="modal-background"
        onClick={props.toggleShoppingCart}
      ></div>
      <div className="modal-content container">
        <div className="modal-card ">
          <div className="modal-card-head">Total Cost: {props.totalCost}</div>
          {props.cart.length === 0 && (
            <div className="modal-card-body">Your Shopping Cart Is Empty</div>
          )}
          {props.cart && (
            <div className="modal-card-body  ">
              <div className="columns is-multiline">
                {props.cart.map((cat, index) => (
                  <div className="column" key={"cat_" + index}>
                    <Cat name={cat.name} price={cat.price} imgSrc={cat.image} />
                  </div>
                ))}
              </div>

              <footer className="modal-card-foot">
                <button className="button" onClick={props.clearCart}>
                  Clear Cart
                </button>
              </footer>
            </div>
          )}
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.toggleShoppingCart}
      ></button>
    </div>
  );
};

export default ShoppingCart;
