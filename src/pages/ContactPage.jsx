import { useState } from "react";
import ContactCard from "../components/ContactCard";
import { ArrowIcon } from "../components/Icons";
import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import { profile } from "../data/portfolio";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function submit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "a new contact"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="content-page contact-page long-page__section" id="contact" tabIndex="-1">
      <PageIntro
        eyebrow="Contact · 06"
        copy="Email is the best way to reach me. I usually reply within a couple of days."
      />

      <section className="contact-layout">
        <Reveal><ContactCard /></Reveal>
        <Reveal className="contact-form-card glass-panel" delay={100}>
          <span className="eyebrow">Compose an email</span>
          <form onSubmit={submit}>
            <label><span>Your name</span><input name="name" value={form.name} onChange={updateField} autoComplete="name" placeholder="Name" required /></label>
            <label><span>Your email</span><input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" placeholder="you@example.com" required /></label>
            <label><span>What are you thinking about?</span><textarea name="message" value={form.message} onChange={updateField} placeholder="A project, opportunity, technical problem or simply hello…" rows="7" required /></label>
            <button className="glass-button glass-button--ink" type="submit">Open in email <ArrowIcon /></button>
          </form>
          <p>This form opens your default email app. No data is stored by this website.</p>
        </Reveal>
      </section>

    </section>
  );
}
