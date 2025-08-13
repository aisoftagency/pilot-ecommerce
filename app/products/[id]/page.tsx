import { getProductById } from "@/app/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const foundProduct = getProductById(id);

  return (
    <>
      <h1>Product Page {id}</h1>
      <div>{foundProduct?.name}</div>
    </>
  );
}
