import productsData from "../../../data/products.json";
import vegetablesProductsData from "../../../data/vegetables_products.json";
import Header from "@/app/components/Header/Header";
import ProductDetailClient from "@/app/components/ProductDetailClient/ProductClient";

export async function generateStaticParams() {
    const allProducts = Object.values(productsData).flat();
    const allVegetables = vegetablesProductsData;

    const allIds = [...allProducts, ...allVegetables].map((product) => ({
        productId: product.id,
    }));

    return allIds;
}

export default function DetailView({ params }) {
    const { productId } = params;

    const allProducts = Object.values(productsData).flat();
    let product = allProducts.find((product) => product.id === productId);

    if (!product) {
        product = vegetablesProductsData.find((product) => product.id === productId);
    }

    return (
        <>
            <Header />
            <div>
                {product ? (
                    <ProductDetailClient product={product} />
                ) : (
                    <p>Producto no encontrado.</p>
                )}
            </div>
        </>
    );
}
