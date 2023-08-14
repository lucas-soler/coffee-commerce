import { ReactNode, createContext, useEffect, useReducer } from "react";
import {
  ProductAmount,
  productAmountsReducer,
} from "../reducers/product-amounts/reducer";

import { Product } from "../components/ProductCard";
import { changeAmountAction } from "../reducers/product-amounts/actions";

const products: Product[] = [
  {
    id: 1,
    kind: "expresso tradicional",
    description: "o tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    image: "espresso.svg",
    labels: ["tradicional"],
  },
  {
    id: 2,
    kind: "expresso americano",
    description: "expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    image: "american.svg",
    labels: ["tradicional"],
  },
  {
    id: 3,
    kind: "expresso cremoso",
    description: "café expresso tradicional com espuma cremosa",
    price: 9.9,
    image: "creamy-espresso.svg",
    labels: ["tradicional"],
  },
  {
    id: 4,
    kind: "expresso gelado",
    description: "bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    image: "iced.svg",
    labels: ["tradicional", "gelado"],
  },
  {
    id: 5,
    kind: "café com leite",
    description: "meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    image: "with-milk.svg",
    labels: ["tradicional", "com leite"],
  },
  {
    id: 6,
    kind: "latte",
    description:
      "uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    image: "latte.svg",
    labels: ["tradicional", "com leite"],
  },
  {
    id: 7,
    kind: "capuccino",
    description:
      "bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    image: "capuccino.svg",
    labels: ["tradicional", "com leite"],
  },
  {
    id: 8,
    kind: "macchiato",
    description:
      "café expresso misturado com uma pouco de leite quente e espuma",
    price: 9.9,
    image: "macchiato.svg",
    labels: ["tradicional", "com leite"],
  },
  {
    id: 9,
    kind: "mocaccino",
    description: "café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    image: "mocaccino.svg",
    labels: ["tradicional", "com leite"],
  },
  {
    id: 10,
    kind: "chocolate quente",
    description: "bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    image: "chocolate.svg",
    labels: ["especial", "com leite"],
  },
  {
    id: 11,
    kind: "cubano",
    description:
      "drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    image: "cuban.svg",
    labels: ["especial", "alcoólico", "gelado"],
  },
  {
    id: 12,
    kind: "havaiano",
    description: "bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    image: "hawaiian.svg",
    labels: ["especial"],
  },
  {
    id: 13,
    kind: "árabe",
    description: "bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    image: "arabic.svg",
    labels: ["especial"],
  },
  {
    id: 14,
    kind: "irlandês",
    description: "bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    image: "irish.svg",
    labels: ["especial", "alcoólico"],
  },
];

interface ProductsContextType {
  products: Product[];
  productAmounts: ProductAmount[];
  changeAmount: (newProductAmount: ProductAmount) => void;
}

export const ProductsContext = createContext({} as ProductsContextType);

interface ProductsContextProviderProps {
  children: ReactNode;
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [productAmounts, dispatch] = useReducer(
    productAmountsReducer,
    [],
    () => {
      const storedAmounts = sessionStorage.getItem(
        "@coffee-commerce:stored-amounts-1.0.0"
      );

      if (storedAmounts) {
        return JSON.parse(storedAmounts);
      } else {
        return products.map((product) => {
          const productAmount: ProductAmount = {
            productID: product.id,
            amount: 0,
          };
          return productAmount;
        });
      }
    }
  );

  function changeAmount(newAmount: ProductAmount) {
    dispatch(changeAmountAction(newAmount));
  }

  useEffect(() => {
    sessionStorage.setItem(
      "@coffee-commerce:stored-amounts-1.0.0",
      JSON.stringify(productAmounts)
    );
  }, [productAmounts]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        productAmounts,
        changeAmount,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
