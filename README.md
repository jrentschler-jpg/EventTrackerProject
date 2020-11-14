# EventTrackerProject


### Expected Routes

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
