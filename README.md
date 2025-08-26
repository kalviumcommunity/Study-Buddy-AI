Study Buddy AI – MERN Based Q&A App
🚀 Overview

Study Buddy AI is an AI-powered Q&A app that helps students learn directly from their own notes.
It combines Generative AI + MERN stack + MongoDB Vector Search to deliver accurate, structured, and student-friendly answers.

Unlike generic AI tools, Study Buddy AI grounds every answer in student-provided notes, ensuring personalized learning.

✨ Key Features
🔹 AI Capabilities

Prompt Engineering → Zero-Shot, One-Shot, Multi-Shot, Dynamic, Chain-of-Thought.

RAG (Retrieval-Augmented Generation) → Retrieves relevant notes before answering.

Embeddings + MongoDB Vector Search → Stores notes as embeddings and retrieves via similarity search.

Similarity Functions → Cosine, Dot Product.

Structured JSON Output → Always returns in format:

{ "Answer": "...", "Summary": "...", "Example": "..." }


Function Calling → Handles math, calculations, and data lookups automatically.

🔹 Evaluation Pipeline

Dataset of sample Q&As.

Judge Prompt → Compares AI output vs. expected answers.

Evaluation Parameters → Correctness, Completeness, Clarity, Format.

Testing Framework → Automated pass/fail logging.

🔹 Configurable LLM Parameters

Temperature – Creativity of response.

Top P, Top K – Sampling control.

Stop Sequences – Restrict unwanted outputs.

⚙️ Tech Stack
🖥️ Frontend

React + Tailwind → Clean, responsive UI for asking questions & displaying answers.

⚡ Backend

Node.js + Express → API layer connecting frontend, database, and AI models.

🗄️ Database

MongoDB with Vector Search → Stores notes + embeddings, enables semantic search.

🤖 AI Models

Embeddings → OpenAI / HuggingFace SentenceTransformers.

LLM → OpenAI GPT / HuggingFace models.

🧪 Evaluation

Custom Judge Prompts + automated Test Runner.

🧪 Example Run

👩‍🎓 User Prompt:

“Explain Newton’s First Law in simple terms.”

📘 AI Output (JSON):

{
  "Answer": "Newton’s First Law says objects stay at rest or keep moving unless an external force acts.",
  "Summary": "Objects resist changes in motion.",
  "Example": "A ball keeps rolling until friction or someone stops it."
}

🎯 Prompting Techniques

Zero-Shot → Answer with no examples (flexible, fast).

One-Shot → One guiding example ensures clarity.

Multi-Shot → Multiple examples for consistent style.

Dynamic Prompting → Adjusts based on subject/difficulty.

Chain-of-Thought → AI reasons step-by-step before answering.

🧑‍⚖️ Evaluation Pipeline

📂 Dataset (Sample Q&As):

[
  {"id": 1, "subject": "Math", "question": "What is 2+2?", "expected": "Answer: 4"},
  {"id": 2, "subject": "Physics", "question": "State Newton's First Law of Motion.", "expected": "An object stays at rest or in motion unless acted upon by an external force."},
  {"id": 3, "subject": "Biology", "question": "What is the powerhouse of the cell?", "expected": "Mitochondria"},
  {"id": 4, "subject": "History", "question": "Who was the first President of the USA?", "expected": "George Washington"},
  {"id": 5, "subject": "Computer Science", "question": "What does RAG stand for in AI?", "expected": "Retrieval-Augmented Generation"}
]


⚖️ Judge Prompt:

Compare AI output with expected.

Check Correctness, Completeness, Clarity, Format.

Return → Pass/Fail + Justification.

🔢 Function Calling in Study Buddy AI
📌 How It Works

User asks → “What is 12 × 15?”

AI detects calculation query.

Calls backend math function.

Returns structured JSON with correct result.

✅ Example

👩‍🎓 User Prompt: “What is the square root of 144?”

⚡ AI Function Call:

{ "function": "math.sqrt", "arguments": {"value": 144} }


📘 AI Output:

{
  "Answer": "The square root of 144 is 12.",
  "Summary": "It is a perfect square.",
  "Example": "Like how 12 × 12 = 144."
}
