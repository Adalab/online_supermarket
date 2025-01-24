import { useState } from "react";
import styles from "./Searcher.module.css";

export default function Searcher({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSearch = (event) => {
        const value = event.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <div className={styles.searcher}>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Busca un producto..."
                className={styles.searchInput}
            />
        </div>
    );
}
