export = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || "inuzu",
  password: process.env.DB_PASSWORD || "inuzu",
  database: process.env.DB_NAME || "inuzu",
  // chage later
  entities: ["../entities/**/*.ts"],
  // change later
  migrations: ["../migrations/**/*.ts"],
  // seeds: ["src/seeds/**/*.ts"],
  logging: false,
  migrationsRun: false /* Disable auto-run migration */,
  cli: {
    entitiesDir: "../entities",
    migrationsDir: "../migrations"
  }
};
