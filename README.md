# 🛡️ aws-safe-module

**Secure-by-default, opinionated CDKTF modules for AWS infrastructure**

## 🚀 Overview

`aws-safe-module` is a library of opinionated, compliant-by-default wrappers for [CDK for Terraform (CDKTF)](https://developer.hashicorp.com/terraform/cdktf) using the AWS provider. It helps you bootstrap infrastructure with guardrails, best practices, and consistency built-in — so teams can move fast without breaking things.

## ✅ Key Features

- 🔒 **Security First** – Encryption, logging, and least-privilege IAM are default, not optional.
- 🧠 **Opinionated Setup** – Enforces naming conventions, tagging, and architectural standards.
- 📦 **Reusable Modules** – Prebuilt secure components like S3, VPCs, IAM roles, and more.
- 📐 **Compliant-by-Design** – Every module bakes in practices aligned with modern compliance requirements (SOC2, HIPAA, GxP, etc.).
- 🧱 **Extensible** – Override or extend modules while preserving core guarantees.

## 📦 Installation

Install via npm:

```bash
npm install @sheplu/aws-safe-module
```

Or with yarn:


```bash
yarn add @sheplu/aws-safe-module
```

## 🧭 Philosophy

Too often, cloud infra suffers from:

- 🪓 Inconsistent naming and tagging
- 🔓 Insecure defaults
- 🧩 Copy-pasted patterns and snowflake setups
- 📉 Hard-to-measure compliance

`aws-safe-module` solves this by defining battle-tested defaults and enforcing standards across teams — enabling scalable, secure cloud infrastructure without friction.

## 🔧 Configuration Principles

Every module is built to:

- Use opinionated defaults, customizable with overrides
- Enforce naming patterns (e.g., project-env-resource)
- Require or auto-inject standard tags (name, env, team)
- Deny public access unless explicitly allowed
- Be easy to integrate into existing CDKTF workflows

## 🧠 Built For

- Platform engineers creating reusable cloud components
- Dev teams who want secure infra without deep AWS expertise
- Organizations enforcing consistency, compliance, and velocity