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



## 🎯 Zero-Shot Prompting  

In CodeSage, we apply **Zero-Shot Prompting**, where the AI is asked to perform the task without any prior examples.  
Instead of showing sample inputs/outputs, the AI directly relies on the instructions to understand the task.  
This makes the system **flexible, adaptive, and language-agnostic**.  

### 🔹 Zero-Shot Prompt  

**System Prompt:**  
You are an AI code reviewer. Analyze the given code, detect bugs, and suggest improvements.  
Always return results in JSON format with three fields: `issues`, `suggestions`, and `overall_feedback`.  

**User Prompt:**  
Review the following JavaScript code and provide structured feedback:  

```javascript
function multiply(a, b) {
    return a + b; // intended to be multiplication
}
````

### 📌 Why Zero-Shot Prompting?

* The AI is not given examples — only task-specific instructions.
* It can generalize across **multiple programming languages** and scenarios.
* Ensures **scalable code reviews** without needing predefined cases.
