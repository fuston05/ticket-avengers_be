# Temporary BE for Ticket Avengers so i can hit the yelp api

-   example business search: https://ticket-avengers-be.herokuapp.com/yelp?term=attorney&location=frankfort,in

## Other Responses to Be Aware Of.

-   HTTP 301 (Business Migrated)
    Sometimes duplicate business listings are created on Yelp, and when this occurs these 'source' businesses will all be merged into a single business. Making a request for a merged source business will return a 301 Moved Permanently response where the JSON response body contains the new business ID to access instead. In addition, the response's 'location' is set to the appropriate URL to request business details for the new business ID.

        ```
        "error": {
        "code": "BUSINESS_MIGRATED",
        "description": "The requested business has been permanently migrated. Please access it using its new ID.",
        "new_business_id": "gezgzYZ16YVGnCcnFvy6WQ"
        }
        ```
