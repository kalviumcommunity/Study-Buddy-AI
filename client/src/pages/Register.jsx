import React, { useState } from 'react';

const gold = '#C9B037';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('Registration successful! You can now login.');
        setName(''); setEmail(''); setPassword('');
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch (error) {
      setError('Registration failed',error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form onSubmit={handleSubmit} className="bg-black/90 border rounded-xl p-8 w-full max-w-md shadow-lg" style={{ borderColor: gold }}>
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: gold }}>Register</h2>
        <div className="mb-4">
          <label className="block mb-2 text-yellow-200">Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required className="w-full px-3 py-2 rounded bg-black border border-yellow-700 text-yellow-100" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-yellow-200">Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-3 py-2 rounded bg-black border border-yellow-700 text-yellow-100" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-yellow-200">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full px-3 py-2 rounded bg-black border border-yellow-700 text-yellow-100" />
        </div>
        {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
        {success && <div className="mb-4 text-green-400 text-center">{success}</div>}
        <button type="submit" className="w-full py-2 rounded font-semibold" style={{ backgroundColor: gold, color: 'black' }}>Register</button>
        <div className="mt-4 text-center">
          <a href="/login" className="text-yellow-400 hover:underline">Already have an account? Login</a>
        </div>
      </form>
    </div>
  );
}

export default Register;
