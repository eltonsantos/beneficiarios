const Dependent = require('../model/Dependent');

module.exports = {
  create(request, response) {
    return response.render("dependent")
  },

  async save(request, response) {
    await Dependent.create({
      name: request.body.name,
      surname: request.body.surname,
      cpf: request.body.cpf
    });

    return response.redirect('/')
  }
}