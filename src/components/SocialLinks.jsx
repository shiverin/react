import { profile } from "../data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`social-links ${className}`.trim()}>
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
      <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
    </div>
  );
}
