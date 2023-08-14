import { ProductDescriptionContainer } from "./styles";

interface ProductDescriptionProps {
  kind: string;
  description: string;

}

export function ProductDescription({kind, description} : ProductDescriptionProps){
  return <ProductDescriptionContainer>  
    <p className="kind">{kind}</p>  
    <p className="description">{description}</p>
  </ProductDescriptionContainer>
}

