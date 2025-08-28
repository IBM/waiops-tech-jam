import clsx from "clsx"
import FeatureCard from "@site/src/components/FeatureCard"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import React from "react"
import styles from "./index.module.css"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { FlaskIcon } from "@site/src/components/icons/Flask"
import { BlogIcon } from "@site/src/components/icons/Blog"
import { BestPracticeIcon } from "@site/src/components/icons/BestPractice"

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className={clsx("row", styles.cardRow)}>
          <FeatureCard
            icon={<BestPracticeIcon />}
            title="Best Practices Guides"
            description="Documentation and step-by-step guides covering implementation, troubleshooting, and performance-tuning strategies from the IBM Automation Tiger Team."
            link="/best-practice/practitioner-basics"
            linkText="Explore Guides"
          />
          <FeatureCard
            icon={<FlaskIcon />}
            title="Jam-in-a-Box Labs"
            description="Self-paced, hands-on lab environments leveraging IBM TechZone where you can practice scenarios, test configurations, and learn through guided tutorials."
            link="/labs/jam-in-a-box"
            linkText="Start Lab"
          />
          <FeatureCard
            icon={<BlogIcon />}
            title="Expert Insights Blog"
            description="Stay updated with the latest technical insights from the IBM Automation Tiger Team."
            link="/blog"
            linkText="Read Blog"
          />
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext()

  return (
    <Layout description={`${siteConfig.title} - TechJams & Guides`}>
      <HomepageHeader />
    </Layout>
  )
}
