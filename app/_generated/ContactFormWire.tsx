'use client';
/**
 * ContactFormWire - the one live wire of the contact-form kit. Part of the
 * hand-curated capability bundle (never AI-generated). It posts the fields to the
 * studio's public submit route, which emails the site owner and/or stores a row in
 * the site's own database. Presentation-first: the native <form action> works with
 * scripting OFF (the route 303-redirects back with ?submitted=1); with JS on, the
 * submit is enhanced to a background fetch with inline status, so the page never
 * navigates away.
 */
import { useState } from 'react';
import type { CSSProperties, FormEvent, ReactElement } from 'react';

const SUBMIT_URL = 'https://studio.ecodia.au/api/sites/73957d67-0d18-472a-9bd0-4dc8fc8475b6/submit';

export interface ContactFormWireProps {
  submitLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  surfaceAlt: string;
  line: string;
  radius: string;
  ink: string;
  muted: string;
  primary: string;
  onPrimary: string;
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactFormWire(props: ContactFormWireProps): ReactElement {
  const { submitLabel, namePlaceholder, emailPlaceholder, messagePlaceholder, surfaceAlt, line, radius, ink, muted, primary, onPrimary } = props;
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (status === 'sending') return;
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    const fields: Record<string, string> = {};
    data.forEach((v, k) => {
      if (typeof v === 'string' && k !== '_gotcha' && k !== 'form') fields[k] = v;
    });
    setStatus('sending');
    try {
      const res = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ form: 'contact', fields }),
      });
      if (res.ok) {
        setStatus('sent');
        formEl.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const field: CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    backgroundColor: surfaceAlt,
    border: '1px solid ' + line,
    borderRadius: radius,
    color: ink,
    fontSize: '15px',
  };

  if (status === 'sent') {
    return (
      <div className="mt-10 text-center" style={{ backgroundColor: surfaceAlt, border: '1px solid ' + line, borderRadius: radius, padding: '28px' }}>
        <p style={{ color: ink, fontSize: '16px', fontWeight: 600 }}>Thank you. Your message is on its way.</p>
        <p className="mt-1" style={{ color: muted, fontSize: '14px' }}>We will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form action={SUBMIT_URL} method="post" onSubmit={onSubmit} className="mt-10 flex flex-col gap-4">
      <input type="hidden" name="form" value="contact" />
      {/* honeypot: real people leave it blank; hidden from view and assistive tech */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} />
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium" style={{ color: ink }}>Name</span>
        <input name="name" type="text" required placeholder={namePlaceholder} style={field} />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium" style={{ color: ink }}>Email</span>
        <input name="email" type="email" required placeholder={emailPlaceholder} style={field} />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium" style={{ color: ink }}>Message</span>
        <textarea name="message" required rows={5} placeholder={messagePlaceholder} style={{ ...field, resize: 'vertical' }} />
      </label>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-60"
          style={{ backgroundColor: primary, color: onPrimary, borderRadius: radius, border: 'none', cursor: status === 'sending' ? 'wait' : 'pointer' }}
        >
          {status === 'sending' ? 'Sending...' : submitLabel}
        </button>
        {status === 'error' ? (
          <span className="text-sm" style={{ color: muted }}>Something went wrong. Please try again.</span>
        ) : null}
      </div>
    </form>
  );
}
