# EventTrackerProject
### Wine Tracker :wine_glass:
__________________________________________________________
### Week 12 - REST API Weekend Project - Part I
Part I of EventTracker [project] (https://github.com/SkillDistillery/SD27/blob/master/rest/EventTracker/README.md).

#### MySQL Schema

![alt text](https://raw.githubusercontent.com/jrentschler-jpg/EventTrackerProject/main/DB/winetrackerdb.png "MySQL Schema")

### Overview:
This program is designed to be a REST API that creates, reads, updates(replaces), and deletes wine data from a Database that I built with using MySQL WorkBench and connecting to Spring Data JPA.

### How to run:
Access the REST API by the following routes at [WineTracker](http://localhost:8085/api/wines):


### Expected Routes:

| Return Type   | Route                                            | Functionality                  |
|---------------|--------------------------------------------------|--------------------------------|
| `List<Wine>`  |`GET api/wines`                                   | Gets all wines                 |
| `Wine`        |`GET api/wines/{id}`                              | Gets one wines by id           |
| `Wine`        |`GET api/wines/search/{keyword}`                  | Gets wines by name or type     |
| `Wine`        |`GET api/wines/search/yearProduced/{yearProduced}`| Gets wines by year produced    |
| `Wine`        |`GET api/wines/search/rating/{rating}`            | Gets wines by rating           |
| `Wine`        |`GET api/wines/search/cost/{low}/{hight}`         | Gets wines by cost range       |
| `Wine`        |`POST api/wines`                                  | Creates a new wine             |
| `Wine`        |`PUT api/wines/{id}`                              | Replaces an existing wine by id|
| `void`        |`DELETE api/wines/{id}`                           | Deletes an existing wine by id |


### Technologies used:
- Java
- Java Persistence API
- Spring Boot
- RESTful API
- Gradle
- MySQL WorkBench
- PostMan
- JSON
- Apache Tomcat
- Git
- GitHub
- AWS
- JUnit testing


### Topics implemented:
- Spring Data JPA - perform CRUD operations.
- JSON (send/receive)
- Test Driven Development with JUnit Juniper. 


### Lessons Learned:
Applying new technologies of REST API to build a better application from the backend to the frontend.

* Create a JPA Project
  * Create a Java entity class POJO that models your database table.
  * Map your POJO using JPA.

* Configure a Spring Boot app to publish a REST API.
  * Use Spring REST annotations.
  * Use Spring Data JPA to perform all CRUD operations.
  * Send and receive JSON.

### Stretch Goals:
Supplemental mappings and controller routes for nested CRUD.
