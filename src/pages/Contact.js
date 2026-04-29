import React, { useState } from "react";

const CHANNELS = [
  { icon: "✉", label: "Email", value: "support@shopblack.com" },
  { icon: "◎", label: "Live Chat", value: "Available Mon–Fri, 9am–6pm" },
  { icon: "◇", label: "Phone", value: "+1 (800) 123-4567" },
];

const inputClass = "w-full bg-white dark:bg-[#16161f] border border-violet-200 dark:border-[#252535] rounded-lg text-[#1e1b4b] dark:text-violet-50 px-3.5 py-2.5 text-[0.9rem] outline-none transition-colors focus:border-violet-500 placeholder:text-violet-400 dark:placeholder:text-[#55556a]";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim() || form.message.length < 10) e.message = "Message must be at least 10 characters";
    return e;
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  }

  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <section className="text-center py-24 pb-16 px-6 border-b border-violet-200 dark:border-[#252535] flex flex-col items-center gap-5">
        <span className="inline-block px-3.5 py-1 border border-violet-500 rounded-full text-[0.78rem] text-violet-500 tracking-wide uppercase">
          Get in Touch
        </span>
        <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-[#1e1b4b] dark:text-violet-50">
          We'd love to hear from you.
        </h1>
        <p className="text-violet-700 dark:text-violet-300 text-base max-w-[480px] leading-7">
          Have a question, a concern, or just want to say hello? Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </section>

      <div className="max-w-[1100px] mx-auto py-16 px-6 flex flex-col gap-12">

        {/* ── Channels ── */}
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {CHANNELS.map((c) => (
            <div key={c.label} className="bg-violet-100 dark:bg-[#13131e] border border-violet-200 dark:border-[#252535] rounded-[10px] p-6 flex flex-col gap-1.5 transition-colors hover:border-violet-500">
              <span className="text-[1.3rem] text-violet-500">{c.icon}</span>
              <span className="text-[0.75rem] text-violet-400 dark:text-[#55556a] uppercase tracking-wide">{c.label}</span>
              <span className="text-[0.9rem] text-violet-700 dark:text-violet-300 font-medium">{c.value}</span>
            </div>
          ))}
        </div>

        {/* ── Form ── */}
        <div className="bg-violet-100 dark:bg-[#13131e] border border-violet-200 dark:border-[#252535] rounded-xl p-10">
          {submitted ? (
            <div className="text-center py-12 px-4 flex flex-col items-center gap-4">
              <div className="w-14 h-14 bg-violet-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">✓</div>
              <h2 className="text-[1.5rem] font-bold text-[#1e1b4b] dark:text-violet-50">Message sent!</h2>
              <p className="text-violet-700 dark:text-violet-300 text-[0.95rem] max-w-[360px]">
                Thanks for reaching out, {form.name}. We'll reply to {form.email} within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                className="bg-transparent border border-violet-400 dark:border-[#3d3d5c] text-violet-700 dark:text-violet-300 px-5 py-2.5 rounded-lg cursor-pointer text-[0.9rem] transition-all hover:border-violet-500 hover:text-violet-500"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <h2 className="text-[1.3rem] font-bold text-[#1e1b4b] dark:text-violet-50 mb-2">Send a message</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.85rem] font-semibold text-violet-700 dark:text-violet-300">Your Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" className={inputClass} />
                  {errors.name && <span className="text-red-500 dark:text-red-400 text-[0.8rem]">{errors.name}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.85rem] font-semibold text-violet-700 dark:text-violet-300">Email Address</label>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" type="email" className={inputClass} />
                  {errors.email && <span className="text-red-500 dark:text-red-400 text-[0.8rem]">{errors.email}</span>}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.85rem] font-semibold text-violet-700 dark:text-violet-300">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" className={inputClass} />
                {errors.subject && <span className="text-red-500 dark:text-red-400 text-[0.8rem]">{errors.subject}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.85rem] font-semibold text-violet-700 dark:text-violet-300">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Write your message here..." className={`${inputClass} resize-y`} />
                {errors.message && <span className="text-red-500 dark:text-red-400 text-[0.8rem]">{errors.message}</span>}
              </div>
              <button type="submit" className="w-full py-3.5 bg-violet-500 hover:bg-violet-600 text-white border-none rounded-lg text-base font-bold cursor-pointer transition-colors">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── Map placeholder ── */}
      <section className="border-t border-violet-200 dark:border-[#252535]">
        <div className="bg-violet-100 dark:bg-[#13131e] h-[200px] flex flex-col items-center justify-center gap-3 text-violet-400 dark:text-[#55556a] text-[2rem]">
          <span>◎</span>
          <p className="text-[0.9rem]">123 Commerce Street, New York, NY 10001</p>
        </div>
      </section>

    </div>
  );
}
