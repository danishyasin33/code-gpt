import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    timeout: 20 * 1000,
});

export async function handler(event: any) {
    const { request, code } = JSON.parse(event.body);

    if (!code) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'No code provided', code: code, request: request }),
        }
    }

    if (!request) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'No request provided', request: request, code: code }),
        }
    }

    console.log("code: " + code);

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system",
                    "content": request
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

        console.log("full response: ", response);
        return {
            statusCode: 200,
            body: JSON.stringify({ completion }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error, code: code }),
        }
    }
}
