CREATE TABLE categories(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  parent_id INT,
  FOREIGN KEY (parent_id) REFERENCES categories(id)
);