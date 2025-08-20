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