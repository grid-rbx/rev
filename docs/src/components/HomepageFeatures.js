import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    description: (
      <>
        Rev is built using modern web practices, to make linking Roblox accounts
        to your services easy as connections anywhere else.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    description: (
      <>
        Rev lets you focus on your product, and we&apos;ll do the chores. Go
        ahead and get to work on what really matters, your product.
      </>
    ),
  },
  {
    title: "Completely Customizable",
    description: (
      <>
        Want to use a certain set of emojis? We got you. Want to only check on
        RoVer's servers? You do you, amigo. Rev is built for everyone.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
