import React from "react"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import styles from "./styles.module.css"

export default function FeatureCard({
  icon,
  title,
  description,
  link,
  linkText
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  linkText: string
}) {
  return (
    <div className={clsx("col", "col--4")}>
      <div className={clsx(styles.featureCard)}>
        <div className={styles.iconContainer}>
          {icon}
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <Link
            className={clsx("button", styles.button)}
            to={link}
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  )
}
