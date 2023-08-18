import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Information from "@/components/information";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  // fetching the product
  const product = await getProduct(params.productId);

  // suggested products
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id
  });

  return (
    <div className=" ">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery */}

            <div>

                <Gallery images={product.images} />
            </div>

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">

                <Information data={product}/>
            </div>
          </div>
          <hr  className="my-10"/>
          <ProductList title="Related Products" items={suggestedProducts}/>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
