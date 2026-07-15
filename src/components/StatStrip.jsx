import { stats } from "../data/portfolio";
import Reveal from "./Reveal";

export default function StatStrip() {
  return (
    <Reveal className="stat-strip">
      {stats.map((stat) => (
        <div key={stat.label}>
          <strong>{stat.value}<small>{stat.suffix}</small></strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </Reveal>
  );
}
