const { v4 } = require('uuid');
const db = require('../../database/index');

let cep = [
  {
    id: v4(),
	cep: "01001-000",
	logradouro: "Praça da Sé",
	complemento: "lado ímpar",
	bairro: "Sé",
	localidade: "São Paulo",
	uf: "SP",
	ibge: "3550308",
  gia: "1004",
	ddd: "11",
	siafi: "7107"
  }
];

class CepRepository {
 async findAll() {
    const rows = await db.query(`SELECT * FROM ceps;`);
    return rows;
  }

 async findById(id) {
    const [row] = await db.query(`SELECT * FROM ceps WHERE id = $1`, [id]);
    return row;
  }

  async create(
    cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi,
  ) {
    const [row] = await db.query(`
    INSERT INTO ceps (cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *
    `, [cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
   DELETE FROM ceps
   WHERE id = '${id}';
   `);
    return deleteOp
}
}

module.exports = new CepRepository();
