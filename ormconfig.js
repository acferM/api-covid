module.exports = {
  "url": process.env.DATABASE_URL,
  "name": "default",
  "type": "postgres",
  "entities": [
    "./dist/modules/**/infra/typeorm/entities/*.js"
  ],
  "migrations": [
    "./dist/shared/infra/typeorm/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  },
  "ssl": true,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  }
}
