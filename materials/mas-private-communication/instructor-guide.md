# MAS — Private Mesh & Secure Off-Grid Communication

**Optional Project 7 · 8-week intermediate extension**. This is a separate project; the original six required cybersecurity portfolio capstones remain unchanged. The project models private communications for an **imaginary 500-acre farm** with three owned nodes: headquarters, equipment station and remote monitoring post.

**Purpose:** Learn how LoRa/mesh systems can carry messages off grid, how to enforce authorized-device-only communication at the application design level, how encryption and key rotation work conceptually, and how to record unauthorized attempts without monitoring other people's communications. Build a defensive, entirely **isolated, synthetic honeypot simulation**. No functioning real radio network or live encryption service is shipped by this website.

**Boundaries:** Use only authorized radios, channel settings, legal operating bands and your own lab. Do not capture third-party communications, impersonate nodes, interfere with radio service, scan public systems or deploy the sample decoy on the internet. The offline simulator uses an invented allowlist and toy payloads; it demonstrates policy and telemetry, not cryptographic protection or secure radio firmware. For any real build, verify radio hardware, local RF law, platform security and the current encryption/authentication documentation with vendors.

**Project evidence:** network diagram, stakeholder privacy matrix, mock channel/identity/key policy, allowlist and revocation plan, safe simulated logs and screenshots, honeypot isolation diagram, incident playbook, range-test protocol (if using authorized radios), results and limitations, executive briefing.

## Instructor guide · teaching edition

This course supports one instructor per 8-week cohort or independent study. All assessments are descriptive project rubrics; the website’s 36 five-question quizzes are graded separately.

### Week 1: Introduction to private mesh communications

**Instructor objectives:** Identify a farm or remote-field communication scenario; define who must communicate and what metadata may be visible.

**Lecture (~45 minutes):** Introduce the key models, known limitations and safety rules. Ask students for a concrete operational scenario involving the three fictional nodes.

**Guided demonstration (~60 minutes):** Draw the three-node architecture and define in-scope/out-of-scope traffic.

**Independent practice (~90 minutes):** Have learners produce a diagram, policy, or synthetic event artifact, then describe a test they could repeat safely.

**Debrief (~30 minutes):** Explain availability vs confidentiality vs authentication; record a threat model.

**Common misconception:** LoRa/mesh range, encryption, node allowlisting and end-to-end privacy are not interchangeable guarantees. Explain what was simulated, assumed, or not evaluated.

**Rubric (each 0-4):** correctness of model, least-privilege/consent, reproducible safe evidence, limitations/tradeoffs, quality of written explanation. **Pass = 16/20**, provided no unsafe activity occurred. Record grade separately from the five-question weekly website assessments.

**Troubleshooting prompts:** Which node is allowed? Where is the message processed? What metadata is visible? Is the decoy physically/logically isolated? How would you revoke a lost device?

### Week 2: RF, LoRa and relaying

**Instructor objectives:** Compare radio frequency, bandwidth, line of sight, terrain, antenna, legal operating rules and hop limits.

**Lecture (~45 minutes):** Introduce the key models, known limitations and safety rules. Ask students for a concrete operational scenario involving the three fictional nodes.

**Guided demonstration (~60 minutes):** Calculate a qualitative coverage map for three owned nodes, with realistic limitations.

**Independent practice (~90 minutes):** Have learners produce a diagram, policy, or synthetic event artifact, then describe a test they could repeat safely.

**Debrief (~30 minutes):** Explain why a mesh link is not the same as internet connectivity.

**Common misconception:** LoRa/mesh range, encryption, node allowlisting and end-to-end privacy are not interchangeable guarantees. Explain what was simulated, assumed, or not evaluated.

**Rubric (each 0-4):** correctness of model, least-privilege/consent, reproducible safe evidence, limitations/tradeoffs, quality of written explanation. **Pass = 16/20**, provided no unsafe activity occurred. Record grade separately from the five-question weekly website assessments.

**Troubleshooting prompts:** Which node is allowed? Where is the message processed? What metadata is visible? Is the decoy physically/logically isolated? How would you revoke a lost device?

### Week 3: Device identity and encryption

**Instructor objectives:** Describe approved node identities, keys, channel access, enrollment and revocation; plan encrypted messaging.

**Lecture (~45 minutes):** Introduce the key models, known limitations and safety rules. Ask students for a concrete operational scenario involving the three fictional nodes.

**Guided demonstration (~60 minutes):** Create a list of invented node IDs and a key-management checklist.

**Independent practice (~90 minutes):** Have learners produce a diagram, policy, or synthetic event artifact, then describe a test they could repeat safely.

**Debrief (~30 minutes):** Separate encrypted payload confidentiality from exposed metadata and compromised-endpoint risk.

**Common misconception:** LoRa/mesh range, encryption, node allowlisting and end-to-end privacy are not interchangeable guarantees. Explain what was simulated, assumed, or not evaluated.

**Rubric (each 0-4):** correctness of model, least-privilege/consent, reproducible safe evidence, limitations/tradeoffs, quality of written explanation. **Pass = 16/20**, provided no unsafe activity occurred. Record grade separately from the five-question weekly website assessments.

**Troubleshooting prompts:** Which node is allowed? Where is the message processed? What metadata is visible? Is the decoy physically/logically isolated? How would you revoke a lost device?

### Week 4: Safe Python message simulation

**Instructor objectives:** Model three approved nodes, packet IDs, timestamps and relays without connecting to actual radios.

**Lecture (~45 minutes):** Introduce the key models, known limitations and safety rules. Ask students for a concrete operational scenario involving the three fictional nodes.

**Guided demonstration (~60 minutes):** Run the supplied offline Python simulator using synthetic packets.

**Independent practice (~90 minutes):** Have learners produce a diagram, policy, or synthetic event artifact, then describe a test they could repeat safely.

**Debrief (~30 minutes):** Show how approved and rejected packets differ; never call the simulator real end-to-end encryption.

**Common misconception:** LoRa/mesh range, encryption, node allowlisting and end-to-end privacy are not interchangeable guarantees. Explain what was simulated, assumed, or not evaluated.

**Rubric (each 0-4):** correctness of model, least-privilege/consent, reproducible safe evidence, limitations/tradeoffs, quality of written explanation. **Pass = 16/20**, provided no unsafe activity occurred. Record grade separately from the five-question weekly website assessments.

**Troubleshooting prompts:** Which node is allowed? Where is the message processed? What metadata is visible? Is the decoy physically/logically isolated? How would you revoke a lost device?

### Week 5: Detection and allowlist monitoring

**Instructor objectives:** Develop rejected-node logging, signal metadata limits, event schemas, privacy, retention and alert thresholds.

**Lecture (~45 minutes):** Introduce the key models, known limitations and safety rules. Ask students for a concrete operational scenario involving the three fictional nodes.

**Guided demonstration (~60 minutes):** Create a synthetic JSONL event log and identify repeated unapproved transmissions.

**Independent practice (~90 minutes):** Have learners produce a diagram, policy, or synthetic event artifact, then describe a test they could repeat safely.

**Debrief (~30 minutes):** Document monitoring safeguards and false-positive risks.

**Common misconception:** LoRa/mesh range, encryption, node allowlisting and end-to-end privacy are not interchangeable guarantees. Explain what was simulated, assumed, or not evaluated.

**Rubric (each 0-4):** correctness of model, least-privilege/consent, reproducible safe evidence, limitations/tradeoffs, quality of written explanation. **Pass = 16/20**, provided no unsafe activity occurred. Record grade separately from the five-question weekly website assessments.

**Troubleshooting prompts:** Which node is allowed? Where is the message processed? What metadata is visible? Is the decoy physically/logically isolated? How would you revoke a lost device?

### Week 6: Isolated interactive defensive honeypot

**Instructor objectives:** Explain why a decoy must not expose the real mesh, production credentials or actual user traffic.

**Lecture (~45 minutes):** Introduce the key models, known limitations and safety rules. Ask students for a concrete operational scenario involving the three fictional nodes.

**Guided demonstration (~60 minutes):** Demonstrate simulated honeypot responses for synthetic unauthorized packets in the offline model.

**Independent practice (~90 minutes):** Have learners produce a diagram, policy, or synthetic event artifact, then describe a test they could repeat safely.

**Debrief (~30 minutes):** Distinguish safe deception and controlled observation from probing third-party networks.

**Common misconception:** LoRa/mesh range, encryption, node allowlisting and end-to-end privacy are not interchangeable guarantees. Explain what was simulated, assumed, or not evaluated.

**Rubric (each 0-4):** correctness of model, least-privilege/consent, reproducible safe evidence, limitations/tradeoffs, quality of written explanation. **Pass = 16/20**, provided no unsafe activity occurred. Record grade separately from the five-question weekly website assessments.

**Troubleshooting prompts:** Which node is allowed? Where is the message processed? What metadata is visible? Is the decoy physically/logically isolated? How would you revoke a lost device?

### Week 7: Incident response and operations

**Instructor objectives:** Investigate synthetic unauthorized access attempts, review join/revoke workflow and make recovery recommendations.

**Lecture (~45 minutes):** Introduce the key models, known limitations and safety rules. Ask students for a concrete operational scenario involving the three fictional nodes.

**Guided demonstration (~60 minutes):** Write an incident timeline, evidence log, containment decision and key-rotation tabletop.

**Independent practice (~90 minutes):** Have learners produce a diagram, policy, or synthetic event artifact, then describe a test they could repeat safely.

**Debrief (~30 minutes):** Present an operator response plan and the limits of signal/range interpretation.

**Common misconception:** LoRa/mesh range, encryption, node allowlisting and end-to-end privacy are not interchangeable guarantees. Explain what was simulated, assumed, or not evaluated.

**Rubric (each 0-4):** correctness of model, least-privilege/consent, reproducible safe evidence, limitations/tradeoffs, quality of written explanation. **Pass = 16/20**, provided no unsafe activity occurred. Record grade separately from the five-question weekly website assessments.

**Troubleshooting prompts:** Which node is allowed? Where is the message processed? What metadata is visible? Is the decoy physically/logically isolated? How would you revoke a lost device?

### Week 8: Capstone defense and portfolio

**Instructor objectives:** Integrate topology, approved-device policy, encryption/key custody design, simulated logs, honeypot isolation and limitations.

**Lecture (~45 minutes):** Introduce the key models, known limitations and safety rules. Ask students for a concrete operational scenario involving the three fictional nodes.

**Guided demonstration (~60 minutes):** Present a security architecture review, demo safe simulator and produce two deliverable sets.

**Independent practice (~90 minutes):** Have learners produce a diagram, policy, or synthetic event artifact, then describe a test they could repeat safely.

**Debrief (~30 minutes):** Explain what was tested versus designed or simulated; submit the complete evidence index.

**Common misconception:** LoRa/mesh range, encryption, node allowlisting and end-to-end privacy are not interchangeable guarantees. Explain what was simulated, assumed, or not evaluated.

**Rubric (each 0-4):** correctness of model, least-privilege/consent, reproducible safe evidence, limitations/tradeoffs, quality of written explanation. **Pass = 16/20**, provided no unsafe activity occurred. Record grade separately from the five-question weekly website assessments.

**Troubleshooting prompts:** Which node is allowed? Where is the message processed? What metadata is visible? Is the decoy physically/logically isolated? How would you revoke a lost device?

## Capstone final examiner rubric
| Dimension | Max points |
|---|---:|
| Scope and threat model | 10 |
| Architecture and authorized relay design | 15 |
| Approved-node identity/key-management policy | 15 |
| Simulated event logging, minimal data retention | 15 |
| Isolated decoy (no real-network access) | 15 |
| Response playbook, privacy/range limitations | 15 |
| Clear, verifiable evidence and oral defense | 15 |
| **Total** | **100** |

A score of 80+ is an instructional pass, not any certification. Reject unsafe third-party interception, unsanctioned transmission or false claims of encryption.

## Example grading answer keys
- Why is an allowlist insufficient by itself? Device identifiers can be copied/spoofed; require cryptographic identity and secure key processes for actual deployments.
- Why is a decoy isolated? To prevent it becoming a bridge to real data or a production system.
- Does encryption hide all activity? No. Packet timing, RF signals and identifiers may reveal metadata, and compromised endpoints expose content.
- How should a lost node be handled? Revoke its access, rotate relevant keys/channels as appropriate, verify remaining nodes and document recovery.
- Why not promise a 500-acre range? Terrain, antenna height, interference, power and compliance requirements strongly influence coverage.

## Materials
- Student workbook (`student-guide.md`)
- Instructor rubric (this file)
- `mas_simulator.py` — offline demonstration, synthetic packets only
- `test_mas_simulator.py` — repeatable tests, no network usage
