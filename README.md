# API-Covid

**Essa é uma API feita para <a href="https://github.com/acferlucas">meu irmão</a> produzir uma aplicação web de vacinação de Covid19**

esta API é uma api de administração, ou seja, alteração de todos os dados, portanto cada uma das 5 entidades dessa API (vacinas, pacientes, enfermeiros(as), grupos e aplicações) tem seu CRUD (Create Read Update Delete).

# 📄 Documentação

## Entidades:

### **Vacina:**

**Campos:**

A vacina tem 5 campos

1. id - ID da vacina
2. name - Nome da vacina
3. manufacturer - Fabricante da vacina
4. time_between_applications - Tempo que deve ser esperado entre as aplicações da vacina
5. applications_amount - quantidade de aplicações que devem ser feitas da vacina

**Rotas**

1. POST - /vacines:

Request body:
```json
{
  "name": "nome_da_vacina",
  "manufacturer": "nome_da_fabricante",
  "time_between_applications": "1 mês",
  "applications_amount": 2
}
```

Response JSON:
```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "name": "nome_da_vacina",
  "manufacturer": "nome_da_fabricante",
  "time_between_applications": "1 mês",
  "applications_amount": 2,
  "created_at": "now timestamp",
  "updated_at": "now timestamp"
}
```

2. GET /vacines

Response JSON:
```json
[
  {
    "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "nome_da_vacina",
    "manufacturer": "nome_da_fabricante",
    "time_between_applications": "1 mês",
    "applications_amount": 2,
    "created_at": "timestamp",
    "updated_at": "timestamp"
  }
]
```
3. PUT - /vacines/:id :

Request body:
```json
{
  "name": "novo_nome_da_vacina",
  "manufacturer": "novo_nome_da_fabricante",
  "time_between_applications": "2 mês",
  "applications_amount": 3
}
```

Response JSON:
```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "name": "novo_nome_da_vacina",
  "manufacturer": "novo_nome_da_fabricante",
  "time_between_applications": "2 mês",
  "applications_amount": 3,
  "created_at": "timestamp da criação",
  "updated_at": "now timestamp"
}
```
4. DELETE - /vacines/:id :

Esta requisição não tem resposta, apenas um status 204

### **Grupo:**

**Campos:**

O grupo tem 4 campos

1. id - ID do grupo
2. denomination - Nome do grupo
3. min_age - idade mínima do grupo
4. max_age - idade máxima do grupo

**Rotas**

1. POST - /groups:

Request body:
```json
{
  "denomination": "jovem adulto",
  "min_age": 18,
  "max_age": 25
}
```

Response JSON:
```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "denomination": "denominação_do_grupo",
  "min_age": 18,
  "max_age": 25,
  "created_at": "now timestamp",
  "updated_at": "now timestamp"
}
```

2. GET /groups

Response JSON:
```json
[
  {
    "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "denomination": "denominação_do_grupo",
    "min_age": 18,
    "max_age": 25,
    "created_at": "timestamp",
    "updated_at": "timestamp"
  }
]
```
3. PUT - /groups/:id :

Request body:
```json
{
  "denomination": "nova_denominação_do_grupo",
  "min_age": 19,
  "max_age": 30
}
```

Response JSON:
```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "denomination": "nova_denominação_do_grupo",
  "min_age": 19,
  "max_age": 30,
  "created_at": "timestamp da criação",
  "updated_at": "now timestamp"
}
```
4. DELETE - /groups/:id :

Esta requisição não tem resposta, apenas um status 204

### **Enfermeiros(as):**

**Campos:**

O enfermeiro(a) tem 5 campos

1. id - ID do enfermeiro
2. name - Nome do enfermeiro
3. coren - coren do enfermeiro
4. formation_year - Ano de formação do enfermeiro
5. contact - número de contato do médico

**Rotas**

1. POST - /nurses:

Request body:
```json
{
	"name": "nome_do_enfermeiro",
	"coren": "coren_do_enfermeiro",
	"formation_year": "2018",
	"contact": "+55 00 000000000"
}
```

Response JSON:
```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "name": "nome_do_enfermeiro",
  "coren": "coren_do_enfermeiro",
  "formation_year": "2018",
  "contact": "+55 00 000000000",
  "created_at": "now timestamp",
  "updated_at": "now timestamp"
}
```

2. GET /nurses

Response JSON:
```json
[
  {
    "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "nome_do_enfermeiro",
    "coren": "coren_do_enfermeiro",
    "formation_year": "2018",
    "contact": "+55 00 000000000",
    "created_at": "now timestamp",
    "updated_at": "now timestamp"
  }
]
```
3. PUT - /nurses/:id :

Request body:
```json
{
  "name": "novo_nome_do_enfermeiro",
  "coren": "novo_coren_do_enfermeiro",
  "formation_year": "2017",
  "contact": "+55 00 000000001"
}
```

Response JSON:
```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "name": "novo_nome_do_enfermeiro",
  "coren": "novo_coren_do_enfermeiro",
  "formation_year": "2017",
  "contact": "+55 00 000000001",
  "created_at": "timestamp da criação",
  "updated_at": "now timestamp"
}
```
4. DELETE - /nurses/:id :

Esta requisição não tem resposta, apenas um status 204

### **Pacientes:**

**Campos:**

O paciente tem 5 campos

1. id - ID do paciente
2. birthday - Data de nascimento do paciente
3. individual_characteristics - caraterísticas individuais do paciente
4. group_id - id do grupo no qual o paciente pertencente
5. applications - aplicações de vacina no paciente

**Rotas**

1. POST - /patients:

Request body:
```json
{
	"name": "nome_do_paciente",
	"birthday": "00/00/0000",
	"individual_characteristics": "características_do_paciente",
	"group_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

Response JSON:
```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "birthday": "00/00/0000",
  "individual_characteristics": "características_do_paciente",
  "group_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "created_at": "now timestamp",
  "updated_at": "now timestamp"
}
```

2. GET /patients

Response JSON:
```json
[
  {
    "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "birthday": "00/00/0000",
    "individual_characteristics": "características_do_paciente",
    "group_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "group": {
      // group info
    },
    "applications": [],
    "created_at": "timestamp",
    "updated_at": "timestamp"
  }
]
```
3. PUT - /patients/:id :

Request body:
```json
{
  "name": "novo_nome_do_paciente",
	"birthday": "00/00/0001",
	"individual_characteristics": "novas_características_do_paciente",
	"group_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxy"
}
```

Response JSON:
```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "name": "novo_nome_do_paciente",
	"birthday": "00/00/0001",
	"individual_characteristics": "novas_características_do_paciente",
	"group_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxy",
  "created_at": "timestamp da criação",
  "updated_at": "now timestamp"
}
```
4. DELETE - /patients/:id :

Esta requisição não tem resposta, apenas um status 204
