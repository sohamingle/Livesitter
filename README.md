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

---

# User Documentation

This documentation provides a guide on how to set up and use the application for managing overlays and inputting an RTSP URL.

## Table of Contents

- [1. Overview](#1-overview)
- [2. Getting Started](#2-getting-started)
  - [2.1. Setting Up the App](#21-setting-up-the-app)
  - [2.2. Inputting the RTSP URL](#22-inputting-the-rtsp-url)
- [3. Managing Overlays](#3-managing-overlays)
  - [3.1. Adding an Overlay](#31-adding-an-overlay)
  - [3.2. Updating an Overlay](#32-updating-an-overlay)
  - [3.3. Deleting an Overlay](#33-deleting-an-overlay)

## 1. Overview

This application allows you to manage overlays on a video stream using an RTSP URL. You can add, update, and delete overlays to enhance the viewing experience.

## 2. Getting Started

### 2.1. Setting Up the Web App

- There is a RTSP Livestream playing by default and another one is provided for reference.

### 2.2. Inputting the RTSP URL

![image](https://github.com/sohamingle/Livesitter/assets/139986894/c3c12e83-975d-4145-b12c-115c571069fd)

- Locate and access the input or settings section within the app.
- Find the field to input the RTSP URL.
- Enter the RTSP URL of the video stream you want to overlay.
- You can even RESET the RTSP URL.

## 3. Managing Overlays

![image](https://github.com/sohamingle/Livesitter/assets/139986894/82e92f78-f16f-4366-b506-1222d35ae4c2)

### 3.1. Adding an Overlay

![image](https://github.com/sohamingle/Livesitter/assets/139986894/fc73ec37-cf2c-4d78-b08e-c7f3ef1f6acd)

- Navigate to the "Add Overlay" section within the app.
- Choose the type of overlay you want to add (text, image).
- Add the text you want to add or the image URL.
- Customize the overlay settings such as position, size, and content.
- Save the overlay.

### 3.2. Updating an Overlay

![image](https://github.com/sohamingle/Livesitter/assets/139986894/5a0cc4e7-4078-4529-9b29-b38dc6dc3fc6)

- Navigate to the "Overlays".
- Locate the overlay you want to update.
- Click the edit icon.
- Edit the overlay settings such as position, size, or content.
- Save the updated overlay settings.

### 3.3. Deleting an Overlay

![image](https://github.com/sohamingle/Livesitter/assets/139986894/5a0cc4e7-4078-4529-9b29-b38dc6dc3fc6)

- Navigate to the "Overlays".
- Locate the overlay you want to delete.
- Click the bin icon to delete the overlay.

---
