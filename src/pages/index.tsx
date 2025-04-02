import clsx from "clsx"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import React from "react"
import styles from "./index.module.css"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/labs/jam-in-a-box"
          >
            View the latest AIOps TechJam Lab 🧑‍🔬
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  return (
    <Layout description="IBM IT & Network Automation Tiger Team - TechJams & Guides">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
