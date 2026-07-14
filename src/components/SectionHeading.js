import { motion } from "framer-motion";

export default function SectionHeading({ index, eyebrow, title, body, align = "start" }) {
  return (
    <motion.header
      className={`section-heading section-heading-${align}`}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="section-kicker">
        <span>{index}</span>
        <span className="kicker-line" />
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </motion.header>
  );
}
