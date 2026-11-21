# SchoolYard delivery plan and acceptance checklist

This document adds the owner's development priorities and final delivery requirements to the existing draft. It does not authorize deployment or application of integration patches. See [README.md](README.md) for current implementation status and installation instructions.

## Binding constraints

- Preserve all nine courses, current curriculum IDs, lesson behavior, grades, student records, portfolio and existing styling.
- Match the actual repository: static HTML/CSS and vanilla JavaScript, hash-based navigation, a global curriculum object, and Firebase modular SDK imports. There is no React, Vue, Next.js, package build or framework migration to introduce.
- Keep additions under `modules/`. Shadow DOM contains classroom styles so they do not alter the existing academy layout.
- Reuse the existing curriculum, authentication identity, Firebase configuration, assessment prerequisites and academic records. Do not create a second curriculum or student account system.
- Existing-file integration changes must be minimal, documented and reviewed BEFORE implementation. The existing academic bridge patch is a proposal, not an instruction to apply it now.
- Never overwrite production `firebase-config.js`. No private service credentials, Admin SDK keys, provider secrets or student exports belong in client code, this public repository, screenshots or logs.
- Deploying the website, changing deployed Firestore rules or enabling production integrations requires the owner's explicit approval. Do not merge this draft to a deployment branch as a substitute for approval.
- Required testing must be observed and recorded; a checklist item or simulated viewport is not proof of real-device testing.

## Development sequence

| Phase | Work and dependencies | Current evidence | Exit condition |
| --- | --- | --- | --- |
| 1 — Repository inspection | Review framework, source curriculum, grading, auth, Firebase and mobile layout | Main repository and separate 3.0 preview inspected; 144 lessons and 36 weekly quizzes identified; Firebase bootstrap defects documented | Review proposed integration diffs and confirm target architecture; real-device baseline still needed |
| 2 — Voice classroom | UI, portrait, voice auditions, narration, speech input, commands, inactivity and privacy | Isolated module implemented; logic tests pass; provider audition requested, voice not approved | Browser and iPhone behavior tested, approved voice chosen, keyboard/touch behavior accepted |
| 3 — Lesson integration | Reuse lesson/check/quiz logic, progress and existing Firebase authentication | Curriculum adapter, new-record adapter and unapplied bridge patch prepared | Review then implement minimal integration; safely synchronize academic records across devices; validate rules |
| 4 — Desktop labs | Explicit activity classification, persistent queue, step guidance, evidence, permitted screen sharing | Queue and guidance foundation, local screen preview, pending-review evidence helper | Verified lab results and portfolio updates through trusted verification; mobile labs correctly deferred |
| 5 — Certification dashboard | Nine selected exams, official versioned objectives, performance evidence, prices, discounts and budget | Nine unassigned slots, source candidate list and provisional readiness function | Confirm nine exams; review mappings/banks; verify official information; separate course/exam records |
| 6 — Testing | iPhone, MacBook, Windows; regression, security, performance, privacy, battery and accessibility | Seven pure-logic tests passed; browser test launch blocked in this workspace | Complete the test matrix and resolve failures before requesting deployment approval |

Some later-phase scaffolding already exists in the draft. That is not completion of those phases. Continue production work in the order above; unresolved upstream integration must not be masked by dashboard polish.

## Required deliverables

| Deliverable | Location / status |
| --- | --- |
| Organized source folders | `professor-david/`, `certification-dashboard/`, `schoolyard-integration/`; development foundation, not production-complete |
| Installation instructions | [README.md](README.md), preview commands and opt-in mount example |
| Firebase integration documentation | README, `professor-david/firebase-store.mjs`, and `schoolyard-integration/firestore.rules.fragment`; staging and deployed-rule validation still needed |
| Existing-file change list | Review table below; patch remains unapplied |
| External services and costs | Service table below; no ongoing budget authorized or estimated without measured usage |
| Testing checklist | Acceptance checklist below; pending items explicitly untested |
| Additional development/browser limitations | README plus limitation summary below |

## Proposed existing-file changes — review before implementation

| Existing surface | Smallest proposed change | Reason / review requirement | Status |
| --- | --- | --- | --- |
| `app.js` | Add a narrowly scoped progress bridge and saved-progress notification; refactor/reuse its existing grading routine where practical | Current Firebase add-on expects a missing bridge/event. David must preserve prerequisite checks, five-question grading, attempt history and lesson completion. The proposed patch repeats some grading code; reviewer must consolidate shared grading logic before production integration rather than leave two independent implementations | Patch generated and apply-check passed; NOT applied |
| `index.html` | Correct the Firebase script's module loading, supply or reconnect the expected account controls, add an opt-in module import only after bootstrap works | Current page lacks controls referenced immediately by `firebase-sync.js` and loads top-level-await code as a classic script. Review the complete minimal diff before edits | Not implemented |
| `firebase-sync.js` | Repair initialization/control wiring and integrate a validated progress bridge; settle existing-record conflict behavior | Existing sign-in is insufficient to guarantee safe sync. Avoid silent whole-record replacement, preserve exports, inspect real schema without exposing student data | Not implemented |
| Existing professor/navigation controls | Prefer connecting the new module to existing controls after review; remove redundant launchers in production | Current preview launcher and readiness button are temporary development affordances, not approval to duplicate the site's professor or certification navigation | Review pending |
| Deployed Firestore rules | Merge narrowly scoped owner-only matches and server-only verified results into inspected rules | Broad wildcard allows can defeat narrower rules. Preserve existing authorized record access, test unauthorized access and validate schema | Fragment only; NOT deployed |
| `service-worker.js` | Assess cache/version update only if integration changes cached entry points | Prevent incompatible cached modules after an approved rollout; do not clear student storage | No change proposed until cache behavior tested |
| `firebase-config.js` | None | Preserve production configuration; do not replace it with preview credentials | Unchanged |
| `data/curriculum.js`, `data/curriculum.json`, existing CSS, course materials | None for this upgrade's initial integration | Reuse existing content/design; introduce reviewed metadata separately if activity/exam mapping needs it | Unchanged |

Reviewer must inspect current upstream files again before applying any patch; the inspected commit is recorded in README. A passing patch check is not review approval. After review and authorized implementation, preserve reversible diffs and test on staging before requesting live deployment approval.

## Firebase record integration contract

- Reuse the existing initialized default Firebase app and its authenticated UID. The new adapter does not initialize a new project or ask for a second login.
- Existing `users/{uid}/progress/main` remains the academy's academic source; the development module never replaces it. Its full two-way integration is pending review.
- `users/{uid}/davidAcademic/{recordId}` stores supplementary positions, bookmarks, knowledge-check attempts, classroom weekly-quiz attempts, lab queues and correction requests. Classroom quiz attempts must eventually be reconciled with the canonical gradebook through the reviewed adapter, not become a competing gradebook.
- `users/{uid}/davidConversations/{recordId}` stores optional classroom history separately. Default off; disabling prevents new history writes; delete must remove history without removing grades. Test deletion while writes are in flight.
- `users/{uid}/davidVerified/{recordId}` is reserved for trusted service results, including verified labs and certification assessment evidence. Client writes must remain denied. A trusted backend and dashboard subscription are not yet implemented.
- Snapshot subscriptions read supplemental records across signed-in devices. New per-record writes do not overwrite an entire academic history. Durable offline retry, conflict handling and canonical academic synchronization remain incomplete.
- Account changes must stop audio/listening, clear in-memory student data, unsubscribe old listeners and prevent late writes from one identity landing in another identity's records. Real integration tests are required.
- Runtime status must distinguish saving, saved, offline/pending and rejected. Never mark a record synchronized merely because a local operation finished.
- Before integration, export representative private academic records securely for comparison. Do not commit exports to this repository. After testing, compare lesson IDs, completed lessons, quiz attempts/best scores and portfolio evidence for unintended changes.

## External services and ongoing costs

These are architectural requirements and cost drivers, not verified price quotes. No new subscription, billing-plan upgrade, backend deployment or exam purchase is authorized by this document.

| Component | Purpose | Cost / credential handling | Current status |
| --- | --- | --- | --- |
| Existing static hosting | Serve academy and optional modules | Keep existing hosting arrangement; no new hosting service chosen | Unchanged |
| Existing Firebase Authentication / Firestore | Identity and device synchronization | Depends on existing account plan and measured reads, writes, storage and traffic; monitor subscription/read volume | Configuration preserved; bootstrap repair pending |
| Browser speech synthesis / recognition | Temporary narration and optional speech input | No separate provider billing integrated by this module; availability, network processing and device voices vary | Development fallback only |
| ElevenLabs or approved TTS provider | David's final consistent voice | Voice auditions requested; production provider still requires approval. Usage charges depend on model/volume/plan. Keep private API credentials server-side | Voice not finalized; no runtime service connected |
| Authenticated conversational API | Natural lesson questions, clarification and grounded tutoring | Provider/model and budget not selected. Meter usage server-side; use per-user limits and cancellation | Not implemented |
| Trusted assessment/lab backend | Verify identity, grade protected assessments, validate evidence, issue verified results | Compute/storage/observability costs depend on deployment and workload; service account credentials remain in managed server secrets | Not implemented |
| Native mobile capability, if selected later | Reliable background/locked-device audio and wake behavior | Separate engineering, device testing and distribution costs; not included in standard browser scope | Not implemented |
| Certification exams | Official registration outside the academy | No automated purchase. Region, currency, exam version, verified price, discount eligibility and verification date required before budget totals | Nine selections unresolved |

Before production selection: obtain official provider prices, record date/currency, estimate monthly narration minutes, recognition minutes, model tokens and database operations; show low/expected/high use scenarios. Configure alerts and enforceable server-side request limits; do not represent an alert alone as a hard spending cap. Confirm the budget before enabling paid production usage.

## Testing checklist

Use synthetic students and a separate test environment. For each run record device, OS, browser/version, commit, date, expected outcome, actual outcome and evidence. Do not mark pending rows passed because logic tests succeeded.

### Device matrix

| Device | Browser | Required checks | Result |
| --- | --- | --- | --- |
| iPhone (user device) | Safari; installed web app if used | Touch/fullscreen/minimized layout, permission prompts, playback, input after narration, interruptions, lock/background fallback and battery | Not tested |
| MacBook | Safari and Chrome | Existing navigation, optional voice, window resize, keyboard, desktop guidance, screen-share grant/end | Not tested |
| Windows desktop | Edge and Chrome | Existing lessons/grading, optional voice, desktop labs and screen sharing | Not tested |
| Automated mobile viewport | Chromium | Layout, minimize/expand, ambiguous answer, shutdown, nine dashboard slots and runtime errors | Blocked by workspace browser launch restriction |

### Existing academy regression

- [ ] All nine course cards and routes retain existing content, order and identifiers.
- [ ] All 144 lesson sessions and 36 weekly assessments remain available under original prerequisites.
- [ ] Original two knowledge checks, weekly five-question tests and 4/5 pass threshold remain correct.
- [ ] No duplicate quiz attempts from button double-clicks, repeated speech results, retries or reconnects.
- [ ] Best grade and attempt history are preserved; incomplete/ambiguous answers never receive a grade.
- [ ] Sidebar sizing/collapse, mobile navigation, header, themes and portrait controls still work.
- [ ] Existing portfolio, exports/imports and student records remain intact.
- [ ] Upgrade/rollback and service-worker cache behavior preserve academic storage.

### Voice and inactivity

- [ ] No autoplay or microphone use before student interaction/permission.
- [ ] Approved voice is identifiable; fallback is explicitly labeled and selected intentionally.
- [ ] Every requested command works during a supported listening turn.
- [ ] Ambiguous full/partial answers prompt clarification; negations and multiple possible choices are not guessed.
- [ ] Speech denial, recognition error, unavailable recognition and playback interruptions offer usable text/button fallback.
- [ ] Minimize keeps audio playing within the same active page; expand restores controls.
- [ ] After 30 seconds awaiting a response, ask presence and pause without grading.
- [ ] After 120 seconds, stop all audio/listening/capture, attempt position sync, show truthful save status.
- [ ] Shutdown leaves microphone indicator off and performs no recognition restart loop.
- [ ] Background/locked device behavior is accurately explained and position is recoverable after return.
- [ ] Measure comparable 30-minute foreground sessions and inactivity periods: battery change, CPU, network requests and microphone/audio state. Record actual results rather than claiming a battery saving percentage.

### Firebase, privacy and security

- [ ] Validate rules with Firebase emulator: unauthenticated denial, cross-user denial, valid owner access and invalid schema denial.
- [ ] Deny client-issued verified lab/exam records; verify server grading authenticates the requesting UID.
- [ ] Compare two-device academic state after success, reconnect, concurrent updates and failed writes.
- [ ] Switch accounts during speech, snapshot reads and pending writes; verify zero cross-account data carryover.
- [ ] Disable and delete history while writes are pending; confirm academic records remain unchanged.
- [ ] Microphone, screen sharing and history preferences operate independently.
- [ ] Screen share requires explicit browser consent; stop/revocation/shutdown ends all captured tracks.
- [ ] No screen control or background screen upload; distinguish local preview from AI analysis.
- [ ] Scan tracked files, built artifacts and browser network requests for private credentials; server errors/logs redact secrets and student data.
- [ ] Public Firebase web configuration is not treated as authorization; rules and server token validation enforce access.

### Labs and certifications

- [ ] Mobile audio teaches concepts but routes practical desktop work into a durable queue.
- [ ] Desktop guidance waits for confirmation and restores step position.
- [ ] Evidence submission remains pending until verified; student confirmation alone never awards credit.
- [ ] Verified completion updates the existing portfolio exactly once and retains evidence provenance.
- [ ] Correction requests are reviewable and any changed grade has an audit trail.
- [ ] Nine selected certifications appear; current official versions, prices, currency, source links and dates are documented.
- [ ] Course completion and readiness remain separate; insufficient evidence shows unknown, not a fabricated score.
- [ ] Objective coverage, stale evidence, repeated questions and version mismatches are handled correctly.
- [ ] Full-length practice exams require corresponding course completion and a reviewed version-matched bank.
- [ ] Practice scores never overwrite lesson grades; budget changes never initiate a purchase.

## Browser and development boundaries

A standard mobile page cannot promise always-on wake-word activation after its microphone has stopped. Locked-iPhone/background audio is not guaranteed by this implementation; it stops on page hiding. Browser speech recognition and screen sharing require feature detection and real-device testing. Mobile practical labs remain desktop work.

Open-ended AI dialogue, approved production TTS, reliable interruption handling, complete Firebase integration, durable queues, retention/study planning, trusted practical verification, correction review, portfolio updates and reviewed certification examinations remain additional development. The current preview must not be presented as fulfilling these requirements.

## Final approval package

Before asking to deploy, provide the completed source, exact reviewed integration diffs, test results including failures/limitations, record-preservation comparison, approved service budget, installation/rollback steps and final visual/functionality preview. Obtain explicit live-site approval. Until then keep the draft and production separate.
