CREATE TABLE product_providers(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  provider_id INT NOT NULL,
  price DOUBLE NOT NULL,
  available BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (provider_id) REFERENCES providers(id)
);