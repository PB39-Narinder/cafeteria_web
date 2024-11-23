import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';


const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword || '';
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  // Scroll to top whenever pageNumber changes
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pageNumber]);

  // Safeguard: Ensure products is an array to prevent map errors
  const safeProducts = Array.isArray(products) ? products : [];

  return (
    <>
      <section className="products-slider section">
        <Meta />
        {!keyword ? (
          <ProductCarousel /> // Show carousel if no keyword
        ) : (
          <Container>
            <Link to="/" className="btn btn-light">
              Go Back
            </Link>
          </Container>
        )}
      </section>

      <div className="section popular-products">
        <Container>
          <h1>Popular Products</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <>
              <Row>
                {safeProducts.length > 0 ? (
                  safeProducts.map((product) => (
                    <Col
                      className="product_cards_container"
                      key={product._id}
                      xs={6}
                      md={4}
                      lg={4}
                      xl={3}
                    >
                      <Product product={product} />
                    </Col>
                  ))
                ) : (
                  <Message variant="info">No products found</Message>
                )}
              </Row>
              <Paginate
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ''}
              />
            </>
          )}
        </Container>
      </div>

      <Services />
      <About />
      <Contact />
    </>
  );
};

export default HomeScreen;
