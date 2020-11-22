# EventTrackerProject
### Wine Tracker :wine_glass:
__________________________________________________________
### Week 12 - REST API Weekend Project
EventTrackerProject  [project](https://github.com/SkillDistillery/SD27/blob/master/rest/EventTracker/README.md).

#### MySQL Schema

![alt text](https://raw.githubusercontent.com/jrentschler-jpg/EventTrackerProject/main/DB/winetrackerdb.png "MySQL Schema")

### Overview:
Part I:
This program is designed to be a REST API that creates, reads, updates(replaces), and deletes wine data from a Database that I built using MySQL WorkBench and connecting it to Spring Data JPA.

Part II:
This program is designed to be a web application that creates, reads, updates(replaces), and deletes wine data from a Database using the REST API from part I of the project. It was built as an HTML frontend with JavaScript by adding scripts to the index page.

### How to run:
Part I:
Access the REST API by the following routes at [WineTracker](http://18.220.240.247:8080/WineTracker/api/wines):

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

### How to run:
Part II:
Application access:  [WineTracker](http://18.220.240.247:8080/WineTracker/api/wines).
You can get a list of all of the wines, search by the wine id, search by the name of wine or type of wine, add a new wine, update a wine, and delete a wine by the id.

### Technologies used:
Part I: Backend
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

Part II: Frontend
- JavaScript
- HTML
- Visual Studios Code (VS)
- Google Chrome Developer Tool
- Atom


### Topics implemented:
Part I:
- Spring Data JPA - perform CRUD operations.
- JSON (send/receive)
- Tomcat 8 on AWS EC2 Instance deployment.
- Test Driven Development with JUnit Juniper.

Part II:
- Build out HTML index page using frontend with JavaScript.
- Send AJAX requests to our Java Controllers to perform CRUD operations.
- Use JSON to parse responses with JavaScript.
- Tomcat 8 on AWS EC2 Instance deployment.



### Lessons Learned:
Part I:
Applying new technologies of REST API to build a better application from the backend to the frontend.

* Create a JPA Project
  * Create a Java entity class POJO that models your database table.
  * Map your POJO using JPA.

* Configure a Spring Boot app to publish a REST API.
  * Use Spring REST annotations.
  * Use Spring Data JPA to perform all CRUD operations.
  * Send and receive JSON.

Part II:
Understanding the capabilities of REST API to better learn how to connect to:

* Adding scripts to a web application
* Send asynchronous requests to Java controllers with JavaScript's `XMLHttpRequest`
* Consume and parse JSON responses with JavaScript
* Build HTML with JavaScript
* Send POST/PUT/DELETE requests with `XMLHttpRequest`

### Stretch Goals:
Supplemental mappings and controller routes for nested CRUD. Added additional search functions for the end user to search wines by name/type, year produced, rating, and costs.
