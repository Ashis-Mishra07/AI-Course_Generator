
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

    export const GenerateCourseLayout_AI = model.startChat({
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [
            {
                role: "user",
                parts: [
                    { text: "Generate a Course Tutorial on Following Detail with Field Course Name , Description , Along with Chapter Name , About , Duration: \nCategory:'Programming' , Topic:Python , Level:Basic , Duration:1 hours , NoOfChapter:5 , in JSON format\n" },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "```json\n{\n  \"course\": {\n    \"name\": \"Python Programming for Beginners\",\n    \"description\": \"This course introduces the fundamental concepts of Python programming, designed for absolute beginners with no prior programming experience. You will learn the basics of Python syntax, data types, variables, operators, control flow, and functions. By the end of this course, you will be able to write simple Python programs and understand the core principles of Python programming.\",\n    \"category\": \"Programming\",\n    \"topic\": \"Python\",\n    \"level\": \"Basic\",\n    \"duration\": \"1 hour\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter introduces the Python programming language, its history, and its key features. You will also learn how to set up your development environment and write your first Python program.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Data Types and Variables\",\n        \"about\": \"This chapter explains the different data types in Python, including integers, floats, strings, and booleans. You will also learn how to declare and assign values to variables.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Operators and Expressions\",\n        \"about\": \"This chapter covers the various operators in Python, such as arithmetic, comparison, logical, and assignment operators. You will learn how to write expressions using these operators.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Control Flow\",\n        \"about\": \"This chapter explores control flow statements in Python, including conditional statements (if, elif, else) and loops (for, while). You will learn how to control the execution flow of your programs.\",\n        \"duration\": \"10 minutes\"\n      },\n      {\n        \"name\": \"Functions\",\n        \"about\": \"This chapter introduces functions in Python. You will learn how to define and call functions, pass arguments, and return values.\",\n        \"duration\": \"5 minutes\"\n      }\n    ]\n  }\n}\n```\n" },
                ],
            },
        ],
    });

    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
