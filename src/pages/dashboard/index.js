import Head from 'next/head';
import Navbar from '../../components/navbar';
import EditorPage from '../../components/editor';
import Answers from '../../components/answers';
import { useState } from 'react';
import axios from 'axios';

const LAMBDA_URL = "https://lsexv3p3jkwt3nwoy4zarhmg6a0bkvvg.lambda-url.us-east-1.on.aws/";
const SAMPLE_RESPONSE = {
    "data": {
        "completion": {
            "role": "assistant",
            "content": "{\n  \"reasoning\": \"The provided code is a simple function that adds two numbers together. An alternative solution can be to use the arrow function syntax, which is a more concise way of writing functions in JavaScript.\",\n  \"code\": \"const add = (a, b) => a + b;\"\n}"
        }
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
        "access-control-allow-origin": "*",
        "access-control-expose-headers": "*",
        "connection": "keep-alive",
        "content-length": "321",
        "content-type": "application/json",
        "date": "Wed, 15 Nov 2023 00:40:28 GMT",
        "x-amzn-requestid": "a323e426-51b6-43f3-a7af-1f87e02ee72f",
        "x-amzn-trace-id": "root=1-65541373-249d05c9378f114037d64d1b;sampled=0;lineage=cf441639:0"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "adapter": [
            "xhr",
            "http"
        ],
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {},
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        "method": "post",
        "url": "https://lsexv3p3jkwt3nwoy4zarhmg6a0bkvvg.lambda-url.us-east-1.on.aws/",
        "data": "{\"code\":\"function add(a, b) {\\n  return a + b;\\n}\",\"request\":\"You will be provided with a piece of code, and your task is to find an alternative solution for it. Return the response in a JSON string with a reasoning object and a code object containing the alterative solution.\"}"
    },
    "request": {}
}
const Dashboard = () => {
    const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
    const [isLoading, setIsLoading] = useState(false);

    const [queriesAndResponses, setQueriesAndResponses] = useState([]);
    const emptyGptReq = {
        code: '',
        request: ''
    }

    const findBugInCodeEvent = async () => {
        createUserQuery(code, "I want to find a bug in this code");
        setIsLoading(true);
        const gptReq = { ...emptyGptReq };

        gptReq.code = code;
        gptReq.request = "You will be provided with a piece of code, and your task is to find and fix bugs in it. Return the response in a JSON string with code in a code object";

        let content = null;
        try {
            // const response = { ...SAMPLE_RESPONSE };
            const response = await axios.post(LAMBDA_URL, gptReq);
            content = JSON.parse(response.data.completion.content);
            let resCode = content.code;
            let reasoning = content.reasoning;

            const newQueriesAndResponses = queriesAndResponses;

            newQueriesAndResponses.unshift({
                code: resCode,
                statement: reasoning,
                agent: 'bot'
            });

            setQueriesAndResponses([...newQueriesAndResponses]);
        } catch (e) {
            console.error(e);
        }
        setIsLoading(false);
        setCode('');
    }

    const findAnotherSolutionEvent = async () => {
        createUserQuery(code, "I want to find another solution for this code");
        setIsLoading(true);
        const gptReq = { ...emptyGptReq };

        gptReq.code = code;
        gptReq.request = "You will be provided with a piece of code, and your task is to find an alternative solution for it. Return the response in a JSON string with a reasoning object and a code object containing the alterative solution.";

        let content = null;
        try {
            // const response = { ...SAMPLE_RESPONSE };
            const response = await axios.post(LAMBDA_URL, gptReq);
            content = JSON.parse(response.data.completion.content);
            let resCode = content.code;
            let reasoning = content.reasoning;

            const newQueriesAndResponses = queriesAndResponses;

            newQueriesAndResponses.unshift({
                code: resCode,
                statement: reasoning,
                agent: 'bot'
            });

            setQueriesAndResponses([...newQueriesAndResponses]);
        } catch (e) {
            console.error(e);
        }
        setIsLoading(false);
        setCode('');
    }

    const createUserQuery = (code, statement) => {
        const newQueriesAndResponses = queriesAndResponses;

        newQueriesAndResponses.unshift({
            code: code,
            statement: statement,
            agent: 'user'
        });

        setQueriesAndResponses([...newQueriesAndResponses]);
    }

    return (
        <div className='flex justify-center px-6 py-4 mb-4'>
            <div className='w-full max-w-[1024px]'>
                <Head>
                    <title>Dashboard</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className='w-100 flex-col h-screen'>
                    <Navbar />
                    <Answers queriesAndResponses={queriesAndResponses} setQueriesAndResponses={setQueriesAndResponses} isLoading={isLoading} />
                    <EditorPage code={code} setCode={setCode} findAnotherSolutionEvent={findAnotherSolutionEvent} findBugInCodeEvent={findBugInCodeEvent} />
                </main>
            </div>
        </div>
    );
}

export default Dashboard;