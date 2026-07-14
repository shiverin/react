
const baseProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function Icon({ children, ...props }) {
  return (
    <svg {...baseProps} {...props}>
      {children}
    </svg>
  );
}

export function ArrowUpRightIcon(props) {
  return <Icon {...props}><path d="M7 17 17 7" /><path d="M7 7h10v10" /></Icon>;
}

export function ArrowLeftIcon(props) {
  return <Icon {...props}><path d="m15 18-6-6 6-6" /><path d="M9 12h10" /></Icon>;
}

export function ArrowRightIcon(props) {
  return <Icon {...props}><path d="m9 18 6-6-6-6" /><path d="M5 12h10" /></Icon>;
}

export function ChevronDownIcon(props) {
  return <Icon {...props}><path d="m6 9 6 6 6-6" /></Icon>;
}

export function GithubIcon(props) {
  return (
    <Icon {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 2a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
      <path d="M8 19c-3 .9-3-1.5-4-2" />
    </Icon>
  );
}

export function LinkedinIcon(props) {
  return (
    <Icon {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </Icon>
  );
}

export function MailIcon(props) {
  return <Icon {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>;
}

export function DownloadIcon(props) {
  return <Icon {...props}><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></Icon>;
}

export function MenuIcon(props) {
  return <Icon {...props}><path d="M4 7h16" /><path d="M4 17h16" /></Icon>;
}

export function CloseIcon(props) {
  return <Icon {...props}><path d="m6 6 12 12" /><path d="m18 6-12 12" /></Icon>;
}

export function SparkIcon(props) {
  return <Icon {...props}><path d="m12 3 1.3 4.2a5 5 0 0 0 3.3 3.3L21 12l-4.4 1.5a5 5 0 0 0-3.3 3.3L12 21l-1.3-4.2a5 5 0 0 0-3.3-3.3L3 12l4.4-1.5a5 5 0 0 0 3.3-3.3L12 3Z" /></Icon>;
}

export function LayersIcon(props) {
  return <Icon {...props}><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></Icon>;
}

export function CodeIcon(props) {
  return <Icon {...props}><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></Icon>;
}

export function CheckIcon(props) {
  return <Icon {...props}><path d="m5 12 4 4L19 6" /></Icon>;
}

export function TrophyIcon(props) {
  return (
    <Icon {...props}>
      <path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4v2a4 4 0 0 0 4 4" /><path d="M17 6h3v2a4 4 0 0 1-4 4" />
    </Icon>
  );
}

export function HomeIcon(props) {
  return <Icon {...props}><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></Icon>;
}

export function BriefcaseIcon(props) {
  return <Icon {...props}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3" /><path d="M3 12h18" /><path d="M10 12v2h4v-2" /></Icon>;
}

export function UserIcon(props) {
  return <Icon {...props}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></Icon>;
}

export function SendIcon(props) {
  return <Icon {...props}><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></Icon>;
}

export function BookIcon(props) {
  return <Icon {...props}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></Icon>;
}

export function MapPinIcon(props) {
  return <Icon {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></Icon>;
}

export function CalendarIcon(props) {
  return <Icon {...props}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M3 10h18" /></Icon>;
}

export function CopyIcon(props) {
  return <Icon {...props}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></Icon>;
}

export function PrinterIcon(props) {
  return <Icon {...props}><path d="M6 9V2h12v7" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></Icon>;
}

export function DatabaseIcon(props) {
  return <Icon {...props}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></Icon>;
}

export function BrainIcon(props) {
  return (
    <Icon {...props}>
      <path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v.3A3.5 3.5 0 0 0 4.5 15a3 3 0 0 0 5 2.2V5.5a2 2 0 0 0-2-2" />
      <path d="M14.5 4.5A3.5 3.5 0 0 1 18 8v.3a3.5 3.5 0 0 1 1.5 6.7 3 3 0 0 1-5 2.2V5.5a2 2 0 0 1 2-2" />
      <path d="M9.5 9A3 3 0 0 1 7 7.7" /><path d="M14.5 9A3 3 0 0 0 17 7.7" /><path d="M9.5 14a3 3 0 0 0-2.5 1.3" /><path d="M14.5 14a3 3 0 0 1 2.5 1.3" />
    </Icon>
  );
}

export function ExternalLinkIcon(props) {
  return <Icon {...props}><path d="M15 3h6v6" /><path d="m10 14 11-11" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></Icon>;
}

export function ClockIcon(props) {
  return <Icon {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Icon>;
}

export function EyeIcon(props) {
  return <Icon {...props}><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></Icon>;
}
