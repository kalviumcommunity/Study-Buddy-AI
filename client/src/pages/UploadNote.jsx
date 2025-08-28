import React, { useState } from 'react';

const gold = '#C9B037';

function UploadNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You must be logged in to upload notes.');
      return;
    }
    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, content })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Note uploaded successfully!');
        setTitle(''); setContent('');
      } else {
        setError(data.error || 'Upload failed');
      }
    } catch {
      setError('Upload failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form onSubmit={handleSubmit} className="bg-black/90 border rounded-xl p-8 w-full max-w-md shadow-lg" style={{ borderColor: gold }}>
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: gold }}>Upload Note</h2>
        <div className="mb-4">
          <label className="block mb-2 text-yellow-200">Title</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="w-full px-3 py-2 rounded bg-black border border-yellow-700 text-yellow-100" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-yellow-200">Content</label>
          <textarea value={content} onChange={e => setContent(e.target.value)} required rows={6} className="w-full px-3 py-2 rounded bg-black border border-yellow-700 text-yellow-100" />
        </div>
        {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
        {message && <div className="mb-4 text-green-400 text-center">{message}</div>}
        <button type="submit" className="w-full py-2 rounded font-semibold" style={{ backgroundColor: gold, color: 'black' }}>Upload</button>
      </form>
    </div>
  );
}

export default UploadNote;
