const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () =>{
       await connection.migrate.rollback();
       await connection.migrate.latest();
    });

    afterAll(async () =>{
        await connection.destroy();
    });


    it('should be able to create a new ONG (NGO)', async() => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "ORCCA2",
            email: "avabrazilian@gmail.com",
            whatsapp: "(31)973568997",
            city: "Contagem",
            uf: "MG"
        });



        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});