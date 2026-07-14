import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";
import {
  ArrowUpRightIcon,
  CopyIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  SendIcon,
} from "./Icons";
import SectionHeading from "./SectionHeading";

export default function ContactSection({ showHeading = true }) {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const mailto = useMemo(() => {
    const subject = form.subject || `Portfolio enquiry from ${form.name || "a visitor"}`;
    const body = [
      form.message,
      "",
      form.name ? `Name: ${form.name}` : "",
      form.email ? `Reply to: ${form.email}` : "",
    ].filter(Boolean).join("\n");
    return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="content-section page-shell contact-section">
      {showHeading ? (
        <SectionHeading
          index="06"
          eyebrow="Open channel"
          title={<>Bring the hard problem. <em>We can map the system.</em></>}
          body="I am most interested in technically ambitious work where data, product, and engineering have to meet in the same room."
        />
      ) : null}

      <motion.div
        className="contact-console glass-panel"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75 }}
      >
        <div className="contact-console-copy">
          <div className="console-status"><span /><span>Channel online</span><em>SGT</em></div>
          <h3>Start with context, not ceremony.</h3>
          <p>
            Share what you are building, what is currently blocked, and what a useful outcome looks like.
            The form opens your email client, so no message is stored by this website.
          </p>

          <button className="copy-email-button" type="button" onClick={copyEmail}>
            <span><MailIcon />{profile.email}</span>
            <span>{copied ? "Copied" : "Copy"}<CopyIcon /></span>
          </button>

          <div className="contact-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon /><span>LinkedIn</span><ArrowUpRightIcon />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon /><span>GitHub</span><ArrowUpRightIcon />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              <span>Name</span>
              <input name="name" value={form.name} onChange={updateField} placeholder="Your name" autoComplete="name" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" value={form.email} onChange={updateField} placeholder="you@company.com" autoComplete="email" />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input name="subject" value={form.subject} onChange={updateField} placeholder="What are we solving?" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" value={form.message} onChange={updateField} rows="7" placeholder="A little context goes a long way..." required />
          </label>
          <button className="primary-button contact-submit" type="submit">
            <span>Compose email</span><SendIcon />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
