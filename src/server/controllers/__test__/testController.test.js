const request = require('supertest');
const app = require('../../app');

describe('GET /api/test', () => {

    it('should return status code 200 if successful', async () => {
        const response  = await request(app).get('/api/test');
        expect(response.statusCode).toEqual(200);
        return;
    });

    it('should return req.body.length >= 1', async () => {
        const response  = await request(app).get('/api/test');
        expect(response.body.length).toBeGreaterThanOrEqual(1);
        return;
    });
});

describe('GET /api/getTestQuestions/:id', () => {

    it('should return status code 200 if successful', async () => {
        const response  = await request(app).get('/api/getTestQuestions/:id').query({id: 1});
        expect(response.statusCode).toEqual(200);
        return;
    });

    it('should return req.body.length >= 1', async () => {
        const response  = await request(app).get('/api/getTestQuestions/:id').query({id: 1});
        expect(response.body.length).toBeGreaterThanOrEqual(1);
        return;
    });

    it('should return req.body.length === 0 if query id does not exist', async () => {
        const response  = await request(app).get('/api/getTestQuestions/:id').query({id: 0});
        expect(response.body.length).toBe(0);
        return;
    });
});

describe('POST /api/addTest', () => {

    const mockTestQuestions = [
        {
            number: 10,
            units: 'Cups',
            convertTo: 'Gallons'
        },
        {
            number: 5,
            units: 'Fahrenheit',
            convertTo: 'Celsius'
        }
    ];

    let responseId;

    it('should add test entry to db', async () => {
        const response  = await request(app).post('/api/addTest').send({
            questions: mockTestQuestions,
            testName: 'This is a test from Jest and SuperTest'
        });
        responseId = {id: response.body};
        expect(response.statusCode).toEqual(200);
        return;
    });

    it('should delete test entry in db', async () => {
        const deleteResponse = await request(app).delete('/api/deleteTest').send(responseId);
        expect(deleteResponse.statusCode).toEqual(200);
        return;
    });
});