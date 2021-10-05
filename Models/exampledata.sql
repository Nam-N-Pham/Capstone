TRUNCATE TABLE "Restaurants", "Favorites" RESTART IDENTITY;

INSERT INTO "Restaurants" ("Name", "Address", "Phone", "Website", "Comments") VALUES ('Casita Taqueria', '2663 Central Ave, St. Petersburg, FL 33713', '727-498-8749', 'casitatacos.com', 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum');
INSERT INTO "Restaurants" ("Name", "Address", "Phone", "Website", "Comments") VALUES ('The Burg Bar & Grill', '1752 Central Ave, St. Petersburg, FL 33712', '727-894-2874', 'theburgbar.com', 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum');
INSERT INTO "Restaurants" ("Name", "Address", "Phone", "Website", "Comments") VALUES ('Bodega on Central', '1180 Central Ave, St. Petersburg, FL 33705', '727-623-0942', 'eatatbodega.com', 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum');

INSERT INTO "Favorites" ("RestaurantId", "Name", "Price") VALUES (1, 'Barbacoa Tortas', 8.50);
INSERT INTO "Favorites" ("RestaurantId", "Name", "Price") VALUES (1, 'Carne Asada Casita Bowl', 8.99);