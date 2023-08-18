import Hero from "@/components/hero";
import Container from "@/components/ui/container";

import getCategories from "@/actions/get-categories";
import getBillboard from "@/actions/get-billboard";
import Categories from "@/components/ui/categories";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import ProductList from "@/components/product-list";


export const revalidate = 0;

const HomePage = async () => {
  // category slider
  const categories = await getCategories();
  // fetching products
  const products = await getProducts({ isFeatured: true });

  // fetching singular billboard
  const billboard = await getBillboard("dfd6ec07-6041-4c68-a42e-6ed5337159ce");
  return (
    <main>
      <Hero />

      <Container>
        <Categories data={categories} />

        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured" items={products} />
        </div>

       
      </Container>
    </main>
  );
};

export default HomePage;
