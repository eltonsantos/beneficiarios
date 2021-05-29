const Database = require('./config');

const initDb = {
  
  async init(){

    const db = await Database();

    await db.exec(`CREATE TABLE collaborators (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      avatar TEXT,
      name TEXT,
      surname TEXT,
      cpf TEXT,
      benefit TEXT,
      approved INT
    )`);

    await db.run(`INSERT INTO collaborators (
      avatar,
      name,
      surname,
      cpf,
      benefit,
      approved
    ) VALUES ("https://avatars.githubusercontent.com/u/1292594?v=4", "Elton", "Santos", "12345678900", "Seguro desemprego", 1)`);

    await db.close();
  }
}

initDb.init();