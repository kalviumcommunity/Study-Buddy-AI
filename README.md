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



## 🎯 One-Shot Prompting  

In CodeSage, we use **One-Shot Prompting**, where the AI is given a **single example** before performing the task.  
This helps guide the model with a reference while still keeping it generalizable.  

### 🔹 One-Shot Prompt  

**System Prompt:**  
You are an AI code reviewer. Analyze the given code, detect bugs, and suggest improvements.  
Always return results in JSON format with three fields: `issues`, `suggestions`, and `overall_feedback`.  

**User Prompt (with one example):**  

Example Input (Python):  
```python
def divide(a, b):
    return a * b  # intended to be division
````

Example Expected Output (JSON):

```json
{
  "issues": ["The operator used is multiplication instead of division."],
  "suggestions": ["Replace '*' with '/' to correctly divide the numbers."],
  "overall_feedback": "Logic error detected in the function implementation."
}
```

Now review the following Java code:

```java
public int subtract(int a, int b) {
    return a + b; // intended to be subtraction
}
```

### 📌 Why One-Shot Prompting?

* Provides **one guiding example** to set the response pattern.
* Ensures the AI generates **consistent, structured outputs**.
* Reduces ambiguity compared to zero-shot prompting.


## 🎯 Multi-Shot Prompting  

In CodeSage, we apply **Multi-Shot Prompting**, where the AI is provided with **multiple examples** before being asked to solve the real task.  
This method ensures the AI clearly understands the **pattern, structure, and expectations** of the output.  

### 🔹 Multi-Shot Prompt  

**System Prompt:**  
You are an AI code reviewer. Analyze the given code, detect bugs, and suggest improvements.  
Always return results in JSON format with three fields: `issues`, `suggestions`, and `overall_feedback`.  

**User Prompt (with multiple examples):**  

Example 1 (Python):  
```python
def add(a, b):
    return a - b  # intended to be addition
````

Expected Output:

```json
{
  "issues": ["The operator used is subtraction instead of addition."],
  "suggestions": ["Replace '-' with '+' to correctly add the numbers."],
  "overall_feedback": "Logic error detected in the addition function."
}
```

Example 2 (JavaScript):

```javascript
function square(n) {
    return n + n; // intended to be square
}
```

Expected Output:

```json
{
  "issues": ["The function doubles the number instead of squaring it."],
  "suggestions": ["Replace 'n + n' with 'n * n' to correctly square the number."],
  "overall_feedback": "Incorrect mathematical operation for squaring."
}
```

Now review the following C++ code:

```cpp
int multiply(int a, int b) {
    return a - b; // intended to be multiplication
}
```

### 📌 Why Multi-Shot Prompting?

* Gives the AI **multiple reference patterns** to ensure consistent results.
* Helps in **complex tasks** where one example isn’t enough.
* Reduces errors and improves **accuracy of code reviews**.