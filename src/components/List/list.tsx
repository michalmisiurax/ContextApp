import { useEffect, useState } from "react";
type Product = {
  id: number;
  title: string;
};
export const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState<Product[]>([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const { products } = await response.json();
      if (products) {
        setList(products);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {list.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
