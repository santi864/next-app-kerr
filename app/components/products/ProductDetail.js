import Image from "next/image";
import { GoBack } from "../ui/GoBack";
import { QtySelector } from "./QtySelector";
import { mockData } from "@/app/data/products";

const ProductDetail = ({ slug }) => {
  const item = mockData.find((p) => p.slug === slug);

  return (
    <div className="max-w-4xl mx-auto">
      <GoBack className="text-sm text-blue-500 underline mb-8" />
      <section className="grid gap-4">
        <div className="relative basis-1/2">
          <Image
            src={`/img/products/${item.image}`}
            alt={item.title}
            width={500}
            height={500}
          />
        </div>
        <div className="basis-1/2">
          <h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">
            {item.title}
          </h2>
          <p className="text-4xl">${item.price}</p>
          <QtySelector item={item} />
        </div>
      </section>
      <section className="mt-12">
        <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">
          Description
        </h3>
        <p className="text-gray-600">{item.description}</p>
      </section>
    </div>
  );
};
