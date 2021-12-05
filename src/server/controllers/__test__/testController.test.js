const request = require('supertest');
const app = require('../../app');

describe('GET /api/test', () => {

    it('should return status code 200 if successful', async () => {
        const response  = await request(app).get('/api/test');
        expect(response.statusCode).toEqual(200);
    });

    it('should return req.body.length >= 1', async () => {
        const response  = await request(app).get('/api/test');
        expect(response.body.length).toBeGreaterThanOrEqual(1);
    });
});

describe('GET /api/getTestQuestions/:id', () => {

    it('should return status code 200 if successful', async () => {
        const response  = await request(app).get('/api/getTestQuestions/:id').query({id: 30});
        expect(response.statusCode).toEqual(200);
    });

    it('should return req.body.length >= 1', async () => {
        const response  = await request(app).get('/api/getTestQuestions/:id').query({id: 30});
        expect(response.body.length).toBeGreaterThanOrEqual(1);
    });

    it('should return req.body.length === 0 if query id does not exist', async () => {
        const response  = await request(app).get('/api/getTestQuestions/:id').query({id: 0});
        expect(response.body.length).toBe(0);
    });
})