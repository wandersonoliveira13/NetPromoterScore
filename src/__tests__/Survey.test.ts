
import request from 'supertest';
import { app } from '../app';
import createConnection from '../database';

describe("Servico", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new survey", async() => {
        const response = await request(app).post("/servico")
        .send({
            title: "Titleee first",
            description: "Descriptionnn test"
        });
        expect(response.status).toBe(201);
    })

});