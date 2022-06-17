## :file_folder: Estrutura da tabela
![Table](./table.png)

<hr>

- ### Update
PUT /store-registration/:id<br>
Body:
name | owner | registrationDate | businessType
--- | --- | --- | ---
String | String | String | String

- ### Select by owner
GET /store-registration/owner<br>
Query params:
name | page | limit
--- | --- | ---
String | Integer | Integer

Exemplo: /store-registration/owner?name=microsoft&page=0&limit=3<br>

- ### Select by business type
GET /store-registration/business<br>
Query params:
type | page | limit
--- | --- | ---
String | Integer | Integer

Exemplo: /store-registration/business?type=sales&page=0&limit=3<br>
<b>Obs: Caso o paramentro "page" não seja informado o padrão é 0</b>

- ### Get all
GET /products<br>

- ### Get by id
GET /product<br>
Query params:
id |
--- |
Integer |

Exemplo: /product?id=3<br>

- ### Delete
DELETE /product<br>
Query params:
id |
--- |
Integer |

- ### Insert
POST /store-registration/new<br>
Body:
name | owner | registrationDate | businessType
--- | --- | --- | ---
String | String | String | String
