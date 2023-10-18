import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    timeout: 20 * 1000,
});

export async function handler(event: any) {
    const { code } = event;

    if (!code) {
        return {
            statusCode: 400,
            code: code,
            body: JSON.stringify({ error: 'No code provided' }),
        }
    }

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
                    "content": JSON.stringify(code)
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
            code: JSON.stringify(code),
            body: JSON.stringify({ error }),
        }
    }
}
