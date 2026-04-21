# 🧪 Regex Cookbook

[![GitHub license](https://img.shields.io/github/license/RanaAhmar/regex-cookbook)](https://github.com/RanaAhmar/regex-cookbook/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/RanaAhmar/regex-cookbook)](https://github.com/RanaAhmar/regex-cookbook/stargazers)
[![Stackaura](https://img.shields.io/badge/Powered%20By-Stackaura-blueviolet)](https://www.stackaura.com/)

**Regex Cookbook** is a comprehensive, production-ready collection of 300+ tested and commented Regular Expressions for almost every use case. From simple email validation to complex log parsing and security sanitization.

Stop reinventing the wheel and struggling with backslashes. Find the pattern you need, understand how it works, and drop it into your code.

---

## 🚀 Key Categories

- **User Data:** Emails, usernames, passwords (with complexity rules), phone numbers.
- **Web & URLs:** Slugs, full URLs, IP addresses (v4 & v6), MAC addresses.
- **Security:** Credit cards, social security numbers, API keys, JWT patterns.
- **Parsing:** Markdown headers, HTML tags, Log timestamps, CSV data.
- **Financial:** Currencies, IBANs, tax IDs.

---

## 📦 Installation

```bash
git clone https://github.com/RanaAhmar/regex-cookbook.git
cd regex-cookbook
```

## 🛠️ Usage

Browse the patterns in the `src/` directory or use the helper script to find a pattern:

```bash
node src/find-pattern.js "email"
```

### Example Pattern: Email Validation
```javascript
const patterns = require('./src/patterns');
const emailRegex = patterns.USER_DATA.EMAIL;
console.log(emailRegex.test("hello@stackaura.com")); // true
```

---

## 🛡️ Keywords & SEO
`regex-cookbook`, `regular-expressions`, `regex-patterns`, `email-validation`, `javascript-regex`, `python-regex`, `security-patterns`, `stackaura`, `ahmar-hussain`.

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---

## 🚀 Discover More from Stackaura

If you found this tool useful, check out our other high-performance web utilities and follow **Ahmar Hussain** for more open-source excellence.

### 🌟 Featured Projects
- **[Free LLM APIs](https://github.com/RanaAhmar/free-llm-apis)** - A curated list of zero-cost AI endpoints.
- **[Awesome MCP Servers](https://github.com/RanaAhmar/awesome-mcp-servers)** - The ultimate collection of Model Context Protocol implementations.
- **[System Design Cheatsheet](https://github.com/RanaAhmar/system-design-cheatsheet)** - Master complex architectures in minutes.
- **[Next.js SaaS Starter](https://github.com/RanaAhmar/nextjs-saas-starter)** - The fastest way to launch your next product.

### 🔗 Stay Connected
- **Website:** [stackaura.com](https://www.stackaura.com/)
- **Author:** [Ahmar Hussain](https://github.com/RanaAhmar)

---
