export function ProductListing({ languageHelper }) {
  return [1, 2, 3, 4].map((item) => (
    <div key={item}>
      <h2>
        {languageHelper} {item}
      </h2>
      <button>Add To Cart</button>
    </div>
  ));
}
