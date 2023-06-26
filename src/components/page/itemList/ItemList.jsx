import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  console.log("llego al presentacional los items: ", items);
  // console.log({items})
  // console.log(items)

  return (
    <div>
      <h1>Aca van los productos</h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
