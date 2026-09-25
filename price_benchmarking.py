import pandas as pd
import requests

# FUNCTION 1: Weekly Price Benchmarking & Alerts (Tasks 6 & 8)
def run_price_alerts():
    catalog_data = {
        'SKU_ID': ['V-001', 'I-001', 'V-002'],
        'Our_MRP': [30, 220, 45],
        'JioMart_Price': [28, 220, 40] 
    }
    df = pd.DataFrame(catalog_data)
    df['Requires_Price_Drop'] = df['Our_MRP'] > df['JioMart_Price']
    print("--- BENCHMARKING ALERTS ---")
    print(df[df['Requires_Price_Drop'] == True])

# FUNCTION 2: Image Downloads & Bulk Processing (Task 5)
def bulk_image_download():
    # Simulating the extraction of vendor image URLs
    image_urls = [
        {"sku": "V-001", "url": "https://example.com/onion.jpg"},
        {"sku": "I-001", "url": "https://example.com/amul.jpg"}
    ]
    
    print("\n--- INITIATING BULK IMAGE DOWNLOAD ---")
    for item in image_urls:
        # In a live environment, requests.get(item['url']) downloads the file
        print(f"Success: Downloaded asset for {item['sku']} and saved to /catalog_images/")

run_price_alerts()
bulk_image_download()
