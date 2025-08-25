#  Study Buddy AI – Q&A App  

## Overview  
**AI Study Buddy** is a simple AI-powered **Question-Answering App** that helps students learn from their notes.  
It uses **Generative AI concepts** such as **Prompting, RAG, Embeddings, Vector Databases, and Similarity Search** to provide accurate, student-friendly answers.  

---

## ✨ Key Features  
- **Prompt Engineering** → Zero-shot, One-shot, Multi-shot, Dynamic, Chain-of-Thought.  
- **RAG (Retrieval-Augmented Generation)** → Retrieves relevant study notes before answering.  
- **Embeddings + Vector DB** → Converts notes into embeddings and stores them in **ChromaDB**.  
- **Similarity Functions** → Cosine, Euclidean (L2), and Dot Product search.  
- **Structured Output** → JSON format answers (Answer, Summary, Example).  
- **Function Calling** → Handles math/calculation queries.  
- **LLM Parameters** → Temperature, Top P, Top K, Stop Sequence.  
- **Evaluation Pipeline** → 5+ sample Q&As with a judge prompt.  
- **Token Logging** → Track usage per request.  

---

## ⚙️ Tech Stack  
- **Backend**: Python (FastAPI / Flask)  
- **LLM**: OpenAI GPT / HuggingFace  
- **Vector DB**: ChromaDB  
- **Embeddings**: SentenceTransformers  
- **Evaluation**: Python scripts with judge prompts  

---

## 🧪 Example Run  
👩‍🎓 **User**: *“Explain RAG in simple terms.”*  

📘 **AI Output**:  
```json
{
  "Answer": "RAG lets AI fetch external knowledge to improve answers.",
  "Summary": "Improves accuracy with context.",
  "Example": "Like checking Wikipedia before answering."
}

## 🔹 System and User Prompts

**System Prompt**  
You are an AI Study Assistant. Your role is to answer student questions based on their notes. Always return results in JSON format containing:  
- **Answer**: Detailed response to the question.  
- **Summary**: A short and simple explanation.  
- **Example**: A relatable example for better understanding.  

**User Prompt**  
Explain the following concept in simple terms:  
*“What is Retrieval-Augmented Generation (RAG)?”*  

---

## 📌 RTFC Framework Usage  

- **R (Role):** Defined in the system prompt as a study assistant.  
- **T (Task):** Explain concepts in detail, with summary and example.  
- **F (Format):** JSON with fields (Answer, Summary, Example).  
- **C (Context):** User-provided study notes or query.  

---

## 🎯 Zero-Shot Prompting  

In **Zero-Shot Prompting**, the AI answers without prior examples, relying only on instructions.  

**System Prompt:**  
You are an AI Study Assistant. Answer student queries clearly and return results in JSON with fields Answer, Summary, and Example.  

**User Prompt:**  
Explain *“Cosine Similarity”* in simple terms.  

**AI Output Example:**  
```json
{
  "Answer": "Cosine similarity measures how similar two vectors are by comparing their angle.",
  "Summary": "It checks closeness of text meanings.",
  "Example": "Like comparing two essays to see if they talk about the same topic."
}
📌 Why Zero-Shot Prompting?

Works without training examples.

Flexible for any subject or concept.

Saves time while keeping answers structured.

🎯 One-Shot Prompting
In One-Shot Prompting, we provide one example to guide the AI’s style.

System Prompt:
You are an AI Study Assistant. Always return results in JSON with Answer, Summary, and Example.

Example Input:
Explain “Embeddings” in simple terms.

Example Output:

json
Copy
Edit
{
  "Answer": "Embeddings convert text into numbers so that similar texts are close in space.",
  "Summary": "Turns words into numbers for comparison.",
  "Example": "Like mapping similar books near each other in a library."
}
User Prompt:
Explain “Vector Database” in simple terms.

📌 Why One-Shot Prompting?

Gives AI a reference style.

Reduces ambiguity.

Ensures answers match learning-friendly format.

🎯 Multi-Shot Prompting
In Multi-Shot Prompting, we provide multiple examples before asking the real question.

System Prompt:
You are an AI Study Assistant. Return answers in JSON with Answer, Summary, and Example.

Example 1 Input:
What is “RAG”?

Example 1 Output:

json
Copy
Edit
{
  "Answer": "RAG combines AI with external notes to improve accuracy.",
  "Summary": "AI + Notes = Better answers.",
  "Example": "Like checking a textbook before answering a question."
}
Example 2 Input:
What is “Cosine Similarity”?

Example 2 Output:

json
Copy
Edit
{
  "Answer": "It measures similarity between texts by checking their vector angle.",
  "Summary": "Compares text closeness.",
  "Example": "Like checking if two essays talk about the same topic."
}
User Prompt:
Explain “ChromaDB” in simple terms.

📌 Why Multi-Shot Prompting?
Ensures consistent structured answers.
Useful for complex topics.
Helps AI follow the same teaching pattern.


## 🎯 Dynamic Prompting  

In **Study Buddy AI**, we use **Dynamic Prompting**, where the system **adapts prompts automatically** based on the user’s query or notes (e.g., subject, difficulty level, or preferred explanation style).  
This makes answers **personalized and flexible**, rather than relying only on fixed instructions.  

---

### 🔹 Dynamic Prompt Example  

**System Prompt (Template):**  
You are an AI Study Assistant. Explain the following concept in {{subject}} clearly.  
Adapt your explanation based on {{difficulty_level}} and return results in JSON format with fields: Answer, Summary, and Example.  

**User Prompt (Generated Dynamically):**  
Explain the following {{subject}} concept for a {{difficulty_level}} learner:  

{{concept}}  

---

### 📌 Example Execution  

If the user provides:  

- **Subject:** Mathematics  
- **Difficulty Level:** Beginner  
- **Concept:** Pythagoras Theorem  

The dynamically generated prompt becomes:  

**System Prompt:**  
You are an AI Study Assistant. Explain the following concept in Mathematics clearly.  
Adapt your explanation for a Beginner and return results in JSON format with fields: Answer, Summary, and Example.  

**User Prompt:**  
Explain the following Mathematics concept for a Beginner:  
Pythagoras Theorem  

**Expected Output:**  
```json
{
  "Answer": "The Pythagoras Theorem says that in a right-angled triangle, the square of the longest side (hypotenuse) equals the sum of the squares of the other two sides.",
  "Summary": "In a right triangle: hypotenuse² = base² + height².",
  "Example": "If one side is 3 and the other is 4, then the hypotenuse will be 5."
}



## Chain-of-Thought Prompting 

In Study Buddy AI, we use Chain-of-Thought (CoT) Prompting, where the AI is guided to reason step by step internally before giving the final answer.

This helps the AI give accurate, well-explained, and student-friendly answers, rather than just short responses.

🔹 How it Works

System Prompt tells the AI to think step by step internally.

The AI uses hidden reasoning (not shown to the user).

The final answer is given in a structured JSON format → { Answer, Summary, Example }.

🔹 Example in Study Buddy AI

System Prompt:
You are an AI Study Assistant. Think step by step to explain the concept, but only show the final answer in JSON with fields: Answer, Summary, Example.

User Prompt:
Explain “Photosynthesis” in simple terms.

Hidden Reasoning (not shown to user):

Photosynthesis happens in plants.

Plants use sunlight, carbon dioxide, and water.

They produce glucose and oxygen.

Simplify for students.

Final Output (shown to user):

{
  "Answer": "Photosynthesis is the process where plants use sunlight, carbon dioxide, and water to make food (glucose) and release oxygen.",
  "Summary": "Plants make food using sunlight and give out oxygen.",
  "Example": "Like how a solar panel converts sunlight to energy, plants convert sunlight to food."
}

📌 Why Chain-of-Thought Prompting in Study Buddy AI?

. Deeper reasoning → AI avoids shallow or wrong answers.

. Accurate explanations → Useful for tricky or complex concepts.

. Student-friendly → Step-by-step reasoning ensures clarity in the final simplified answer.

. Consistency → Always returns structured { Answer, Summary, Example }.


Evaluation Dataset & Testing Framework – Study Buddy AI

To ensure Study Buddy AI gives reliable and accurate answers, we designed an evaluation pipeline with:

📚 A dataset of Q&A samples from different subjects.

🧑‍⚖️ A judge prompt to compare AI’s answer with the expected result.

⚙️ A lightweight testing framework to run all evaluation cases.

📂 Evaluation Dataset (5 Samples)
[
  {
    "id": 1,
    "subject": "Math",
    "question": "What is 2+2?",
    "expected": "Answer: 4"
  },
  {
    "id": 2,
    "subject": "Physics",
    "question": "State Newton's First Law of Motion.",
    "expected": "An object stays at rest or in motion unless acted upon by an external force."
  },
  {
    "id": 3,
    "subject": "Biology",
    "question": "What is the powerhouse of the cell?",
    "expected": "Mitochondria"
  },
  {
    "id": 4,
    "subject": "History",
    "question": "Who was the first President of the USA?",
    "expected": "George Washington"
  },
  {
    "id": 5,
    "subject": "Computer Science",
    "question": "What does RAG stand for in AI?",
    "expected": "Retrieval-Augmented Generation"
  }
]

🧑‍⚖️ Judge Prompt
You are a judge. Compare the model's output with the expected result.  

Evaluation Parameters:  
1. Correctness – Did the model give the right answer?  
2. Completeness – Did it fully address the question?  
3. Clarity – Is the answer easy to understand for a student?  
4. Format – Is the response in the required structure (Answer, Summary, Example)?  

Return: Pass / Fail with a short justification.  

⚙️ Testing Framework Setup

We built a simple test runner that:

Iterates through all dataset samples.

Sends each question to the AI model.

Captures the AI’s output and compares with expected using the judge prompt.

Logs results as ✅ Pass / ❌ Fail with explanations.

for test in dataset:
    ai_output = run_model(test["question"])
    verdict = judge(ai_output, test["expected"])
    print(f"Test {test['id']}: {verdict}")