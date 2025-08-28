import React, { useState } from 'react';

const gold = '#C9B037';

function AskQuestion() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setAnswer(null);
    setLoading(true);
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You must be logged in to ask questions.');
      setLoading(false);
      return;
    }
    try {
      const res = await fetch('/api/notes/question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      if (res.ok && data.aiAnswer) {
        setAnswer(data.aiAnswer);
      } else if (data.message) {
        setError(data.message);
      } else {
        setError('No answer found.');
      }
    } catch {
      setError('Failed to get answer.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form onSubmit={handleSubmit} className="bg-black/90 border rounded-xl p-8 w-full max-w-md shadow-lg" style={{ borderColor: gold }}>
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: gold }}>Ask a Question</h2>
        <div className="mb-6">
          <label className="block mb-2 text-yellow-200">Your Question</label>
          <textarea value={question} onChange={e => setQuestion(e.target.value)} required rows={4} className="w-full px-3 py-2 rounded bg-black border border-yellow-700 text-yellow-100" />
        </div>
        {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
        <button type="submit" className="w-full py-2 rounded font-semibold mb-4" style={{ backgroundColor: gold, color: 'black' }} disabled={loading}>{loading ? 'Loading...' : 'Ask'}</button>
        {answer && (
          <div className="bg-black/80 border rounded-lg p-4 mt-4" style={{ borderColor: gold }}>
            <h3 className="text-lg font-bold mb-2" style={{ color: gold }}>AI Answer</h3>
            <div className="text-yellow-100 text-left">
              <div><span className="font-semibold" style={{ color: gold }}>Answer:</span> {answer.Answer}</div>
              <div className="mt-2"><span className="font-semibold" style={{ color: gold }}>Summary:</span> {answer.Summary}</div>
              <div className="mt-2"><span className="font-semibold" style={{ color: gold }}>Example:</span> {answer.Example}</div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default AskQuestion;
