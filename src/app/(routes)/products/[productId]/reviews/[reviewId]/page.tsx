export default function Review({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <>
      <h1 className="text-4xl">
        Review {params.reviewId} of products {params.productId}
      </h1>
    </>
  );
}
