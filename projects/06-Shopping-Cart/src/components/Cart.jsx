import './Cart.css'
import { CartIcon, ClearCartIcon } from "./Icons";
import { useId } from "react";

export function Cart() {
  const cartCheckboxId = useId()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
              alt="Iphone X"
            />
            <div>
              <strong>iPhone X</strong> - €899
            </div>

            <footer>
              <small>
                Qti: 1
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <ClearCartIcon />
      </aside>
    </>
  )
}