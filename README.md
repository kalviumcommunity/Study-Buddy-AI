Study Buddy AI – Q&A App
🚀 Overview

Study Buddy AI is an AI-powered Q&A app that helps students learn from their notes.
It uses Generative AI techniques like Prompt Engineering, RAG, Embeddings, Vector Databases, and Similarity Search to deliver clear, structured, and student-friendly answers.

✨ Key Features

Prompt Engineering → Zero-Shot, One-Shot, Multi-Shot, Dynamic, Chain-of-Thought.

RAG (Retrieval-Augmented Generation) → Retrieves relevant notes before answering.

Embeddings + Vector DB → Stores notes in ChromaDB for similarity search.

Similarity Functions → Cosine, Euclidean (L2), Dot Product.

Structured Output → JSON answers → { Answer, Summary, Example }.

Function Calling → Handles math & calculation queries.

Evaluation Pipeline → Dataset + Judge Prompt + Testing Framework.

LLM Parameters → Temperature, Top P, Top K, Stop Sequences.

⚙️ Tech Stack

Backend → Python (FastAPI / Flask)

LLM → OpenAI GPT / HuggingFace

Vector DB → ChromaDB

Embeddings → SentenceTransformers

Evaluation → Python scripts with Judge Prompt

🧪 Example Run

👩‍🎓 User Prompt:
“Explain RAG in simple terms.”

📘 AI Output:

{
  "Answer": "RAG lets AI fetch external knowledge to improve answers.",
  "Summary": "Improves accuracy with context.",
  "Example": "Like checking Wikipedia before answering."
}

🎯 Prompting Techniques
🔹 System Prompt

You are an AI Study Assistant. Always return results in JSON with fields: Answer, Summary, Example.

🔹 User Prompt

Explain the following concept in simple terms:
“What is Retrieval-Augmented Generation (RAG)?”

📌 Zero-Shot Prompting

AI answers without examples.

Flexible for any subject.

Saves time, keeps structured output.

📌 One-Shot Prompting

One example guides AI’s style & structure.

Reduces ambiguity.

Ensures learning-friendly answers.

📌 Multi-Shot Prompting

Multiple examples provided.

Useful for complex concepts.

Ensures consistent style.

📌 Dynamic Prompting

Prompts adapt automatically based on subject, difficulty, or style.

Example: Beginner-friendly vs. Advanced explanations.

📌 Chain-of-Thought Prompting

AI reasons step by step internally before answering.

Produces accurate, simplified explanations.

Always returns structured JSON.

🧪 Evaluation Dataset & Testing Framework

To ensure accuracy & reliability, we use an evaluation pipeline:

📂 Dataset (Sample Q&As)
[
  {"id": 1, "subject": "Math", "question": "What is 2+2?", "expected": "Answer: 4"},
  {"id": 2, "subject": "Physics", "question": "State Newton's First Law of Motion.", "expected": "An object stays at rest or in motion unless acted upon by an external force."},
  {"id": 3, "subject": "Biology", "question": "What is the powerhouse of the cell?", "expected": "Mitochondria"},
  {"id": 4, "subject": "History", "question": "Who was the first President of the USA?", "expected": "George Washington"},
  {"id": 5, "subject": "Computer Science", "question": "What does RAG stand for in AI?", "expected": "Retrieval-Augmented Generation"}
]

🧑‍⚖️ Judge Prompt

You are a judge. Compare the model’s output with the expected result.

Evaluation Parameters:

✅ Correctness – Is the answer right?

✅ Completeness – Does it fully address the question?

✅ Clarity – Is it student-friendly?

✅ Format – JSON → { Answer, Summary, Example }.

Return: Pass / Fail + Justification

⚙️ Testing Framework
for test in dataset:
    ai_output = run_model(test["question"])
    verdict = judge(ai_output, test["expected"])
    print(f"Test {test['id']}: {verdict}")



Function Calling in Study Buddy AI

Function calling allows the AI to go beyond plain text answers by invoking backend functions when needed.
This makes answers more accurate, interactive, and practical.

📌 How It Works

User asks a question (e.g., “What is 12 × 15?”).

AI detects it’s a calculation query.

Instead of guessing, it calls a math function from the backend.

Returns structured JSON with correct results.

✨ Use Cases in Study Buddy AI

🧮 Math & Calculations → Algebra, arithmetic, unit conversions.

📊 Data Lookups → Fetch definitions, dates, formulas from stored notes.

📅 Utilities → Study planner (dates, reminders).

🔍 Knowledge Retrieval → Calls RAG pipeline for relevant context.

✅ Example

👩‍🎓 User Prompt:
"What is the square root of 144?"

⚡ AI Function Call:

{
  "function": "math.sqrt",
  "arguments": {"value": 144}
}


📘 AI Output:

{
  "Answer": "The square root of 144 is 12.",
  "Summary": "It is a perfect square.",
  "Example": "Like how 12 × 12 = 144."
}
 