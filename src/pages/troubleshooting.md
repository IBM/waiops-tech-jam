---
title: TechJam Troubleshooting
---

# TechJam Troubleshooting

If you are experiencing issues with your environment you can use this guide to
help provide additional context for the SWAT team to assist with troubleshooting
your issue.

- You have access to a TechZone environment but the environment is not
  configured as your would expect.
  [Collect automation logs](#collect-automation-logs)

- Your environment failed to provision.
  [Collect the Transaction ID](#collect-transaction-id).

## Collect Automation Logs

If you find your newly provisioned environment is not working as expected and
you require help from the SWAT team, please complete the following steps to
provide additional context when posting your question:

1. From the Bastion host (Guacamole), open a terminal window by selecting
   **Activities** at the top left of the screen and then the terminal icon.

![open-terminal](/img/open-terminal.png)

2. Run the following command:

   ```
   tail -n 100 playbook-run.log
   ```

3. Copy as much of the output as possible starting from the very bottom.

4. Let us know about the issue you are facing in the _#jam-in-a-box_ Slack
   channel.

   To keep the main thread easy to follow please follow the instructions below
   when posting:

   :::warning Slack

   1. Ask your question in the main thread (do not include the log output in the
      initial message).
   2. After posting your message, select **reply to thread** on your own
      message.
   3. In the thread view type `/snippet` and select **Create a text snippet**.
      Paste your logs into the snippet and select **Create Snippet**.

   This will make it easier for us to work with your logs and keep the main
   thread clean and easy to follow.

   :::

## Collect Transaction ID

The Transaction ID will help us identify the specific provisioning attempt that
failed. Please follow the steps below to collect the Transaction ID:

1. From TechZone select **My Library** and then **My Reservations** from the top
   menu.

   ![open-terminal](/img/my-reservations.png)

1. Clear any existing filters and add a filter for **failed**.

   ![open-terminal](/img/filters.png)

1. Select the tile for the failed reservation.

1. Copy the Transaction ID.

   ![open-terminal](/img/transaction-id.png)

1. Send us a message in slack letting us know what environment you tried to
   provision and the Transaction ID.
