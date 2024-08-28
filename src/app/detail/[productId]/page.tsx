export default function Detail({ params }: { params: { productId: string } }) {
    const { productId } = params;

    
    return (
        <main>
            <h1>Detail</h1>
            <p>Product ID: {productId}</p>
        </main>
    );
}