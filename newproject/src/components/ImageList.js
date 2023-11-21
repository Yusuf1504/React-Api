import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <Row>
      {images.map((image) => (
        <Col key={image.id} lg={3} md={6} sm={12} xs={12}>
          <Card style={{ margin: '10px' }}>
            <Card.Img src={image.url} alt={image.title} />
            <Card.Body>
              <Card.Title>{image.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ImageList;
