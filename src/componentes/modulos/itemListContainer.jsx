import ProductCard from "./productCard";

const ItemListContainer = () => {
    return (
      <div className="itemListContainer">
        <ProductCard
          id="1"
          title="Pan de Campo"
          description="Pan casero"
          price="2.500"
          image="./assets/image/pan (1).jpg"
          alt="pan casero de campo"
        />
        <ProductCard
          id="2"
          title="Medialunas"
          description="Medialunas de manteca"
          price="3.500"
          image="./assets/image/medialunas (1).jpg"
          alt="medialunas"
        />
        <ProductCard
          id="3"
          title="Tartas de Frutas"
          description="Tartas"
          price="7.500"
          image="./assets/image/tartas (1).jpg"
          alt="tartas de frutas"
        />
        <ProductCard
          id="4"
          title="Tortas de Cumpleaños"
          description="Tortas"
          price="15.000"
          image="./assets/image/torta (1).jpg"
          alt="tortas de cumpleaños"
        />
      </div>
    );
  };
  
  export default ItemListContainer;