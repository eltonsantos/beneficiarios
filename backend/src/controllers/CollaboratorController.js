const Collaborator = require('../model/Collaborator');

module.exports = {
  
  create(request, response) {
    return response.render("collaborator")
  },

  async save(request, response) {
    await Collaborator.create({
      avatar: request.body.avatar,
      name: request.body.name,
      surname: request.body.surname,
      cpf: request.body.cpf,
      benefit: request.body.benefit,
      approved: request.body.approved
    });

    return response.redirect('/')
  }
}