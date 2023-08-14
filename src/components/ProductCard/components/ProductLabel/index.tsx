import { ProductLabelContainer } from "./styles";

interface ProductLabelProps {
  children: React.ReactNode;
}

export function ProductLabel({children} : ProductLabelProps){
  return <ProductLabelContainer>{children}</ProductLabelContainer>
}

