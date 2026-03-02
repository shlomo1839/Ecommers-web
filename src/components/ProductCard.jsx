import useCartStore from '../store/useCartStore';


export const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCartStore();
  const isInCart = cart.find((item) => item.id === product.id);

  return (
    <div>
      <div>{product.image}</div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>

      <div>
        {isInCart ? ( <button onClick={() => removeFromCart(product.id)}>Remove</button>)
        : <botton onClick={() => addToCart(product)}>Add to cart</botton>}
      </div>
    </div>
  )
}