# CYBER-COURSE 2.2 — Guided Browser Practice Upgrade

**Important:** This is a clean replacement of the previous site release, not a patch to mix with old files.

## New in this build

- All 144 lesson pages now include a guided **simulated browser terminal**, with five supported practice steps and lesson-specific fictional AGL briefing and controls files. Works on phone and desktop. This is NOT a real Linux shell, VM or unrestricted Python executor. Commands are deliberately limited to safe illustrative operations.
- Two Professor Go **spoken briefings** per lesson: overview and assignment, using local browser text-to-speech with readable transcripts. These are NOT generated avatar video files. Creating true AI-presenter videos requires separate production or video provider integration.
- An embedded **lesson-aware helper** responds to questions using the current lesson content, with optional browser speech-to-text where supported. It is not a connected generative AI agent; a true open-ended in-page professor requires a securely hosted API service. An external ChatGPT link remains optional.
- Guided lab completion is stored in the existing academy progress data, exported in the normal JSON backup under `labProgress`.
- An optional real **VM extension** is marked locked through Courses 1–2 and available as instructions from Course 3 onward. The site cannot provision actual virtual machines.
- **Complete lesson** now explicitly auto-opens the next lesson once both original inline checks are passed and existing assessment prerequisites are satisfied. The guided browser lab is recommended but not mandatory to pass the two knowledge checks; it has its own completion record.
- Existing nine courses, 36 weeks, seven projects, five-question weekly assessments, four-of-five passing threshold, resizable sidebar, mobile layout, and header professor controls remain.

## How to publish

1. Export your existing browser progress and keep a copy of your current GitHub site.
2. Remove obsolete site code from previous releases instead of mixing versions. Upload the **contents** of this ZIP to the repository root.
3. Keep GitHub Pages set to `main` and `/ (root)`.
4. Hard refresh the browser or update the installed offline app; the service-worker cache has been versioned.
5. Test Course 1 → first lesson → Practice Terminal, lesson helper, both mini-checks, then **Complete lesson**.
6. Progress is local to that browser and needs a JSON export/import to move devices. Do not publicly commit private progress data.

## Future integrations (not claimed as complete)

Actual AI-generated avatar videos, a live GPT-powered conversational Professor Go with audio, true cloud-based code execution, and physical/offline MASS radio networking need external services, hosting, equipment, and separate engineering and security review.

---

# CYBER-COURSE Academy — nine-course GitHub Pages website

## What this build is

A static, mobile-friendly learning platform **adapted from your previous Cyber Course site** and your uploaded Gemini nine-course architecture DOCX. The release contains **9 courses**, **36 weeks**, **144 independently titled lesson sessions**, **288 ungraded in-lesson checks**, **36 graded five-question weekly assessments (180 questions)** and **7 required interconnected portfolio project trackers**.

The uploaded Gemini document includes a full nine-course architecture, but fully written instructional material primarily covers Course 1 lessons 1.1/1.2 and Course 2 lessons 2.1/2.2. The remaining 140 sessions in this website are newly authored **structured beginner-level teaching and practical activities** derived from the course architecture, NOT 140 unabridged Gemini lectures. Each session includes a concept, everyday example, fictional logistics application, guided steps, two knowledge checks, feedback, a project task, troubleshooting and note-taking. Supplemental videos, actual cloud/VM labs and detailed multi-hour lectures remain separate learning activities. Do not represent the website as automatically delivering 720 hours of narrated content.

## Install on your existing GitHub Pages repository

1. Export your progress from the **older** website first and save the JSON privately.
2. Keep a backup copy of the older GitHub repository files.
3. Extract this ZIP. In the dedicated `cyber-course` repository, **replace the older site files rather than merging two site versions**. Remove obsolete root-site JS/CSS and any deprecated lesson data from previous releases after you have a backup. Upload **the contents of the extracted folder directly into the root** (not a nested folder), replacing matching files, and commit. Keep repository settings and any files not related to the old site.
4. GitHub Settings → Pages → Deploy from a branch → `main` → `/ (root)`.
5. Open your published page and hard-refresh (Mac: Cmd+Shift+R; Windows: Ctrl+Shift+R). If an installed PWA still shows the old appearance, close/reopen it or clear the site cache, then reload; the progress backup should be exported first.
6. Test the first mini-check, the second mini-check, lesson completion, locked assessment preview, a five-question assessment, project checklists, header voice, and mobile navigation.

There is no build step, paid API, or server requirement. For local preview, run `python3 -m http.server 8000` from this folder and open `http://localhost:8000`.

## November 5 design correction — dark dashboard + nested navigation

- **Dashboard:** Restored the dark navy/purple visual style, gradient hero, large learning progress display, compact dark navigation and responsive cards. The previous build accidentally applied a bright sidebar style that did not match the approved desktop reference.
- **Courses and Lessons:** One navigation icon expands a catalog of nine course names. Click a course to reveal its four weeks; click a week to reveal the four classes and its five-question assessment. The 144 lessons are no longer all expanded in the sidebar.
- **Sidebar:** No width-control button in the header/sidebar top. Drag the sidebar edge to resize; drag sufficiently left to collapse to an icon rail. Click Courses and Lessons in the icon rail to reopen.
- **Mobile:** The compact dark dashboard uses stacked cards; the header menu opens a dark off-canvas navigation drawer. No separate mobile curriculum content is used.
- **Header:** Hides while scrolling down and returns on upward scrolling; the small Professor Go button and student profile remain in the header.
- **Data:** Lesson completion and grades retain their existing browser storage key. Outdated sidebar presentation preferences alone are reset once; progress and grades are not reset.
- **Caching:** Offline cache version bumped to prevent outdated styles from mixing with this release.

## Navigation and tracking

- Dark/light themes, resizable/collapsible sidebar, mobile off-canvas navigation, 9 expandable courses → 36 weeks → 144 lesson topics and 36 assessments.
- Small Professor Go voice icon stays in the top-right header. Narration uses **browser speech synthesis**, which depends on your device's available voices; not a live AI agent, custom voice recording, or real-time human conversation.
- Each lesson has **two short interactive knowledge checks** that must be answered correctly before clicking Complete Lesson. Incorrect answers provide feedback and can be retried.
- Each week has a **five-question automatically graded assessment** (4/5 to pass) plus assessment preview when locked, skip, retake, best grade, attempt history and gradebook. No due dates.
- Portfolios have Required, To Do, Completed and MASS filters, separate checklist and notes, completion evidence.
- Data autosaves in the current browser's `localStorage`. Export/import backups are required to switch devices; **there is no cloud sync**. Never commit private progress files to the public repository.
- **Curriculum compatibility:** The old six-project curriculum maps to different topics and project IDs. This release stores its grades in a new browser storage key. If it detects old local progress, it archives it without treating old quiz grades as passes in the new course. Export the new backup to retain the archive. Importing a backup with a different `curriculumVersion` also archives instead of incorrectly marking new course lessons complete.

## Seven interconnected required projects

1. Enterprise network security & zero trust (Course 3)
2. SOC operations and detections (Course 4)
3. Authorized security testing and incident response (Course 5)
4. Azure + AWS cloud security blueprint (Course 6)
5. Python + AI-assisted security automation (Course 7)
6. MASS private communications educational prototype (Course 8)
7. Cybersecurity management, GRC and consulting (Course 9)

Courses 1–2 introduce the full program, technical tools, programming, project evidence and career planning; they have foundation deliverables, not one of the seven capstones. The training organization is fictional **Apex Global Logistics (AGL)**, so each project reuses the prior project designs.

## Contents

`index.html`, `styles.css`, `layout-v4.css`, `app.js` are the existing upgraded site foundation and navigation; `data/curriculum.js` drives it; `data/curriculum.json` is the editable course source. The website deploy package intentionally excludes earlier generation scripts and archived course versions to avoid mixing outdated site code with the current design. `materials/weekly-guides/` contains 36 editable week guides; `materials/project-briefs/` contains 7 project briefs; `materials/mas-private-communication/` retains the existing offline educational simulator (does **not** implement real encrypted or radio communications). `materials/Gemini_Nine_Course_Architecture_Source.docx` preserves your uploaded curriculum blueprint. The older 36-week PDF is not included in this clean deploy; the active nine-course curriculum is authoritative.

## Quality and ethics

All testing belongs within owned and expressly authorized environments and uses synthetic data. The MASS simulator is an educational, local-only exercise, not a production-grade private messenger. Published materials and snippets should not contain passwords, confidential records or employer/customer information. Career outcomes and the $120,000 annual compensation goal are aspirations, not credentials or job guarantees. Professional certifications require separately passing issuer examinations; verify current objectives with issuers.

**Source fidelity:** The Gemini DOCX contains some overbroad claims about scanning laws, vulnerability reporting and budget thresholds plus a Python indentation issue. The interactive lessons use safer, reviewed explanations instead of reproducing those claims as verified facts. For Course 1/2 background, the original document remains available as reference, not a source of automatically executable scripts.
