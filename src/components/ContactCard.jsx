import { profile } from "../data/portfolio";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./Icons";

export default function ContactCard() {
  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <MailIcon /> },
    { label: "Phone", value: profile.phoneDisplay, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: <PhoneIcon /> },
    { label: "LinkedIn", value: "/in/zhaoshizhen2004", href: profile.linkedin, icon: <LinkedInIcon /> },
    { label: "GitHub", value: "/shiverin", href: profile.github, icon: <GitHubIcon /> },
  ];

  return (
    <div className="contact-card glass-panel">
      <span className="eyebrow">Find me here</span>
      {items.map((item) => (
        <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
          <span className="contact-card__icon">{item.icon}</span>
          <span><small>{item.label}</small><strong>{item.value}</strong></span>
          <ArrowUpRightIcon />
        </a>
      ))}
    </div>
  );
}
