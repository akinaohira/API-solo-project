export = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || "inuzu",
  password: process.env.DB_PASSWORD || "inuzu",
  database: process.env.DB_NAME || "inuzu",
  entities: ["./entities/**/*.ts"],
  migrations: ["./migrations/**/*.ts"],
  seeds: ["./seeds/**/*.ts"],
  logging: false,
  migrationsRun: false /* Disable auto-run migration */,
  cli: {
    entitiesDir: "./entities",
    migrationsDir: "./migrations"
  }
};
