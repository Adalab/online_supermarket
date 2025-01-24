import { useRouter } from "next/navigation";
import styles from "./ProductDetail.module.css";

export default function ProductDetail({ product }) {
    const router = useRouter();

    if (!product) {
        return <p className={styles.errorMessage}>Producto no encontrado.</p>;
    }

    return (
        <div className={styles.container}>
            <button className={styles.backButton} onClick={() => router.back()}>
                Volver
            </button>
            <div className={styles.productDetails}>
                <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                />
                <div className={styles.productInfo}>
                    <h1 className={styles.productName}>{product.name}</h1>
                    <p className={styles.productDescription}>{product.description}</p>
                    <p className={styles.productPrice}>Precio: €{product.price}</p>
                    {product.discount && (
                        <p className={styles.productDiscount}>
                            Descuento: {product.discount}
                        </p>
                    )}
                    {product.pricePerKilo && (
                        <p className={styles.productPricePerKilo}>
                            Precio por kilo: ${product.pricePerKilo}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
