

import PropTypes from 'prop-types';

const ProductCard = ({ title, description, price, image, alt }) => {
  return (
    <div className="productCard">
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProductCard;