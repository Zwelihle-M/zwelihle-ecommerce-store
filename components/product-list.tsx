import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
    title: string;
    items: Product[];
  }

const ProductList: React.FC<ProductListProps> = ({ title, items }) =>  {
  return (
    <div className="space-y-4 ">
    <h1 className=" font-ifkica text-3xl sm:text-5xl lg:text-5xl">{title}</h1>

    {items.length === 0 && <NoResults />}

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <ProductCard key={item.id} data={item}/>
      ))}
    </div>
  </div>
  )
}

export default ProductList