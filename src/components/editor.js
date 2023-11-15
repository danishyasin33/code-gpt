import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const EditorPage = ({ code, setCode, findBugInCodeEvent, findAnotherSolutionEvent }) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between mb-6">
                <button
                    onClick={findBugInCodeEvent}
                    type="button"
                    className=" w-2/5 h-20 text-violet-700 hover:text-white border border-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-violet-400 dark:text-violet-400 dark:hover:text-white dark:hover:bg-violet-500 dark:focus:ring-violet-900">
                    Find bug in the code
                </button>
                <button
                    onClick={findAnotherSolutionEvent}
                    type="button"
                    className=" w-2/5 h-20 text-violet-700 hover:text-white border border-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-violet-400 dark:text-violet-400 dark:hover:text-white dark:hover:bg-violet-500 dark:focus:ring-violet-900">
                    Suggest another solution
                </button>
            </div>

            <Editor
                className=' text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-violet-700 peer'
                id='code-editor'
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => highlight(code, languages.js)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                }}
                placeholder='Enter your code here...'
            />

        </div>
    );
}

export default EditorPage;