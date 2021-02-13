import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
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
  return (
    <Container className="bg-light rounded p-2">
      <h5>Donnez votre avis !</h5>
      {!isEmpty(productsState[0]) &&
        productsState.map((product) => {
          return (
            <Card className="mb-3 bg-dark text-white">
              <Card.Img
                src={product.image_small_url}
                style={{ filter: "brightness(50%)" }}
              />
              <Card.ImgOverlay>
                <Card.Text>n reviews</Card.Text>
              </Card.ImgOverlay>
              <Card.Header>
                <Card.Title>{product.product_name}</Card.Title>
                <Card.Subtitle>
                  <FontAwesomeIcon icon="box" />
                  {" " + product.brands}
                </Card.Subtitle>
              </Card.Header>
            </Card>
          );
        })}
    </Container>
  );
};

export default ProductsList;
