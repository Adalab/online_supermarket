import styles from "./page.module.css";
import { Roboto } from '@next/font/google';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import ProductsList from "./components/ProductsList/ProductList";

const roboto = Roboto({
    weight: ['400', '500', '700'],
    variable: '--font-roboto',
});

export default function Home() {
    return (
        <>
            <div className={roboto.variable}>
                <Header />
                <main>
                    <ProductsList />
                </main>
                <Footer />
            </div>

        </>
    );
}
