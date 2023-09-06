import { memo, useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import {
  ProductCounter,
  ProductCounterType,
} from "./components/ProductCounter";
import { ProductDescription } from "./components/ProductDescription";
import { ProductImage } from "./components/ProductImage";
import { ProductLabel } from "./components/ProductLabel";
import { ProductCardContainer } from "./styles";

export interface Product {
  id: number;
  kind: string;
  description: string;
  price: number;
  image: string;
  labels: string[];
}

interface ProductCardProps {
  productID: number;
}

export const ProductCard = memo(({ productID }: ProductCardProps) => {
  const { products, productAmounts } = useContext(ProductsContext);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const product = products.find((product) => product.id === productID)!;

  const productAmount = productAmounts.find(
    (product) => product.productID === productID
  )?.amount;

  return (
    <ProductCardContainer>
      <li>
        <header>
          <ProductImage src={`/src/assets/coffees/` + product.image} />
        </header>
        <section>
          <p>
            {product.labels.map((label) => (
              <ProductLabel key={label}>{label}</ProductLabel>
            ))}
          </p>
          <ProductDescription
            kind={product.kind}
            description={product.description}
          ></ProductDescription>
        </section>
        <footer>
          <span className="price">
            {product.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </span>
          <ProductCounter
            productID={product.id}
            amount={productAmount || 0}
            price={product.price}
            counterType={ProductCounterType.GENERAL}
          ></ProductCounter>
        </footer>
      </li>
    </ProductCardContainer>
  );
});
