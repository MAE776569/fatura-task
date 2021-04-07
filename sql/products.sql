CREATE TABLE products(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  image_uri VARCHAR(255),
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);