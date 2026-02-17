import { useState } from 'react';

const starter = {
  user: 'What made the Model T so important?',
  assistant: 'It industrialized car ownership through assembly-line efficiency and lower cost.'
};

export default function ChatWidget() {
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([starter]);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = query.trim();
    const history = messages.map((m) => ({ user: m.user, assistant: m.assistant }));

    setMessages((prev) => [...prev, { user: userMessage, assistant: '' }]);
    setQuery('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history })
      });
      const data = await res.json();
      const assistant = `${data.narrative}\n\n${data.structured.knowledge
        .map((k) => `${k.heading}: ${k.details.join(' | ')}`)
        .join('\n')}`;

      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1].assistant = assistant;
        return copy;
      });
    } catch (error) {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1].assistant = 'I could not reach the automotive intelligence service. Please retry.';
        return copy;
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`chat-widget ${open ? 'open' : 'closed'}`}>
      <button className="chat-toggle" onClick={() => setOpen((v) => !v)}>
        {open ? 'Hide AI Expert' : 'Ask AI Expert'}
      </button>
      {open && (
        <div className="chat-panel glass">
          <h3>Auto Historian + Engineer AI</h3>
          <div className="chat-log">
            {messages.map((msg, i) => (
              <div key={i} className="chat-entry">
                <p><strong>You:</strong> {msg.user}</p>
                <p><strong>AI:</strong> {msg.assistant || 'Analyzing automotive knowledge...'}</p>
              </div>
            ))}
          </div>
          <form onSubmit={submit} className="chat-form">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Compare Ferrari F40 and Tesla Model S Plaid..."
            />
            <button type="submit" disabled={loading}>{loading ? 'Thinking…' : 'Send'}</button>
          </form>
        </div>
      )}
    </div>
  );
}
