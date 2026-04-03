import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('social.db');
export default db;

export const createTables = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      body TEXT,
      userId INTEGER
    );
  `);

  db.execSync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      phone TEXT
    );
  `);

  // fresh data
  db.execSync(`DELETE FROM posts;`);
  db.execSync(`DELETE FROM users;`);

  db.execSync(`
    INSERT INTO posts (title, body, userId) VALUES
    ('Post 1', 'This is first post', 1),
    ('Post 2', 'This is second post', 1);
  `);

  db.execSync(`
    INSERT INTO users (name, email, phone) VALUES
    ('Ali', 'ali@email.com', '123456');
  `);
};