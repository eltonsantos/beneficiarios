const Database = require('../db/config');

module.exports = {
  async get() {
    const db = await Database();

    const data = await db.get(`SELECT * FROM collaborators`);

    await db.close();

    return collaborators.map((collaborator) => ({
      id: collaborator.id,
      avatar: collaborator.avatar,
      name: collaborator.name,
      surname: collaborator.surname,
      cpf: collaborator.cpf,
      benefit: collaborator.benefit,
      approved: collaborator.approved,
    }));
  },

  async create(newCollaborator) {
    const db = await Database();

    await db.run(`INSERT INTO collaborators (
      avatar,
      name,
      surname,
      cpf,
      benefit,
      approved
    ) VALUES (
      "${newCollaborator.avatar}",
      "${newCollaborator.name}",
      "${newCollaborator.surname}",
      "${newCollaborator.cpf}",
      "${newCollaborator.benefit}",
      "${newCollaborator.approved}",
    )`)

    await db.close();
  },

  async delete(id) {
    const db = await Database();

    await db.run(`DELETE FROM collaborators WHERE id = ${id}`);

    await db.close();
  },

  async update(updatedCollaborator, collaboratorId) {
    const db = await Database();

    await db.run(`UPDATE collaborators SET
      avatar = "${updatedCollaborator.avatar}",
      name = "${updatedCollaborator.name}",
      surname = "${updatedCollaborator.surname}",
      cpf = "${updatedCollaborator.cpf}",
      benefit = "${updatedCollaborator.benefit}",
      approved = "${updatedCollaborator.approved}"
      WHERE id = ${collaboratorId}
    `)

    await db.close();
  }
}