import { useContext } from "react";
import { ProductCard } from "../../components/ProductCard";
import { ProductsContext } from "../../contexts/ProductsContext";
import { HomeHeader } from "./components/Header";
import { HomeContainer } from "./styles";

export function Home() {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <HomeHeader />
      <HomeContainer>
        <h1>Nossos cafés</h1>
        <ul>
          {products.map((product) => (
            <ProductCard productID={product.id} key={product.id}></ProductCard>
          ))}
        </ul>
      </HomeContainer>
    </>
  );
}
