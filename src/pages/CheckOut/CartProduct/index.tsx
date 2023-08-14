import { useContext } from "react";
import {
  ProductCounter,
  ProductCounterType,
} from "../../../components/ProductCard/components/ProductCounter";
import { ProductsContext } from "../../../contexts/ProductsContext";
import { CartProductContainer } from "./styles";

interface CartProductProps {
  productID: number;
}

export function CartProduct({ productID }: CartProductProps) {
  const { products } = useContext(ProductsContext);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const product = products.find((product) => product.id === productID)!;

  return (
    <CartProductContainer>
      <div>
        <img src={`/src/assets/coffees/${product.image}`} />
        <section>
          <header>{product.kind}</header>
          <footer>
            <ProductCounter
              productID={productID}
              counterType={ProductCounterType.REMOVE}
            ></ProductCounter>
          </footer>
        </section>
      </div>
      <span className="price">
        R${" "}
        {product.price.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}
      </span>
    </CartProductContainer>
  );
}
