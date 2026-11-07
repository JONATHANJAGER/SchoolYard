# MAS — Private Mesh & Secure Off-Grid Communication

**Optional Project 7 · 8-week intermediate extension**. This is a separate project; the original six required cybersecurity portfolio capstones remain unchanged. The project models private communications for an **imaginary 500-acre farm** with three owned nodes: headquarters, equipment station and remote monitoring post.

**Purpose:** Learn how LoRa/mesh systems can carry messages off grid, how to enforce authorized-device-only communication at the application design level, how encryption and key rotation work conceptually, and how to record unauthorized attempts without monitoring other people's communications. Build a defensive, entirely **isolated, synthetic honeypot simulation**. No functioning real radio network or live encryption service is shipped by this website.

**Boundaries:** Use only authorized radios, channel settings, legal operating bands and your own lab. Do not capture third-party communications, impersonate nodes, interfere with radio service, scan public systems or deploy the sample decoy on the internet. The offline simulator uses an invented allowlist and toy payloads; it demonstrates policy and telemetry, not cryptographic protection or secure radio firmware. For any real build, verify radio hardware, local RF law, platform security and the current encryption/authentication documentation with vendors.

**Project evidence:** network diagram, stakeholder privacy matrix, mock channel/identity/key policy, allowlist and revocation plan, safe simulated logs and screenshots, honeypot isolation diagram, incident playbook, range-test protocol (if using authorized radios), results and limitations, executive briefing.

## Student course workbook

Use one week at a time. Record original evidence and answers in your own notebook, project notes or exportable course workspace. Do not put actual secrets or identifying communications in the public repository.

### Week 1 — Introduction to private mesh communications

**Learning goals.** Identify a farm or remote-field communication scenario; define who must communicate and what metadata may be visible.

**Hands-on lab.** Draw the three-node architecture and define in-scope/out-of-scope traffic.

**Step-by-step study:**
1. Define the assets, permitted devices and scope before doing anything.
2. Draw or describe the relevant components and expected signal or message flow.
3. Work through the exercise using a paper simulation or the included offline simulator.
4. Log what succeeded, what failed, and what is only assumed.
5. Create a dated-free write-up: evidence, decisions, risks and cleanup.

**Assessment (graded by instructor or self-rubric, not automatically scored by the website):** Explain availability vs confidentiality vs authentication; record a threat model.

**Evidence to submit:** one diagram or data table; a test/result record; one paragraph on privacy and limits; a short explanation of any failure mode.

### Week 2 — RF, LoRa and relaying

**Learning goals.** Compare radio frequency, bandwidth, line of sight, terrain, antenna, legal operating rules and hop limits.

**Hands-on lab.** Calculate a qualitative coverage map for three owned nodes, with realistic limitations.

**Step-by-step study:**
1. Define the assets, permitted devices and scope before doing anything.
2. Draw or describe the relevant components and expected signal or message flow.
3. Work through the exercise using a paper simulation or the included offline simulator.
4. Log what succeeded, what failed, and what is only assumed.
5. Create a dated-free write-up: evidence, decisions, risks and cleanup.

**Assessment (graded by instructor or self-rubric, not automatically scored by the website):** Explain why a mesh link is not the same as internet connectivity.

**Evidence to submit:** one diagram or data table; a test/result record; one paragraph on privacy and limits; a short explanation of any failure mode.

### Week 3 — Device identity and encryption

**Learning goals.** Describe approved node identities, keys, channel access, enrollment and revocation; plan encrypted messaging.

**Hands-on lab.** Create a list of invented node IDs and a key-management checklist.

**Step-by-step study:**
1. Define the assets, permitted devices and scope before doing anything.
2. Draw or describe the relevant components and expected signal or message flow.
3. Work through the exercise using a paper simulation or the included offline simulator.
4. Log what succeeded, what failed, and what is only assumed.
5. Create a dated-free write-up: evidence, decisions, risks and cleanup.

**Assessment (graded by instructor or self-rubric, not automatically scored by the website):** Separate encrypted payload confidentiality from exposed metadata and compromised-endpoint risk.

**Evidence to submit:** one diagram or data table; a test/result record; one paragraph on privacy and limits; a short explanation of any failure mode.

### Week 4 — Safe Python message simulation

**Learning goals.** Model three approved nodes, packet IDs, timestamps and relays without connecting to actual radios.

**Hands-on lab.** Run the supplied offline Python simulator using synthetic packets.

**Step-by-step study:**
1. Define the assets, permitted devices and scope before doing anything.
2. Draw or describe the relevant components and expected signal or message flow.
3. Work through the exercise using a paper simulation or the included offline simulator.
4. Log what succeeded, what failed, and what is only assumed.
5. Create a dated-free write-up: evidence, decisions, risks and cleanup.

**Assessment (graded by instructor or self-rubric, not automatically scored by the website):** Show how approved and rejected packets differ; never call the simulator real end-to-end encryption.

**Evidence to submit:** one diagram or data table; a test/result record; one paragraph on privacy and limits; a short explanation of any failure mode.

### Week 5 — Detection and allowlist monitoring

**Learning goals.** Develop rejected-node logging, signal metadata limits, event schemas, privacy, retention and alert thresholds.

**Hands-on lab.** Create a synthetic JSONL event log and identify repeated unapproved transmissions.

**Step-by-step study:**
1. Define the assets, permitted devices and scope before doing anything.
2. Draw or describe the relevant components and expected signal or message flow.
3. Work through the exercise using a paper simulation or the included offline simulator.
4. Log what succeeded, what failed, and what is only assumed.
5. Create a dated-free write-up: evidence, decisions, risks and cleanup.

**Assessment (graded by instructor or self-rubric, not automatically scored by the website):** Document monitoring safeguards and false-positive risks.

**Evidence to submit:** one diagram or data table; a test/result record; one paragraph on privacy and limits; a short explanation of any failure mode.

### Week 6 — Isolated interactive defensive honeypot

**Learning goals.** Explain why a decoy must not expose the real mesh, production credentials or actual user traffic.

**Hands-on lab.** Demonstrate simulated honeypot responses for synthetic unauthorized packets in the offline model.

**Step-by-step study:**
1. Define the assets, permitted devices and scope before doing anything.
2. Draw or describe the relevant components and expected signal or message flow.
3. Work through the exercise using a paper simulation or the included offline simulator.
4. Log what succeeded, what failed, and what is only assumed.
5. Create a dated-free write-up: evidence, decisions, risks and cleanup.

**Assessment (graded by instructor or self-rubric, not automatically scored by the website):** Distinguish safe deception and controlled observation from probing third-party networks.

**Evidence to submit:** one diagram or data table; a test/result record; one paragraph on privacy and limits; a short explanation of any failure mode.

### Week 7 — Incident response and operations

**Learning goals.** Investigate synthetic unauthorized access attempts, review join/revoke workflow and make recovery recommendations.

**Hands-on lab.** Write an incident timeline, evidence log, containment decision and key-rotation tabletop.

**Step-by-step study:**
1. Define the assets, permitted devices and scope before doing anything.
2. Draw or describe the relevant components and expected signal or message flow.
3. Work through the exercise using a paper simulation or the included offline simulator.
4. Log what succeeded, what failed, and what is only assumed.
5. Create a dated-free write-up: evidence, decisions, risks and cleanup.

**Assessment (graded by instructor or self-rubric, not automatically scored by the website):** Present an operator response plan and the limits of signal/range interpretation.

**Evidence to submit:** one diagram or data table; a test/result record; one paragraph on privacy and limits; a short explanation of any failure mode.

### Week 8 — Capstone defense and portfolio

**Learning goals.** Integrate topology, approved-device policy, encryption/key custody design, simulated logs, honeypot isolation and limitations.

**Hands-on lab.** Present a security architecture review, demo safe simulator and produce two deliverable sets.

**Step-by-step study:**
1. Define the assets, permitted devices and scope before doing anything.
2. Draw or describe the relevant components and expected signal or message flow.
3. Work through the exercise using a paper simulation or the included offline simulator.
4. Log what succeeded, what failed, and what is only assumed.
5. Create a dated-free write-up: evidence, decisions, risks and cleanup.

**Assessment (graded by instructor or self-rubric, not automatically scored by the website):** Explain what was tested versus designed or simulated; submit the complete evidence index.

**Evidence to submit:** one diagram or data table; a test/result record; one paragraph on privacy and limits; a short explanation of any failure mode.

## Capstone delivery checklist
- [ ] Authorized scope, fictional use case, threat model
- [ ] Three-node topology and relay/hop limits
- [ ] Approved-device enrollment and revocation matrix
- [ ] Confidentiality, authenticity and metadata limitations
- [ ] Synthetic logs (identifiers and times are invented)
- [ ] Isolated decoy architecture (no bridge to real traffic)
- [ ] Alert/triage and escalation workflow
- [ ] Authorized test or written range-test plan
- [ ] Technical README + operator guide + executive brief
- [ ] Portfolio statement accurately distinguishing simulation from deployment

## Reflection
Explain when this solution is appropriate, when cellular/satellite or infrastructure is better, how network keys are managed, and how you would minimize stored metadata.
