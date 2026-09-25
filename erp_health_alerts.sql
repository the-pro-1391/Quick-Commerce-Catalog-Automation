-- DATABASE SETUP
CREATE TABLE master_catalog (
    SKU_ID VARCHAR(10),
    Product_Name VARCHAR(50),
    Category VARCHAR(20),
    MRP INT,
    Grammage VARCHAR(10),
    Stock_Status VARCHAR(20)
);

INSERT INTO master_catalog VALUES ('V-001', 'Tomato', 'Veggies', 40, '1000g', 'Active');
INSERT INTO master_catalog VALUES ('I-001', 'Amul Tub', NULL, 220, '1L', 'Active'); 
INSERT INTO master_catalog VALUES ('V-002', 'Potato', 'Veggies', 0, '500 g', 'Active'); 

-- QUERY 1: Catalogue Health Tech Alerts (Task 4)
-- Flags missing categories or zero-priced items
SELECT SKU_ID, Product_Name, 'Missing Category or MRP' AS Alert_Type 
FROM master_catalog 
WHERE Category IS NULL OR MRP = 0;

-- QUERY 2: QCom Grammage Mismatch Queries (Task 12)
-- Flags items where grammage contains invalid spaces that break POS
SELECT SKU_ID, Product_Name, Grammage, 'Formatting Error' AS Alert_Type
FROM master_catalog
WHERE Grammage LIKE '% %';

-- QUERY 3: Update Request Audits (Task 2)
-- Tracks recent changes to high-value product attributes
SELECT SKU_ID, Product_Name, MRP 
FROM master_catalog 
WHERE MRP > 200;
