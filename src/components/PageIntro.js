import { motion } from "framer-motion";

export default function PageIntro({ index, eyebrow, title, body, aside }) {
  return (
    <section className="page-intro page-shell">
      <motion.div
        className="page-intro-main"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="section-kicker"><span>{index}</span><span className="kicker-line" /><span>{eyebrow}</span></div>
        <h1>{title}</h1>
        <p>{body}</p>
      </motion.div>
      {aside ? (
        <motion.aside
          className="page-intro-aside glass-panel"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {aside}
        </motion.aside>
      ) : null}
    </section>
  );
}
