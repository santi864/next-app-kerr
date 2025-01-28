import CategoriesMenu from "@/app/components/products/CategoriesMenu";
import ProductsList from "@/app/components/products/ProductsList";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `The Workerrs - ${params.categoria}`,
  };
}

const Productos = ({ params }) => {
  const { categoria } = params;
  return (
    <main className="container m-auto">
      <h2 class name="text-2xl text-gray-800 my-10 border-b pb-4"></h2>

      <div className="flex gap-10">
        <CategoriesMenu />
        <ProductsList categoria={categoria} />
      </div>
    </main>
  );
};

export default Productos;
