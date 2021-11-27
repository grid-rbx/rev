import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Translate, { translate } from "@docusaurus/Translate";

function HomepageHeader() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate id="homepage.h1" description="Homepage H1">
            Rev
          </Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate
            id="homepage.tagline"
            description="Subtitle on the homepage"
          >
            Roblox account linking, made easy.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            <Translate
              id="homepage.button"
              description="Button to 'Get Started'"
            >
              Get Started
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        id: "homepage.title",
        message: "Home",
        description: "Homepage title",
      })}
      description={translate({
        id: "homepage.description",
        message: "Roblox account linking, made easy.",
        description: "Homepage description",
      })}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
