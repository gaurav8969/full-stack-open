```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: The browser makes a singular POST request to SPA server
    server-->>browser: New node creation confirmation
    deactivate server
    Note left of server: The servers confirms creation of note
```