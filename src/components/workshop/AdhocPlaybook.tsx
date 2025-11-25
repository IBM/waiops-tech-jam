import Admonition from "@theme/Admonition"
import CodeBlock from "@theme/CodeBlock"
import WorkshopOnly from "@site/src/components/workshop/WorkshopOnly"

export default function WorkshopAdhocPlaybook({
  playbookFullPath,
  title = "Mandatory Prerequisite Setup",
}: {
  playbookFullPath: string
  title: string
}) {
  return (
    <WorkshopOnly>
      <Admonition type="warning" title={title}>
        <p>
          You are in a workshop setting which uses a single base classroom
          environment for all the lab exercises. In order to ensure the required
          prerequisite setup and dependencies for this lab are in place, please
          execute the following automation before proceeding with the lab
          instructions below:
        </p>
        <CodeBlock language="bash" title="Host: bastion-gym-lan (admin user)">
          {`ansible-playbook -i ~/ansible/hosts \\
    ${playbookFullPath}`}
        </CodeBlock>
      </Admonition>
    </WorkshopOnly>
  )
}
