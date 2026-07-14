import React from "react";
import { capabilities } from "../data/portfolioData";

function SignalItems({ hidden = false }) {
  return (
    <div className="signal-track-set" aria-hidden={hidden || undefined}>
      {capabilities.map((capability) => (
        <React.Fragment key={`${capability}-${hidden ? "clone" : "original"}`}>
          <span>{capability}</span>
          <i aria-hidden="true" />
        </React.Fragment>
      ))}
    </div>
  );
}

export default function SignalStrip() {
  return (
    <div className="signal-strip" aria-label={`Capabilities: ${capabilities.join(", ")}`}>
      <div className="signal-marquee">
        <SignalItems />
        <SignalItems hidden />
      </div>
    </div>
  );
}
