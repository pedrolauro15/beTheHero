const connection = require('../database/connection');

module.exports = {

  async index(request, response) {
    const test = await connection('test').select('*');
  
    return response.json(test);
  },

  async create(request, response){
    const { user, senha } = request.body;

    await connection('test').insert({
      user,
      senha
    });

    return response.json;
  }
}