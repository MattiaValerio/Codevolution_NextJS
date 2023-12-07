export default function Reviews({ params }: { params: { productId: string } }) {
  return (
    <>
      <h1 className="text-4xl">Reviews of product {params.productId}</h1>
    </>
  );
}
