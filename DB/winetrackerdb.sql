-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema winetrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `winetrackerdb` ;

-- -----------------------------------------------------
-- Schema winetrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `winetrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `winetrackerdb` ;

-- -----------------------------------------------------
-- Table `wine`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wine` ;

CREATE TABLE IF NOT EXISTS `wine` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `type` VARCHAR(50) NOT NULL,
  `color` VARCHAR(45) NULL,
  `flavor` VARCHAR(100) NULL,
  `description` VARCHAR(1000) NULL,
  `rating` DOUBLE NULL,
  `cost` DECIMAL(7,2) NULL,
  `year_produced` VARCHAR(45) NULL,
  `review` VARCHAR(2000) NULL,
  `image` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS winetracker@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'winetracker'@'localhost' IDENTIFIED BY 'wine';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'winetracker'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `wine`
-- -----------------------------------------------------
START TRANSACTION;
USE `winetrackerdb`;
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (1, 'LaCrema Pinot Noir', 'Pinot Noir', 'Red', 'Semi-dry, full body', 'Aromas of pomegranate and sweet tobacco are followed by flavors of berry fruit and plums with subtle hints of exotic spice and toast. On the palate, the wine has balanced acidity and fine tannins that drive a long finish.', 5.0, 29.99, '2018', 'This is my favorite wine!', 'https://www.binnys.com/media/catalog/product/cache/eab16ae251e4410504af434c6d9419db/9/8/982456.jpg');
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (2, 'Kendall-Jackon Vitner\'s Reserve', 'Chardonnay', 'White', 'Semi-dry, refreshing', 'Refreshing. Hint of toasted oak and butter.', 4.5, 19.99, '2018', NULL, 'https://www.kj.com/sites/default/files/styles/bottle_desktop/public/bottle-shots/kjvr-chard-nv.png?itok=gQhUHaDa');
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (3, 'Jordan, Alexander Valley, Sonoma County, CA', 'Cabernet Sauvignon', 'Red', 'Dry, savory', 'Aromas of black cherry, pomengranate. Hint graphite channel classic bordeaux.', 5.0, 49.99, '2015', 'This wine my Husband and I love and always get it to celebrate our anniversary!', 'https://images.vivino.com/thumbs/qjHLWYYuSm22OSv-zy8O6g_pb_x600.png');
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (4, 'Kim Crawford', 'Sauvignon Blanc', 'White', 'Dry', 'Fresh and juicy with ripe, tropical flavors of passion fruit, melon, and stone fruit.', 4.2, 15.99, '2016', NULL, 'https://products3.imgix.drizly.com/ci-kim-crawford-sauvignon-blanc-3e0d9d465b786741.jpeg?auto=format%2Ccompress&fm=jpg&q=20');
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (5, 'S\'mols Argen ', 'Pinot Grigio', 'White', 'Savory', 'Blackcherry flavors leave a hint of smoky pear.', 3.6, 9.99, '2016', NULL, 'https://cdn.shopify.com/s/files/1/0244/6678/4334/products/KU5_a4096c01-11ec-4ed3-90a9-c9f8d2274718_1024x1024.jpg?v=1571413638');
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (6, 'Cote des Roses', 'Rose', 'Rose', 'Semi-dry', 'Aromas of summer fruits, cassis, and redcurrant. Floral notes of rose along with hints of grapefruit complete the picture. The finish is fresh, offering notes of candy.', 3.9, 25.99, '2019', NULL, 'https://www.wine.com/product/images/w_768,h_2792,c_fit,q_auto:good,fl_progressive/fke19zugzdjgzif1iniw.jpg');
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (7, 'Montpellier Vineyards, California', 'Merlot', 'Red', 'Sweet with a smooth finish', 'Hints of blueberry, raspberry, cherry on the nose. With a smooth finish.', 4.1, 29.99, '2015', NULL, 'https://broncowine.com/wp-content/uploads/2017/01/montpellier_MR_thumb.jpg');
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (8, 'Athen\'s Grace', 'Malbec', 'Red', 'Sweet', 'Aromas of blackcherry mix tantilizingly with an apple after taste.', 3.5, 18.99, '1990', NULL, 'https://cdn.shopify.com/s/files/1/0259/3944/3763/products/image_7ca80815-9f45-4590-ade5-879a2c389c5c_250x250@2x.jpg?v=1588798001');
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (9, 'Relax', 'Riesling', 'White', 'Semi-sweet', 'Intense flavors of apples and peaches with a hint of citrus.', 3.8, 38.99, '2019', 'Not a fan. Too sweet for me.', 'https://kingsvalleywineandspirits.com/wp-content/uploads/2018/10/Relax-Riesling-Blue.jpg');
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (10, 'Sandeman Quinta Seixo Vintage', 'Port', 'Red', 'Sweet', 'Notes of black and red fruit, shrubby tones, spices and hints of balsamic that harmonize perfectly with additional notes of shale/slate.', 4.8, 39.99, '2017', 'We had this wine from the vineyard in the Douro Valley, Portugal. Extremely sweet but lots of alcohol!', 'https://www.wine.com/product/images/w_1024,h_3328,c_fit,q_auto:good,fl_progressive/tmhww2u4esonk4higd3f.jpg');
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (11, 'Joseph Phelps Insignia', 'Bordeaux', 'Red', 'Dry, full body, earthy', 'The 2016 Insignia is fresh and focused on entry with expressive cocoa powder, graphite and earthy spices. Elegant and complex with a supple, creamy texture and bold tannins, this latest vintage offers luscious ripe plum and blackberry character with hints of roasted coffee and dark cherry throughout the palate to a long, velvety finish.', 4.9, 399.99, '2016', 'If you can afford it, GET IT! Worth the money!', 'https://d2c15us614ym2e.cloudfront.net/images/products/2020/07/jp-insignia16_Bottleshot_compressed.jpg ');
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (12, 'Chandon Brut', 'Brut', 'Sparkling', 'Semi-sweet, bubbly', 'This wine offers the balance and elegance that has become Chandon\'s hallmark style. When you taste Brut Classic, look for nutty flavors with hints of brioche that build to a refreshingly dry finish. The wine delivers complex apple and pear characteristics accented by citrus spice over notes of almond and caramel in the bouquet.', 4.4, 30.99, '2018', 'This is great for celebrating a special occassion or for mimosas at Brunch!', 'https://www.chandon.com/dw/image/v2/BDKH_PRD/on/demandware.static/-/Sites-DomaineChandon_masterCatalog/default/dwec9c20fb/images/hi-res/1077861-Brut-1.5L-2000x2000.jpg?sw=700&sh=700&sm=fit');
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (13, 'Claire Barcelona, Spain', 'Red Blend', 'Red', 'Dry-full body', 'Notes of blackberry.', 2.9, 15.99, '2016', NULL, 'https://www.decantalo.com/457098-product_default/claire-naudin-myosotis-arvensis.jpg ');
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (14, 'Scopazzi Bros', 'Pinot Grigio', 'White', 'Dry', 'Unites satirical clam overtones with a flirtatious onion aroma.', 2.5, 12.99, '2017', NULL, 'https://www.sokolin.com/pub/media/catalog/product/cache/93e14f0b1785d03338e9b88bd41f6315/1/9/1974-Petrus-Bordeaux-Red-750-ml-27159-750-XX1-B_1.jpg');
INSERT INTO `wine` (`id`, `name`, `type`, `color`, `flavor`, `description`, `rating`, `cost`, `year_produced`, `review`, `image`) VALUES (15, 'Ghembluvrey Invecchiato', 'Reservea ', 'Red', 'Dry, refreshing', 'Aromas of earthy tones, long-ending, floral flavors.', 1.0, 10.99, '2016', NULL, 'https://icdn.bottlenose.wine/images/full/466198.jpg');

COMMIT;

