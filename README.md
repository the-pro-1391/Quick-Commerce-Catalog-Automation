# Quick-Commerce Catalog Automation System

## Overview
This repository contains a simulated 5-pillar catalog management workflow (Add, Fix, Control, Monitor, Benchmark) designed to optimize e-commerce database operations. It replaces manual data entry with programmatic data cleaning, real-time inventory automation, and automated competitor benchmarking.

## System Architecture

### 1. Data Ingestion & Cleaning (Google Sheets / Excel)
*   **Action:** Onboarding new product introductions and resolving update requests for product, variant, and attribute corrections.
*   **Logic:** Utilized nested `PROPER(TRIM())` formulas to sanitize raw vendor text strings and standardized grammage units for POS visibility.

### 2. Inventory Automation (Google Apps Script / JavaScript)
*   **File:** `visibility_rules.js`
*   **Action:** Automating ARS and Show in App rules to control product availability.
*   **Logic:** Built a dynamic JavaScript loop to scan active inventory and instantly toggle 'Show in App' boolean values to FALSE when SKUs register as 'Out of Stock'.

### 3. Price Benchmarking Alerts (Python)
*   **File:** `price_benchmarking.py`
*   **Action:** Executing weekly price extraction tool runs and automated offline benchmarking. 
*   **Logic:** Leveraged `pandas` to structure comparative competitor pricing data (e.g., JioMart, Amazon) and programmatically flag items requiring MRP adjustments.

### 4. ERP Database Health Monitoring (SQL)
*   **File:** `erp_health_alerts.sql`
*   **Action:** Checking catalogue health via catalogue tech alert queries.
*   **Logic:** Deployed DDL statements to simulate an ERP environment and executed SQL `SELECT` exception reports to immediately flag missing attributes (NULL) and critical pricing errors before app deployment.
