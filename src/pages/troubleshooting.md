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
  [Collect the Transaction & Reservation IDs](#collect-transaction-and-reservation-ids).

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
   channel. Please follow the below guidance when posting in the channel:

   :::warning Slack

   **To keep the main thread easy to follow please follow the instructions below
   when posting:**

   1. Let us know a brief description of your issue in the main thread (Do not
      include the log output in the main thread).
   2. After posting your message, select **reply to thread** on your own
      message.
   3. In the thread view include the following:
      - A link to the TechZone environment you attempted to provision.
      - Your
        [Reservation and Transaction IDs](#collect-transaction-and-reservation-ids).
      - type `/snippet` and select **Create a text snippet**. Paste your logs
        into the snippet and select **Create Snippet**.

   This will make it easier for us to understand your issue and keep the main
   thread clean and easy to follow for all.

   :::

## Collect Transaction and Reservation IDs

The Transaction ID will help us identify the specific provisioning attempt that
failed. Please follow the steps below to collect the Transaction ID:

1. From TechZone select **My Library** and then **My Reservations** from the top
   menu.

   ![open-terminal](/img/my-reservations.png)

1. Clear any existing filters and add a filter for **failed**.

   ![open-terminal](/img/filters.png)

1. Select the tile for the failed reservation.

1. Copy the Reservation and Transaction IDs.

   ![open-terminal](/img/reservation-and-transaction-ids.png)

1. Send us a message in slack with the following information:
   - A link to the TechZone environment you attempted to provision
   - The Reservation ID
   - The Transaction ID
