import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    title: translate({
      id: "features.firstTitle",
      message: "Easy to Use",
      description: "Title for first feature on homepage.",
    }),
    Svg: require("../../static/img/undraw_handcrafts_accept.svg").default,
    description: (
      <>
        <Translate
          id="features.firstDescription"
          description="Description for first feature on homepage."
        >
          Rev is built using modern web practices, to make linking Roblox
          accounts to your services easy as connections anywhere else.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: "features.secondTitle",
      message: "Focus on What Matters",
      description: "Title for second feature on homepage.",
    }),
    Svg: require("../../static/img/undraw_handcrafts_growth.svg").default,
    description: (
      <>
        <Translate
          id="features.secondDescription"
          description="Description for second feature on homepage."
        >
          Rev lets you focus on your product, and we&apos;ll do the chores. Go
          ahead and get to work on what really matters, your product.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: "features.thirdTitle",
      message: "Completely Customizable",
      description: "Title for third feature on homepage.",
    }),
    Svg: require("../../static/img/undraw_handcrafts_balloon.svg").default,
    description: (
      <>
        <Translate
          id="features.thirdDescription"
          description="Description for third feature on homepage."
        >
          Want to use a certain set of emojis? We got you. Want to only check on
          RoVer's servers? You do you, amigo. Rev is built for everyone.
        </Translate>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
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
