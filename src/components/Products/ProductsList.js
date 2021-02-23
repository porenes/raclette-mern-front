import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Media, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/products.action";
import { isEmpty } from "../../Utils";

const ProductsList = () => {
  const [loadProducts, setLoadProducts] = useState(true);
  const productsState = useSelector((state) => state.productsReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (loadProducts) {
      dispatch(listProducts());
      setLoadProducts(false);
    }
  }, [loadProducts, dispatch]);
  return loadProducts ? (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  ) : (
    <Container className="bg-light rounded p-2">
      <h5>Donnez votre avis !</h5>
      {!isEmpty(productsState[0]) &&
        productsState.map((product) => {
          return (
            <Media key={product._id} className="p-3">
              <img
                src={product.image_small_url}
                alt={product._id}
                height="1%"
                width="20%"
                className="align-self-center mr-3"
              />
              <Media.Body>
                <h6>
                  {product.product_name} - <FontAwesomeIcon icon="box" />
                  {" " + product.brands}
                </h6>
              </Media.Body>
            </Media>
          );
        })}
    </Container>
  );
};

export default ProductsList;
