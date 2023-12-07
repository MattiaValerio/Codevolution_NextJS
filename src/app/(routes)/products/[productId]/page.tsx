export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h1>Product id: {params.productId}</h1>
    </>
  );
}
