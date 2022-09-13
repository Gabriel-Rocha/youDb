const CepRepository = require('../repositories/CepRepository');
const axios = require('axios').default;
var fs = require("fs");

class CepController {

    async index(request, response) {
        const { orderBy } = request.query;
        const cep = await CepRepository.findAll(orderBy);

        response.json(cep);
    }

    async store(request, response) {
        /* const {
            cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi
        } = request.body; */

        const res = await axios.get('http://viacep.com.br/ws/01001000/json/', {
            baseURL: 'http://viacep.com.br/ws/01001000/json/',
        })
        console.log(res.data);
        /*  if (!cep) {
           return response.status(400).json({ error: 'Cep is required' });
         } */

        /*  const crCep = await CepRepository.create({
             cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi
         }); */

        response.json(crCep);
    }

    async saveAll(request, response) {

        var data = fs.readFileSync(__dirname + "/20220913_lista_ceps.csv").toLocaleString();
 

        const todos = [];

        var rows = data.split("\n");
        rows.forEach((row) => {
            var columns =  row.split(",");
            columns.forEach((column) => {
                return todos.push(column.replace(/[-()\r\u0300-\u036f]/g, ''));
            })
        })
        /* console.log(todos); */
        for (var i = 0; i < todos.length; i++) {
            const res = await axios.get(`http://viacep.com.br/ws/${todos[i]}/json/`, {
                baseURL: `http://viacep.com.br/ws/${todos[i]}/json/`,
            })

            console.log(res.data);

            const crCep = await CepRepository.create(
                res.data.cep, 
                res.data.logradouro, 
                res.data.complemento, 
                res.data.bairro, 
                res.data.localidade, 
                res.data.uf, 
                res.data.ibge, 
                res.data.gia, 
                res.data.ddd, 
                res.data.siafi
            );

            /* response.json(crCep); */
        }

    }

    async show(request, response) {
        const { id } = request.params;

        const cep = await CepRepository.findById(id);

        if (!cep) {
            return response.status(404).json({ error: 'Not Found' });
        }

        response.json(cep);
    }

    async delete(request, response) {
        const { id } = request.params;

        const cep = await CepRepository.findById(id);

        if (!cep) {
            return response.status(404).json({ error: 'Not Found' });
        }
        await CepRepository.delete(id);
        response.sendStatus(204);
    }
}

module.exports = new CepController();
