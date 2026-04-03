import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('food.db');
export default db;

export const createTables = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS restaurants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      cuisine TEXT,
      rating TEXT
    );
  `);

  db.execSync(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      date TEXT,
      price TEXT
    );
  `);

  db.execSync(`DELETE FROM restaurants;`);
  db.execSync(`DELETE FROM orders;`);

  db.execSync(`
    INSERT INTO restaurants (name, cuisine, rating) VALUES
    ('Pizza Hut', 'Italian', '4.5'),
    ('KFC', 'Fast Food', '4.2'),
    ('Subway', 'Healthy', '4.0'),
    ('BBQ Tonight', 'Desi', '4.7');
  `);

  db.execSync(`
    INSERT INTO orders (name, date, price) VALUES
    ('Pizza Hut', '10 April', '2500'),
    ('KFC', '8 April', '1500');
  `);
};