---
title: 1. Introduction
description:
  Introductory material that includes concepts, major features and an
  introduction to the lab environment and demo app.
sidebar_position: 1
---

Welcome to the Watson for AIOps Event Manager tutorial series.

![](images/Intro.png)

:::note

For Watson for AIOps Event Manager modules :

- You can skip section 2.2 if your cluster already exists.
- You will have an email with your dedicated cluster information, including your
  control VM.
- The AIops OpenShift cluster is the one you will be installing Event Manager
  onto.

- For any instructions that use the "oc" command (interacting with your
  cluster), use your "control" VM:

  1.  Download the rsa_id and rsa_id.pub files to your laptop
  2.  chmod 600 rsa_id (otherwise the ssh will fail)
  3.  Connect with: ssh -i rsa_id jammer@<control-vm-ip\>
  4.  Log in to your cluster using the Login Command copied from the OpenShift
      UI

- You can obtain a trial license from:
  https://www.ibm.com/account/reg/us-en/login?formid=urx-51074

:::
