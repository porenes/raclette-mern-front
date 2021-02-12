import React, { useEffect, useState } from "react";
import { Card, CardColumns, Container } from "react-bootstrap";
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
    <Container>
      {!isEmpty(productsState[0]) &&
        productsState.map((product) => {
          return (
            <Card>
              <Card.Img src={product.image_small_url} variant="top" />
                <Card.Header>
                  <Card.Title>
                    {product.product_name + " - " + product.brands}
                  </Card.Title>
                </Card.Header>
              <Card.Body>
              </Card.Body>
            </Card>
          );
        })}
    </Container>
  );
};

export default ProductsList;
