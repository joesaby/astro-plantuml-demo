---
layout: ../layouts/Layout.astro
title: Sequence Diagram Example
---

# Sequence Diagram Example

[← Back to Home](/)

## Web Navigation Flow

```plantuml
@startuml
participant User
participant "Web Browser" as Browser
participant Server

User -> Browser: Navigate to website
Browser -> Server: HTTP Request
Server --> Browser: HTTP Response
Browser --> User: Display page
@enduml
``` 