import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    timeout: 20 * 1000,
});

export async function handler(event: any) {
    const { code } = event;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system",
                    "content": "You will be provided with a piece of code, and your task is to find and fix bugs in it."
                },
                {
                    "role": "user",
                    "content": code
                }
            ],
            temperature: 0.2,
            max_tokens: 1024,
        });

        const choices = response.choices;
        const completion = choices[0].message;
        return {
            statusCode: 200,
            body: JSON.stringify({ completion }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error }),
        }
    }
}
