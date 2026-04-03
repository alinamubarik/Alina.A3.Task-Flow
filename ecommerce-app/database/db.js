import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('app.db');

export default db;

export const createTables = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      price TEXT,
      image TEXT,
      description TEXT
    );
  `);

  db.execSync(`
    INSERT INTO products (name, price, image, description)
    SELECT 'iPhone 14', '200000', '', 'Latest Apple phone'
    WHERE NOT EXISTS (SELECT 1 FROM products WHERE name='iPhone 14');
  `);

  db.execSync(`
    INSERT INTO products (name, price, image, description)
    SELECT 'Samsung S23', '180000', '', 'Flagship Samsung phone'
    WHERE NOT EXISTS (SELECT 1 FROM products WHERE name='Samsung S23');
  `);
};