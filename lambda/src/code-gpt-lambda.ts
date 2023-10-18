import axios from 'axios';

const openaiApiKey = process.env.OPENAI_API_KEY;
const openaiApiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

interface Bug {
    line: number;
    message: string;
}

export async function handler(event: any) {
    const { code } = event;

    const response = await axios.post(openaiApiUrl, {
        prompt: `Find bugs in the following code:\n\n${code}`,
        max_tokens: 1024,
        temperature: 0.7,
        n: 1,
        stop: '\n\n',
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiApiKey}`,
        },
    });

    const generatedText = response.data.choices[0].text;
    const bugs: Bug[] = [];

    // Parse the generated text to identify potential bugs
    // For example, you could look for lines that contain the words "error" or "bug"
    // and extract the line number and error message
    // Here's an example implementation that looks for lines that contain the word "error"
    generatedText.split('\n').forEach((line: string, index: number) => {
        if (line.toLowerCase().includes('error')) {
            bugs.push({
                line: index + 1,
                message: line.trim(),
            });
        }
    });

    return {
        bugs,
    };
}
