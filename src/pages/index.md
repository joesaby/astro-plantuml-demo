---
layout: ../layouts/Layout.astro
title: Astro PlantUML Demo
---

# Astro PlantUML Demo

This demo showcases the astro-plantuml integration for rendering PlantUML diagrams in Astro projects.

## Sequence Diagram Example

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

## Class Diagram Example

```plantuml
@startuml
class Car {
  - make: String
  - model: String
  - year: Integer
  + start()
  + stop()
  + accelerate()
}

class Engine {
  - cylinders: Integer
  - horsepower: Integer
  + ignite()
  + shutdown()
}

Car "1" *-- "1" Engine : has
@enduml
```

## Activity Diagram Example

```plantuml
@startuml
start
:Initialize process;
if (Data valid?) then (yes)
  :Process data;
  :Save results;
else (no)
  :Log error;
  :Send notification;
endif
stop
@enduml
```

## More Examples

- [Use Case Diagrams](/use-case)
- [State Diagrams](/state)
- [Component Diagrams](/component)