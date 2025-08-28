const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const dataset = JSON.parse(fs.readFileSync(path.join(__dirname, 'evaluationDataset.json'), 'utf-8'));

const judgePrompt = (expected, actual) => {
  // Simple scoring function for demo purposes
  function scoreField(field) {
    return expected[field] && actual[field] && expected[field].trim() === actual[field].trim() ? 1 : 0;
  }
  return {
    AnswerScore: scoreField('Answer'),
    SummaryScore: scoreField('Summary'),
    ExampleScore: scoreField('Example'),
    Comment: `Answer: ${scoreField('Answer') ? 'Correct' : 'Incorrect'}, Summary: ${scoreField('Summary') ? 'Correct' : 'Incorrect'}, Example: ${scoreField('Example') ? 'Correct' : 'Incorrect'}`
  };
};

async function runEvaluation() {
  let results = [];
  for (const sample of dataset) {
    // Call your model endpoint (replace with your actual endpoint)
    const res = await fetch('http://localhost:5000/api/notes/question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer YOUR_JWT_TOKEN' },
      body: JSON.stringify({ question: sample.question, note: sample.note })
    });
    const data = await res.json();
    const actual = data.aiAnswer || {};
    const scores = judgePrompt(sample.expected, actual);
    results.push({ question: sample.question, scores });
    console.log(`Q: ${sample.question}\nScores:`, scores);
  }
  // Summary
  const total = results.length;
  const answerTotal = results.reduce((sum, r) => sum + r.scores.AnswerScore, 0);
  const summaryTotal = results.reduce((sum, r) => sum + r.scores.SummaryScore, 0);
  const exampleTotal = results.reduce((sum, r) => sum + r.scores.ExampleScore, 0);
  console.log(`\nTotal: ${total}`);
  console.log(`Answer Correct: ${answerTotal}/${total}`);
  console.log(`Summary Correct: ${summaryTotal}/${total}`);
  console.log(`Example Correct: ${exampleTotal}/${total}`);
}

runEvaluation();
