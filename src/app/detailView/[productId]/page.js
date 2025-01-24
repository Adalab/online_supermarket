"use client";
import { useParams } from "next/navigation";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import productsData from "../../../data/products.json";
import vegetablesProductsData from "../../../data/vegetables_products.json";
import Header from "@/app/components/Header/Header";

export default function DetailView() {

    const { productId } = useParams();

    const allProducts = Object.values(productsData).flat();
    let product = allProducts.find((product) => product.id === productId);

    if (!product) {
        product = vegetablesProductsData.find((product) => product.id === productId);

    }

    return (
        <>
            <Header>
            </Header>
            <div>
                {product ? (
                    <ProductDetail product={product} />
                ) : (
                    <p>Producto no encontrado.</p>
                )}
            </div>
        </>
    );
}
