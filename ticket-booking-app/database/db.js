import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('movies.db');
export default db;

export const createTables = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS movies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      date TEXT
    );
  `);

  db.execSync(`DELETE FROM movies;`);

  db.execSync(`
    INSERT INTO movies (title, date) VALUES
    ('Avengers', '2024'),
    ('Batman', '2023'),
    ('Spiderman', '2022');
  `);
};