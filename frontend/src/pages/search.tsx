import { useState } from "react";
import ProductCard from "../components/product-card";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxprice] = useState(10000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  function addToCartHandler(): void {
    
  }

  const isPrev = page > 1;
  const isNext = page < 4;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value={""}>None</option>
            <option value={"asc"}>Price (Low to High)</option>
            <option value={"dsc"}>Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price {maxPrice || ""}</h4>
          <input
            type="range"
            value={maxPrice}
            min={100}
            max={100000}
            onChange={(e) => setMaxprice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="camera">CAMERA</option>
            <option value="game">GAME</option>
            <option value="laptop">LAPTOP</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-product-list">
          <ProductCard
            productId="jhvhjv"
            name="Macbook Pro"
            price={45000}
            stock={8}
            handler={addToCartHandler}
            photo="https://rukminim2.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70&crop=false"
          />
        </div>

        <article>
          <button
            disabled={!isPrev}
            onClick={() => setPage(prev => prev - 1)}
          >Prev</button>
          <span>{page} of { 4}</span>
          <button
            disabled={!isNext}
            onClick={() => setPage(prev => prev + 1)}
          >Next</button>
        </article>
      </main>
    </div>
  );
};

export default Search;
