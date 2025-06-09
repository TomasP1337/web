import React, { useState } from 'react';

export default function Kontakt() {
  const [status, setStatus] = useState('');

  const send = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(data.entries())),
    });
    if (res.ok) {
      setStatus('Zpráva odeslána');
      e.target.reset();
    } else {
      setStatus('Chyba při odesílání');
    }
  };

  return (
    <main>
      <h1>Kontaktujte nás</h1>
      <form onSubmit={send}>
        <label>
          Jméno
          <input name="name" required />
        </label>
        <label>
          E-mail
          <input name="email" type="email" required />
        </label>
        <label>
          Zpráva
          <textarea name="message" required />
        </label>
        <button type="submit">Odeslat</button>
      </form>
      {status && <p>{status}</p>}
    </main>
  );
}
