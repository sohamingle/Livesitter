---

# API Documentation

This documentation provides details on the CRUD (Create, Read, Update, Delete) endpoints of the Overlay API, along with instructions on how to interact with them.

## Endpoints

### GET /get

Retrieves all overlays.

#### Request

- Method: GET
- URL: `https://flask-project-0b59.onrender.com/get`

#### Response

- Status: 200 OK
- Content: Array of overlay objects

### POST /post

Creates a new overlay.

#### Request

- Method: POST
- URL: `https://flask-project-0b59.onrender.com/post`
- Body: Overlay object (in JSON format)

#### Response

- Status: 201 Created
- Content: `{ "message": "Successfully Created", "id": "<inserted_id>" }`

### PUT /update/<id>

Updates an existing overlay by ID.

#### Request

- Method: PUT
- URL: `https://flask-project-0b59.onrender.com/update/<id>` (Replace `<id>` with the ID of the overlay)
- Body: Updated overlay object (in JSON format)

#### Response

- Status: 200 OK
- Content: `{ "message": "Record updated successfully", "modified_count": <modified_count> }`

### DELETE /delete/<id>

Deletes an overlay by ID.

#### Request

- Method: DELETE
- URL: `https://flask-project-0b59.onrender.com/delete/<id>` (Replace `<id>` with the ID of the overlay)

#### Response

- Status: 200 OK
- Content: `{ "message": "Record deleted successfully", "deleted_count": <deleted_count> }`

### GET /text

Retrieves overlays of type 'text'.

#### Request

- Method: GET
- URL: `https://flask-project-0b59.onrender.com/text`

#### Response

- Status: 200 OK
- Content: Array of overlay objects of type 'text'

### GET /image

Retrieves overlays of type 'image'.

#### Request

- Method: GET
- URL: `https://flask-project-0b59.onrender.com/image`

#### Response

- Status: 200 OK
- Content: Array of overlay objects of type 'image'

## Usage

To use this API, send HTTP requests to the respective endpoints using appropriate methods (GET, POST, PUT, DELETE). Ensure you have the necessary permissions and provide valid JSON data in the request body when required.

---
