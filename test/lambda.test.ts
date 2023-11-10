import { handler } from '../cdk/lambda/code-gpt-lambda';

describe('Check Lambda failure case', () => {
    it('should return 400 if no code is provided', async () => {
        const event = {
            body: JSON.stringify({}),
        };
        const result = await handler(event);
        expect(result.statusCode).toEqual(400);
    });
});