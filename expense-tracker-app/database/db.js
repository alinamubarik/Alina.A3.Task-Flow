import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('expense.db');
export default db;

export const createTables = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      amount INTEGER,
      category TEXT,
      date TEXT
    );
  `);

  db.execSync(`DELETE FROM transactions;`);

  db.execSync(`
    INSERT INTO transactions (amount, category, date) VALUES
    (5000, 'Salary', 'Jan'),
    (-2000, 'Food', 'Jan'),
    (-1000, 'Travel', 'Feb'),
    (3000, 'Freelance', 'Feb');
  `);
};