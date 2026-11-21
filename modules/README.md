# SchoolYard — Professor David modular development preview

See [Delivery plan and acceptance checklist](DELIVERY-PLAN.md) for the six development phases, all seven required deliverables, proposed integration changes, service cost drivers, and iPhone/MacBook/Windows testing gates. Existing-file changes require review before implementation; production deployment requires explicit owner approval.

## Status

This is a **development foundation**, not a completed production voice classroom. All additions are inside `modules/`. Existing site, curriculum, Firebase configuration, grades and student records are unchanged. Nothing is deployed. The modules deliberately fail closed where reliable academic evidence, exam selection, production services or permission is missing.

Repository inspected: `JONATHANJAGER/SchoolYard`, main commit `189c08ad5b32e2e509da76a46d26cfd4628a6e8d`. The account differs from the supplied spelling `JonathanJaeger`. `JONATHANJAGER/schoolyard3.0` describes itself as a separate preview; its README identifies `professor-david.jpg` as the approved portrait. That image is copied into the isolated module, preserving the original.

## Preview and tests

From the repository root:

```sh
python3 -m http.server 8765
# Open http://localhost:8765/modules/schoolyard-integration/preview.html
node --test modules/professor-david/core.test.mjs
node modules/schoolyard-integration/browser.test.cjs
```

Browser tests require Playwright and Chromium; `CHROMIUM_PATH` overrides `/usr/bin/chromium`. The current workspace blocked Chromium with `socket() failed: Operation not permitted`. Seven logic tests passed; browser assertions are provided but could not be run here. No real iPhone, microphone, Firebase emulator, or two-device synchronization test has passed yet.

The preview uses existing curriculum data and an in-memory store, explicitly labeled. It cannot modify student records and loses preview data on reload.

## Implemented modules

- `professor-david/classroom.mjs`: isolated Shadow DOM classroom, mobile fullscreen, floating minimized view, portrait and controls; minimization leaves audio running. Narration of existing lesson concepts, checks, weekly quiz flow, typed/button/spoken responses, classroom commands, recap and lesson-grounded explanation. No model claims.
- `professor-david/core.mjs`: confidence-aware answer matching, clarification for ambiguous/negated alternatives, 4/5 scoring, inactivity timers, activity classification and evidence-weighted readiness.
- `professor-david/firebase-store.mjs`: reuses an initialized default Firebase app and authenticated user. New academic records and optional conversations use separate user subcollections. Per-record writes and snapshot subscriptions avoid replacing the existing progress document. Account changes clear the classroom view.
- `professor-david/desktop-lab.mjs`: step confirmation, evidence submission and pending review. Confirmations never award completion. A trusted verifier is still required.
- `certification-dashboard/`: nine visible slots, evidence source catalog, readiness calculator, practice exam unlock predicate. Missing selections/versions/evidence display as unknown, never fabricated percentages.
- `schoolyard-integration/bridge.mjs`: opt-in launcher for the existing lesson route, curriculum adapter, optional academic bridge callbacks, and Firebase connection.
- `schoolyard-integration/firestore.rules.fragment`: owner-only records and server-only verified records. Not deployed or emulator-tested.

## Preserve the existing website

Do not replace `index.html`, styles, curriculum or Firebase configuration with this preview. Do not publish the old README's replacement instructions for this change.

1. Review this branch and preview separately.
2. Repair the existing Firebase bootstrap after exporting academic records. The inspected `index.html` loads `firebase-sync.js` without `type="module"`, even though it contains top-level await. It also does not contain `firebaseToggle`, `firebaseStatus`, or the other controls that module immediately accesses. `app.js` supplies neither its expected progress bridge nor saved-progress event. These are existing defects, not fixed by merely importing the new modules.
3. `academic-bridge.patch` is an **unapplied** narrowly scoped patch for existing `app.js`. Check with `git apply --check modules/schoolyard-integration/academic-bridge.patch`. It exposes get, checked-answer recording and validated five-question grading; it dispatches the existing sync event. It intentionally does NOT add the old sync module's whole-record `apply` operation: do not enable that UI until import validation and conflict handling are reviewed.
4. Once the existing Firebase app is initialized and its account UI works, mount explicitly:

```js
import { mountSchoolYard } from './modules/schoolyard-integration/bridge.mjs';
const classroom = mountSchoolYard();
await classroom.connect();
// classroom.destroy() removes the addition and stops its microphone/audio/subscriptions.
```

5. Merge the rule fragment into the deployed rules only after emulator checks. Any broad existing wildcard rule can override a restrictive match, so inspect the complete deployed rules first. No automated deployment is included.
6. Test sign-in, sign-out and account switching; two authorized devices; denied cross-user reads/writes; offline/reconnect behavior; history deletion; timer shutdown; and unchanged legacy grading before enabling for students.

A failed cloud write is visibly reported; no successful sync is claimed. Durable offline retry is not implemented. New conversation controls do not delete academic records. Browser permissions still require browser settings to revoke the underlying grant; app switches stop use of the resource.

## Inactivity and mobile limitations

Thirty seconds is measured while awaiting the student's response, not during David's own narration. At 30 seconds, David asks whether the learner is present and pauses the lesson without recording a wrong answer. At 120 seconds, audio, speech recognition and screen capture stop and a position save is attempted. A user response restarts the response window. Hiding the page stops the session immediately as a conservative battery/privacy fallback.

There is no continuously running wake-word engine. “Hey David” is recognized only inside an active speech recognition turn after permission. Once shutdown disables the microphone, the student must tap to reactivate. Reliable locked-iPhone playback and background wake detection require a separately tested native/background-audio implementation. Browser speech recognition can rely on a remote provider and may be unavailable or interrupted; text/buttons remain available. The preview does not continuously restart recognition or keep a hidden audio loop alive.

References checked 2026-11-21:
- https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
- https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/abort
- https://developer.apple.com/documentation/xcode/configuring-background-execution-modes

## Curriculum and certification findings

The existing academy has 9 courses, 144 sessions, 2 checks per session and 36 five-question WEEKLY assessments. This module preserves that structure. Adding a new five-question quiz to every session requires additional authored/reviewed content; it is not silently substituted for the weekly tests.

`data/curriculum.json` has seven certification entries including ambiguous AWS learning and combined CISM/CISSP preparation. The original DOCX's alignment table names 13 candidates:

Security+, Network+, AWS Solutions Architect, CySA+, PenTest+, CEH, SC-200, AWS Security Specialty, PCAP, SSCP, CISM, CAPM, CISSP.

This is not an approved nine-exam list. The dashboard reserves nine unassigned slots until the user resolves the selection. Do not fill slots by guessing or use the unrelated previously proposed list. Once selected, verify each official version/objective set, provider registration URL, price/currency/region and authorized discounts; record verification dates. No prices, exam versions or purchase links have been invented.

Readiness requires at least five distinct reviewed items per objective within 90 days, matched to the exam version. It weights objective accuracy separately from course progress; this provisional metric is a study indicator, not a calibrated probability of passing. Production evidence must come from server-side grading. The UI currently does not subscribe to server-verified evidence; wire `davidVerified` after deploying that service. Practice exams are locked unless courses are completed and a reviewed full-length bank matches the verified version. No full-length bank is supplied or falsely labeled exam-equivalent.

## Voice audition

Two audition takes were requested from ElevenLabs for candidate `ziPT2CCE4pSSprfinSvc` (Amaziyah), whose provider description matches a mature African American male with a Southern accent. This is a candidate only; it is not installed or finalized. Audition: https://elevenlabs.io/app/flows/KdxurEodkZO5NStHDzmI

The browser currently uses device speech synthesis. That does not guarantee David's desired timbre. A production TTS provider must run through authenticated server endpoints; never put provider secret keys in GitHub Pages JavaScript.

## Remaining production work

- Confirm nine exam choices; verify official objectives/prices; author and review objective mappings and full-length assessments.
- Complete Firebase bootstrap repair and safe existing-record synchronization; deploy/test rules; add durable offline handling and conflict policies.
- Add authenticated conversational and voice services. Current explanation/recap use existing lesson text; they are not open-ended AI tutoring or semantic free-response grading.
- Finalize the approved voice; validate real iPhone playback, microphone recovery, interruptions and battery behavior.
- Connect trusted practical verification, correction-review workflow and portfolio completion. Screen preview is local only; it is not AI screen analysis.
- Add retention scheduling, persisted learning preferences, personalized study planning and verified readiness evidence subscriptions.
- Complete end-to-end accessibility and device tests. The lesson reader does not yet auto-advance between lessons or create new five-question per-lesson banks.

These boundaries are visible so a development preview is not mistaken for a finished academy upgrade.
