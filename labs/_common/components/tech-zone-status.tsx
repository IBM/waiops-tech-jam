import React, {useState, useEffect} from "react"
import styles from "./tech-zone-status.module.css"

type Status = "Operational" | "Limited Capacity"

interface Container {
  id: string
  name: string
  updated: string
  status: Status
  status_code: number
}

interface GroupedContainers {
  AP: Container[]
  EMEA: Container[]
  AMERICAS: Container[]
}

export default function TechZoneStatus() {
  const [data, setData] = useState<null | GroupedContainers>(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.status.io/1.0/status/5ccca60e07680b4ae9900d24",
        )
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const jsonData = await response.json()

        // Get only the VMWare infra where the SWAT Tech Jams run
        const vmwareInfrastructure = jsonData?.result?.status?.filter(
          status => {
            return status.name === "VMWare Infrastructure"
          },
        ) as {
          id: string
          name: string
          status: Status
          status_code: number
          containers: Container[]
        }[]

        if (!vmwareInfrastructure) {
          throw new Error("VMWare Infrastructure not found")
        }

        const groupedContainers: GroupedContainers = {
          AP: [],
          EMEA: [],
          AMERICAS: [],
        }

        vmwareInfrastructure[0].containers.forEach(container => {
          if (container.name.includes("EU")) {
            groupedContainers.EMEA.push(container)
          } else if (container.name.includes("AP")) {
            groupedContainers.AP.push(container)
          } else {
            // Everything else is AMERICAS. For example there are some containers like: "Spectrum POD - WDC04" and "OCPGYM POD - DAL12" that don't include a region in the name.
            groupedContainers.AMERICAS.push(container)
          }
        })

        setData(groupedContainers)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={styles.status}>
      {data ? (
        <>
          <div className={styles.table}>
            <div className={styles.header}>Americas</div>
            <div className={styles.header}>Europe</div>
            <div className={styles.header}>AP</div>
            <div className={styles.data}>
              {data.AMERICAS.map(container => {
                return (
                  <span
                    key={container.name}
                    className={
                      container.status === "Operational"
                        ? styles.badgeOperational
                        : container.status === "Limited Capacity"
                        ? styles.badgeLimited
                        : styles.badgeCritical
                    }
                  >
                    {container.name}
                  </span>
                )
              })}
            </div>
            <div className={styles.data}>
              {data.EMEA.map(container => {
                return (
                  <span
                    key={container.name}
                    className={
                      container.status === "Operational"
                        ? styles.badgeOperational
                        : container.status === "Limited Capacity"
                        ? styles.badgeLimited
                        : styles.badgeCritical
                    }
                  >
                    {container.name}
                  </span>
                )
              })}
            </div>
            <div className={styles.data}>
              {data.AP.map(container => {
                return (
                  <span
                    key={container.name}
                    className={
                      container.status === "Operational"
                        ? styles.badgeOperational
                        : container.status === "Limited Capacity"
                        ? styles.badgeLimited
                        : styles.badgeCritical
                    }
                  >
                    {container.name}
                  </span>
                )
              })}
            </div>
          </div>
        </>
      ) : error ? (
        <div className={styles.errorMessage}>
          <span>
            There is currently an issue with the Tech Zone status page. To
            manually view the status, please visit{" "}
            <a href="https://techzone.status.io" target="_blank">
              techzone.status.io
            </a>
          </span>
        </div>
      ) : (
        <div className={styles.loading}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              animation: "spin 2s linear infinite",
            }}
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        </div>
      )}
    </div>
  )
}
