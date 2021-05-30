const Database = require('../db/config');

module.exports = {
  async get() {

    const db = await Database();
  
    const data = await db.get(`SELECT * FROM dependents`);
  
    await db.close();

    return dependents.map((dependent) => ({
      id: dependent.id,
      name: dependent.name,
      surname: dependent.surname,
      cpf: dependent.cpf,
      collaboratorId: dependent.collaboratorId
    }));
  
  },

  async create(newDependent) {
    const db = await Database();

    await db.run(`INSERT INTO dependents (
      name,
      surname,
      cpf
    ) VALUES (
      "${newDependent.name}",
      "${newDependent.surname}",
      "${newDependent.cpf}",
    )`)

    await db.close();
  },

  async delete(id) {
    const db = await Database();

    await db.run(`DELETE FROM dependents WHERE id = ${id}`);

    await db.close();
  }

}