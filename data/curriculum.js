/* Source: nine-course Gemini blueprint supplied by user; expanded with beginner-first training activities. */
window.CYBER_COURSE = {
  "title": "CYBER-COURSE ACADEMY",
  "version": "2026.11.04-nine-course-v2",
  "sourceDescription": "9-course architecture from Gemini DOCX; 4 detailed source lessons adapted; additional 140 structured beginner lessons original authored extensions. Not equivalent to 720 hours of fully recorded instruction.",
  "organization": "Apex Global Logistics (AGL) — fictional training enterprise",
  "monthTitles": [
    "Cybersecurity & Leadership Foundations",
    "Technical Tools & Programming Foundations",
    "Enterprise Network Security & Architecture",
    "SOC Operations & Monitoring",
    "Ethical Hacking & Incident Response",
    "Cloud Security & Infrastructure",
    "Programming, AI & Security Automation",
    "MASS Private Communications Development",
    "Security Management, GRC & Consulting"
  ],
  "courses": [
    {
      "id": 1,
      "title": "Cybersecurity & Leadership Foundations",
      "deliverable": "Career roadmap and security fundamentals",
      "projectId": null,
      "certificationAlignment": "Security+ concepts",
      "startWeek": 1,
      "endWeek": 4,
      "kind": "foundation"
    },
    {
      "id": 2,
      "title": "Technical Tools & Programming Foundations",
      "deliverable": "Authorized lab setup and code templates",
      "projectId": null,
      "certificationAlignment": "Network+ / Security+ concepts",
      "startWeek": 5,
      "endWeek": 8,
      "kind": "foundation"
    },
    {
      "id": 3,
      "title": "Enterprise Network Security & Architecture",
      "deliverable": "AGL secure enterprise network blueprint",
      "projectId": 1,
      "certificationAlignment": "Security+ / architecture",
      "startWeek": 9,
      "endWeek": 12,
      "kind": "project"
    },
    {
      "id": 4,
      "title": "SOC Operations & Monitoring",
      "deliverable": "AGL simulated SOC and detection library",
      "projectId": 2,
      "certificationAlignment": "CySA+ / SOC",
      "startWeek": 13,
      "endWeek": 16,
      "kind": "project"
    },
    {
      "id": 5,
      "title": "Ethical Hacking & Incident Response",
      "deliverable": "AGL authorized security assessment and investigation",
      "projectId": 3,
      "certificationAlignment": "PenTest+ concepts / IR",
      "startWeek": 17,
      "endWeek": 20,
      "kind": "project"
    },
    {
      "id": 6,
      "title": "Cloud Security & Infrastructure",
      "deliverable": "AGL secure AWS/Azure hybrid design",
      "projectId": 4,
      "certificationAlignment": "AWS / Microsoft cloud",
      "startWeek": 21,
      "endWeek": 24,
      "kind": "project"
    },
    {
      "id": 7,
      "title": "Programming, AI & Security Automation",
      "deliverable": "AGL AI-assisted log triage tool",
      "projectId": 5,
      "certificationAlignment": "Python / AI governance",
      "startWeek": 25,
      "endWeek": 28,
      "kind": "project"
    },
    {
      "id": 8,
      "title": "MASS Private Communications Development",
      "deliverable": "MASS educational private messaging prototype",
      "projectId": 6,
      "certificationAlignment": "Secure software engineering",
      "startWeek": 29,
      "endWeek": 32,
      "kind": "project"
    },
    {
      "id": 9,
      "title": "Security Management, GRC & Consulting",
      "deliverable": "AGL board-ready cybersecurity consulting portfolio",
      "projectId": 7,
      "certificationAlignment": "NIST CSF / CAPM / CISM concepts",
      "startWeek": 33,
      "endWeek": 36,
      "kind": "project"
    }
  ],
  "weeks": [
    {
      "week": 1,
      "month": 1,
      "course": 1,
      "title": "Understanding cybersecurity and business risk",
      "learn": "Cybersecurity: Protecting digital systems, accounts and information against misuse or disruption; Confidentiality: Making sure only authorized people can read information; Integrity: Keeping information accurate and detecting unauthorized changes; Availability: Keeping services usable when legitimate people need them",
      "lab": "Write a one-page CIA triad and enterprise asset map",
      "deliver": "Write a one-page CIA triad and enterprise asset map. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "At Apex Global Logistics (AGL), an employee mistakenly shares a shipment file with an unauthorized colleague.",
      "challenge": "Write a one-page CIA triad and enterprise asset map",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: protecting digital systems, accounts and information against misuse or disruption?",
          "choices": [
            "Confidentiality",
            "Availability",
            "Integrity",
            "Cybersecurity"
          ],
          "correct": 3,
          "explanation": "Cybersecurity — Protecting digital systems, accounts and information against misuse or disruption"
        },
        {
          "question": "In this week's AGL training, which concept means: making sure only authorized people can read information?",
          "choices": [
            "Integrity",
            "Cybersecurity",
            "Confidentiality",
            "Availability"
          ],
          "correct": 2,
          "explanation": "Confidentiality — Making sure only authorized people can read information"
        },
        {
          "question": "In this week's AGL training, which concept means: keeping information accurate and detecting unauthorized changes?",
          "choices": [
            "Cybersecurity",
            "Integrity",
            "Availability",
            "Confidentiality"
          ],
          "correct": 1,
          "explanation": "Integrity — Keeping information accurate and detecting unauthorized changes"
        },
        {
          "question": "In this week's AGL training, which concept means: keeping services usable when legitimate people need them?",
          "choices": [
            "Confidentiality",
            "Cybersecurity",
            "Integrity",
            "Availability"
          ],
          "correct": 3,
          "explanation": "Availability — Keeping services usable when legitimate people need them"
        },
        {
          "question": "To demonstrate cybersecurity in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Write a validation rule for a fictional shipment record",
            "Mark which logistics records need access restrictions",
            "Describe a restore and backup procedure for a fictional dispatch service",
            "List three digital assets and identify what must be protected"
          ],
          "correct": 3,
          "explanation": "The intended first activity is to list three digital assets and identify what must be protected; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c1-w1-s1",
          "title": "Cybersecurity: Understanding cybersecurity and business risk",
          "term": "Cybersecurity",
          "definition": "Protecting digital systems, accounts and information against misuse or disruption",
          "analogy": "A warehouse uses locks and cameras to protect valuable freight",
          "scenario": "At Apex Global Logistics (AGL), an employee mistakenly shares a shipment file with an unauthorized colleague.",
          "why": "Protecting digital assets protects both the information and the business activity that depends on it. A missed dispatch record can delay freight, while a modified record can send freight to the wrong destination.",
          "demo": [
            "Write down AGL shipping manifests, employee identities and dispatch service as three assets.",
            "Label which CIA property matters most for each specific risk. A record secretly changed affects integrity; a service outage affects availability.",
            "For each asset, propose one preventive control and a way to test whether it works."
          ],
          "expected": "A clearly documented example of cybersecurity, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of cybersecurity, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "List three digital assets and identify what must be protected",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: protecting digital systems, accounts and information against misuse or disruption?",
              "choices": [
                "Cybersecurity",
                "Availability",
                "Integrity",
                "Confidentiality"
              ],
              "correct": 0,
              "explanation": "Cybersecurity: Protecting digital systems, accounts and information against misuse or disruption"
            },
            {
              "question": "Which practical step best demonstrates cybersecurity in this lesson?",
              "choices": [
                "Mark which logistics records need access restrictions",
                "Write a validation rule for a fictional shipment record",
                "List three digital assets and identify what must be protected",
                "Describe a restore and backup procedure for a fictional dispatch service"
              ],
              "correct": 2,
              "explanation": "The guided activity for cybersecurity is: List three digital assets and identify what must be protected."
            }
          ],
          "source": "Gemini blueprint — Lesson 1.1 (adapted and corrected)"
        },
        {
          "id": "c1-w1-s2",
          "title": "Confidentiality: guided practice",
          "term": "Confidentiality",
          "definition": "Making sure only authorized people can read information",
          "analogy": "A sealed employee file is available only to HR",
          "scenario": "At Apex Global Logistics (AGL), an employee mistakenly shares a shipment file with an unauthorized colleague.",
          "why": "Confidentiality matters because AGL must make reliable, explainable decisions about systems and information. Making sure only authorized people can read information Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: At Apex Global Logistics (AGL), an employee mistakenly shares a shipment file with an unauthorized colleague.",
            "Define confidentiality in one sentence: Making sure only authorized people can read information",
            "Carry out this small, authorized activity: Mark which logistics records need access restrictions.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of confidentiality, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of confidentiality, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Mark which logistics records need access restrictions",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: making sure only authorized people can read information?",
              "choices": [
                "Confidentiality",
                "Cybersecurity",
                "Availability",
                "Integrity"
              ],
              "correct": 0,
              "explanation": "Confidentiality: Making sure only authorized people can read information"
            },
            {
              "question": "Which practical step best demonstrates confidentiality in this lesson?",
              "choices": [
                "Describe a restore and backup procedure for a fictional dispatch service",
                "List three digital assets and identify what must be protected",
                "Write a validation rule for a fictional shipment record",
                "Mark which logistics records need access restrictions"
              ],
              "correct": 3,
              "explanation": "The guided activity for confidentiality is: Mark which logistics records need access restrictions."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c1-w1-s3",
          "title": "Integrity: business application",
          "term": "Integrity",
          "definition": "Keeping information accurate and detecting unauthorized changes",
          "analogy": "A changed shipment address could send cargo to the wrong hub",
          "scenario": "At Apex Global Logistics (AGL), an employee mistakenly shares a shipment file with an unauthorized colleague.",
          "why": "Integrity matters because AGL must make reliable, explainable decisions about systems and information. Keeping information accurate and detecting unauthorized changes Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: At Apex Global Logistics (AGL), an employee mistakenly shares a shipment file with an unauthorized colleague.",
            "Define integrity in one sentence: Keeping information accurate and detecting unauthorized changes",
            "Carry out this small, authorized activity: Write a validation rule for a fictional shipment record.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of integrity, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of integrity, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write a validation rule for a fictional shipment record",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: keeping information accurate and detecting unauthorized changes?",
              "choices": [
                "Availability",
                "Integrity",
                "Cybersecurity",
                "Confidentiality"
              ],
              "correct": 1,
              "explanation": "Integrity: Keeping information accurate and detecting unauthorized changes"
            },
            {
              "question": "Which practical step best demonstrates integrity in this lesson?",
              "choices": [
                "Mark which logistics records need access restrictions",
                "Describe a restore and backup procedure for a fictional dispatch service",
                "Write a validation rule for a fictional shipment record",
                "List three digital assets and identify what must be protected"
              ],
              "correct": 2,
              "explanation": "The guided activity for integrity is: Write a validation rule for a fictional shipment record."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c1-w1-s4",
          "title": "Availability: project evidence",
          "term": "Availability",
          "definition": "Keeping services usable when legitimate people need them",
          "analogy": "A distribution center cannot ship while its scheduling system is offline",
          "scenario": "At Apex Global Logistics (AGL), an employee mistakenly shares a shipment file with an unauthorized colleague.",
          "why": "Availability matters because AGL must make reliable, explainable decisions about systems and information. Keeping services usable when legitimate people need them Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: At Apex Global Logistics (AGL), an employee mistakenly shares a shipment file with an unauthorized colleague.",
            "Define availability in one sentence: Keeping services usable when legitimate people need them",
            "Carry out this small, authorized activity: Describe a restore and backup procedure for a fictional dispatch service.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of availability, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of availability, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Describe a restore and backup procedure for a fictional dispatch service",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: keeping services usable when legitimate people need them?",
              "choices": [
                "Cybersecurity",
                "Confidentiality",
                "Integrity",
                "Availability"
              ],
              "correct": 3,
              "explanation": "Availability: Keeping services usable when legitimate people need them"
            },
            {
              "question": "Which practical step best demonstrates availability in this lesson?",
              "choices": [
                "Write a validation rule for a fictional shipment record",
                "List three digital assets and identify what must be protected",
                "Mark which logistics records need access restrictions",
                "Describe a restore and backup procedure for a fictional dispatch service"
              ],
              "correct": 3,
              "explanation": "The guided activity for availability is: Describe a restore and backup procedure for a fictional dispatch service."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": null,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 2,
      "month": 1,
      "course": 1,
      "title": "Hacker types, scope and professional ethics",
      "learn": "Ethical hacking: Security testing performed with permission and documented boundaries; Gray-hat behavior: Security probing without clear authorization even when motives are described as helpful; Rules of engagement: Written limits describing what may be tested and when; Responsible reporting: Privately providing verified findings through the agreed reporting process",
      "lab": "Draft a fictional engagement authorization and scope of work",
      "deliver": "Draft a fictional engagement authorization and scope of work. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "AGL has asked a consultant to perform a review of its own isolated training environment.",
      "challenge": "Draft a fictional engagement authorization and scope of work",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: security testing performed with permission and documented boundaries?",
          "choices": [
            "Rules of engagement",
            "Responsible reporting",
            "Gray-hat behavior",
            "Ethical hacking"
          ],
          "correct": 3,
          "explanation": "Ethical hacking — Security testing performed with permission and documented boundaries"
        },
        {
          "question": "In this week's AGL training, which concept means: security probing without clear authorization even when motives are described as helpful?",
          "choices": [
            "Ethical hacking",
            "Gray-hat behavior",
            "Rules of engagement",
            "Responsible reporting"
          ],
          "correct": 1,
          "explanation": "Gray-hat behavior — Security probing without clear authorization even when motives are described as helpful"
        },
        {
          "question": "In this week's AGL training, which concept means: written limits describing what may be tested and when?",
          "choices": [
            "Ethical hacking",
            "Responsible reporting",
            "Gray-hat behavior",
            "Rules of engagement"
          ],
          "correct": 3,
          "explanation": "Rules of engagement — Written limits describing what may be tested and when"
        },
        {
          "question": "In this week's AGL training, which concept means: privately providing verified findings through the agreed reporting process?",
          "choices": [
            "Responsible reporting",
            "Ethical hacking",
            "Gray-hat behavior",
            "Rules of engagement"
          ],
          "correct": 0,
          "explanation": "Responsible reporting — Privately providing verified findings through the agreed reporting process"
        },
        {
          "question": "To demonstrate ethical hacking in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Write the permission statement for an isolated practice lab",
            "Create a written scope including approved targets and prohibited actions",
            "Draft a finding notification without customer data",
            "List why curiosity is not enough permission for testing"
          ],
          "correct": 0,
          "explanation": "The intended first activity is to write the permission statement for an isolated practice lab; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c1-w2-s1",
          "title": "Ethical hacking: Hacker types, scope and professional ethics",
          "term": "Ethical hacking",
          "definition": "Security testing performed with permission and documented boundaries",
          "analogy": "A certified mechanic inspects a truck only with the owner's approval",
          "scenario": "AGL has asked a consultant to perform a review of its own isolated training environment.",
          "why": "A security-testing tool is not permission. Define authorization, scope, stop conditions and emergency contacts before doing anything that interacts with a target.",
          "demo": [
            "Create an engagement note: owner, tester, authorized targets, permitted actions, time window and stop condition.",
            "Mark every other device, account and outside service out of scope.",
            "Practice deciding whether a hypothetical request is within scope; do not scan a real address."
          ],
          "expected": "A clearly documented example of ethical hacking, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of ethical hacking, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write the permission statement for an isolated practice lab",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: security testing performed with permission and documented boundaries?",
              "choices": [
                "Ethical hacking",
                "Gray-hat behavior",
                "Rules of engagement",
                "Responsible reporting"
              ],
              "correct": 0,
              "explanation": "Ethical hacking: Security testing performed with permission and documented boundaries"
            },
            {
              "question": "Which practical step best demonstrates ethical hacking in this lesson?",
              "choices": [
                "List why curiosity is not enough permission for testing",
                "Create a written scope including approved targets and prohibited actions",
                "Write the permission statement for an isolated practice lab",
                "Draft a finding notification without customer data"
              ],
              "correct": 2,
              "explanation": "The guided activity for ethical hacking is: Write the permission statement for an isolated practice lab."
            }
          ],
          "source": "Gemini blueprint — Lesson 1.2 (adapted to remove inaccurate legal absolutes)"
        },
        {
          "id": "c1-w2-s2",
          "title": "Gray-hat behavior: guided practice",
          "term": "Gray-hat behavior",
          "definition": "Security probing without clear authorization even when motives are described as helpful",
          "analogy": "Entering a locked warehouse to prove a weak door remains unauthorized",
          "scenario": "AGL has asked a consultant to perform a review of its own isolated training environment.",
          "why": "Gray-hat behavior matters because AGL must make reliable, explainable decisions about systems and information. Security probing without clear authorization even when motives are described as helpful Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL has asked a consultant to perform a review of its own isolated training environment.",
            "Define gray-hat behavior in one sentence: Security probing without clear authorization even when motives are described as helpful",
            "Carry out this small, authorized activity: List why curiosity is not enough permission for testing.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of gray-hat behavior, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of gray-hat behavior, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "List why curiosity is not enough permission for testing",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: security probing without clear authorization even when motives are described as helpful?",
              "choices": [
                "Responsible reporting",
                "Rules of engagement",
                "Ethical hacking",
                "Gray-hat behavior"
              ],
              "correct": 3,
              "explanation": "Gray-hat behavior: Security probing without clear authorization even when motives are described as helpful"
            },
            {
              "question": "Which practical step best demonstrates gray-hat behavior in this lesson?",
              "choices": [
                "Create a written scope including approved targets and prohibited actions",
                "Draft a finding notification without customer data",
                "Write the permission statement for an isolated practice lab",
                "List why curiosity is not enough permission for testing"
              ],
              "correct": 3,
              "explanation": "The guided activity for gray-hat behavior is: List why curiosity is not enough permission for testing."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c1-w2-s3",
          "title": "Rules of engagement: business application",
          "term": "Rules of engagement",
          "definition": "Written limits describing what may be tested and when",
          "analogy": "A contractor has a gate pass valid for only specified rooms",
          "scenario": "AGL has asked a consultant to perform a review of its own isolated training environment.",
          "why": "Rules of engagement matters because AGL must make reliable, explainable decisions about systems and information. Written limits describing what may be tested and when Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL has asked a consultant to perform a review of its own isolated training environment.",
            "Define rules of engagement in one sentence: Written limits describing what may be tested and when",
            "Carry out this small, authorized activity: Create a written scope including approved targets and prohibited actions.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of rules of engagement, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of rules of engagement, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create a written scope including approved targets and prohibited actions",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: written limits describing what may be tested and when?",
              "choices": [
                "Responsible reporting",
                "Ethical hacking",
                "Rules of engagement",
                "Gray-hat behavior"
              ],
              "correct": 2,
              "explanation": "Rules of engagement: Written limits describing what may be tested and when"
            },
            {
              "question": "Which practical step best demonstrates rules of engagement in this lesson?",
              "choices": [
                "Write the permission statement for an isolated practice lab",
                "Create a written scope including approved targets and prohibited actions",
                "Draft a finding notification without customer data",
                "List why curiosity is not enough permission for testing"
              ],
              "correct": 1,
              "explanation": "The guided activity for rules of engagement is: Create a written scope including approved targets and prohibited actions."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c1-w2-s4",
          "title": "Responsible reporting: project evidence",
          "term": "Responsible reporting",
          "definition": "Privately providing verified findings through the agreed reporting process",
          "analogy": "A worker sends a safety issue to a supervisor instead of publicly posting sensitive details",
          "scenario": "AGL has asked a consultant to perform a review of its own isolated training environment.",
          "why": "Responsible reporting matters because AGL must make reliable, explainable decisions about systems and information. Privately providing verified findings through the agreed reporting process Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL has asked a consultant to perform a review of its own isolated training environment.",
            "Define responsible reporting in one sentence: Privately providing verified findings through the agreed reporting process",
            "Carry out this small, authorized activity: Draft a finding notification without customer data.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of responsible reporting, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of responsible reporting, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Draft a finding notification without customer data",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: privately providing verified findings through the agreed reporting process?",
              "choices": [
                "Gray-hat behavior",
                "Responsible reporting",
                "Ethical hacking",
                "Rules of engagement"
              ],
              "correct": 1,
              "explanation": "Responsible reporting: Privately providing verified findings through the agreed reporting process"
            },
            {
              "question": "Which practical step best demonstrates responsible reporting in this lesson?",
              "choices": [
                "Create a written scope including approved targets and prohibited actions",
                "Write the permission statement for an isolated practice lab",
                "List why curiosity is not enough permission for testing",
                "Draft a finding notification without customer data"
              ],
              "correct": 3,
              "explanation": "The guided activity for responsible reporting is: Draft a finding notification without customer data."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": null,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 3,
      "month": 1,
      "course": 1,
      "title": "Cybersecurity professions, goals and certifications",
      "learn": "SOC analyst: A professional who reviews security alerts and investigates suspicious activity; Security consultant: A professional who assesses an organization's security needs and advises on improvements; GRC specialist: A professional who links governance, risk decisions and compliance evidence; Certification readiness: Evidence that you can perform the skills assessed by a credential",
      "lab": "Create a verified target-role matrix and a personal skills-gap plan",
      "deliver": "Create a verified target-role matrix and a personal skills-gap plan. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "AGL is hiring for its first security operations team and wants documented job requirements.",
      "challenge": "Create a verified target-role matrix and a personal skills-gap plan",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: a professional who reviews security alerts and investigates suspicious activity?",
          "choices": [
            "SOC analyst",
            "GRC specialist",
            "Certification readiness",
            "Security consultant"
          ],
          "correct": 0,
          "explanation": "SOC analyst — A professional who reviews security alerts and investigates suspicious activity"
        },
        {
          "question": "In this week's AGL training, which concept means: a professional who assesses an organization's security needs and advises on improvements?",
          "choices": [
            "SOC analyst",
            "Security consultant",
            "GRC specialist",
            "Certification readiness"
          ],
          "correct": 1,
          "explanation": "Security consultant — A professional who assesses an organization's security needs and advises on improvements"
        },
        {
          "question": "In this week's AGL training, which concept means: a professional who links governance, risk decisions and compliance evidence?",
          "choices": [
            "Certification readiness",
            "Security consultant",
            "GRC specialist",
            "SOC analyst"
          ],
          "correct": 2,
          "explanation": "GRC specialist — A professional who links governance, risk decisions and compliance evidence"
        },
        {
          "question": "In this week's AGL training, which concept means: evidence that you can perform the skills assessed by a credential?",
          "choices": [
            "Certification readiness",
            "SOC analyst",
            "GRC specialist",
            "Security consultant"
          ],
          "correct": 0,
          "explanation": "Certification readiness — Evidence that you can perform the skills assessed by a credential"
        },
        {
          "question": "To demonstrate soc analyst in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Define a sample audit evidence requirement",
            "Create a practice plan rather than booking an exam blindly",
            "Write three tasks from a simulated SOC shift",
            "Describe one risk, recommendation and justification"
          ],
          "correct": 2,
          "explanation": "The intended first activity is to write three tasks from a simulated SOC shift; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c1-w3-s1",
          "title": "SOC analyst: Cybersecurity professions, goals and certifications",
          "term": "SOC analyst",
          "definition": "A professional who reviews security alerts and investigates suspicious activity",
          "analogy": "A control-room operator watches warehouse alarms",
          "scenario": "AGL is hiring for its first security operations team and wants documented job requirements.",
          "why": "SOC analyst matters because AGL must make reliable, explainable decisions about systems and information. A professional who reviews security alerts and investigates suspicious activity Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL is hiring for its first security operations team and wants documented job requirements.",
            "Define soc analyst in one sentence: A professional who reviews security alerts and investigates suspicious activity",
            "Carry out this small, authorized activity: Write three tasks from a simulated SOC shift.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of soc analyst, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of soc analyst, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write three tasks from a simulated SOC shift",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a professional who reviews security alerts and investigates suspicious activity?",
              "choices": [
                "Security consultant",
                "GRC specialist",
                "Certification readiness",
                "SOC analyst"
              ],
              "correct": 3,
              "explanation": "SOC analyst: A professional who reviews security alerts and investigates suspicious activity"
            },
            {
              "question": "Which practical step best demonstrates soc analyst in this lesson?",
              "choices": [
                "Create a practice plan rather than booking an exam blindly",
                "Describe one risk, recommendation and justification",
                "Define a sample audit evidence requirement",
                "Write three tasks from a simulated SOC shift"
              ],
              "correct": 3,
              "explanation": "The guided activity for soc analyst is: Write three tasks from a simulated SOC shift."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c1-w3-s2",
          "title": "Security consultant: guided practice",
          "term": "Security consultant",
          "definition": "A professional who assesses an organization's security needs and advises on improvements",
          "analogy": "An outside logistics adviser reviews routes and costs",
          "scenario": "AGL is hiring for its first security operations team and wants documented job requirements.",
          "why": "Security consultant matters because AGL must make reliable, explainable decisions about systems and information. A professional who assesses an organization's security needs and advises on improvements Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL is hiring for its first security operations team and wants documented job requirements.",
            "Define security consultant in one sentence: A professional who assesses an organization's security needs and advises on improvements",
            "Carry out this small, authorized activity: Describe one risk, recommendation and justification.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of security consultant, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of security consultant, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Describe one risk, recommendation and justification",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a professional who assesses an organization's security needs and advises on improvements?",
              "choices": [
                "Certification readiness",
                "SOC analyst",
                "Security consultant",
                "GRC specialist"
              ],
              "correct": 2,
              "explanation": "Security consultant: A professional who assesses an organization's security needs and advises on improvements"
            },
            {
              "question": "Which practical step best demonstrates security consultant in this lesson?",
              "choices": [
                "Describe one risk, recommendation and justification",
                "Define a sample audit evidence requirement",
                "Write three tasks from a simulated SOC shift",
                "Create a practice plan rather than booking an exam blindly"
              ],
              "correct": 0,
              "explanation": "The guided activity for security consultant is: Describe one risk, recommendation and justification."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c1-w3-s3",
          "title": "GRC specialist: business application",
          "term": "GRC specialist",
          "definition": "A professional who links governance, risk decisions and compliance evidence",
          "analogy": "A quality manager records audits and exceptions",
          "scenario": "AGL is hiring for its first security operations team and wants documented job requirements.",
          "why": "GRC specialist matters because AGL must make reliable, explainable decisions about systems and information. A professional who links governance, risk decisions and compliance evidence Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL is hiring for its first security operations team and wants documented job requirements.",
            "Define grc specialist in one sentence: A professional who links governance, risk decisions and compliance evidence",
            "Carry out this small, authorized activity: Define a sample audit evidence requirement.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of grc specialist, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of grc specialist, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Define a sample audit evidence requirement",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a professional who links governance, risk decisions and compliance evidence?",
              "choices": [
                "GRC specialist",
                "Security consultant",
                "SOC analyst",
                "Certification readiness"
              ],
              "correct": 0,
              "explanation": "GRC specialist: A professional who links governance, risk decisions and compliance evidence"
            },
            {
              "question": "Which practical step best demonstrates grc specialist in this lesson?",
              "choices": [
                "Describe one risk, recommendation and justification",
                "Write three tasks from a simulated SOC shift",
                "Create a practice plan rather than booking an exam blindly",
                "Define a sample audit evidence requirement"
              ],
              "correct": 3,
              "explanation": "The guided activity for grc specialist is: Define a sample audit evidence requirement."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c1-w3-s4",
          "title": "Certification readiness: project evidence",
          "term": "Certification readiness",
          "definition": "Evidence that you can perform the skills assessed by a credential",
          "analogy": "A driver practices road skills before scheduling a license test",
          "scenario": "AGL is hiring for its first security operations team and wants documented job requirements.",
          "why": "Certification readiness matters because AGL must make reliable, explainable decisions about systems and information. Evidence that you can perform the skills assessed by a credential Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL is hiring for its first security operations team and wants documented job requirements.",
            "Define certification readiness in one sentence: Evidence that you can perform the skills assessed by a credential",
            "Carry out this small, authorized activity: Create a practice plan rather than booking an exam blindly.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of certification readiness, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of certification readiness, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create a practice plan rather than booking an exam blindly",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: evidence that you can perform the skills assessed by a credential?",
              "choices": [
                "SOC analyst",
                "Certification readiness",
                "Security consultant",
                "GRC specialist"
              ],
              "correct": 1,
              "explanation": "Certification readiness: Evidence that you can perform the skills assessed by a credential"
            },
            {
              "question": "Which practical step best demonstrates certification readiness in this lesson?",
              "choices": [
                "Describe one risk, recommendation and justification",
                "Write three tasks from a simulated SOC shift",
                "Create a practice plan rather than booking an exam blindly",
                "Define a sample audit evidence requirement"
              ],
              "correct": 2,
              "explanation": "The guided activity for certification readiness is: Create a practice plan rather than booking an exam blindly."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": null,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 4,
      "month": 1,
      "course": 1,
      "title": "Your nine-course roadmap and learning habits",
      "learn": "Learning objectives: Specific skills you should demonstrate at the end of a lesson; Evidence: Records that make a claim about your work checkable; Portfolio: A collection of demonstrated work, decisions and outcomes; Professional storytelling: Explaining a problem, action and measurable result clearly",
      "lab": "Deliver a 36-week learning plan and personal career roadmap",
      "deliver": "Deliver a 36-week learning plan and personal career roadmap. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "The new AGL trainee needs a repeatable plan to turn study hours into demonstrated outcomes.",
      "challenge": "Deliver a 36-week learning plan and personal career roadmap",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: specific skills you should demonstrate at the end of a lesson?",
          "choices": [
            "Evidence",
            "Learning objectives",
            "Portfolio",
            "Professional storytelling"
          ],
          "correct": 1,
          "explanation": "Learning objectives — Specific skills you should demonstrate at the end of a lesson"
        },
        {
          "question": "In this week's AGL training, which concept means: records that make a claim about your work checkable?",
          "choices": [
            "Portfolio",
            "Evidence",
            "Professional storytelling",
            "Learning objectives"
          ],
          "correct": 1,
          "explanation": "Evidence — Records that make a claim about your work checkable"
        },
        {
          "question": "In this week's AGL training, which concept means: a collection of demonstrated work, decisions and outcomes?",
          "choices": [
            "Professional storytelling",
            "Learning objectives",
            "Evidence",
            "Portfolio"
          ],
          "correct": 3,
          "explanation": "Portfolio — A collection of demonstrated work, decisions and outcomes"
        },
        {
          "question": "In this week's AGL training, which concept means: explaining a problem, action and measurable result clearly?",
          "choices": [
            "Evidence",
            "Learning objectives",
            "Portfolio",
            "Professional storytelling"
          ],
          "correct": 3,
          "explanation": "Professional storytelling — Explaining a problem, action and measurable result clearly"
        },
        {
          "question": "To demonstrate learning objectives in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Set up an evidence folder with sanitized files",
            "Draft a README structure for one upcoming project",
            "Write a short problem-action-result example",
            "Write one measurable cyber learning objective"
          ],
          "correct": 3,
          "explanation": "The intended first activity is to write one measurable cyber learning objective; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c1-w4-s1",
          "title": "Learning objectives: Your nine-course roadmap and learning habits",
          "term": "Learning objectives",
          "definition": "Specific skills you should demonstrate at the end of a lesson",
          "analogy": "A training checklist says which warehouse tasks a trainee must perform",
          "scenario": "The new AGL trainee needs a repeatable plan to turn study hours into demonstrated outcomes.",
          "why": "Learning objectives matters because AGL must make reliable, explainable decisions about systems and information. Specific skills you should demonstrate at the end of a lesson Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The new AGL trainee needs a repeatable plan to turn study hours into demonstrated outcomes.",
            "Define learning objectives in one sentence: Specific skills you should demonstrate at the end of a lesson",
            "Carry out this small, authorized activity: Write one measurable cyber learning objective.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of learning objectives, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of learning objectives, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write one measurable cyber learning objective",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: specific skills you should demonstrate at the end of a lesson?",
              "choices": [
                "Portfolio",
                "Professional storytelling",
                "Evidence",
                "Learning objectives"
              ],
              "correct": 3,
              "explanation": "Learning objectives: Specific skills you should demonstrate at the end of a lesson"
            },
            {
              "question": "Which practical step best demonstrates learning objectives in this lesson?",
              "choices": [
                "Set up an evidence folder with sanitized files",
                "Write a short problem-action-result example",
                "Draft a README structure for one upcoming project",
                "Write one measurable cyber learning objective"
              ],
              "correct": 3,
              "explanation": "The guided activity for learning objectives is: Write one measurable cyber learning objective."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c1-w4-s2",
          "title": "Evidence: guided practice",
          "term": "Evidence",
          "definition": "Records that make a claim about your work checkable",
          "analogy": "A photo of a correctly labeled pallet supports an inspection",
          "scenario": "The new AGL trainee needs a repeatable plan to turn study hours into demonstrated outcomes.",
          "why": "Evidence matters because AGL must make reliable, explainable decisions about systems and information. Records that make a claim about your work checkable Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The new AGL trainee needs a repeatable plan to turn study hours into demonstrated outcomes.",
            "Define evidence in one sentence: Records that make a claim about your work checkable",
            "Carry out this small, authorized activity: Set up an evidence folder with sanitized files.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of evidence, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of evidence, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Set up an evidence folder with sanitized files",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: records that make a claim about your work checkable?",
              "choices": [
                "Professional storytelling",
                "Portfolio",
                "Learning objectives",
                "Evidence"
              ],
              "correct": 3,
              "explanation": "Evidence: Records that make a claim about your work checkable"
            },
            {
              "question": "Which practical step best demonstrates evidence in this lesson?",
              "choices": [
                "Set up an evidence folder with sanitized files",
                "Write a short problem-action-result example",
                "Draft a README structure for one upcoming project",
                "Write one measurable cyber learning objective"
              ],
              "correct": 0,
              "explanation": "The guided activity for evidence is: Set up an evidence folder with sanitized files."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c1-w4-s3",
          "title": "Portfolio: business application",
          "term": "Portfolio",
          "definition": "A collection of demonstrated work, decisions and outcomes",
          "analogy": "A contractor's completed-job photos support their experience claims",
          "scenario": "The new AGL trainee needs a repeatable plan to turn study hours into demonstrated outcomes.",
          "why": "Portfolio matters because AGL must make reliable, explainable decisions about systems and information. A collection of demonstrated work, decisions and outcomes Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The new AGL trainee needs a repeatable plan to turn study hours into demonstrated outcomes.",
            "Define portfolio in one sentence: A collection of demonstrated work, decisions and outcomes",
            "Carry out this small, authorized activity: Draft a README structure for one upcoming project.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of portfolio, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of portfolio, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Draft a README structure for one upcoming project",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a collection of demonstrated work, decisions and outcomes?",
              "choices": [
                "Portfolio",
                "Learning objectives",
                "Professional storytelling",
                "Evidence"
              ],
              "correct": 0,
              "explanation": "Portfolio: A collection of demonstrated work, decisions and outcomes"
            },
            {
              "question": "Which practical step best demonstrates portfolio in this lesson?",
              "choices": [
                "Set up an evidence folder with sanitized files",
                "Write one measurable cyber learning objective",
                "Write a short problem-action-result example",
                "Draft a README structure for one upcoming project"
              ],
              "correct": 3,
              "explanation": "The guided activity for portfolio is: Draft a README structure for one upcoming project."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c1-w4-s4",
          "title": "Professional storytelling: project evidence",
          "term": "Professional storytelling",
          "definition": "Explaining a problem, action and measurable result clearly",
          "analogy": "A supervisor summarizes a shift issue without technical jargon",
          "scenario": "The new AGL trainee needs a repeatable plan to turn study hours into demonstrated outcomes.",
          "why": "Professional storytelling matters because AGL must make reliable, explainable decisions about systems and information. Explaining a problem, action and measurable result clearly Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The new AGL trainee needs a repeatable plan to turn study hours into demonstrated outcomes.",
            "Define professional storytelling in one sentence: Explaining a problem, action and measurable result clearly",
            "Carry out this small, authorized activity: Write a short problem-action-result example.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of professional storytelling, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of professional storytelling, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write a short problem-action-result example",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: explaining a problem, action and measurable result clearly?",
              "choices": [
                "Portfolio",
                "Evidence",
                "Learning objectives",
                "Professional storytelling"
              ],
              "correct": 3,
              "explanation": "Professional storytelling: Explaining a problem, action and measurable result clearly"
            },
            {
              "question": "Which practical step best demonstrates professional storytelling in this lesson?",
              "choices": [
                "Write one measurable cyber learning objective",
                "Set up an evidence folder with sanitized files",
                "Write a short problem-action-result example",
                "Draft a README structure for one upcoming project"
              ],
              "correct": 2,
              "explanation": "The guided activity for professional storytelling is: Write a short problem-action-result example."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": null,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 5,
      "month": 2,
      "course": 2,
      "title": "Operating systems and command lines",
      "learn": "Operating system: Software that manages a computer's hardware and applications; Shell: A program that accepts commands and starts the requested tasks; Directory: A named folder that organizes files on a computer; Permissions: Rules limiting who can read, change or run a file",
      "lab": "Run harmless navigation commands and save a terminal transcript",
      "deliver": "Run harmless navigation commands and save a terminal transcript. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "An AGL trainee is moving between folders to collect safe simulation reports.",
      "challenge": "Run harmless navigation commands and save a terminal transcript",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: software that manages a computer's hardware and applications?",
          "choices": [
            "Shell",
            "Directory",
            "Permissions",
            "Operating system"
          ],
          "correct": 3,
          "explanation": "Operating system — Software that manages a computer's hardware and applications"
        },
        {
          "question": "In this week's AGL training, which concept means: a program that accepts commands and starts the requested tasks?",
          "choices": [
            "Operating system",
            "Shell",
            "Permissions",
            "Directory"
          ],
          "correct": 1,
          "explanation": "Shell — A program that accepts commands and starts the requested tasks"
        },
        {
          "question": "In this week's AGL training, which concept means: a named folder that organizes files on a computer?",
          "choices": [
            "Permissions",
            "Operating system",
            "Shell",
            "Directory"
          ],
          "correct": 3,
          "explanation": "Directory — A named folder that organizes files on a computer"
        },
        {
          "question": "In this week's AGL training, which concept means: rules limiting who can read, change or run a file?",
          "choices": [
            "Directory",
            "Operating system",
            "Permissions",
            "Shell"
          ],
          "correct": 2,
          "explanation": "Permissions — Rules limiting who can read, change or run a file"
        },
        {
          "question": "To demonstrate operating system in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Open a terminal and type pwd or Get-Location",
            "Inspect access permissions for a harmless sample file",
            "Identify your device operating system and version",
            "Create a training folder and list its contents"
          ],
          "correct": 2,
          "explanation": "The intended first activity is to identify your device operating system and version; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c2-w5-s1",
          "title": "Operating system: Operating systems and command lines",
          "term": "Operating system",
          "definition": "Software that manages a computer's hardware and applications",
          "analogy": "A warehouse manager coordinates people and equipment",
          "scenario": "An AGL trainee is moving between folders to collect safe simulation reports.",
          "why": "Operating system matters because AGL must make reliable, explainable decisions about systems and information. Software that manages a computer's hardware and applications Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An AGL trainee is moving between folders to collect safe simulation reports.",
            "Define operating system in one sentence: Software that manages a computer's hardware and applications",
            "Carry out this small, authorized activity: Identify your device operating system and version.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of operating system, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of operating system, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Identify your device operating system and version",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: software that manages a computer's hardware and applications?",
              "choices": [
                "Operating system",
                "Directory",
                "Permissions",
                "Shell"
              ],
              "correct": 0,
              "explanation": "Operating system: Software that manages a computer's hardware and applications"
            },
            {
              "question": "Which practical step best demonstrates operating system in this lesson?",
              "choices": [
                "Identify your device operating system and version",
                "Inspect access permissions for a harmless sample file",
                "Open a terminal and type pwd or Get-Location",
                "Create a training folder and list its contents"
              ],
              "correct": 0,
              "explanation": "The guided activity for operating system is: Identify your device operating system and version."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c2-w5-s2",
          "title": "Shell: guided practice",
          "term": "Shell",
          "definition": "A program that accepts commands and starts the requested tasks",
          "analogy": "A dispatcher issues instructions through a single control terminal",
          "scenario": "An AGL trainee is moving between folders to collect safe simulation reports.",
          "why": "The command line gives precise, repeatable control over files and programs; use a personal training folder and harmless commands before touching system files.",
          "demo": [
            "Open Terminal on macOS/Linux or PowerShell on Windows.",
            "Run pwd (or Get-Location) to locate the current directory, then list files with ls (or Get-ChildItem).",
            "Create a folder named cyber-lab, enter it, and record commands in your notes.",
            "Create a harmless file, inspect its permissions; do not edit administrative system files."
          ],
          "expected": "A clearly documented example of shell, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of shell, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Open a terminal and type pwd or Get-Location",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a program that accepts commands and starts the requested tasks?",
              "choices": [
                "Shell",
                "Permissions",
                "Directory",
                "Operating system"
              ],
              "correct": 0,
              "explanation": "Shell: A program that accepts commands and starts the requested tasks"
            },
            {
              "question": "Which practical step best demonstrates shell in this lesson?",
              "choices": [
                "Create a training folder and list its contents",
                "Identify your device operating system and version",
                "Open a terminal and type pwd or Get-Location",
                "Inspect access permissions for a harmless sample file"
              ],
              "correct": 2,
              "explanation": "The guided activity for shell is: Open a terminal and type pwd or Get-Location."
            }
          ],
          "source": "Gemini blueprint — Lesson 2.1 (beginner adaptation)"
        },
        {
          "id": "c2-w5-s3",
          "title": "Directory: business application",
          "term": "Directory",
          "definition": "A named folder that organizes files on a computer",
          "analogy": "Warehouse aisles divide items into known locations",
          "scenario": "An AGL trainee is moving between folders to collect safe simulation reports.",
          "why": "Directory matters because AGL must make reliable, explainable decisions about systems and information. A named folder that organizes files on a computer Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An AGL trainee is moving between folders to collect safe simulation reports.",
            "Define directory in one sentence: A named folder that organizes files on a computer",
            "Carry out this small, authorized activity: Create a training folder and list its contents.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of directory, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of directory, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create a training folder and list its contents",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a named folder that organizes files on a computer?",
              "choices": [
                "Permissions",
                "Directory",
                "Operating system",
                "Shell"
              ],
              "correct": 1,
              "explanation": "Directory: A named folder that organizes files on a computer"
            },
            {
              "question": "Which practical step best demonstrates directory in this lesson?",
              "choices": [
                "Open a terminal and type pwd or Get-Location",
                "Identify your device operating system and version",
                "Create a training folder and list its contents",
                "Inspect access permissions for a harmless sample file"
              ],
              "correct": 2,
              "explanation": "The guided activity for directory is: Create a training folder and list its contents."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c2-w5-s4",
          "title": "Permissions: project evidence",
          "term": "Permissions",
          "definition": "Rules limiting who can read, change or run a file",
          "analogy": "Only supervisors can edit a shipment master list",
          "scenario": "An AGL trainee is moving between folders to collect safe simulation reports.",
          "why": "Permissions matters because AGL must make reliable, explainable decisions about systems and information. Rules limiting who can read, change or run a file Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An AGL trainee is moving between folders to collect safe simulation reports.",
            "Define permissions in one sentence: Rules limiting who can read, change or run a file",
            "Carry out this small, authorized activity: Inspect access permissions for a harmless sample file.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of permissions, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of permissions, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Inspect access permissions for a harmless sample file",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: rules limiting who can read, change or run a file?",
              "choices": [
                "Shell",
                "Permissions",
                "Operating system",
                "Directory"
              ],
              "correct": 1,
              "explanation": "Permissions: Rules limiting who can read, change or run a file"
            },
            {
              "question": "Which practical step best demonstrates permissions in this lesson?",
              "choices": [
                "Inspect access permissions for a harmless sample file",
                "Create a training folder and list its contents",
                "Open a terminal and type pwd or Get-Location",
                "Identify your device operating system and version"
              ],
              "correct": 0,
              "explanation": "The guided activity for permissions is: Inspect access permissions for a harmless sample file."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": null,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 6,
      "month": 2,
      "course": 2,
      "title": "Files, processes and practical scripting",
      "learn": "Process: An actively running instance of a program; Variable: A named place to hold a value while code runs; Loop: A programming structure that repeats an action for a series of items; Condition: A test that chooses what code should do next",
      "lab": "Create and run a small safe Python log counter",
      "deliver": "Create and run a small safe Python log counter. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "A mock dispatch application emits events that must be counted and checked.",
      "challenge": "Create and run a small safe Python log counter",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: an actively running instance of a program?",
          "choices": [
            "Loop",
            "Variable",
            "Condition",
            "Process"
          ],
          "correct": 3,
          "explanation": "Process — An actively running instance of a program"
        },
        {
          "question": "In this week's AGL training, which concept means: a named place to hold a value while code runs?",
          "choices": [
            "Process",
            "Condition",
            "Variable",
            "Loop"
          ],
          "correct": 2,
          "explanation": "Variable — A named place to hold a value while code runs"
        },
        {
          "question": "In this week's AGL training, which concept means: a programming structure that repeats an action for a series of items?",
          "choices": [
            "Loop",
            "Variable",
            "Condition",
            "Process"
          ],
          "correct": 0,
          "explanation": "Loop — A programming structure that repeats an action for a series of items"
        },
        {
          "question": "In this week's AGL training, which concept means: a test that chooses what code should do next?",
          "choices": [
            "Condition",
            "Loop",
            "Process",
            "Variable"
          ],
          "correct": 0,
          "explanation": "Condition — A test that chooses what code should do next"
        },
        {
          "question": "To demonstrate process in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Write a Python if statement that flags a mock threshold",
            "Loop through three synthetic event records",
            "Create a Python variable for simulated failed logins",
            "Inspect your computer's process list without changing anything"
          ],
          "correct": 3,
          "explanation": "The intended first activity is to inspect your computer's process list without changing anything; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c2-w6-s1",
          "title": "Process: Files, processes and practical scripting",
          "term": "Process",
          "definition": "An actively running instance of a program",
          "analogy": "A truck in transit is an active delivery process",
          "scenario": "A mock dispatch application emits events that must be counted and checked.",
          "why": "Process matters because AGL must make reliable, explainable decisions about systems and information. An actively running instance of a program Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A mock dispatch application emits events that must be counted and checked.",
            "Define process in one sentence: An actively running instance of a program",
            "Carry out this small, authorized activity: Inspect your computer's process list without changing anything.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of process, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of process, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Inspect your computer's process list without changing anything",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: an actively running instance of a program?",
              "choices": [
                "Condition",
                "Loop",
                "Variable",
                "Process"
              ],
              "correct": 3,
              "explanation": "Process: An actively running instance of a program"
            },
            {
              "question": "Which practical step best demonstrates process in this lesson?",
              "choices": [
                "Write a Python if statement that flags a mock threshold",
                "Create a Python variable for simulated failed logins",
                "Inspect your computer's process list without changing anything",
                "Loop through three synthetic event records"
              ],
              "correct": 2,
              "explanation": "The guided activity for process is: Inspect your computer's process list without changing anything."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c2-w6-s2",
          "title": "Variable: guided practice",
          "term": "Variable",
          "definition": "A named place to hold a value while code runs",
          "analogy": "A dispatch worksheet has a cell for today's truck count",
          "scenario": "A mock dispatch application emits events that must be counted and checked.",
          "why": "Python can read repetitive records, check each one and summarize patterns; the starting goal is understanding variables, loops and conditions rather than deploying an automatic blocking system.",
          "demo": [
            "In VS Code, create log_counter.py in your training folder.",
            "Set events = [\"401\", \"200\", \"401\", \"401\"] and count failures with sum(code == \"401\" for code in events).",
            "Print the count and compare it with the expected value of 3.",
            "Add another synthetic event, rerun the code, and explain why the result changed."
          ],
          "expected": "A clearly documented example of variable, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of variable, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create a Python variable for simulated failed logins",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a named place to hold a value while code runs?",
              "choices": [
                "Loop",
                "Condition",
                "Process",
                "Variable"
              ],
              "correct": 3,
              "explanation": "Variable: A named place to hold a value while code runs"
            },
            {
              "question": "Which practical step best demonstrates variable in this lesson?",
              "choices": [
                "Create a Python variable for simulated failed logins",
                "Write a Python if statement that flags a mock threshold",
                "Inspect your computer's process list without changing anything",
                "Loop through three synthetic event records"
              ],
              "correct": 0,
              "explanation": "The guided activity for variable is: Create a Python variable for simulated failed logins."
            }
          ],
          "source": "Gemini blueprint — Lesson 2.2 (repaired sample-script logic)"
        },
        {
          "id": "c2-w6-s3",
          "title": "Loop: business application",
          "term": "Loop",
          "definition": "A programming structure that repeats an action for a series of items",
          "analogy": "A scanner checks every carton on a conveyor",
          "scenario": "A mock dispatch application emits events that must be counted and checked.",
          "why": "Loop matters because AGL must make reliable, explainable decisions about systems and information. A programming structure that repeats an action for a series of items Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A mock dispatch application emits events that must be counted and checked.",
            "Define loop in one sentence: A programming structure that repeats an action for a series of items",
            "Carry out this small, authorized activity: Loop through three synthetic event records.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of loop, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of loop, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Loop through three synthetic event records",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a programming structure that repeats an action for a series of items?",
              "choices": [
                "Variable",
                "Loop",
                "Process",
                "Condition"
              ],
              "correct": 1,
              "explanation": "Loop: A programming structure that repeats an action for a series of items"
            },
            {
              "question": "Which practical step best demonstrates loop in this lesson?",
              "choices": [
                "Inspect your computer's process list without changing anything",
                "Create a Python variable for simulated failed logins",
                "Loop through three synthetic event records",
                "Write a Python if statement that flags a mock threshold"
              ],
              "correct": 2,
              "explanation": "The guided activity for loop is: Loop through three synthetic event records."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c2-w6-s4",
          "title": "Condition: project evidence",
          "term": "Condition",
          "definition": "A test that chooses what code should do next",
          "analogy": "An alarm sounds only when temperature exceeds the limit",
          "scenario": "A mock dispatch application emits events that must be counted and checked.",
          "why": "Condition matters because AGL must make reliable, explainable decisions about systems and information. A test that chooses what code should do next Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A mock dispatch application emits events that must be counted and checked.",
            "Define condition in one sentence: A test that chooses what code should do next",
            "Carry out this small, authorized activity: Write a Python if statement that flags a mock threshold.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of condition, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of condition, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write a Python if statement that flags a mock threshold",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a test that chooses what code should do next?",
              "choices": [
                "Process",
                "Loop",
                "Condition",
                "Variable"
              ],
              "correct": 2,
              "explanation": "Condition: A test that chooses what code should do next"
            },
            {
              "question": "Which practical step best demonstrates condition in this lesson?",
              "choices": [
                "Write a Python if statement that flags a mock threshold",
                "Loop through three synthetic event records",
                "Inspect your computer's process list without changing anything",
                "Create a Python variable for simulated failed logins"
              ],
              "correct": 0,
              "explanation": "The guided activity for condition is: Write a Python if statement that flags a mock threshold."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": null,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 7,
      "month": 2,
      "course": 2,
      "title": "Networking, traffic and packets",
      "learn": "IP address: A numeric address used to identify a network interface; DNS: A system translating names into network addresses; Packet: A small unit of data sent across a network; Port: A numbered endpoint used by network services",
      "lab": "Create a simple network diagram and inspect an authorized local connection",
      "deliver": "Create a simple network diagram and inspect an authorized local connection. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "Warehouse endpoints need to locate a server and transfer data without exposing sensitive records.",
      "challenge": "Create a simple network diagram and inspect an authorized local connection",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: a numeric address used to identify a network interface?",
          "choices": [
            "DNS",
            "Port",
            "Packet",
            "IP address"
          ],
          "correct": 3,
          "explanation": "IP address — A numeric address used to identify a network interface"
        },
        {
          "question": "In this week's AGL training, which concept means: a system translating names into network addresses?",
          "choices": [
            "Packet",
            "Port",
            "IP address",
            "DNS"
          ],
          "correct": 3,
          "explanation": "DNS — A system translating names into network addresses"
        },
        {
          "question": "In this week's AGL training, which concept means: a small unit of data sent across a network?",
          "choices": [
            "DNS",
            "Packet",
            "IP address",
            "Port"
          ],
          "correct": 1,
          "explanation": "Packet — A small unit of data sent across a network"
        },
        {
          "question": "In this week's AGL training, which concept means: a numbered endpoint used by network services?",
          "choices": [
            "IP address",
            "DNS",
            "Port",
            "Packet"
          ],
          "correct": 2,
          "explanation": "Port — A numbered endpoint used by network services"
        },
        {
          "question": "To demonstrate ip address in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Explain how a domain name becomes an IP address",
            "Draw the fields of a simplified packet on paper",
            "Record your own device private IP without publishing it",
            "Identify the expected use of TCP ports 80 and 443"
          ],
          "correct": 2,
          "explanation": "The intended first activity is to record your own device private IP without publishing it; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c2-w7-s1",
          "title": "IP address: Networking, traffic and packets",
          "term": "IP address",
          "definition": "A numeric address used to identify a network interface",
          "analogy": "A delivery bay has an address so goods reach the right place",
          "scenario": "Warehouse endpoints need to locate a server and transfer data without exposing sensitive records.",
          "why": "IP address matters because AGL must make reliable, explainable decisions about systems and information. A numeric address used to identify a network interface Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: Warehouse endpoints need to locate a server and transfer data without exposing sensitive records.",
            "Define ip address in one sentence: A numeric address used to identify a network interface",
            "Carry out this small, authorized activity: Record your own device private IP without publishing it.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of ip address, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of ip address, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Record your own device private IP without publishing it",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a numeric address used to identify a network interface?",
              "choices": [
                "Port",
                "DNS",
                "Packet",
                "IP address"
              ],
              "correct": 3,
              "explanation": "IP address: A numeric address used to identify a network interface"
            },
            {
              "question": "Which practical step best demonstrates ip address in this lesson?",
              "choices": [
                "Explain how a domain name becomes an IP address",
                "Record your own device private IP without publishing it",
                "Draw the fields of a simplified packet on paper",
                "Identify the expected use of TCP ports 80 and 443"
              ],
              "correct": 1,
              "explanation": "The guided activity for ip address is: Record your own device private IP without publishing it."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c2-w7-s2",
          "title": "DNS: guided practice",
          "term": "DNS",
          "definition": "A system translating names into network addresses",
          "analogy": "A contact book matches a person's name to a number",
          "scenario": "Warehouse endpoints need to locate a server and transfer data without exposing sensitive records.",
          "why": "DNS matters because AGL must make reliable, explainable decisions about systems and information. A system translating names into network addresses Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: Warehouse endpoints need to locate a server and transfer data without exposing sensitive records.",
            "Define dns in one sentence: A system translating names into network addresses",
            "Carry out this small, authorized activity: Explain how a domain name becomes an IP address.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of dns, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of dns, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Explain how a domain name becomes an IP address",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a system translating names into network addresses?",
              "choices": [
                "IP address",
                "Packet",
                "Port",
                "DNS"
              ],
              "correct": 3,
              "explanation": "DNS: A system translating names into network addresses"
            },
            {
              "question": "Which practical step best demonstrates dns in this lesson?",
              "choices": [
                "Identify the expected use of TCP ports 80 and 443",
                "Explain how a domain name becomes an IP address",
                "Record your own device private IP without publishing it",
                "Draw the fields of a simplified packet on paper"
              ],
              "correct": 1,
              "explanation": "The guided activity for dns is: Explain how a domain name becomes an IP address."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c2-w7-s3",
          "title": "Packet: business application",
          "term": "Packet",
          "definition": "A small unit of data sent across a network",
          "analogy": "A parcel is one unit of a larger shipment",
          "scenario": "Warehouse endpoints need to locate a server and transfer data without exposing sensitive records.",
          "why": "Packet matters because AGL must make reliable, explainable decisions about systems and information. A small unit of data sent across a network Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: Warehouse endpoints need to locate a server and transfer data without exposing sensitive records.",
            "Define packet in one sentence: A small unit of data sent across a network",
            "Carry out this small, authorized activity: Draw the fields of a simplified packet on paper.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of packet, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of packet, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Draw the fields of a simplified packet on paper",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a small unit of data sent across a network?",
              "choices": [
                "Port",
                "DNS",
                "Packet",
                "IP address"
              ],
              "correct": 2,
              "explanation": "Packet: A small unit of data sent across a network"
            },
            {
              "question": "Which practical step best demonstrates packet in this lesson?",
              "choices": [
                "Explain how a domain name becomes an IP address",
                "Draw the fields of a simplified packet on paper",
                "Identify the expected use of TCP ports 80 and 443",
                "Record your own device private IP without publishing it"
              ],
              "correct": 1,
              "explanation": "The guided activity for packet is: Draw the fields of a simplified packet on paper."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c2-w7-s4",
          "title": "Port: project evidence",
          "term": "Port",
          "definition": "A numbered endpoint used by network services",
          "analogy": "Different warehouse doors serve different purposes",
          "scenario": "Warehouse endpoints need to locate a server and transfer data without exposing sensitive records.",
          "why": "Port matters because AGL must make reliable, explainable decisions about systems and information. A numbered endpoint used by network services Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: Warehouse endpoints need to locate a server and transfer data without exposing sensitive records.",
            "Define port in one sentence: A numbered endpoint used by network services",
            "Carry out this small, authorized activity: Identify the expected use of TCP ports 80 and 443.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of port, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of port, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Identify the expected use of TCP ports 80 and 443",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a numbered endpoint used by network services?",
              "choices": [
                "Port",
                "IP address",
                "DNS",
                "Packet"
              ],
              "correct": 0,
              "explanation": "Port: A numbered endpoint used by network services"
            },
            {
              "question": "Which practical step best demonstrates port in this lesson?",
              "choices": [
                "Record your own device private IP without publishing it",
                "Draw the fields of a simplified packet on paper",
                "Identify the expected use of TCP ports 80 and 443",
                "Explain how a domain name becomes an IP address"
              ],
              "correct": 2,
              "explanation": "The guided activity for port is: Identify the expected use of TCP ports 80 and 443."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": null,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 8,
      "month": 2,
      "course": 2,
      "title": "GitHub, secure labs and reusable templates",
      "learn": "Repository: A tracked collection of project files and changes; Commit: A recorded snapshot of project changes; Sandbox: A separate practice environment designed to limit unintended impact; Secret management: Keeping passwords, tokens and keys out of public code and records",
      "lab": "Publish a sanitized sample README and a repeatable lab setup checklist",
      "deliver": "Publish a sanitized sample README and a repeatable lab setup checklist. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "A small security project needs revision history and a practice environment that does not touch production.",
      "challenge": "Publish a sanitized sample README and a repeatable lab setup checklist",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: a tracked collection of project files and changes?",
          "choices": [
            "Secret management",
            "Sandbox",
            "Commit",
            "Repository"
          ],
          "correct": 3,
          "explanation": "Repository — A tracked collection of project files and changes"
        },
        {
          "question": "In this week's AGL training, which concept means: a recorded snapshot of project changes?",
          "choices": [
            "Repository",
            "Commit",
            "Secret management",
            "Sandbox"
          ],
          "correct": 1,
          "explanation": "Commit — A recorded snapshot of project changes"
        },
        {
          "question": "In this week's AGL training, which concept means: a separate practice environment designed to limit unintended impact?",
          "choices": [
            "Secret management",
            "Repository",
            "Sandbox",
            "Commit"
          ],
          "correct": 2,
          "explanation": "Sandbox — A separate practice environment designed to limit unintended impact"
        },
        {
          "question": "In this week's AGL training, which concept means: keeping passwords, tokens and keys out of public code and records?",
          "choices": [
            "Commit",
            "Repository",
            "Secret management",
            "Sandbox"
          ],
          "correct": 2,
          "explanation": "Secret management — Keeping passwords, tokens and keys out of public code and records"
        },
        {
          "question": "To demonstrate repository in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Document the boundary of a local training lab",
            "Commit a safe README update without secrets",
            "Initialize or inspect a Git repository",
            "Review a sample file and remove a fictional credential"
          ],
          "correct": 2,
          "explanation": "The intended first activity is to initialize or inspect a Git repository; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c2-w8-s1",
          "title": "Repository: GitHub, secure labs and reusable templates",
          "term": "Repository",
          "definition": "A tracked collection of project files and changes",
          "analogy": "A master binder keeps every revision of shipping instructions",
          "scenario": "A small security project needs revision history and a practice environment that does not touch production.",
          "why": "Repository matters because AGL must make reliable, explainable decisions about systems and information. A tracked collection of project files and changes Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A small security project needs revision history and a practice environment that does not touch production.",
            "Define repository in one sentence: A tracked collection of project files and changes",
            "Carry out this small, authorized activity: Initialize or inspect a Git repository.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of repository, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of repository, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Initialize or inspect a Git repository",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a tracked collection of project files and changes?",
              "choices": [
                "Repository",
                "Secret management",
                "Commit",
                "Sandbox"
              ],
              "correct": 0,
              "explanation": "Repository: A tracked collection of project files and changes"
            },
            {
              "question": "Which practical step best demonstrates repository in this lesson?",
              "choices": [
                "Document the boundary of a local training lab",
                "Initialize or inspect a Git repository",
                "Review a sample file and remove a fictional credential",
                "Commit a safe README update without secrets"
              ],
              "correct": 1,
              "explanation": "The guided activity for repository is: Initialize or inspect a Git repository."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c2-w8-s2",
          "title": "Commit: guided practice",
          "term": "Commit",
          "definition": "A recorded snapshot of project changes",
          "analogy": "A signed shift handover marks the state of work at a point in time",
          "scenario": "A small security project needs revision history and a practice environment that does not touch production.",
          "why": "Commit matters because AGL must make reliable, explainable decisions about systems and information. A recorded snapshot of project changes Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A small security project needs revision history and a practice environment that does not touch production.",
            "Define commit in one sentence: A recorded snapshot of project changes",
            "Carry out this small, authorized activity: Commit a safe README update without secrets.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of commit, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of commit, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Commit a safe README update without secrets",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a recorded snapshot of project changes?",
              "choices": [
                "Secret management",
                "Repository",
                "Sandbox",
                "Commit"
              ],
              "correct": 3,
              "explanation": "Commit: A recorded snapshot of project changes"
            },
            {
              "question": "Which practical step best demonstrates commit in this lesson?",
              "choices": [
                "Initialize or inspect a Git repository",
                "Commit a safe README update without secrets",
                "Review a sample file and remove a fictional credential",
                "Document the boundary of a local training lab"
              ],
              "correct": 1,
              "explanation": "The guided activity for commit is: Commit a safe README update without secrets."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c2-w8-s3",
          "title": "Sandbox: business application",
          "term": "Sandbox",
          "definition": "A separate practice environment designed to limit unintended impact",
          "analogy": "A driving simulator separates training mistakes from real roads",
          "scenario": "A small security project needs revision history and a practice environment that does not touch production.",
          "why": "Sandbox matters because AGL must make reliable, explainable decisions about systems and information. A separate practice environment designed to limit unintended impact Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A small security project needs revision history and a practice environment that does not touch production.",
            "Define sandbox in one sentence: A separate practice environment designed to limit unintended impact",
            "Carry out this small, authorized activity: Document the boundary of a local training lab.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of sandbox, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of sandbox, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Document the boundary of a local training lab",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a separate practice environment designed to limit unintended impact?",
              "choices": [
                "Secret management",
                "Repository",
                "Sandbox",
                "Commit"
              ],
              "correct": 2,
              "explanation": "Sandbox: A separate practice environment designed to limit unintended impact"
            },
            {
              "question": "Which practical step best demonstrates sandbox in this lesson?",
              "choices": [
                "Review a sample file and remove a fictional credential",
                "Commit a safe README update without secrets",
                "Initialize or inspect a Git repository",
                "Document the boundary of a local training lab"
              ],
              "correct": 3,
              "explanation": "The guided activity for sandbox is: Document the boundary of a local training lab."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c2-w8-s4",
          "title": "Secret management: project evidence",
          "term": "Secret management",
          "definition": "Keeping passwords, tokens and keys out of public code and records",
          "analogy": "Keys to a warehouse should never be printed on a public noticeboard",
          "scenario": "A small security project needs revision history and a practice environment that does not touch production.",
          "why": "Secret management matters because AGL must make reliable, explainable decisions about systems and information. Keeping passwords, tokens and keys out of public code and records Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A small security project needs revision history and a practice environment that does not touch production.",
            "Define secret management in one sentence: Keeping passwords, tokens and keys out of public code and records",
            "Carry out this small, authorized activity: Review a sample file and remove a fictional credential.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of secret management, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of secret management, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Review a sample file and remove a fictional credential",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: keeping passwords, tokens and keys out of public code and records?",
              "choices": [
                "Commit",
                "Repository",
                "Sandbox",
                "Secret management"
              ],
              "correct": 3,
              "explanation": "Secret management: Keeping passwords, tokens and keys out of public code and records"
            },
            {
              "question": "Which practical step best demonstrates secret management in this lesson?",
              "choices": [
                "Commit a safe README update without secrets",
                "Document the boundary of a local training lab",
                "Review a sample file and remove a fictional credential",
                "Initialize or inspect a Git repository"
              ],
              "correct": 2,
              "explanation": "The guided activity for secret management is: Review a sample file and remove a fictional credential."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": null,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 9,
      "month": 3,
      "course": 3,
      "title": "Enterprise assets, zones and threat modeling",
      "learn": "Asset inventory: A record of systems, owners, locations and importance; Network zone: A group of systems separated according to trust and function; Threat model: A structured way to identify what can go wrong and how to reduce risk; Trust boundary: A point where data or identity moves between different security contexts",
      "lab": "Develop the AGL asset inventory and network zone diagram",
      "deliver": "Develop the AGL asset inventory and network zone diagram. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "AGL wants to separate public-facing services from its payroll and dispatch systems.",
      "challenge": "Develop the AGL asset inventory and network zone diagram",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: a record of systems, owners, locations and importance?",
          "choices": [
            "Trust boundary",
            "Asset inventory",
            "Network zone",
            "Threat model"
          ],
          "correct": 1,
          "explanation": "Asset inventory — A record of systems, owners, locations and importance"
        },
        {
          "question": "In this week's AGL training, which concept means: a group of systems separated according to trust and function?",
          "choices": [
            "Asset inventory",
            "Trust boundary",
            "Threat model",
            "Network zone"
          ],
          "correct": 3,
          "explanation": "Network zone — A group of systems separated according to trust and function"
        },
        {
          "question": "In this week's AGL training, which concept means: a structured way to identify what can go wrong and how to reduce risk?",
          "choices": [
            "Threat model",
            "Trust boundary",
            "Asset inventory",
            "Network zone"
          ],
          "correct": 0,
          "explanation": "Threat model — A structured way to identify what can go wrong and how to reduce risk"
        },
        {
          "question": "In this week's AGL training, which concept means: a point where data or identity moves between different security contexts?",
          "choices": [
            "Network zone",
            "Trust boundary",
            "Threat model",
            "Asset inventory"
          ],
          "correct": 1,
          "explanation": "Trust boundary — A point where data or identity moves between different security contexts"
        },
        {
          "question": "To demonstrate asset inventory in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Create a table of eight fictional digital assets",
            "Mark the boundaries between sample network zones",
            "Draw office, guest, server and management network zones",
            "List three threats affecting the mock dispatch portal"
          ],
          "correct": 0,
          "explanation": "The intended first activity is to create a table of eight fictional digital assets; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c3-w9-s1",
          "title": "Asset inventory: Enterprise assets, zones and threat modeling",
          "term": "Asset inventory",
          "definition": "A record of systems, owners, locations and importance",
          "analogy": "A logistics business tracks every forklift and scanner",
          "scenario": "AGL wants to separate public-facing services from its payroll and dispatch systems.",
          "why": "Asset inventory matters because AGL must make reliable, explainable decisions about systems and information. A record of systems, owners, locations and importance Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL wants to separate public-facing services from its payroll and dispatch systems.",
            "Define asset inventory in one sentence: A record of systems, owners, locations and importance",
            "Carry out this small, authorized activity: Create a table of eight fictional digital assets.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of asset inventory, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of asset inventory, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create a table of eight fictional digital assets",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a record of systems, owners, locations and importance?",
              "choices": [
                "Asset inventory",
                "Trust boundary",
                "Threat model",
                "Network zone"
              ],
              "correct": 0,
              "explanation": "Asset inventory: A record of systems, owners, locations and importance"
            },
            {
              "question": "Which practical step best demonstrates asset inventory in this lesson?",
              "choices": [
                "Mark the boundaries between sample network zones",
                "List three threats affecting the mock dispatch portal",
                "Create a table of eight fictional digital assets",
                "Draw office, guest, server and management network zones"
              ],
              "correct": 2,
              "explanation": "The guided activity for asset inventory is: Create a table of eight fictional digital assets."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c3-w9-s2",
          "title": "Network zone: guided practice",
          "term": "Network zone",
          "definition": "A group of systems separated according to trust and function",
          "analogy": "Warehouse areas separate visitors, staff and hazardous goods",
          "scenario": "AGL wants to separate public-facing services from its payroll and dispatch systems.",
          "why": "Network zone matters because AGL must make reliable, explainable decisions about systems and information. A group of systems separated according to trust and function Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL wants to separate public-facing services from its payroll and dispatch systems.",
            "Define network zone in one sentence: A group of systems separated according to trust and function",
            "Carry out this small, authorized activity: Draw office, guest, server and management network zones.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of network zone, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of network zone, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Draw office, guest, server and management network zones",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a group of systems separated according to trust and function?",
              "choices": [
                "Threat model",
                "Network zone",
                "Trust boundary",
                "Asset inventory"
              ],
              "correct": 1,
              "explanation": "Network zone: A group of systems separated according to trust and function"
            },
            {
              "question": "Which practical step best demonstrates network zone in this lesson?",
              "choices": [
                "Mark the boundaries between sample network zones",
                "Create a table of eight fictional digital assets",
                "Draw office, guest, server and management network zones",
                "List three threats affecting the mock dispatch portal"
              ],
              "correct": 2,
              "explanation": "The guided activity for network zone is: Draw office, guest, server and management network zones."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c3-w9-s3",
          "title": "Threat model: business application",
          "term": "Threat model",
          "definition": "A structured way to identify what can go wrong and how to reduce risk",
          "analogy": "A driver identifies hazards along a route before leaving",
          "scenario": "AGL wants to separate public-facing services from its payroll and dispatch systems.",
          "why": "Threat model matters because AGL must make reliable, explainable decisions about systems and information. A structured way to identify what can go wrong and how to reduce risk Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL wants to separate public-facing services from its payroll and dispatch systems.",
            "Define threat model in one sentence: A structured way to identify what can go wrong and how to reduce risk",
            "Carry out this small, authorized activity: List three threats affecting the mock dispatch portal.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of threat model, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of threat model, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "List three threats affecting the mock dispatch portal",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a structured way to identify what can go wrong and how to reduce risk?",
              "choices": [
                "Threat model",
                "Asset inventory",
                "Trust boundary",
                "Network zone"
              ],
              "correct": 0,
              "explanation": "Threat model: A structured way to identify what can go wrong and how to reduce risk"
            },
            {
              "question": "Which practical step best demonstrates threat model in this lesson?",
              "choices": [
                "Mark the boundaries between sample network zones",
                "List three threats affecting the mock dispatch portal",
                "Create a table of eight fictional digital assets",
                "Draw office, guest, server and management network zones"
              ],
              "correct": 1,
              "explanation": "The guided activity for threat model is: List three threats affecting the mock dispatch portal."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c3-w9-s4",
          "title": "Trust boundary: project evidence",
          "term": "Trust boundary",
          "definition": "A point where data or identity moves between different security contexts",
          "analogy": "A loading dock is checked before freight enters a restricted area",
          "scenario": "AGL wants to separate public-facing services from its payroll and dispatch systems.",
          "why": "Trust boundary matters because AGL must make reliable, explainable decisions about systems and information. A point where data or identity moves between different security contexts Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL wants to separate public-facing services from its payroll and dispatch systems.",
            "Define trust boundary in one sentence: A point where data or identity moves between different security contexts",
            "Carry out this small, authorized activity: Mark the boundaries between sample network zones.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of trust boundary, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of trust boundary, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Mark the boundaries between sample network zones",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a point where data or identity moves between different security contexts?",
              "choices": [
                "Threat model",
                "Asset inventory",
                "Trust boundary",
                "Network zone"
              ],
              "correct": 2,
              "explanation": "Trust boundary: A point where data or identity moves between different security contexts"
            },
            {
              "question": "Which practical step best demonstrates trust boundary in this lesson?",
              "choices": [
                "Create a table of eight fictional digital assets",
                "Mark the boundaries between sample network zones",
                "List three threats affecting the mock dispatch portal",
                "Draw office, guest, server and management network zones"
              ],
              "correct": 1,
              "explanation": "The guided activity for trust boundary is: Mark the boundaries between sample network zones."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 1,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 10,
      "month": 3,
      "course": 3,
      "title": "Firewalls and network segmentation",
      "learn": "Firewall rule: A condition that allows or blocks particular connections; Least privilege: Granting only the access actually needed for a task; Segmentation: Separating network groups to reduce unnecessary access; Change control: Reviewing and recording a modification before it enters service",
      "lab": "Build a fictional allow/deny rule matrix and test it on paper",
      "deliver": "Build a fictional allow/deny rule matrix and test it on paper. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "A visitor-network workstation must never administer AGL's internal servers.",
      "challenge": "Build a fictional allow/deny rule matrix and test it on paper",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: a condition that allows or blocks particular connections?",
          "choices": [
            "Change control",
            "Least privilege",
            "Segmentation",
            "Firewall rule"
          ],
          "correct": 3,
          "explanation": "Firewall rule — A condition that allows or blocks particular connections"
        },
        {
          "question": "In this week's AGL training, which concept means: granting only the access actually needed for a task?",
          "choices": [
            "Firewall rule",
            "Least privilege",
            "Change control",
            "Segmentation"
          ],
          "correct": 1,
          "explanation": "Least privilege — Granting only the access actually needed for a task"
        },
        {
          "question": "In this week's AGL training, which concept means: separating network groups to reduce unnecessary access?",
          "choices": [
            "Change control",
            "Least privilege",
            "Segmentation",
            "Firewall rule"
          ],
          "correct": 2,
          "explanation": "Segmentation — Separating network groups to reduce unnecessary access"
        },
        {
          "question": "In this week's AGL training, which concept means: reviewing and recording a modification before it enters service?",
          "choices": [
            "Least privilege",
            "Segmentation",
            "Change control",
            "Firewall rule"
          ],
          "correct": 2,
          "explanation": "Change control — Reviewing and recording a modification before it enters service"
        },
        {
          "question": "To demonstrate firewall rule in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Create a change request for a new firewall rule",
            "Restrict a fictional user's permissions to one work role",
            "Write a rule limiting guest access to management systems",
            "Revise your diagram to isolate public services"
          ],
          "correct": 2,
          "explanation": "The intended first activity is to write a rule limiting guest access to management systems; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c3-w10-s1",
          "title": "Firewall rule: Firewalls and network segmentation",
          "term": "Firewall rule",
          "definition": "A condition that allows or blocks particular connections",
          "analogy": "A gate guard checks vehicle type, identity and destination",
          "scenario": "A visitor-network workstation must never administer AGL's internal servers.",
          "why": "Firewall rule matters because AGL must make reliable, explainable decisions about systems and information. A condition that allows or blocks particular connections Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A visitor-network workstation must never administer AGL's internal servers.",
            "Define firewall rule in one sentence: A condition that allows or blocks particular connections",
            "Carry out this small, authorized activity: Write a rule limiting guest access to management systems.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of firewall rule, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of firewall rule, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write a rule limiting guest access to management systems",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a condition that allows or blocks particular connections?",
              "choices": [
                "Change control",
                "Firewall rule",
                "Segmentation",
                "Least privilege"
              ],
              "correct": 1,
              "explanation": "Firewall rule: A condition that allows or blocks particular connections"
            },
            {
              "question": "Which practical step best demonstrates firewall rule in this lesson?",
              "choices": [
                "Write a rule limiting guest access to management systems",
                "Revise your diagram to isolate public services",
                "Restrict a fictional user's permissions to one work role",
                "Create a change request for a new firewall rule"
              ],
              "correct": 0,
              "explanation": "The guided activity for firewall rule is: Write a rule limiting guest access to management systems."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c3-w10-s2",
          "title": "Least privilege: guided practice",
          "term": "Least privilege",
          "definition": "Granting only the access actually needed for a task",
          "analogy": "A courier gets loading dock access rather than keys to the entire site",
          "scenario": "A visitor-network workstation must never administer AGL's internal servers.",
          "why": "Least privilege matters because AGL must make reliable, explainable decisions about systems and information. Granting only the access actually needed for a task Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A visitor-network workstation must never administer AGL's internal servers.",
            "Define least privilege in one sentence: Granting only the access actually needed for a task",
            "Carry out this small, authorized activity: Restrict a fictional user's permissions to one work role.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of least privilege, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of least privilege, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Restrict a fictional user's permissions to one work role",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: granting only the access actually needed for a task?",
              "choices": [
                "Firewall rule",
                "Least privilege",
                "Segmentation",
                "Change control"
              ],
              "correct": 1,
              "explanation": "Least privilege: Granting only the access actually needed for a task"
            },
            {
              "question": "Which practical step best demonstrates least privilege in this lesson?",
              "choices": [
                "Revise your diagram to isolate public services",
                "Restrict a fictional user's permissions to one work role",
                "Write a rule limiting guest access to management systems",
                "Create a change request for a new firewall rule"
              ],
              "correct": 1,
              "explanation": "The guided activity for least privilege is: Restrict a fictional user's permissions to one work role."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c3-w10-s3",
          "title": "Segmentation: business application",
          "term": "Segmentation",
          "definition": "Separating network groups to reduce unnecessary access",
          "analogy": "Fire doors prevent one building incident spreading everywhere",
          "scenario": "A visitor-network workstation must never administer AGL's internal servers.",
          "why": "Segmentation matters because AGL must make reliable, explainable decisions about systems and information. Separating network groups to reduce unnecessary access Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A visitor-network workstation must never administer AGL's internal servers.",
            "Define segmentation in one sentence: Separating network groups to reduce unnecessary access",
            "Carry out this small, authorized activity: Revise your diagram to isolate public services.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of segmentation, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of segmentation, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Revise your diagram to isolate public services",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: separating network groups to reduce unnecessary access?",
              "choices": [
                "Change control",
                "Least privilege",
                "Segmentation",
                "Firewall rule"
              ],
              "correct": 2,
              "explanation": "Segmentation: Separating network groups to reduce unnecessary access"
            },
            {
              "question": "Which practical step best demonstrates segmentation in this lesson?",
              "choices": [
                "Restrict a fictional user's permissions to one work role",
                "Revise your diagram to isolate public services",
                "Write a rule limiting guest access to management systems",
                "Create a change request for a new firewall rule"
              ],
              "correct": 1,
              "explanation": "The guided activity for segmentation is: Revise your diagram to isolate public services."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c3-w10-s4",
          "title": "Change control: project evidence",
          "term": "Change control",
          "definition": "Reviewing and recording a modification before it enters service",
          "analogy": "A routing change needs approval to avoid missed deliveries",
          "scenario": "A visitor-network workstation must never administer AGL's internal servers.",
          "why": "Change control matters because AGL must make reliable, explainable decisions about systems and information. Reviewing and recording a modification before it enters service Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A visitor-network workstation must never administer AGL's internal servers.",
            "Define change control in one sentence: Reviewing and recording a modification before it enters service",
            "Carry out this small, authorized activity: Create a change request for a new firewall rule.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of change control, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of change control, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create a change request for a new firewall rule",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: reviewing and recording a modification before it enters service?",
              "choices": [
                "Least privilege",
                "Change control",
                "Firewall rule",
                "Segmentation"
              ],
              "correct": 1,
              "explanation": "Change control: Reviewing and recording a modification before it enters service"
            },
            {
              "question": "Which practical step best demonstrates change control in this lesson?",
              "choices": [
                "Revise your diagram to isolate public services",
                "Create a change request for a new firewall rule",
                "Restrict a fictional user's permissions to one work role",
                "Write a rule limiting guest access to management systems"
              ],
              "correct": 1,
              "explanation": "The guided activity for change control is: Create a change request for a new firewall rule."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 1,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 11,
      "month": 3,
      "course": 3,
      "title": "Identity, MFA and access lifecycles",
      "learn": "Authentication: Checking that someone is who they claim to be; Authorization: Deciding what an authenticated person is allowed to do; Multi-factor authentication: Sign-in requiring more than one independent category of proof; Offboarding: Removing access when a person leaves a role",
      "lab": "Produce RBAC matrix and new-hire/offboarding SOP",
      "deliver": "Produce RBAC matrix and new-hire/offboarding SOP. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "A departing staff member must lose access while remaining employees keep necessary permissions.",
      "challenge": "Produce RBAC matrix and new-hire/offboarding SOP",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: checking that someone is who they claim to be?",
          "choices": [
            "Offboarding",
            "Multi-factor authentication",
            "Authorization",
            "Authentication"
          ],
          "correct": 3,
          "explanation": "Authentication — Checking that someone is who they claim to be"
        },
        {
          "question": "In this week's AGL training, which concept means: deciding what an authenticated person is allowed to do?",
          "choices": [
            "Multi-factor authentication",
            "Authentication",
            "Authorization",
            "Offboarding"
          ],
          "correct": 2,
          "explanation": "Authorization — Deciding what an authenticated person is allowed to do"
        },
        {
          "question": "In this week's AGL training, which concept means: sign-in requiring more than one independent category of proof?",
          "choices": [
            "Multi-factor authentication",
            "Authorization",
            "Authentication",
            "Offboarding"
          ],
          "correct": 0,
          "explanation": "Multi-factor authentication — Sign-in requiring more than one independent category of proof"
        },
        {
          "question": "In this week's AGL training, which concept means: removing access when a person leaves a role?",
          "choices": [
            "Authentication",
            "Offboarding",
            "Multi-factor authentication",
            "Authorization"
          ],
          "correct": 1,
          "explanation": "Offboarding — Removing access when a person leaves a role"
        },
        {
          "question": "To demonstrate authentication in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Write a checklist for terminating a fictional employee account",
            "Create a user-to-resource permissions matrix",
            "Map MFA onto the fictional admin login process",
            "Compare passwords and stronger sign-in methods"
          ],
          "correct": 3,
          "explanation": "The intended first activity is to compare passwords and stronger sign-in methods; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c3-w11-s1",
          "title": "Authentication: Identity, MFA and access lifecycles",
          "term": "Authentication",
          "definition": "Checking that someone is who they claim to be",
          "analogy": "A staff badge is checked at the gate",
          "scenario": "A departing staff member must lose access while remaining employees keep necessary permissions.",
          "why": "Authentication matters because AGL must make reliable, explainable decisions about systems and information. Checking that someone is who they claim to be Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A departing staff member must lose access while remaining employees keep necessary permissions.",
            "Define authentication in one sentence: Checking that someone is who they claim to be",
            "Carry out this small, authorized activity: Compare passwords and stronger sign-in methods.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of authentication, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of authentication, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Compare passwords and stronger sign-in methods",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: checking that someone is who they claim to be?",
              "choices": [
                "Multi-factor authentication",
                "Offboarding",
                "Authentication",
                "Authorization"
              ],
              "correct": 2,
              "explanation": "Authentication: Checking that someone is who they claim to be"
            },
            {
              "question": "Which practical step best demonstrates authentication in this lesson?",
              "choices": [
                "Compare passwords and stronger sign-in methods",
                "Map MFA onto the fictional admin login process",
                "Write a checklist for terminating a fictional employee account",
                "Create a user-to-resource permissions matrix"
              ],
              "correct": 0,
              "explanation": "The guided activity for authentication is: Compare passwords and stronger sign-in methods."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c3-w11-s2",
          "title": "Authorization: guided practice",
          "term": "Authorization",
          "definition": "Deciding what an authenticated person is allowed to do",
          "analogy": "An employee may enter the building but not the finance room",
          "scenario": "A departing staff member must lose access while remaining employees keep necessary permissions.",
          "why": "Authorization matters because AGL must make reliable, explainable decisions about systems and information. Deciding what an authenticated person is allowed to do Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A departing staff member must lose access while remaining employees keep necessary permissions.",
            "Define authorization in one sentence: Deciding what an authenticated person is allowed to do",
            "Carry out this small, authorized activity: Create a user-to-resource permissions matrix.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of authorization, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of authorization, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create a user-to-resource permissions matrix",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: deciding what an authenticated person is allowed to do?",
              "choices": [
                "Authentication",
                "Multi-factor authentication",
                "Authorization",
                "Offboarding"
              ],
              "correct": 2,
              "explanation": "Authorization: Deciding what an authenticated person is allowed to do"
            },
            {
              "question": "Which practical step best demonstrates authorization in this lesson?",
              "choices": [
                "Map MFA onto the fictional admin login process",
                "Write a checklist for terminating a fictional employee account",
                "Create a user-to-resource permissions matrix",
                "Compare passwords and stronger sign-in methods"
              ],
              "correct": 2,
              "explanation": "The guided activity for authorization is: Create a user-to-resource permissions matrix."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c3-w11-s3",
          "title": "Multi-factor authentication: business application",
          "term": "Multi-factor authentication",
          "definition": "Sign-in requiring more than one independent category of proof",
          "analogy": "A secure room requires both badge and personal code",
          "scenario": "A departing staff member must lose access while remaining employees keep necessary permissions.",
          "why": "Multi-factor authentication matters because AGL must make reliable, explainable decisions about systems and information. Sign-in requiring more than one independent category of proof Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A departing staff member must lose access while remaining employees keep necessary permissions.",
            "Define multi-factor authentication in one sentence: Sign-in requiring more than one independent category of proof",
            "Carry out this small, authorized activity: Map MFA onto the fictional admin login process.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of multi-factor authentication, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of multi-factor authentication, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Map MFA onto the fictional admin login process",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: sign-in requiring more than one independent category of proof?",
              "choices": [
                "Offboarding",
                "Authentication",
                "Authorization",
                "Multi-factor authentication"
              ],
              "correct": 3,
              "explanation": "Multi-factor authentication: Sign-in requiring more than one independent category of proof"
            },
            {
              "question": "Which practical step best demonstrates multi-factor authentication in this lesson?",
              "choices": [
                "Create a user-to-resource permissions matrix",
                "Write a checklist for terminating a fictional employee account",
                "Map MFA onto the fictional admin login process",
                "Compare passwords and stronger sign-in methods"
              ],
              "correct": 2,
              "explanation": "The guided activity for multi-factor authentication is: Map MFA onto the fictional admin login process."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c3-w11-s4",
          "title": "Offboarding: project evidence",
          "term": "Offboarding",
          "definition": "Removing access when a person leaves a role",
          "analogy": "Returned warehouse keys stop former access",
          "scenario": "A departing staff member must lose access while remaining employees keep necessary permissions.",
          "why": "Offboarding matters because AGL must make reliable, explainable decisions about systems and information. Removing access when a person leaves a role Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A departing staff member must lose access while remaining employees keep necessary permissions.",
            "Define offboarding in one sentence: Removing access when a person leaves a role",
            "Carry out this small, authorized activity: Write a checklist for terminating a fictional employee account.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of offboarding, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of offboarding, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write a checklist for terminating a fictional employee account",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: removing access when a person leaves a role?",
              "choices": [
                "Offboarding",
                "Multi-factor authentication",
                "Authentication",
                "Authorization"
              ],
              "correct": 0,
              "explanation": "Offboarding: Removing access when a person leaves a role"
            },
            {
              "question": "Which practical step best demonstrates offboarding in this lesson?",
              "choices": [
                "Create a user-to-resource permissions matrix",
                "Map MFA onto the fictional admin login process",
                "Compare passwords and stronger sign-in methods",
                "Write a checklist for terminating a fictional employee account"
              ],
              "correct": 3,
              "explanation": "The guided activity for offboarding is: Write a checklist for terminating a fictional employee account."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 1,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 12,
      "month": 3,
      "course": 3,
      "title": "Zero trust, backup and architecture review",
      "learn": "Zero trust: An approach requiring explicit verification rather than assuming internal access is safe; Recovery objective: A target describing acceptable recovery time or data loss; Backup validation: Checking that copies can actually restore needed data; Architecture review: A structured review of the design, security controls and tradeoffs",
      "lab": "Deliver Project 1 architecture, recovery test and management explanation",
      "deliver": "Deliver Project 1 architecture, recovery test and management explanation. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "AGL must recover logistics applications after a simulated outage without exposing the management zone.",
      "challenge": "Deliver Project 1 architecture, recovery test and management explanation",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: an approach requiring explicit verification rather than assuming internal access is safe?",
          "choices": [
            "Architecture review",
            "Zero trust",
            "Recovery objective",
            "Backup validation"
          ],
          "correct": 1,
          "explanation": "Zero trust — An approach requiring explicit verification rather than assuming internal access is safe"
        },
        {
          "question": "In this week's AGL training, which concept means: a target describing acceptable recovery time or data loss?",
          "choices": [
            "Recovery objective",
            "Backup validation",
            "Zero trust",
            "Architecture review"
          ],
          "correct": 0,
          "explanation": "Recovery objective — A target describing acceptable recovery time or data loss"
        },
        {
          "question": "In this week's AGL training, which concept means: checking that copies can actually restore needed data?",
          "choices": [
            "Recovery objective",
            "Zero trust",
            "Backup validation",
            "Architecture review"
          ],
          "correct": 2,
          "explanation": "Backup validation — Checking that copies can actually restore needed data"
        },
        {
          "question": "In this week's AGL training, which concept means: a structured review of the design, security controls and tradeoffs?",
          "choices": [
            "Recovery objective",
            "Zero trust",
            "Backup validation",
            "Architecture review"
          ],
          "correct": 3,
          "explanation": "Architecture review — A structured review of the design, security controls and tradeoffs"
        },
        {
          "question": "To demonstrate zero trust in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Define fictional RTO and RPO values",
            "Explain identity and device verification checkpoints",
            "Restore a non-sensitive sample file from backup",
            "Defend three security choices in the AGL network blueprint"
          ],
          "correct": 1,
          "explanation": "The intended first activity is to explain identity and device verification checkpoints; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c3-w12-s1",
          "title": "Zero trust: Zero trust, backup and architecture review",
          "term": "Zero trust",
          "definition": "An approach requiring explicit verification rather than assuming internal access is safe",
          "analogy": "Everyone entering a sensitive room must be checked",
          "scenario": "AGL must recover logistics applications after a simulated outage without exposing the management zone.",
          "why": "Zero trust matters because AGL must make reliable, explainable decisions about systems and information. An approach requiring explicit verification rather than assuming internal access is safe Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL must recover logistics applications after a simulated outage without exposing the management zone.",
            "Define zero trust in one sentence: An approach requiring explicit verification rather than assuming internal access is safe",
            "Carry out this small, authorized activity: Explain identity and device verification checkpoints.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of zero trust, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of zero trust, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Explain identity and device verification checkpoints",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: an approach requiring explicit verification rather than assuming internal access is safe?",
              "choices": [
                "Zero trust",
                "Architecture review",
                "Recovery objective",
                "Backup validation"
              ],
              "correct": 0,
              "explanation": "Zero trust: An approach requiring explicit verification rather than assuming internal access is safe"
            },
            {
              "question": "Which practical step best demonstrates zero trust in this lesson?",
              "choices": [
                "Defend three security choices in the AGL network blueprint",
                "Explain identity and device verification checkpoints",
                "Restore a non-sensitive sample file from backup",
                "Define fictional RTO and RPO values"
              ],
              "correct": 1,
              "explanation": "The guided activity for zero trust is: Explain identity and device verification checkpoints."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c3-w12-s2",
          "title": "Recovery objective: guided practice",
          "term": "Recovery objective",
          "definition": "A target describing acceptable recovery time or data loss",
          "analogy": "A delivery company sets a maximum time for restoring dispatch",
          "scenario": "AGL must recover logistics applications after a simulated outage without exposing the management zone.",
          "why": "Recovery objective matters because AGL must make reliable, explainable decisions about systems and information. A target describing acceptable recovery time or data loss Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL must recover logistics applications after a simulated outage without exposing the management zone.",
            "Define recovery objective in one sentence: A target describing acceptable recovery time or data loss",
            "Carry out this small, authorized activity: Define fictional RTO and RPO values.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of recovery objective, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of recovery objective, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Define fictional RTO and RPO values",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a target describing acceptable recovery time or data loss?",
              "choices": [
                "Backup validation",
                "Recovery objective",
                "Architecture review",
                "Zero trust"
              ],
              "correct": 1,
              "explanation": "Recovery objective: A target describing acceptable recovery time or data loss"
            },
            {
              "question": "Which practical step best demonstrates recovery objective in this lesson?",
              "choices": [
                "Explain identity and device verification checkpoints",
                "Define fictional RTO and RPO values",
                "Defend three security choices in the AGL network blueprint",
                "Restore a non-sensitive sample file from backup"
              ],
              "correct": 1,
              "explanation": "The guided activity for recovery objective is: Define fictional RTO and RPO values."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c3-w12-s3",
          "title": "Backup validation: business application",
          "term": "Backup validation",
          "definition": "Checking that copies can actually restore needed data",
          "analogy": "Keeping spare keys matters only if they open the lock",
          "scenario": "AGL must recover logistics applications after a simulated outage without exposing the management zone.",
          "why": "Backup validation matters because AGL must make reliable, explainable decisions about systems and information. Checking that copies can actually restore needed data Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL must recover logistics applications after a simulated outage without exposing the management zone.",
            "Define backup validation in one sentence: Checking that copies can actually restore needed data",
            "Carry out this small, authorized activity: Restore a non-sensitive sample file from backup.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of backup validation, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of backup validation, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Restore a non-sensitive sample file from backup",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: checking that copies can actually restore needed data?",
              "choices": [
                "Architecture review",
                "Backup validation",
                "Recovery objective",
                "Zero trust"
              ],
              "correct": 1,
              "explanation": "Backup validation: Checking that copies can actually restore needed data"
            },
            {
              "question": "Which practical step best demonstrates backup validation in this lesson?",
              "choices": [
                "Defend three security choices in the AGL network blueprint",
                "Restore a non-sensitive sample file from backup",
                "Define fictional RTO and RPO values",
                "Explain identity and device verification checkpoints"
              ],
              "correct": 1,
              "explanation": "The guided activity for backup validation is: Restore a non-sensitive sample file from backup."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c3-w12-s4",
          "title": "Architecture review: project evidence",
          "term": "Architecture review",
          "definition": "A structured review of the design, security controls and tradeoffs",
          "analogy": "An engineer reviews a building plan before construction",
          "scenario": "AGL must recover logistics applications after a simulated outage without exposing the management zone.",
          "why": "Architecture review matters because AGL must make reliable, explainable decisions about systems and information. A structured review of the design, security controls and tradeoffs Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL must recover logistics applications after a simulated outage without exposing the management zone.",
            "Define architecture review in one sentence: A structured review of the design, security controls and tradeoffs",
            "Carry out this small, authorized activity: Defend three security choices in the AGL network blueprint.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of architecture review, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of architecture review, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Defend three security choices in the AGL network blueprint",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a structured review of the design, security controls and tradeoffs?",
              "choices": [
                "Architecture review",
                "Zero trust",
                "Recovery objective",
                "Backup validation"
              ],
              "correct": 0,
              "explanation": "Architecture review: A structured review of the design, security controls and tradeoffs"
            },
            {
              "question": "Which practical step best demonstrates architecture review in this lesson?",
              "choices": [
                "Restore a non-sensitive sample file from backup",
                "Defend three security choices in the AGL network blueprint",
                "Define fictional RTO and RPO values",
                "Explain identity and device verification checkpoints"
              ],
              "correct": 1,
              "explanation": "The guided activity for architecture review is: Defend three security choices in the AGL network blueprint."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 1,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 13,
      "month": 4,
      "course": 4,
      "title": "Security telemetry and event logging",
      "learn": "Event log: A record of something that happened in a system; Telemetry: Measurements and signals collected from operating systems or applications; Timestamp: A record of when an event happened; Log integrity: The ability to detect unauthorized changes to evidence records",
      "lab": "Create an inventory of synthetic security log sources",
      "deliver": "Create an inventory of synthetic security log sources. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "AGL receives thousands of synthetic sign-in and application events each day.",
      "challenge": "Create an inventory of synthetic security log sources",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: a record of something that happened in a system?",
          "choices": [
            "Timestamp",
            "Event log",
            "Telemetry",
            "Log integrity"
          ],
          "correct": 1,
          "explanation": "Event log — A record of something that happened in a system"
        },
        {
          "question": "In this week's AGL training, which concept means: measurements and signals collected from operating systems or applications?",
          "choices": [
            "Log integrity",
            "Event log",
            "Telemetry",
            "Timestamp"
          ],
          "correct": 2,
          "explanation": "Telemetry — Measurements and signals collected from operating systems or applications"
        },
        {
          "question": "In this week's AGL training, which concept means: a record of when an event happened?",
          "choices": [
            "Log integrity",
            "Event log",
            "Telemetry",
            "Timestamp"
          ],
          "correct": 3,
          "explanation": "Timestamp — A record of when an event happened"
        },
        {
          "question": "In this week's AGL training, which concept means: the ability to detect unauthorized changes to evidence records?",
          "choices": [
            "Event log",
            "Timestamp",
            "Log integrity",
            "Telemetry"
          ],
          "correct": 2,
          "explanation": "Log integrity — The ability to detect unauthorized changes to evidence records"
        },
        {
          "question": "To demonstrate event log in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Record a checksum for a harmless sample log file",
            "Normalize fictional events into a consistent time zone",
            "Choose which signals the SOC should collect",
            "Inspect a small sample of synthetic sign-in events"
          ],
          "correct": 3,
          "explanation": "The intended first activity is to inspect a small sample of synthetic sign-in events; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c4-w13-s1",
          "title": "Event log: Security telemetry and event logging",
          "term": "Event log",
          "definition": "A record of something that happened in a system",
          "analogy": "A loading bay records each time its door opens",
          "scenario": "AGL receives thousands of synthetic sign-in and application events each day.",
          "why": "Event log matters because AGL must make reliable, explainable decisions about systems and information. A record of something that happened in a system Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL receives thousands of synthetic sign-in and application events each day.",
            "Define event log in one sentence: A record of something that happened in a system",
            "Carry out this small, authorized activity: Inspect a small sample of synthetic sign-in events.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of event log, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of event log, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Inspect a small sample of synthetic sign-in events",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a record of something that happened in a system?",
              "choices": [
                "Timestamp",
                "Telemetry",
                "Event log",
                "Log integrity"
              ],
              "correct": 2,
              "explanation": "Event log: A record of something that happened in a system"
            },
            {
              "question": "Which practical step best demonstrates event log in this lesson?",
              "choices": [
                "Inspect a small sample of synthetic sign-in events",
                "Record a checksum for a harmless sample log file",
                "Choose which signals the SOC should collect",
                "Normalize fictional events into a consistent time zone"
              ],
              "correct": 0,
              "explanation": "The guided activity for event log is: Inspect a small sample of synthetic sign-in events."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c4-w13-s2",
          "title": "Telemetry: guided practice",
          "term": "Telemetry",
          "definition": "Measurements and signals collected from operating systems or applications",
          "analogy": "Sensors report a truck's temperature and location",
          "scenario": "AGL receives thousands of synthetic sign-in and application events each day.",
          "why": "Telemetry matters because AGL must make reliable, explainable decisions about systems and information. Measurements and signals collected from operating systems or applications Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL receives thousands of synthetic sign-in and application events each day.",
            "Define telemetry in one sentence: Measurements and signals collected from operating systems or applications",
            "Carry out this small, authorized activity: Choose which signals the SOC should collect.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of telemetry, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of telemetry, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Choose which signals the SOC should collect",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: measurements and signals collected from operating systems or applications?",
              "choices": [
                "Log integrity",
                "Timestamp",
                "Telemetry",
                "Event log"
              ],
              "correct": 2,
              "explanation": "Telemetry: Measurements and signals collected from operating systems or applications"
            },
            {
              "question": "Which practical step best demonstrates telemetry in this lesson?",
              "choices": [
                "Choose which signals the SOC should collect",
                "Normalize fictional events into a consistent time zone",
                "Inspect a small sample of synthetic sign-in events",
                "Record a checksum for a harmless sample log file"
              ],
              "correct": 0,
              "explanation": "The guided activity for telemetry is: Choose which signals the SOC should collect."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c4-w13-s3",
          "title": "Timestamp: business application",
          "term": "Timestamp",
          "definition": "A record of when an event happened",
          "analogy": "A package scanner records exactly when an item arrived",
          "scenario": "AGL receives thousands of synthetic sign-in and application events each day.",
          "why": "Timestamp matters because AGL must make reliable, explainable decisions about systems and information. A record of when an event happened Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL receives thousands of synthetic sign-in and application events each day.",
            "Define timestamp in one sentence: A record of when an event happened",
            "Carry out this small, authorized activity: Normalize fictional events into a consistent time zone.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of timestamp, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of timestamp, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Normalize fictional events into a consistent time zone",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a record of when an event happened?",
              "choices": [
                "Timestamp",
                "Event log",
                "Log integrity",
                "Telemetry"
              ],
              "correct": 0,
              "explanation": "Timestamp: A record of when an event happened"
            },
            {
              "question": "Which practical step best demonstrates timestamp in this lesson?",
              "choices": [
                "Inspect a small sample of synthetic sign-in events",
                "Normalize fictional events into a consistent time zone",
                "Record a checksum for a harmless sample log file",
                "Choose which signals the SOC should collect"
              ],
              "correct": 1,
              "explanation": "The guided activity for timestamp is: Normalize fictional events into a consistent time zone."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c4-w13-s4",
          "title": "Log integrity: project evidence",
          "term": "Log integrity",
          "definition": "The ability to detect unauthorized changes to evidence records",
          "analogy": "A signed gate log helps detect altered entries",
          "scenario": "AGL receives thousands of synthetic sign-in and application events each day.",
          "why": "Log integrity matters because AGL must make reliable, explainable decisions about systems and information. The ability to detect unauthorized changes to evidence records Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL receives thousands of synthetic sign-in and application events each day.",
            "Define log integrity in one sentence: The ability to detect unauthorized changes to evidence records",
            "Carry out this small, authorized activity: Record a checksum for a harmless sample log file.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of log integrity, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of log integrity, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Record a checksum for a harmless sample log file",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: the ability to detect unauthorized changes to evidence records?",
              "choices": [
                "Timestamp",
                "Telemetry",
                "Log integrity",
                "Event log"
              ],
              "correct": 2,
              "explanation": "Log integrity: The ability to detect unauthorized changes to evidence records"
            },
            {
              "question": "Which practical step best demonstrates log integrity in this lesson?",
              "choices": [
                "Normalize fictional events into a consistent time zone",
                "Choose which signals the SOC should collect",
                "Record a checksum for a harmless sample log file",
                "Inspect a small sample of synthetic sign-in events"
              ],
              "correct": 2,
              "explanation": "The guided activity for log integrity is: Record a checksum for a harmless sample log file."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 2,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 14,
      "month": 4,
      "course": 4,
      "title": "SIEM, correlation and alert triage",
      "learn": "SIEM: Software that collects and searches security events from multiple sources; Detection rule: Logic that flags a pattern worth investigating; Correlation: Combining related observations to see a broader pattern; False positive: An alert that fires even though no actual threat occurred",
      "lab": "Build a synthetic event table and two detection rules",
      "deliver": "Build a synthetic event table and two detection rules. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "A series of benign mock authentication failures should create a measurable SOC alert.",
      "challenge": "Build a synthetic event table and two detection rules",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: software that collects and searches security events from multiple sources?",
          "choices": [
            "SIEM",
            "Detection rule",
            "False positive",
            "Correlation"
          ],
          "correct": 0,
          "explanation": "SIEM — Software that collects and searches security events from multiple sources"
        },
        {
          "question": "In this week's AGL training, which concept means: logic that flags a pattern worth investigating?",
          "choices": [
            "Correlation",
            "Detection rule",
            "SIEM",
            "False positive"
          ],
          "correct": 1,
          "explanation": "Detection rule — Logic that flags a pattern worth investigating"
        },
        {
          "question": "In this week's AGL training, which concept means: combining related observations to see a broader pattern?",
          "choices": [
            "Correlation",
            "Detection rule",
            "False positive",
            "SIEM"
          ],
          "correct": 0,
          "explanation": "Correlation — Combining related observations to see a broader pattern"
        },
        {
          "question": "In this week's AGL training, which concept means: an alert that fires even though no actual threat occurred?",
          "choices": [
            "Correlation",
            "Detection rule",
            "False positive",
            "SIEM"
          ],
          "correct": 2,
          "explanation": "False positive — An alert that fires even though no actual threat occurred"
        },
        {
          "question": "To demonstrate siem in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Flag three failed mock logins inside a window",
            "Write a reason to close a harmless sample alert",
            "Connect a simulated login event with an account change",
            "Group sample events by source and severity"
          ],
          "correct": 3,
          "explanation": "The intended first activity is to group sample events by source and severity; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c4-w14-s1",
          "title": "SIEM: SIEM, correlation and alert triage",
          "term": "SIEM",
          "definition": "Software that collects and searches security events from multiple sources",
          "analogy": "A central warehouse dashboard merges alarms from different buildings",
          "scenario": "A series of benign mock authentication failures should create a measurable SOC alert.",
          "why": "SIEM matters because AGL must make reliable, explainable decisions about systems and information. Software that collects and searches security events from multiple sources Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A series of benign mock authentication failures should create a measurable SOC alert.",
            "Define siem in one sentence: Software that collects and searches security events from multiple sources",
            "Carry out this small, authorized activity: Group sample events by source and severity.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of siem, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of siem, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Group sample events by source and severity",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: software that collects and searches security events from multiple sources?",
              "choices": [
                "False positive",
                "SIEM",
                "Correlation",
                "Detection rule"
              ],
              "correct": 1,
              "explanation": "SIEM: Software that collects and searches security events from multiple sources"
            },
            {
              "question": "Which practical step best demonstrates siem in this lesson?",
              "choices": [
                "Connect a simulated login event with an account change",
                "Write a reason to close a harmless sample alert",
                "Flag three failed mock logins inside a window",
                "Group sample events by source and severity"
              ],
              "correct": 3,
              "explanation": "The guided activity for siem is: Group sample events by source and severity."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c4-w14-s2",
          "title": "Detection rule: guided practice",
          "term": "Detection rule",
          "definition": "Logic that flags a pattern worth investigating",
          "analogy": "A sensor alerts on repeated unauthorized door openings",
          "scenario": "A series of benign mock authentication failures should create a measurable SOC alert.",
          "why": "Detection rule matters because AGL must make reliable, explainable decisions about systems and information. Logic that flags a pattern worth investigating Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A series of benign mock authentication failures should create a measurable SOC alert.",
            "Define detection rule in one sentence: Logic that flags a pattern worth investigating",
            "Carry out this small, authorized activity: Flag three failed mock logins inside a window.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of detection rule, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of detection rule, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Flag three failed mock logins inside a window",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: logic that flags a pattern worth investigating?",
              "choices": [
                "Detection rule",
                "Correlation",
                "False positive",
                "SIEM"
              ],
              "correct": 0,
              "explanation": "Detection rule: Logic that flags a pattern worth investigating"
            },
            {
              "question": "Which practical step best demonstrates detection rule in this lesson?",
              "choices": [
                "Connect a simulated login event with an account change",
                "Group sample events by source and severity",
                "Write a reason to close a harmless sample alert",
                "Flag three failed mock logins inside a window"
              ],
              "correct": 3,
              "explanation": "The guided activity for detection rule is: Flag three failed mock logins inside a window."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c4-w14-s3",
          "title": "Correlation: business application",
          "term": "Correlation",
          "definition": "Combining related observations to see a broader pattern",
          "analogy": "Two cameras reveal a vehicle route better than one",
          "scenario": "A series of benign mock authentication failures should create a measurable SOC alert.",
          "why": "Correlation matters because AGL must make reliable, explainable decisions about systems and information. Combining related observations to see a broader pattern Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A series of benign mock authentication failures should create a measurable SOC alert.",
            "Define correlation in one sentence: Combining related observations to see a broader pattern",
            "Carry out this small, authorized activity: Connect a simulated login event with an account change.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of correlation, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of correlation, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Connect a simulated login event with an account change",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: combining related observations to see a broader pattern?",
              "choices": [
                "Detection rule",
                "False positive",
                "SIEM",
                "Correlation"
              ],
              "correct": 3,
              "explanation": "Correlation: Combining related observations to see a broader pattern"
            },
            {
              "question": "Which practical step best demonstrates correlation in this lesson?",
              "choices": [
                "Write a reason to close a harmless sample alert",
                "Flag three failed mock logins inside a window",
                "Connect a simulated login event with an account change",
                "Group sample events by source and severity"
              ],
              "correct": 2,
              "explanation": "The guided activity for correlation is: Connect a simulated login event with an account change."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c4-w14-s4",
          "title": "False positive: project evidence",
          "term": "False positive",
          "definition": "An alert that fires even though no actual threat occurred",
          "analogy": "A motion sensor triggers when harmless equipment moves",
          "scenario": "A series of benign mock authentication failures should create a measurable SOC alert.",
          "why": "False positive matters because AGL must make reliable, explainable decisions about systems and information. An alert that fires even though no actual threat occurred Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A series of benign mock authentication failures should create a measurable SOC alert.",
            "Define false positive in one sentence: An alert that fires even though no actual threat occurred",
            "Carry out this small, authorized activity: Write a reason to close a harmless sample alert.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of false positive, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of false positive, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write a reason to close a harmless sample alert",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: an alert that fires even though no actual threat occurred?",
              "choices": [
                "SIEM",
                "False positive",
                "Correlation",
                "Detection rule"
              ],
              "correct": 1,
              "explanation": "False positive: An alert that fires even though no actual threat occurred"
            },
            {
              "question": "Which practical step best demonstrates false positive in this lesson?",
              "choices": [
                "Flag three failed mock logins inside a window",
                "Group sample events by source and severity",
                "Connect a simulated login event with an account change",
                "Write a reason to close a harmless sample alert"
              ],
              "correct": 3,
              "explanation": "The guided activity for false positive is: Write a reason to close a harmless sample alert."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 2,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 15,
      "month": 4,
      "course": 4,
      "title": "Analyst investigations and ticket handling",
      "learn": "Triage: The initial assessment used to decide what needs attention first; Severity: An estimate of the urgency and potential harm of an event; Incident ticket: A documented record of investigation and action; Escalation: Moving a case to someone with authority or expertise",
      "lab": "Create three realistic incident tickets with decision logs",
      "deliver": "Create three realistic incident tickets with decision logs. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "The AGL SOC gets more alerts than an analyst can investigate at once.",
      "challenge": "Create three realistic incident tickets with decision logs",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: the initial assessment used to decide what needs attention first?",
          "choices": [
            "Incident ticket",
            "Triage",
            "Escalation",
            "Severity"
          ],
          "correct": 1,
          "explanation": "Triage — The initial assessment used to decide what needs attention first"
        },
        {
          "question": "In this week's AGL training, which concept means: an estimate of the urgency and potential harm of an event?",
          "choices": [
            "Incident ticket",
            "Severity",
            "Triage",
            "Escalation"
          ],
          "correct": 1,
          "explanation": "Severity — An estimate of the urgency and potential harm of an event"
        },
        {
          "question": "In this week's AGL training, which concept means: a documented record of investigation and action?",
          "choices": [
            "Severity",
            "Escalation",
            "Incident ticket",
            "Triage"
          ],
          "correct": 2,
          "explanation": "Incident ticket — A documented record of investigation and action"
        },
        {
          "question": "In this week's AGL training, which concept means: moving a case to someone with authority or expertise?",
          "choices": [
            "Incident ticket",
            "Triage",
            "Severity",
            "Escalation"
          ],
          "correct": 3,
          "explanation": "Escalation — Moving a case to someone with authority or expertise"
        },
        {
          "question": "To demonstrate triage in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Write a ticket containing evidence and next steps",
            "Sort a fictional SOC queue by severity",
            "Define when an analyst should contact the incident lead",
            "Classify three alerts using a clear rubric"
          ],
          "correct": 1,
          "explanation": "The intended first activity is to sort a fictional SOC queue by severity; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c4-w15-s1",
          "title": "Triage: Analyst investigations and ticket handling",
          "term": "Triage",
          "definition": "The initial assessment used to decide what needs attention first",
          "analogy": "Emergency dispatch assigns priority based on impact",
          "scenario": "The AGL SOC gets more alerts than an analyst can investigate at once.",
          "why": "Triage matters because AGL must make reliable, explainable decisions about systems and information. The initial assessment used to decide what needs attention first Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The AGL SOC gets more alerts than an analyst can investigate at once.",
            "Define triage in one sentence: The initial assessment used to decide what needs attention first",
            "Carry out this small, authorized activity: Sort a fictional SOC queue by severity.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of triage, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of triage, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Sort a fictional SOC queue by severity",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: the initial assessment used to decide what needs attention first?",
              "choices": [
                "Escalation",
                "Severity",
                "Triage",
                "Incident ticket"
              ],
              "correct": 2,
              "explanation": "Triage: The initial assessment used to decide what needs attention first"
            },
            {
              "question": "Which practical step best demonstrates triage in this lesson?",
              "choices": [
                "Define when an analyst should contact the incident lead",
                "Sort a fictional SOC queue by severity",
                "Classify three alerts using a clear rubric",
                "Write a ticket containing evidence and next steps"
              ],
              "correct": 1,
              "explanation": "The guided activity for triage is: Sort a fictional SOC queue by severity."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c4-w15-s2",
          "title": "Severity: guided practice",
          "term": "Severity",
          "definition": "An estimate of the urgency and potential harm of an event",
          "analogy": "A truck breakdown carrying medicine is more urgent than a minor delay",
          "scenario": "The AGL SOC gets more alerts than an analyst can investigate at once.",
          "why": "Severity matters because AGL must make reliable, explainable decisions about systems and information. An estimate of the urgency and potential harm of an event Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The AGL SOC gets more alerts than an analyst can investigate at once.",
            "Define severity in one sentence: An estimate of the urgency and potential harm of an event",
            "Carry out this small, authorized activity: Classify three alerts using a clear rubric.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of severity, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of severity, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Classify three alerts using a clear rubric",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: an estimate of the urgency and potential harm of an event?",
              "choices": [
                "Triage",
                "Escalation",
                "Severity",
                "Incident ticket"
              ],
              "correct": 2,
              "explanation": "Severity: An estimate of the urgency and potential harm of an event"
            },
            {
              "question": "Which practical step best demonstrates severity in this lesson?",
              "choices": [
                "Sort a fictional SOC queue by severity",
                "Define when an analyst should contact the incident lead",
                "Classify three alerts using a clear rubric",
                "Write a ticket containing evidence and next steps"
              ],
              "correct": 2,
              "explanation": "The guided activity for severity is: Classify three alerts using a clear rubric."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c4-w15-s3",
          "title": "Incident ticket: business application",
          "term": "Incident ticket",
          "definition": "A documented record of investigation and action",
          "analogy": "A work order tracks diagnosis and repairs",
          "scenario": "The AGL SOC gets more alerts than an analyst can investigate at once.",
          "why": "Incident ticket matters because AGL must make reliable, explainable decisions about systems and information. A documented record of investigation and action Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The AGL SOC gets more alerts than an analyst can investigate at once.",
            "Define incident ticket in one sentence: A documented record of investigation and action",
            "Carry out this small, authorized activity: Write a ticket containing evidence and next steps.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of incident ticket, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of incident ticket, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write a ticket containing evidence and next steps",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a documented record of investigation and action?",
              "choices": [
                "Triage",
                "Incident ticket",
                "Escalation",
                "Severity"
              ],
              "correct": 1,
              "explanation": "Incident ticket: A documented record of investigation and action"
            },
            {
              "question": "Which practical step best demonstrates incident ticket in this lesson?",
              "choices": [
                "Classify three alerts using a clear rubric",
                "Define when an analyst should contact the incident lead",
                "Sort a fictional SOC queue by severity",
                "Write a ticket containing evidence and next steps"
              ],
              "correct": 3,
              "explanation": "The guided activity for incident ticket is: Write a ticket containing evidence and next steps."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c4-w15-s4",
          "title": "Escalation: project evidence",
          "term": "Escalation",
          "definition": "Moving a case to someone with authority or expertise",
          "analogy": "A shift worker calls a supervisor for a safety hazard",
          "scenario": "The AGL SOC gets more alerts than an analyst can investigate at once.",
          "why": "Escalation matters because AGL must make reliable, explainable decisions about systems and information. Moving a case to someone with authority or expertise Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The AGL SOC gets more alerts than an analyst can investigate at once.",
            "Define escalation in one sentence: Moving a case to someone with authority or expertise",
            "Carry out this small, authorized activity: Define when an analyst should contact the incident lead.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of escalation, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of escalation, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Define when an analyst should contact the incident lead",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: moving a case to someone with authority or expertise?",
              "choices": [
                "Escalation",
                "Severity",
                "Incident ticket",
                "Triage"
              ],
              "correct": 0,
              "explanation": "Escalation: Moving a case to someone with authority or expertise"
            },
            {
              "question": "Which practical step best demonstrates escalation in this lesson?",
              "choices": [
                "Define when an analyst should contact the incident lead",
                "Write a ticket containing evidence and next steps",
                "Sort a fictional SOC queue by severity",
                "Classify three alerts using a clear rubric"
              ],
              "correct": 0,
              "explanation": "The guided activity for escalation is: Define when an analyst should contact the incident lead."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 2,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 16,
      "month": 4,
      "course": 4,
      "title": "Detection engineering and SOC reporting",
      "learn": "Detection tuning: Adjusting a rule to reduce noise without missing important activity; KQL concepts: A query language used to search and summarize Microsoft security data; SOC metric: A measurement of how security operations performs; Shift handoff: A concise record transferring active work to the next team",
      "lab": "Finalize Project 2 alert workflow and analyst dashboard",
      "deliver": "Finalize Project 2 alert workflow and analyst dashboard. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "An operations leader needs a defensible overview of the SOC without exposing customer logs.",
      "challenge": "Finalize Project 2 alert workflow and analyst dashboard",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: adjusting a rule to reduce noise without missing important activity?",
          "choices": [
            "SOC metric",
            "Shift handoff",
            "KQL concepts",
            "Detection tuning"
          ],
          "correct": 3,
          "explanation": "Detection tuning — Adjusting a rule to reduce noise without missing important activity"
        },
        {
          "question": "In this week's AGL training, which concept means: a query language used to search and summarize Microsoft security data?",
          "choices": [
            "Detection tuning",
            "Shift handoff",
            "KQL concepts",
            "SOC metric"
          ],
          "correct": 2,
          "explanation": "KQL concepts — A query language used to search and summarize Microsoft security data"
        },
        {
          "question": "In this week's AGL training, which concept means: a measurement of how security operations performs?",
          "choices": [
            "SOC metric",
            "Detection tuning",
            "Shift handoff",
            "KQL concepts"
          ],
          "correct": 0,
          "explanation": "SOC metric — A measurement of how security operations performs"
        },
        {
          "question": "In this week's AGL training, which concept means: a concise record transferring active work to the next team?",
          "choices": [
            "Detection tuning",
            "Shift handoff",
            "KQL concepts",
            "SOC metric"
          ],
          "correct": 1,
          "explanation": "Shift handoff — A concise record transferring active work to the next team"
        },
        {
          "question": "To demonstrate detection tuning in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Write a pseudocode filter over synthetic logs",
            "Create a three-case handoff briefing",
            "Adjust a synthetic alert threshold and explain the tradeoff",
            "Calculate simulated alert response time from sample data"
          ],
          "correct": 2,
          "explanation": "The intended first activity is to adjust a synthetic alert threshold and explain the tradeoff; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c4-w16-s1",
          "title": "Detection tuning: Detection engineering and SOC reporting",
          "term": "Detection tuning",
          "definition": "Adjusting a rule to reduce noise without missing important activity",
          "analogy": "A camera sensitivity setting balances noise and missed events",
          "scenario": "An operations leader needs a defensible overview of the SOC without exposing customer logs.",
          "why": "Detection tuning matters because AGL must make reliable, explainable decisions about systems and information. Adjusting a rule to reduce noise without missing important activity Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An operations leader needs a defensible overview of the SOC without exposing customer logs.",
            "Define detection tuning in one sentence: Adjusting a rule to reduce noise without missing important activity",
            "Carry out this small, authorized activity: Adjust a synthetic alert threshold and explain the tradeoff.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of detection tuning, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of detection tuning, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Adjust a synthetic alert threshold and explain the tradeoff",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: adjusting a rule to reduce noise without missing important activity?",
              "choices": [
                "Shift handoff",
                "KQL concepts",
                "Detection tuning",
                "SOC metric"
              ],
              "correct": 2,
              "explanation": "Detection tuning: Adjusting a rule to reduce noise without missing important activity"
            },
            {
              "question": "Which practical step best demonstrates detection tuning in this lesson?",
              "choices": [
                "Create a three-case handoff briefing",
                "Write a pseudocode filter over synthetic logs",
                "Adjust a synthetic alert threshold and explain the tradeoff",
                "Calculate simulated alert response time from sample data"
              ],
              "correct": 2,
              "explanation": "The guided activity for detection tuning is: Adjust a synthetic alert threshold and explain the tradeoff."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c4-w16-s2",
          "title": "KQL concepts: guided practice",
          "term": "KQL concepts",
          "definition": "A query language used to search and summarize Microsoft security data",
          "analogy": "A filter on a large shipment spreadsheet shows only relevant orders",
          "scenario": "An operations leader needs a defensible overview of the SOC without exposing customer logs.",
          "why": "KQL concepts matters because AGL must make reliable, explainable decisions about systems and information. A query language used to search and summarize Microsoft security data Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An operations leader needs a defensible overview of the SOC without exposing customer logs.",
            "Define kql concepts in one sentence: A query language used to search and summarize Microsoft security data",
            "Carry out this small, authorized activity: Write a pseudocode filter over synthetic logs.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of kql concepts, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of kql concepts, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write a pseudocode filter over synthetic logs",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a query language used to search and summarize Microsoft security data?",
              "choices": [
                "SOC metric",
                "KQL concepts",
                "Shift handoff",
                "Detection tuning"
              ],
              "correct": 1,
              "explanation": "KQL concepts: A query language used to search and summarize Microsoft security data"
            },
            {
              "question": "Which practical step best demonstrates kql concepts in this lesson?",
              "choices": [
                "Write a pseudocode filter over synthetic logs",
                "Create a three-case handoff briefing",
                "Adjust a synthetic alert threshold and explain the tradeoff",
                "Calculate simulated alert response time from sample data"
              ],
              "correct": 0,
              "explanation": "The guided activity for kql concepts is: Write a pseudocode filter over synthetic logs."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c4-w16-s3",
          "title": "SOC metric: business application",
          "term": "SOC metric",
          "definition": "A measurement of how security operations performs",
          "analogy": "A dispatch team measures pickup delays and overdue work",
          "scenario": "An operations leader needs a defensible overview of the SOC without exposing customer logs.",
          "why": "SOC metric matters because AGL must make reliable, explainable decisions about systems and information. A measurement of how security operations performs Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An operations leader needs a defensible overview of the SOC without exposing customer logs.",
            "Define soc metric in one sentence: A measurement of how security operations performs",
            "Carry out this small, authorized activity: Calculate simulated alert response time from sample data.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of soc metric, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of soc metric, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Calculate simulated alert response time from sample data",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a measurement of how security operations performs?",
              "choices": [
                "KQL concepts",
                "Detection tuning",
                "Shift handoff",
                "SOC metric"
              ],
              "correct": 3,
              "explanation": "SOC metric: A measurement of how security operations performs"
            },
            {
              "question": "Which practical step best demonstrates soc metric in this lesson?",
              "choices": [
                "Create a three-case handoff briefing",
                "Calculate simulated alert response time from sample data",
                "Write a pseudocode filter over synthetic logs",
                "Adjust a synthetic alert threshold and explain the tradeoff"
              ],
              "correct": 1,
              "explanation": "The guided activity for soc metric is: Calculate simulated alert response time from sample data."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c4-w16-s4",
          "title": "Shift handoff: project evidence",
          "term": "Shift handoff",
          "definition": "A concise record transferring active work to the next team",
          "analogy": "A warehouse manager notes unresolved issues at shift change",
          "scenario": "An operations leader needs a defensible overview of the SOC without exposing customer logs.",
          "why": "Shift handoff matters because AGL must make reliable, explainable decisions about systems and information. A concise record transferring active work to the next team Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An operations leader needs a defensible overview of the SOC without exposing customer logs.",
            "Define shift handoff in one sentence: A concise record transferring active work to the next team",
            "Carry out this small, authorized activity: Create a three-case handoff briefing.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of shift handoff, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of shift handoff, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create a three-case handoff briefing",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a concise record transferring active work to the next team?",
              "choices": [
                "KQL concepts",
                "Detection tuning",
                "SOC metric",
                "Shift handoff"
              ],
              "correct": 3,
              "explanation": "Shift handoff: A concise record transferring active work to the next team"
            },
            {
              "question": "Which practical step best demonstrates shift handoff in this lesson?",
              "choices": [
                "Write a pseudocode filter over synthetic logs",
                "Adjust a synthetic alert threshold and explain the tradeoff",
                "Create a three-case handoff briefing",
                "Calculate simulated alert response time from sample data"
              ],
              "correct": 2,
              "explanation": "The guided activity for shift handoff is: Create a three-case handoff briefing."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 2,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 17,
      "month": 5,
      "course": 5,
      "title": "Authorized security assessments",
      "learn": "Written authorization: Permission specifying the exact systems and activities allowed; Attack surface: The collection of points where a system could be accessed or influenced; Vulnerability: A weakness that could lead to security harm; Finding: A supported security issue recorded with evidence and impact",
      "lab": "Write an AGL rules-of-engagement document and scope matrix",
      "deliver": "Write an AGL rules-of-engagement document and scope matrix. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "A consulting team has written approval to examine a deliberately vulnerable test application.",
      "challenge": "Write an AGL rules-of-engagement document and scope matrix",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: permission specifying the exact systems and activities allowed?",
          "choices": [
            "Finding",
            "Vulnerability",
            "Attack surface",
            "Written authorization"
          ],
          "correct": 3,
          "explanation": "Written authorization — Permission specifying the exact systems and activities allowed"
        },
        {
          "question": "In this week's AGL training, which concept means: the collection of points where a system could be accessed or influenced?",
          "choices": [
            "Attack surface",
            "Vulnerability",
            "Written authorization",
            "Finding"
          ],
          "correct": 0,
          "explanation": "Attack surface — The collection of points where a system could be accessed or influenced"
        },
        {
          "question": "In this week's AGL training, which concept means: a weakness that could lead to security harm?",
          "choices": [
            "Finding",
            "Written authorization",
            "Attack surface",
            "Vulnerability"
          ],
          "correct": 3,
          "explanation": "Vulnerability — A weakness that could lead to security harm"
        },
        {
          "question": "In this week's AGL training, which concept means: a supported security issue recorded with evidence and impact?",
          "choices": [
            "Attack surface",
            "Finding",
            "Written authorization",
            "Vulnerability"
          ],
          "correct": 1,
          "explanation": "Finding — A supported security issue recorded with evidence and impact"
        },
        {
          "question": "To demonstrate written authorization in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Document an intentionally created sample misconfiguration",
            "Define two approved lab systems and a stop condition",
            "Create a report item with reproducible evidence",
            "Map services in a fictional web application"
          ],
          "correct": 1,
          "explanation": "The intended first activity is to define two approved lab systems and a stop condition; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c5-w17-s1",
          "title": "Written authorization: Authorized security assessments",
          "term": "Written authorization",
          "definition": "Permission specifying the exact systems and activities allowed",
          "analogy": "A maintenance crew needs a signed work order for restricted equipment",
          "scenario": "A consulting team has written approval to examine a deliberately vulnerable test application.",
          "why": "Written authorization matters because AGL must make reliable, explainable decisions about systems and information. Permission specifying the exact systems and activities allowed Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A consulting team has written approval to examine a deliberately vulnerable test application.",
            "Define written authorization in one sentence: Permission specifying the exact systems and activities allowed",
            "Carry out this small, authorized activity: Define two approved lab systems and a stop condition.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of written authorization, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of written authorization, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Define two approved lab systems and a stop condition",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: permission specifying the exact systems and activities allowed?",
              "choices": [
                "Finding",
                "Vulnerability",
                "Written authorization",
                "Attack surface"
              ],
              "correct": 2,
              "explanation": "Written authorization: Permission specifying the exact systems and activities allowed"
            },
            {
              "question": "Which practical step best demonstrates written authorization in this lesson?",
              "choices": [
                "Map services in a fictional web application",
                "Document an intentionally created sample misconfiguration",
                "Create a report item with reproducible evidence",
                "Define two approved lab systems and a stop condition"
              ],
              "correct": 3,
              "explanation": "The guided activity for written authorization is: Define two approved lab systems and a stop condition."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c5-w17-s2",
          "title": "Attack surface: guided practice",
          "term": "Attack surface",
          "definition": "The collection of points where a system could be accessed or influenced",
          "analogy": "A building has doors, gates and loading bays",
          "scenario": "A consulting team has written approval to examine a deliberately vulnerable test application.",
          "why": "Attack surface matters because AGL must make reliable, explainable decisions about systems and information. The collection of points where a system could be accessed or influenced Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A consulting team has written approval to examine a deliberately vulnerable test application.",
            "Define attack surface in one sentence: The collection of points where a system could be accessed or influenced",
            "Carry out this small, authorized activity: Map services in a fictional web application.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of attack surface, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of attack surface, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Map services in a fictional web application",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: the collection of points where a system could be accessed or influenced?",
              "choices": [
                "Vulnerability",
                "Attack surface",
                "Finding",
                "Written authorization"
              ],
              "correct": 1,
              "explanation": "Attack surface: The collection of points where a system could be accessed or influenced"
            },
            {
              "question": "Which practical step best demonstrates attack surface in this lesson?",
              "choices": [
                "Create a report item with reproducible evidence",
                "Map services in a fictional web application",
                "Document an intentionally created sample misconfiguration",
                "Define two approved lab systems and a stop condition"
              ],
              "correct": 1,
              "explanation": "The guided activity for attack surface is: Map services in a fictional web application."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c5-w17-s3",
          "title": "Vulnerability: business application",
          "term": "Vulnerability",
          "definition": "A weakness that could lead to security harm",
          "analogy": "An unlatched window is a weakness even if nobody enters",
          "scenario": "A consulting team has written approval to examine a deliberately vulnerable test application.",
          "why": "Vulnerability matters because AGL must make reliable, explainable decisions about systems and information. A weakness that could lead to security harm Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A consulting team has written approval to examine a deliberately vulnerable test application.",
            "Define vulnerability in one sentence: A weakness that could lead to security harm",
            "Carry out this small, authorized activity: Document an intentionally created sample misconfiguration.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of vulnerability, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of vulnerability, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Document an intentionally created sample misconfiguration",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a weakness that could lead to security harm?",
              "choices": [
                "Written authorization",
                "Finding",
                "Vulnerability",
                "Attack surface"
              ],
              "correct": 2,
              "explanation": "Vulnerability: A weakness that could lead to security harm"
            },
            {
              "question": "Which practical step best demonstrates vulnerability in this lesson?",
              "choices": [
                "Create a report item with reproducible evidence",
                "Define two approved lab systems and a stop condition",
                "Document an intentionally created sample misconfiguration",
                "Map services in a fictional web application"
              ],
              "correct": 2,
              "explanation": "The guided activity for vulnerability is: Document an intentionally created sample misconfiguration."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c5-w17-s4",
          "title": "Finding: project evidence",
          "term": "Finding",
          "definition": "A supported security issue recorded with evidence and impact",
          "analogy": "A safety inspector photographs and documents a damaged latch",
          "scenario": "A consulting team has written approval to examine a deliberately vulnerable test application.",
          "why": "Finding matters because AGL must make reliable, explainable decisions about systems and information. A supported security issue recorded with evidence and impact Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A consulting team has written approval to examine a deliberately vulnerable test application.",
            "Define finding in one sentence: A supported security issue recorded with evidence and impact",
            "Carry out this small, authorized activity: Create a report item with reproducible evidence.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of finding, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of finding, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create a report item with reproducible evidence",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a supported security issue recorded with evidence and impact?",
              "choices": [
                "Finding",
                "Vulnerability",
                "Written authorization",
                "Attack surface"
              ],
              "correct": 0,
              "explanation": "Finding: A supported security issue recorded with evidence and impact"
            },
            {
              "question": "Which practical step best demonstrates finding in this lesson?",
              "choices": [
                "Document an intentionally created sample misconfiguration",
                "Map services in a fictional web application",
                "Define two approved lab systems and a stop condition",
                "Create a report item with reproducible evidence"
              ],
              "correct": 3,
              "explanation": "The guided activity for finding is: Create a report item with reproducible evidence."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 3,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 18,
      "month": 5,
      "course": 5,
      "title": "Web security and safe vulnerability labs",
      "learn": "Input validation: Checking external data against a defined acceptable format; Broken access control: A design flaw that allows inappropriate operations or data access; Session: A temporary authenticated interaction between user and application; Security boundary: A rule separating untrusted input and privileged actions",
      "lab": "Complete a guided local demo of access control and input validation",
      "deliver": "Complete a guided local demo of access control and input validation. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "A fictional training portal contains an intentionally misconfigured access rule.",
      "challenge": "Complete a guided local demo of access control and input validation",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: checking external data against a defined acceptable format?",
          "choices": [
            "Input validation",
            "Session",
            "Broken access control",
            "Security boundary"
          ],
          "correct": 0,
          "explanation": "Input validation — Checking external data against a defined acceptable format"
        },
        {
          "question": "In this week's AGL training, which concept means: a design flaw that allows inappropriate operations or data access?",
          "choices": [
            "Security boundary",
            "Broken access control",
            "Session",
            "Input validation"
          ],
          "correct": 1,
          "explanation": "Broken access control — A design flaw that allows inappropriate operations or data access"
        },
        {
          "question": "In this week's AGL training, which concept means: a temporary authenticated interaction between user and application?",
          "choices": [
            "Broken access control",
            "Session",
            "Input validation",
            "Security boundary"
          ],
          "correct": 1,
          "explanation": "Session — A temporary authenticated interaction between user and application"
        },
        {
          "question": "In this week's AGL training, which concept means: a rule separating untrusted input and privileged actions?",
          "choices": [
            "Input validation",
            "Broken access control",
            "Security boundary",
            "Session"
          ],
          "correct": 2,
          "explanation": "Security boundary — A rule separating untrusted input and privileged actions"
        },
        {
          "question": "To demonstrate input validation in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Validate a sample tracking ID using safe code",
            "Explain why client-side hiding is not server-side authorization",
            "Test role permissions in an intentionally simple local mock app",
            "Diagram a safe login/logout lifecycle"
          ],
          "correct": 0,
          "explanation": "The intended first activity is to validate a sample tracking ID using safe code; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c5-w18-s1",
          "title": "Input validation: Web security and safe vulnerability labs",
          "term": "Input validation",
          "definition": "Checking external data against a defined acceptable format",
          "analogy": "A warehouse form rejects invalid tracking numbers",
          "scenario": "A fictional training portal contains an intentionally misconfigured access rule.",
          "why": "Input validation matters because AGL must make reliable, explainable decisions about systems and information. Checking external data against a defined acceptable format Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A fictional training portal contains an intentionally misconfigured access rule.",
            "Define input validation in one sentence: Checking external data against a defined acceptable format",
            "Carry out this small, authorized activity: Validate a sample tracking ID using safe code.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of input validation, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of input validation, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Validate a sample tracking ID using safe code",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: checking external data against a defined acceptable format?",
              "choices": [
                "Session",
                "Input validation",
                "Security boundary",
                "Broken access control"
              ],
              "correct": 1,
              "explanation": "Input validation: Checking external data against a defined acceptable format"
            },
            {
              "question": "Which practical step best demonstrates input validation in this lesson?",
              "choices": [
                "Explain why client-side hiding is not server-side authorization",
                "Diagram a safe login/logout lifecycle",
                "Validate a sample tracking ID using safe code",
                "Test role permissions in an intentionally simple local mock app"
              ],
              "correct": 2,
              "explanation": "The guided activity for input validation is: Validate a sample tracking ID using safe code."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c5-w18-s2",
          "title": "Broken access control: guided practice",
          "term": "Broken access control",
          "definition": "A design flaw that allows inappropriate operations or data access",
          "analogy": "A visitor should not open the payroll cabinet",
          "scenario": "A fictional training portal contains an intentionally misconfigured access rule.",
          "why": "Broken access control matters because AGL must make reliable, explainable decisions about systems and information. A design flaw that allows inappropriate operations or data access Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A fictional training portal contains an intentionally misconfigured access rule.",
            "Define broken access control in one sentence: A design flaw that allows inappropriate operations or data access",
            "Carry out this small, authorized activity: Test role permissions in an intentionally simple local mock app.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of broken access control, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of broken access control, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Test role permissions in an intentionally simple local mock app",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a design flaw that allows inappropriate operations or data access?",
              "choices": [
                "Security boundary",
                "Session",
                "Broken access control",
                "Input validation"
              ],
              "correct": 2,
              "explanation": "Broken access control: A design flaw that allows inappropriate operations or data access"
            },
            {
              "question": "Which practical step best demonstrates broken access control in this lesson?",
              "choices": [
                "Validate a sample tracking ID using safe code",
                "Test role permissions in an intentionally simple local mock app",
                "Diagram a safe login/logout lifecycle",
                "Explain why client-side hiding is not server-side authorization"
              ],
              "correct": 1,
              "explanation": "The guided activity for broken access control is: Test role permissions in an intentionally simple local mock app."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c5-w18-s3",
          "title": "Session: business application",
          "term": "Session",
          "definition": "A temporary authenticated interaction between user and application",
          "analogy": "A visitor badge remains valid for a limited period",
          "scenario": "A fictional training portal contains an intentionally misconfigured access rule.",
          "why": "Session matters because AGL must make reliable, explainable decisions about systems and information. A temporary authenticated interaction between user and application Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A fictional training portal contains an intentionally misconfigured access rule.",
            "Define session in one sentence: A temporary authenticated interaction between user and application",
            "Carry out this small, authorized activity: Diagram a safe login/logout lifecycle.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of session, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of session, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Diagram a safe login/logout lifecycle",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a temporary authenticated interaction between user and application?",
              "choices": [
                "Input validation",
                "Broken access control",
                "Session",
                "Security boundary"
              ],
              "correct": 2,
              "explanation": "Session: A temporary authenticated interaction between user and application"
            },
            {
              "question": "Which practical step best demonstrates session in this lesson?",
              "choices": [
                "Test role permissions in an intentionally simple local mock app",
                "Validate a sample tracking ID using safe code",
                "Explain why client-side hiding is not server-side authorization",
                "Diagram a safe login/logout lifecycle"
              ],
              "correct": 3,
              "explanation": "The guided activity for session is: Diagram a safe login/logout lifecycle."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c5-w18-s4",
          "title": "Security boundary: project evidence",
          "term": "Security boundary",
          "definition": "A rule separating untrusted input and privileged actions",
          "analogy": "A visitor must be escorted before entering secure storage",
          "scenario": "A fictional training portal contains an intentionally misconfigured access rule.",
          "why": "Security boundary matters because AGL must make reliable, explainable decisions about systems and information. A rule separating untrusted input and privileged actions Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A fictional training portal contains an intentionally misconfigured access rule.",
            "Define security boundary in one sentence: A rule separating untrusted input and privileged actions",
            "Carry out this small, authorized activity: Explain why client-side hiding is not server-side authorization.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of security boundary, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of security boundary, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Explain why client-side hiding is not server-side authorization",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a rule separating untrusted input and privileged actions?",
              "choices": [
                "Security boundary",
                "Input validation",
                "Session",
                "Broken access control"
              ],
              "correct": 0,
              "explanation": "Security boundary: A rule separating untrusted input and privileged actions"
            },
            {
              "question": "Which practical step best demonstrates security boundary in this lesson?",
              "choices": [
                "Validate a sample tracking ID using safe code",
                "Explain why client-side hiding is not server-side authorization",
                "Diagram a safe login/logout lifecycle",
                "Test role permissions in an intentionally simple local mock app"
              ],
              "correct": 1,
              "explanation": "The guided activity for security boundary is: Explain why client-side hiding is not server-side authorization."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 3,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 19,
      "month": 5,
      "course": 5,
      "title": "Incident response and digital evidence",
      "learn": "Incident lifecycle: The stages of preparation, detection, containment, eradication, recovery and review; Evidence preservation: Keeping relevant records intact so findings can be checked; Chain of custody: A record of who handled evidence and when; Containment: A measured action to limit further harm while investigating",
      "lab": "Write a mock incident timeline, preservation checklist and case notes",
      "deliver": "Write a mock incident timeline, preservation checklist and case notes. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "The simulated SOC must investigate an apparent account compromise while preserving evidence.",
      "challenge": "Write a mock incident timeline, preservation checklist and case notes",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: the stages of preparation, detection, containment, eradication, recovery and review?",
          "choices": [
            "Chain of custody",
            "Containment",
            "Evidence preservation",
            "Incident lifecycle"
          ],
          "correct": 3,
          "explanation": "Incident lifecycle — The stages of preparation, detection, containment, eradication, recovery and review"
        },
        {
          "question": "In this week's AGL training, which concept means: keeping relevant records intact so findings can be checked?",
          "choices": [
            "Incident lifecycle",
            "Evidence preservation",
            "Containment",
            "Chain of custody"
          ],
          "correct": 1,
          "explanation": "Evidence preservation — Keeping relevant records intact so findings can be checked"
        },
        {
          "question": "In this week's AGL training, which concept means: a record of who handled evidence and when?",
          "choices": [
            "Containment",
            "Evidence preservation",
            "Incident lifecycle",
            "Chain of custody"
          ],
          "correct": 3,
          "explanation": "Chain of custody — A record of who handled evidence and when"
        },
        {
          "question": "In this week's AGL training, which concept means: a measured action to limit further harm while investigating?",
          "choices": [
            "Incident lifecycle",
            "Evidence preservation",
            "Containment",
            "Chain of custody"
          ],
          "correct": 2,
          "explanation": "Containment — A measured action to limit further harm while investigating"
        },
        {
          "question": "To demonstrate incident lifecycle in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Sequence response actions for a simulated phishing case",
            "Choose a safe containment option for a fictional account",
            "Record an original sample log and its checksum",
            "Create an evidence handoff table for simulated files"
          ],
          "correct": 0,
          "explanation": "The intended first activity is to sequence response actions for a simulated phishing case; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c5-w19-s1",
          "title": "Incident lifecycle: Incident response and digital evidence",
          "term": "Incident lifecycle",
          "definition": "The stages of preparation, detection, containment, eradication, recovery and review",
          "analogy": "A damaged-shipment process begins with containment then investigation",
          "scenario": "The simulated SOC must investigate an apparent account compromise while preserving evidence.",
          "why": "Incident lifecycle matters because AGL must make reliable, explainable decisions about systems and information. The stages of preparation, detection, containment, eradication, recovery and review Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The simulated SOC must investigate an apparent account compromise while preserving evidence.",
            "Define incident lifecycle in one sentence: The stages of preparation, detection, containment, eradication, recovery and review",
            "Carry out this small, authorized activity: Sequence response actions for a simulated phishing case.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of incident lifecycle, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of incident lifecycle, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Sequence response actions for a simulated phishing case",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: the stages of preparation, detection, containment, eradication, recovery and review?",
              "choices": [
                "Containment",
                "Evidence preservation",
                "Incident lifecycle",
                "Chain of custody"
              ],
              "correct": 2,
              "explanation": "Incident lifecycle: The stages of preparation, detection, containment, eradication, recovery and review"
            },
            {
              "question": "Which practical step best demonstrates incident lifecycle in this lesson?",
              "choices": [
                "Create an evidence handoff table for simulated files",
                "Choose a safe containment option for a fictional account",
                "Record an original sample log and its checksum",
                "Sequence response actions for a simulated phishing case"
              ],
              "correct": 3,
              "explanation": "The guided activity for incident lifecycle is: Sequence response actions for a simulated phishing case."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c5-w19-s2",
          "title": "Evidence preservation: guided practice",
          "term": "Evidence preservation",
          "definition": "Keeping relevant records intact so findings can be checked",
          "analogy": "A sealed damaged parcel preserves the condition of its contents",
          "scenario": "The simulated SOC must investigate an apparent account compromise while preserving evidence.",
          "why": "Evidence preservation matters because AGL must make reliable, explainable decisions about systems and information. Keeping relevant records intact so findings can be checked Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The simulated SOC must investigate an apparent account compromise while preserving evidence.",
            "Define evidence preservation in one sentence: Keeping relevant records intact so findings can be checked",
            "Carry out this small, authorized activity: Record an original sample log and its checksum.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of evidence preservation, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of evidence preservation, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Record an original sample log and its checksum",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: keeping relevant records intact so findings can be checked?",
              "choices": [
                "Containment",
                "Chain of custody",
                "Evidence preservation",
                "Incident lifecycle"
              ],
              "correct": 2,
              "explanation": "Evidence preservation: Keeping relevant records intact so findings can be checked"
            },
            {
              "question": "Which practical step best demonstrates evidence preservation in this lesson?",
              "choices": [
                "Choose a safe containment option for a fictional account",
                "Sequence response actions for a simulated phishing case",
                "Record an original sample log and its checksum",
                "Create an evidence handoff table for simulated files"
              ],
              "correct": 2,
              "explanation": "The guided activity for evidence preservation is: Record an original sample log and its checksum."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c5-w19-s3",
          "title": "Chain of custody: business application",
          "term": "Chain of custody",
          "definition": "A record of who handled evidence and when",
          "analogy": "A signed handoff tracks valuable packages",
          "scenario": "The simulated SOC must investigate an apparent account compromise while preserving evidence.",
          "why": "Chain of custody matters because AGL must make reliable, explainable decisions about systems and information. A record of who handled evidence and when Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The simulated SOC must investigate an apparent account compromise while preserving evidence.",
            "Define chain of custody in one sentence: A record of who handled evidence and when",
            "Carry out this small, authorized activity: Create an evidence handoff table for simulated files.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of chain of custody, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of chain of custody, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create an evidence handoff table for simulated files",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a record of who handled evidence and when?",
              "choices": [
                "Incident lifecycle",
                "Evidence preservation",
                "Containment",
                "Chain of custody"
              ],
              "correct": 3,
              "explanation": "Chain of custody: A record of who handled evidence and when"
            },
            {
              "question": "Which practical step best demonstrates chain of custody in this lesson?",
              "choices": [
                "Record an original sample log and its checksum",
                "Create an evidence handoff table for simulated files",
                "Sequence response actions for a simulated phishing case",
                "Choose a safe containment option for a fictional account"
              ],
              "correct": 1,
              "explanation": "The guided activity for chain of custody is: Create an evidence handoff table for simulated files."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c5-w19-s4",
          "title": "Containment: project evidence",
          "term": "Containment",
          "definition": "A measured action to limit further harm while investigating",
          "analogy": "A truck with a spill is isolated before repairs",
          "scenario": "The simulated SOC must investigate an apparent account compromise while preserving evidence.",
          "why": "Containment matters because AGL must make reliable, explainable decisions about systems and information. A measured action to limit further harm while investigating Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The simulated SOC must investigate an apparent account compromise while preserving evidence.",
            "Define containment in one sentence: A measured action to limit further harm while investigating",
            "Carry out this small, authorized activity: Choose a safe containment option for a fictional account.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of containment, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of containment, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Choose a safe containment option for a fictional account",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a measured action to limit further harm while investigating?",
              "choices": [
                "Incident lifecycle",
                "Evidence preservation",
                "Chain of custody",
                "Containment"
              ],
              "correct": 3,
              "explanation": "Containment: A measured action to limit further harm while investigating"
            },
            {
              "question": "Which practical step best demonstrates containment in this lesson?",
              "choices": [
                "Create an evidence handoff table for simulated files",
                "Sequence response actions for a simulated phishing case",
                "Choose a safe containment option for a fictional account",
                "Record an original sample log and its checksum"
              ],
              "correct": 2,
              "explanation": "The guided activity for containment is: Choose a safe containment option for a fictional account."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 3,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 20,
      "month": 5,
      "course": 5,
      "title": "Investigation findings and remediation",
      "learn": "Root cause: The underlying condition that allowed an incident to occur; Mitigation: A control that reduces the likelihood or impact of a risk; Retest: Verifying that an identified weakness was actually addressed; Executive summary: A short business-oriented description of impact and decisions",
      "lab": "Deliver Project 3 authorized testing and incident-response report",
      "deliver": "Deliver Project 3 authorized testing and incident-response report. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "A client wants proof that the vulnerability was fixed rather than a promise.",
      "challenge": "Deliver Project 3 authorized testing and incident-response report",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: the underlying condition that allowed an incident to occur?",
          "choices": [
            "Retest",
            "Executive summary",
            "Mitigation",
            "Root cause"
          ],
          "correct": 3,
          "explanation": "Root cause — The underlying condition that allowed an incident to occur"
        },
        {
          "question": "In this week's AGL training, which concept means: a control that reduces the likelihood or impact of a risk?",
          "choices": [
            "Executive summary",
            "Root cause",
            "Retest",
            "Mitigation"
          ],
          "correct": 3,
          "explanation": "Mitigation — A control that reduces the likelihood or impact of a risk"
        },
        {
          "question": "In this week's AGL training, which concept means: verifying that an identified weakness was actually addressed?",
          "choices": [
            "Retest",
            "Root cause",
            "Mitigation",
            "Executive summary"
          ],
          "correct": 0,
          "explanation": "Retest — Verifying that an identified weakness was actually addressed"
        },
        {
          "question": "In this week's AGL training, which concept means: a short business-oriented description of impact and decisions?",
          "choices": [
            "Mitigation",
            "Root cause",
            "Executive summary",
            "Retest"
          ],
          "correct": 2,
          "explanation": "Executive summary — A short business-oriented description of impact and decisions"
        },
        {
          "question": "To demonstrate root cause in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Repeat a harmless negative/positive permission test",
            "Recommend a documented fix for one mock finding",
            "Write the primary cause of a fictional incident",
            "Translate a technical finding into two business risks"
          ],
          "correct": 2,
          "explanation": "The intended first activity is to write the primary cause of a fictional incident; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c5-w20-s1",
          "title": "Root cause: Investigation findings and remediation",
          "term": "Root cause",
          "definition": "The underlying condition that allowed an incident to occur",
          "analogy": "Repairing a faulty latch is better than repeatedly locking a broken door",
          "scenario": "A client wants proof that the vulnerability was fixed rather than a promise.",
          "why": "Root cause matters because AGL must make reliable, explainable decisions about systems and information. The underlying condition that allowed an incident to occur Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A client wants proof that the vulnerability was fixed rather than a promise.",
            "Define root cause in one sentence: The underlying condition that allowed an incident to occur",
            "Carry out this small, authorized activity: Write the primary cause of a fictional incident.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of root cause, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of root cause, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write the primary cause of a fictional incident",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: the underlying condition that allowed an incident to occur?",
              "choices": [
                "Root cause",
                "Executive summary",
                "Retest",
                "Mitigation"
              ],
              "correct": 0,
              "explanation": "Root cause: The underlying condition that allowed an incident to occur"
            },
            {
              "question": "Which practical step best demonstrates root cause in this lesson?",
              "choices": [
                "Write the primary cause of a fictional incident",
                "Repeat a harmless negative/positive permission test",
                "Recommend a documented fix for one mock finding",
                "Translate a technical finding into two business risks"
              ],
              "correct": 0,
              "explanation": "The guided activity for root cause is: Write the primary cause of a fictional incident."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c5-w20-s2",
          "title": "Mitigation: guided practice",
          "term": "Mitigation",
          "definition": "A control that reduces the likelihood or impact of a risk",
          "analogy": "Installing a second gate reduces unauthorized access paths",
          "scenario": "A client wants proof that the vulnerability was fixed rather than a promise.",
          "why": "Mitigation matters because AGL must make reliable, explainable decisions about systems and information. A control that reduces the likelihood or impact of a risk Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A client wants proof that the vulnerability was fixed rather than a promise.",
            "Define mitigation in one sentence: A control that reduces the likelihood or impact of a risk",
            "Carry out this small, authorized activity: Recommend a documented fix for one mock finding.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of mitigation, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of mitigation, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Recommend a documented fix for one mock finding",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a control that reduces the likelihood or impact of a risk?",
              "choices": [
                "Mitigation",
                "Retest",
                "Executive summary",
                "Root cause"
              ],
              "correct": 0,
              "explanation": "Mitigation: A control that reduces the likelihood or impact of a risk"
            },
            {
              "question": "Which practical step best demonstrates mitigation in this lesson?",
              "choices": [
                "Translate a technical finding into two business risks",
                "Write the primary cause of a fictional incident",
                "Repeat a harmless negative/positive permission test",
                "Recommend a documented fix for one mock finding"
              ],
              "correct": 3,
              "explanation": "The guided activity for mitigation is: Recommend a documented fix for one mock finding."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c5-w20-s3",
          "title": "Retest: business application",
          "term": "Retest",
          "definition": "Verifying that an identified weakness was actually addressed",
          "analogy": "A mechanic road-tests a repaired vehicle",
          "scenario": "A client wants proof that the vulnerability was fixed rather than a promise.",
          "why": "Retest matters because AGL must make reliable, explainable decisions about systems and information. Verifying that an identified weakness was actually addressed Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A client wants proof that the vulnerability was fixed rather than a promise.",
            "Define retest in one sentence: Verifying that an identified weakness was actually addressed",
            "Carry out this small, authorized activity: Repeat a harmless negative/positive permission test.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of retest, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of retest, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Repeat a harmless negative/positive permission test",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: verifying that an identified weakness was actually addressed?",
              "choices": [
                "Retest",
                "Mitigation",
                "Executive summary",
                "Root cause"
              ],
              "correct": 0,
              "explanation": "Retest: Verifying that an identified weakness was actually addressed"
            },
            {
              "question": "Which practical step best demonstrates retest in this lesson?",
              "choices": [
                "Translate a technical finding into two business risks",
                "Recommend a documented fix for one mock finding",
                "Repeat a harmless negative/positive permission test",
                "Write the primary cause of a fictional incident"
              ],
              "correct": 2,
              "explanation": "The guided activity for retest is: Repeat a harmless negative/positive permission test."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c5-w20-s4",
          "title": "Executive summary: project evidence",
          "term": "Executive summary",
          "definition": "A short business-oriented description of impact and decisions",
          "analogy": "A supervisor summarizes a shipment disruption for leadership",
          "scenario": "A client wants proof that the vulnerability was fixed rather than a promise.",
          "why": "Executive summary matters because AGL must make reliable, explainable decisions about systems and information. A short business-oriented description of impact and decisions Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A client wants proof that the vulnerability was fixed rather than a promise.",
            "Define executive summary in one sentence: A short business-oriented description of impact and decisions",
            "Carry out this small, authorized activity: Translate a technical finding into two business risks.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of executive summary, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of executive summary, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Translate a technical finding into two business risks",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a short business-oriented description of impact and decisions?",
              "choices": [
                "Executive summary",
                "Root cause",
                "Mitigation",
                "Retest"
              ],
              "correct": 0,
              "explanation": "Executive summary: A short business-oriented description of impact and decisions"
            },
            {
              "question": "Which practical step best demonstrates executive summary in this lesson?",
              "choices": [
                "Write the primary cause of a fictional incident",
                "Repeat a harmless negative/positive permission test",
                "Recommend a documented fix for one mock finding",
                "Translate a technical finding into two business risks"
              ],
              "correct": 3,
              "explanation": "The guided activity for executive summary is: Translate a technical finding into two business risks."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 3,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 21,
      "month": 6,
      "course": 6,
      "title": "Cloud service models and responsibility",
      "learn": "Cloud computing: Using computing resources provided over a network rather than only locally; IaaS: Cloud service providing virtual computing infrastructure the customer manages; PaaS: Cloud service providing a managed platform for deploying applications; Shared responsibility: Cloud security duties divided between provider and customer",
      "lab": "Draw the AGL cloud landing zone with a cost guardrail",
      "deliver": "Draw the AGL cloud landing zone with a cost guardrail. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "AGL is considering moving a warehouse tracking service into a cloud-hosted environment.",
      "challenge": "Draw the AGL cloud landing zone with a cost guardrail",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: using computing resources provided over a network rather than only locally?",
          "choices": [
            "Cloud computing",
            "PaaS",
            "Shared responsibility",
            "IaaS"
          ],
          "correct": 0,
          "explanation": "Cloud computing — Using computing resources provided over a network rather than only locally"
        },
        {
          "question": "In this week's AGL training, which concept means: cloud service providing virtual computing infrastructure the customer manages?",
          "choices": [
            "PaaS",
            "Shared responsibility",
            "IaaS",
            "Cloud computing"
          ],
          "correct": 2,
          "explanation": "IaaS — Cloud service providing virtual computing infrastructure the customer manages"
        },
        {
          "question": "In this week's AGL training, which concept means: cloud service providing a managed platform for deploying applications?",
          "choices": [
            "PaaS",
            "Cloud computing",
            "Shared responsibility",
            "IaaS"
          ],
          "correct": 0,
          "explanation": "PaaS — Cloud service providing a managed platform for deploying applications"
        },
        {
          "question": "In this week's AGL training, which concept means: cloud security duties divided between provider and customer?",
          "choices": [
            "Cloud computing",
            "Shared responsibility",
            "PaaS",
            "IaaS"
          ],
          "correct": 1,
          "explanation": "Shared responsibility — Cloud security duties divided between provider and customer"
        },
        {
          "question": "To demonstrate cloud computing in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Choose which system components the customer patches",
            "Identify one cloud and one local workload",
            "Explain which platform maintenance is handled by provider",
            "Make a provider/customer responsibility table"
          ],
          "correct": 1,
          "explanation": "The intended first activity is to identify one cloud and one local workload; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c6-w21-s1",
          "title": "Cloud computing: Cloud service models and responsibility",
          "term": "Cloud computing",
          "definition": "Using computing resources provided over a network rather than only locally",
          "analogy": "A business rents warehouse space instead of owning every building",
          "scenario": "AGL is considering moving a warehouse tracking service into a cloud-hosted environment.",
          "why": "Cloud computing matters because AGL must make reliable, explainable decisions about systems and information. Using computing resources provided over a network rather than only locally Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL is considering moving a warehouse tracking service into a cloud-hosted environment.",
            "Define cloud computing in one sentence: Using computing resources provided over a network rather than only locally",
            "Carry out this small, authorized activity: Identify one cloud and one local workload.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of cloud computing, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of cloud computing, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Identify one cloud and one local workload",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: using computing resources provided over a network rather than only locally?",
              "choices": [
                "PaaS",
                "Shared responsibility",
                "Cloud computing",
                "IaaS"
              ],
              "correct": 2,
              "explanation": "Cloud computing: Using computing resources provided over a network rather than only locally"
            },
            {
              "question": "Which practical step best demonstrates cloud computing in this lesson?",
              "choices": [
                "Choose which system components the customer patches",
                "Identify one cloud and one local workload",
                "Explain which platform maintenance is handled by provider",
                "Make a provider/customer responsibility table"
              ],
              "correct": 1,
              "explanation": "The guided activity for cloud computing is: Identify one cloud and one local workload."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c6-w21-s2",
          "title": "IaaS: guided practice",
          "term": "IaaS",
          "definition": "Cloud service providing virtual computing infrastructure the customer manages",
          "analogy": "Renting an empty warehouse still leaves setup to you",
          "scenario": "AGL is considering moving a warehouse tracking service into a cloud-hosted environment.",
          "why": "IaaS matters because AGL must make reliable, explainable decisions about systems and information. Cloud service providing virtual computing infrastructure the customer manages Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL is considering moving a warehouse tracking service into a cloud-hosted environment.",
            "Define iaas in one sentence: Cloud service providing virtual computing infrastructure the customer manages",
            "Carry out this small, authorized activity: Choose which system components the customer patches.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of iaas, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of iaas, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Choose which system components the customer patches",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: cloud service providing virtual computing infrastructure the customer manages?",
              "choices": [
                "Shared responsibility",
                "IaaS",
                "PaaS",
                "Cloud computing"
              ],
              "correct": 1,
              "explanation": "IaaS: Cloud service providing virtual computing infrastructure the customer manages"
            },
            {
              "question": "Which practical step best demonstrates iaas in this lesson?",
              "choices": [
                "Make a provider/customer responsibility table",
                "Explain which platform maintenance is handled by provider",
                "Choose which system components the customer patches",
                "Identify one cloud and one local workload"
              ],
              "correct": 2,
              "explanation": "The guided activity for iaas is: Choose which system components the customer patches."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c6-w21-s3",
          "title": "PaaS: business application",
          "term": "PaaS",
          "definition": "Cloud service providing a managed platform for deploying applications",
          "analogy": "Renting a prepared commercial kitchen lets you focus on cooking",
          "scenario": "AGL is considering moving a warehouse tracking service into a cloud-hosted environment.",
          "why": "PaaS matters because AGL must make reliable, explainable decisions about systems and information. Cloud service providing a managed platform for deploying applications Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL is considering moving a warehouse tracking service into a cloud-hosted environment.",
            "Define paas in one sentence: Cloud service providing a managed platform for deploying applications",
            "Carry out this small, authorized activity: Explain which platform maintenance is handled by provider.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of paas, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of paas, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Explain which platform maintenance is handled by provider",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: cloud service providing a managed platform for deploying applications?",
              "choices": [
                "Cloud computing",
                "Shared responsibility",
                "PaaS",
                "IaaS"
              ],
              "correct": 2,
              "explanation": "PaaS: Cloud service providing a managed platform for deploying applications"
            },
            {
              "question": "Which practical step best demonstrates paas in this lesson?",
              "choices": [
                "Identify one cloud and one local workload",
                "Make a provider/customer responsibility table",
                "Explain which platform maintenance is handled by provider",
                "Choose which system components the customer patches"
              ],
              "correct": 2,
              "explanation": "The guided activity for paas is: Explain which platform maintenance is handled by provider."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c6-w21-s4",
          "title": "Shared responsibility: project evidence",
          "term": "Shared responsibility",
          "definition": "Cloud security duties divided between provider and customer",
          "analogy": "A landlord maintains the building while tenants protect their belongings",
          "scenario": "AGL is considering moving a warehouse tracking service into a cloud-hosted environment.",
          "why": "Shared responsibility matters because AGL must make reliable, explainable decisions about systems and information. Cloud security duties divided between provider and customer Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL is considering moving a warehouse tracking service into a cloud-hosted environment.",
            "Define shared responsibility in one sentence: Cloud security duties divided between provider and customer",
            "Carry out this small, authorized activity: Make a provider/customer responsibility table.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of shared responsibility, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of shared responsibility, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Make a provider/customer responsibility table",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: cloud security duties divided between provider and customer?",
              "choices": [
                "Cloud computing",
                "IaaS",
                "PaaS",
                "Shared responsibility"
              ],
              "correct": 3,
              "explanation": "Shared responsibility: Cloud security duties divided between provider and customer"
            },
            {
              "question": "Which practical step best demonstrates shared responsibility in this lesson?",
              "choices": [
                "Make a provider/customer responsibility table",
                "Choose which system components the customer patches",
                "Identify one cloud and one local workload",
                "Explain which platform maintenance is handled by provider"
              ],
              "correct": 0,
              "explanation": "The guided activity for shared responsibility is: Make a provider/customer responsibility table."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 4,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 22,
      "month": 6,
      "course": 6,
      "title": "Cloud identities, secrets and encryption",
      "learn": "Cloud IAM: Rules controlling who or what can use cloud resources; Service identity: A nonhuman account used by software to access services; Encryption at rest: Encoding stored data to reduce unauthorized reading risk; Key management: Creating, storing, rotating and restricting cryptographic keys",
      "lab": "Design least-privilege access roles and encryption policies",
      "deliver": "Design least-privilege access roles and encryption policies. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "A cloud application must access a storage service without sharing a human administrator password.",
      "challenge": "Design least-privilege access roles and encryption policies",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: rules controlling who or what can use cloud resources?",
          "choices": [
            "Key management",
            "Encryption at rest",
            "Cloud IAM",
            "Service identity"
          ],
          "correct": 2,
          "explanation": "Cloud IAM — Rules controlling who or what can use cloud resources"
        },
        {
          "question": "In this week's AGL training, which concept means: a nonhuman account used by software to access services?",
          "choices": [
            "Encryption at rest",
            "Key management",
            "Service identity",
            "Cloud IAM"
          ],
          "correct": 2,
          "explanation": "Service identity — A nonhuman account used by software to access services"
        },
        {
          "question": "In this week's AGL training, which concept means: encoding stored data to reduce unauthorized reading risk?",
          "choices": [
            "Key management",
            "Cloud IAM",
            "Encryption at rest",
            "Service identity"
          ],
          "correct": 2,
          "explanation": "Encryption at rest — Encoding stored data to reduce unauthorized reading risk"
        },
        {
          "question": "In this week's AGL training, which concept means: creating, storing, rotating and restricting cryptographic keys?",
          "choices": [
            "Cloud IAM",
            "Key management",
            "Encryption at rest",
            "Service identity"
          ],
          "correct": 1,
          "explanation": "Key management — Creating, storing, rotating and restricting cryptographic keys"
        },
        {
          "question": "To demonstrate cloud iam in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Specify a scoped identity for a demo app",
            "Write a fictional key custody and rotation policy",
            "Choose storage data to encrypt in the AGL design",
            "Create mock cloud user roles with minimum privileges"
          ],
          "correct": 3,
          "explanation": "The intended first activity is to create mock cloud user roles with minimum privileges; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c6-w22-s1",
          "title": "Cloud IAM: Cloud identities, secrets and encryption",
          "term": "Cloud IAM",
          "definition": "Rules controlling who or what can use cloud resources",
          "analogy": "A contractor badge limits building access",
          "scenario": "A cloud application must access a storage service without sharing a human administrator password.",
          "why": "Cloud IAM matters because AGL must make reliable, explainable decisions about systems and information. Rules controlling who or what can use cloud resources Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A cloud application must access a storage service without sharing a human administrator password.",
            "Define cloud iam in one sentence: Rules controlling who or what can use cloud resources",
            "Carry out this small, authorized activity: Create mock cloud user roles with minimum privileges.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of cloud iam, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of cloud iam, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create mock cloud user roles with minimum privileges",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: rules controlling who or what can use cloud resources?",
              "choices": [
                "Encryption at rest",
                "Cloud IAM",
                "Key management",
                "Service identity"
              ],
              "correct": 1,
              "explanation": "Cloud IAM: Rules controlling who or what can use cloud resources"
            },
            {
              "question": "Which practical step best demonstrates cloud iam in this lesson?",
              "choices": [
                "Create mock cloud user roles with minimum privileges",
                "Write a fictional key custody and rotation policy",
                "Choose storage data to encrypt in the AGL design",
                "Specify a scoped identity for a demo app"
              ],
              "correct": 0,
              "explanation": "The guided activity for cloud iam is: Create mock cloud user roles with minimum privileges."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c6-w22-s2",
          "title": "Service identity: guided practice",
          "term": "Service identity",
          "definition": "A nonhuman account used by software to access services",
          "analogy": "A warehouse robot has permissions separate from employee badges",
          "scenario": "A cloud application must access a storage service without sharing a human administrator password.",
          "why": "Service identity matters because AGL must make reliable, explainable decisions about systems and information. A nonhuman account used by software to access services Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A cloud application must access a storage service without sharing a human administrator password.",
            "Define service identity in one sentence: A nonhuman account used by software to access services",
            "Carry out this small, authorized activity: Specify a scoped identity for a demo app.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of service identity, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of service identity, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Specify a scoped identity for a demo app",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a nonhuman account used by software to access services?",
              "choices": [
                "Cloud IAM",
                "Encryption at rest",
                "Service identity",
                "Key management"
              ],
              "correct": 2,
              "explanation": "Service identity: A nonhuman account used by software to access services"
            },
            {
              "question": "Which practical step best demonstrates service identity in this lesson?",
              "choices": [
                "Create mock cloud user roles with minimum privileges",
                "Choose storage data to encrypt in the AGL design",
                "Write a fictional key custody and rotation policy",
                "Specify a scoped identity for a demo app"
              ],
              "correct": 3,
              "explanation": "The guided activity for service identity is: Specify a scoped identity for a demo app."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c6-w22-s3",
          "title": "Encryption at rest: business application",
          "term": "Encryption at rest",
          "definition": "Encoding stored data to reduce unauthorized reading risk",
          "analogy": "A locked file cabinet protects records while stored",
          "scenario": "A cloud application must access a storage service without sharing a human administrator password.",
          "why": "Encryption at rest matters because AGL must make reliable, explainable decisions about systems and information. Encoding stored data to reduce unauthorized reading risk Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A cloud application must access a storage service without sharing a human administrator password.",
            "Define encryption at rest in one sentence: Encoding stored data to reduce unauthorized reading risk",
            "Carry out this small, authorized activity: Choose storage data to encrypt in the AGL design.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of encryption at rest, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of encryption at rest, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Choose storage data to encrypt in the AGL design",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: encoding stored data to reduce unauthorized reading risk?",
              "choices": [
                "Cloud IAM",
                "Service identity",
                "Encryption at rest",
                "Key management"
              ],
              "correct": 2,
              "explanation": "Encryption at rest: Encoding stored data to reduce unauthorized reading risk"
            },
            {
              "question": "Which practical step best demonstrates encryption at rest in this lesson?",
              "choices": [
                "Specify a scoped identity for a demo app",
                "Choose storage data to encrypt in the AGL design",
                "Write a fictional key custody and rotation policy",
                "Create mock cloud user roles with minimum privileges"
              ],
              "correct": 1,
              "explanation": "The guided activity for encryption at rest is: Choose storage data to encrypt in the AGL design."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c6-w22-s4",
          "title": "Key management: project evidence",
          "term": "Key management",
          "definition": "Creating, storing, rotating and restricting cryptographic keys",
          "analogy": "Changing locks includes safe control of replacement keys",
          "scenario": "A cloud application must access a storage service without sharing a human administrator password.",
          "why": "Key management matters because AGL must make reliable, explainable decisions about systems and information. Creating, storing, rotating and restricting cryptographic keys Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A cloud application must access a storage service without sharing a human administrator password.",
            "Define key management in one sentence: Creating, storing, rotating and restricting cryptographic keys",
            "Carry out this small, authorized activity: Write a fictional key custody and rotation policy.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of key management, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of key management, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write a fictional key custody and rotation policy",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: creating, storing, rotating and restricting cryptographic keys?",
              "choices": [
                "Service identity",
                "Key management",
                "Encryption at rest",
                "Cloud IAM"
              ],
              "correct": 1,
              "explanation": "Key management: Creating, storing, rotating and restricting cryptographic keys"
            },
            {
              "question": "Which practical step best demonstrates key management in this lesson?",
              "choices": [
                "Write a fictional key custody and rotation policy",
                "Create mock cloud user roles with minimum privileges",
                "Specify a scoped identity for a demo app",
                "Choose storage data to encrypt in the AGL design"
              ],
              "correct": 0,
              "explanation": "The guided activity for key management is: Write a fictional key custody and rotation policy."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 4,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 23,
      "month": 6,
      "course": 6,
      "title": "Cloud monitoring and posture management",
      "learn": "Cloud posture: How closely cloud settings match the organization's security goals; Audit trail: A record that lets you review actions performed on systems; Configuration drift: A system deviating from its approved state over time; Cloud budget alert: A notification when spending approaches a chosen threshold",
      "lab": "Create cloud guardrail and misconfiguration evidence workbook",
      "deliver": "Create cloud guardrail and misconfiguration evidence workbook. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "A test tenant has drifted from its approved secure baseline.",
      "challenge": "Create cloud guardrail and misconfiguration evidence workbook",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: how closely cloud settings match the organization's security goals?",
          "choices": [
            "Cloud posture",
            "Audit trail",
            "Configuration drift",
            "Cloud budget alert"
          ],
          "correct": 0,
          "explanation": "Cloud posture — How closely cloud settings match the organization's security goals"
        },
        {
          "question": "In this week's AGL training, which concept means: a record that lets you review actions performed on systems?",
          "choices": [
            "Cloud budget alert",
            "Configuration drift",
            "Audit trail",
            "Cloud posture"
          ],
          "correct": 2,
          "explanation": "Audit trail — A record that lets you review actions performed on systems"
        },
        {
          "question": "In this week's AGL training, which concept means: a system deviating from its approved state over time?",
          "choices": [
            "Cloud posture",
            "Configuration drift",
            "Audit trail",
            "Cloud budget alert"
          ],
          "correct": 1,
          "explanation": "Configuration drift — A system deviating from its approved state over time"
        },
        {
          "question": "In this week's AGL training, which concept means: a notification when spending approaches a chosen threshold?",
          "choices": [
            "Cloud posture",
            "Cloud budget alert",
            "Audit trail",
            "Configuration drift"
          ],
          "correct": 1,
          "explanation": "Cloud budget alert — A notification when spending approaches a chosen threshold"
        },
        {
          "question": "To demonstrate cloud posture in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Compare baseline and changed mock configuration",
            "Define which cloud API events should be captured",
            "Set a simulated spending threshold and cleanup checklist",
            "Audit a mock cloud resource configuration"
          ],
          "correct": 3,
          "explanation": "The intended first activity is to audit a mock cloud resource configuration; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c6-w23-s1",
          "title": "Cloud posture: Cloud monitoring and posture management",
          "term": "Cloud posture",
          "definition": "How closely cloud settings match the organization's security goals",
          "analogy": "A workplace safety audit assesses equipment and procedures",
          "scenario": "A test tenant has drifted from its approved secure baseline.",
          "why": "Cloud posture matters because AGL must make reliable, explainable decisions about systems and information. How closely cloud settings match the organization's security goals Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A test tenant has drifted from its approved secure baseline.",
            "Define cloud posture in one sentence: How closely cloud settings match the organization's security goals",
            "Carry out this small, authorized activity: Audit a mock cloud resource configuration.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of cloud posture, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of cloud posture, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Audit a mock cloud resource configuration",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: how closely cloud settings match the organization's security goals?",
              "choices": [
                "Audit trail",
                "Configuration drift",
                "Cloud posture",
                "Cloud budget alert"
              ],
              "correct": 2,
              "explanation": "Cloud posture: How closely cloud settings match the organization's security goals"
            },
            {
              "question": "Which practical step best demonstrates cloud posture in this lesson?",
              "choices": [
                "Audit a mock cloud resource configuration",
                "Define which cloud API events should be captured",
                "Set a simulated spending threshold and cleanup checklist",
                "Compare baseline and changed mock configuration"
              ],
              "correct": 0,
              "explanation": "The guided activity for cloud posture is: Audit a mock cloud resource configuration."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c6-w23-s2",
          "title": "Audit trail: guided practice",
          "term": "Audit trail",
          "definition": "A record that lets you review actions performed on systems",
          "analogy": "A warehouse log shows who changed inventory quantities",
          "scenario": "A test tenant has drifted from its approved secure baseline.",
          "why": "Audit trail matters because AGL must make reliable, explainable decisions about systems and information. A record that lets you review actions performed on systems Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A test tenant has drifted from its approved secure baseline.",
            "Define audit trail in one sentence: A record that lets you review actions performed on systems",
            "Carry out this small, authorized activity: Define which cloud API events should be captured.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of audit trail, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of audit trail, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Define which cloud API events should be captured",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a record that lets you review actions performed on systems?",
              "choices": [
                "Cloud budget alert",
                "Audit trail",
                "Configuration drift",
                "Cloud posture"
              ],
              "correct": 1,
              "explanation": "Audit trail: A record that lets you review actions performed on systems"
            },
            {
              "question": "Which practical step best demonstrates audit trail in this lesson?",
              "choices": [
                "Audit a mock cloud resource configuration",
                "Set a simulated spending threshold and cleanup checklist",
                "Define which cloud API events should be captured",
                "Compare baseline and changed mock configuration"
              ],
              "correct": 2,
              "explanation": "The guided activity for audit trail is: Define which cloud API events should be captured."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c6-w23-s3",
          "title": "Configuration drift: business application",
          "term": "Configuration drift",
          "definition": "A system deviating from its approved state over time",
          "analogy": "An unapproved change to a vehicle maintenance plan creates risk",
          "scenario": "A test tenant has drifted from its approved secure baseline.",
          "why": "Configuration drift matters because AGL must make reliable, explainable decisions about systems and information. A system deviating from its approved state over time Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A test tenant has drifted from its approved secure baseline.",
            "Define configuration drift in one sentence: A system deviating from its approved state over time",
            "Carry out this small, authorized activity: Compare baseline and changed mock configuration.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of configuration drift, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of configuration drift, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Compare baseline and changed mock configuration",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a system deviating from its approved state over time?",
              "choices": [
                "Cloud posture",
                "Configuration drift",
                "Cloud budget alert",
                "Audit trail"
              ],
              "correct": 1,
              "explanation": "Configuration drift: A system deviating from its approved state over time"
            },
            {
              "question": "Which practical step best demonstrates configuration drift in this lesson?",
              "choices": [
                "Audit a mock cloud resource configuration",
                "Define which cloud API events should be captured",
                "Set a simulated spending threshold and cleanup checklist",
                "Compare baseline and changed mock configuration"
              ],
              "correct": 3,
              "explanation": "The guided activity for configuration drift is: Compare baseline and changed mock configuration."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c6-w23-s4",
          "title": "Cloud budget alert: project evidence",
          "term": "Cloud budget alert",
          "definition": "A notification when spending approaches a chosen threshold",
          "analogy": "A fuel budget warning helps avoid overspending",
          "scenario": "A test tenant has drifted from its approved secure baseline.",
          "why": "Cloud budget alert matters because AGL must make reliable, explainable decisions about systems and information. A notification when spending approaches a chosen threshold Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A test tenant has drifted from its approved secure baseline.",
            "Define cloud budget alert in one sentence: A notification when spending approaches a chosen threshold",
            "Carry out this small, authorized activity: Set a simulated spending threshold and cleanup checklist.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of cloud budget alert, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of cloud budget alert, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Set a simulated spending threshold and cleanup checklist",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a notification when spending approaches a chosen threshold?",
              "choices": [
                "Cloud budget alert",
                "Cloud posture",
                "Audit trail",
                "Configuration drift"
              ],
              "correct": 0,
              "explanation": "Cloud budget alert: A notification when spending approaches a chosen threshold"
            },
            {
              "question": "Which practical step best demonstrates cloud budget alert in this lesson?",
              "choices": [
                "Set a simulated spending threshold and cleanup checklist",
                "Define which cloud API events should be captured",
                "Compare baseline and changed mock configuration",
                "Audit a mock cloud resource configuration"
              ],
              "correct": 0,
              "explanation": "The guided activity for cloud budget alert is: Set a simulated spending threshold and cleanup checklist."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 4,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 24,
      "month": 6,
      "course": 6,
      "title": "AWS and Azure design comparison",
      "learn": "Azure: Microsoft cloud platform offering hosted compute, identity and security services; AWS: Amazon cloud platform offering hosted compute, storage and security services; Control mapping: Connecting the same desired security result to different provider tools; Rollback plan: Documented steps for restoring a previous known-good state after a change",
      "lab": "Deliver Project 4 dual-cloud architecture and rollback plan",
      "deliver": "Deliver Project 4 dual-cloud architecture and rollback plan. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "AGL is choosing equivalent control designs across AWS and Azure.",
      "challenge": "Deliver Project 4 dual-cloud architecture and rollback plan",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: microsoft cloud platform offering hosted compute, identity and security services?",
          "choices": [
            "Rollback plan",
            "Control mapping",
            "AWS",
            "Azure"
          ],
          "correct": 3,
          "explanation": "Azure — Microsoft cloud platform offering hosted compute, identity and security services"
        },
        {
          "question": "In this week's AGL training, which concept means: amazon cloud platform offering hosted compute, storage and security services?",
          "choices": [
            "Rollback plan",
            "Azure",
            "Control mapping",
            "AWS"
          ],
          "correct": 3,
          "explanation": "AWS — Amazon cloud platform offering hosted compute, storage and security services"
        },
        {
          "question": "In this week's AGL training, which concept means: connecting the same desired security result to different provider tools?",
          "choices": [
            "Rollback plan",
            "Control mapping",
            "AWS",
            "Azure"
          ],
          "correct": 1,
          "explanation": "Control mapping — Connecting the same desired security result to different provider tools"
        },
        {
          "question": "In this week's AGL training, which concept means: documented steps for restoring a previous known-good state after a change?",
          "choices": [
            "Control mapping",
            "Azure",
            "AWS",
            "Rollback plan"
          ],
          "correct": 3,
          "explanation": "Rollback plan — Documented steps for restoring a previous known-good state after a change"
        },
        {
          "question": "To demonstrate azure in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Create a two-column AWS/Azure control matrix",
            "Map a mock Azure resource to a security responsibility",
            "Map equivalent mock AWS security controls",
            "Write a safe revert sequence for mock settings"
          ],
          "correct": 1,
          "explanation": "The intended first activity is to map a mock Azure resource to a security responsibility; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c6-w24-s1",
          "title": "Azure: AWS and Azure design comparison",
          "term": "Azure",
          "definition": "Microsoft cloud platform offering hosted compute, identity and security services",
          "analogy": "Two freight companies may provide similar routes with different systems",
          "scenario": "AGL is choosing equivalent control designs across AWS and Azure.",
          "why": "Azure matters because AGL must make reliable, explainable decisions about systems and information. Microsoft cloud platform offering hosted compute, identity and security services Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL is choosing equivalent control designs across AWS and Azure.",
            "Define azure in one sentence: Microsoft cloud platform offering hosted compute, identity and security services",
            "Carry out this small, authorized activity: Map a mock Azure resource to a security responsibility.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of azure, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of azure, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Map a mock Azure resource to a security responsibility",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: microsoft cloud platform offering hosted compute, identity and security services?",
              "choices": [
                "AWS",
                "Azure",
                "Rollback plan",
                "Control mapping"
              ],
              "correct": 1,
              "explanation": "Azure: Microsoft cloud platform offering hosted compute, identity and security services"
            },
            {
              "question": "Which practical step best demonstrates azure in this lesson?",
              "choices": [
                "Map equivalent mock AWS security controls",
                "Create a two-column AWS/Azure control matrix",
                "Map a mock Azure resource to a security responsibility",
                "Write a safe revert sequence for mock settings"
              ],
              "correct": 2,
              "explanation": "The guided activity for azure is: Map a mock Azure resource to a security responsibility."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c6-w24-s2",
          "title": "AWS: guided practice",
          "term": "AWS",
          "definition": "Amazon cloud platform offering hosted compute, storage and security services",
          "analogy": "A second freight provider offers alternative service choices",
          "scenario": "AGL is choosing equivalent control designs across AWS and Azure.",
          "why": "AWS matters because AGL must make reliable, explainable decisions about systems and information. Amazon cloud platform offering hosted compute, storage and security services Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL is choosing equivalent control designs across AWS and Azure.",
            "Define aws in one sentence: Amazon cloud platform offering hosted compute, storage and security services",
            "Carry out this small, authorized activity: Map equivalent mock AWS security controls.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of aws, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of aws, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Map equivalent mock AWS security controls",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: amazon cloud platform offering hosted compute, storage and security services?",
              "choices": [
                "Azure",
                "AWS",
                "Control mapping",
                "Rollback plan"
              ],
              "correct": 1,
              "explanation": "AWS: Amazon cloud platform offering hosted compute, storage and security services"
            },
            {
              "question": "Which practical step best demonstrates aws in this lesson?",
              "choices": [
                "Map a mock Azure resource to a security responsibility",
                "Write a safe revert sequence for mock settings",
                "Create a two-column AWS/Azure control matrix",
                "Map equivalent mock AWS security controls"
              ],
              "correct": 3,
              "explanation": "The guided activity for aws is: Map equivalent mock AWS security controls."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c6-w24-s3",
          "title": "Control mapping: business application",
          "term": "Control mapping",
          "definition": "Connecting the same desired security result to different provider tools",
          "analogy": "Different trucks use different controls to meet the same safety standard",
          "scenario": "AGL is choosing equivalent control designs across AWS and Azure.",
          "why": "Control mapping matters because AGL must make reliable, explainable decisions about systems and information. Connecting the same desired security result to different provider tools Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL is choosing equivalent control designs across AWS and Azure.",
            "Define control mapping in one sentence: Connecting the same desired security result to different provider tools",
            "Carry out this small, authorized activity: Create a two-column AWS/Azure control matrix.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of control mapping, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of control mapping, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create a two-column AWS/Azure control matrix",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: connecting the same desired security result to different provider tools?",
              "choices": [
                "Rollback plan",
                "Azure",
                "Control mapping",
                "AWS"
              ],
              "correct": 2,
              "explanation": "Control mapping: Connecting the same desired security result to different provider tools"
            },
            {
              "question": "Which practical step best demonstrates control mapping in this lesson?",
              "choices": [
                "Create a two-column AWS/Azure control matrix",
                "Map equivalent mock AWS security controls",
                "Map a mock Azure resource to a security responsibility",
                "Write a safe revert sequence for mock settings"
              ],
              "correct": 0,
              "explanation": "The guided activity for control mapping is: Create a two-column AWS/Azure control matrix."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c6-w24-s4",
          "title": "Rollback plan: project evidence",
          "term": "Rollback plan",
          "definition": "Documented steps for restoring a previous known-good state after a change",
          "analogy": "A warehouse keeps a previous routing schedule for failed updates",
          "scenario": "AGL is choosing equivalent control designs across AWS and Azure.",
          "why": "Rollback plan matters because AGL must make reliable, explainable decisions about systems and information. Documented steps for restoring a previous known-good state after a change Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL is choosing equivalent control designs across AWS and Azure.",
            "Define rollback plan in one sentence: Documented steps for restoring a previous known-good state after a change",
            "Carry out this small, authorized activity: Write a safe revert sequence for mock settings.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of rollback plan, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of rollback plan, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write a safe revert sequence for mock settings",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: documented steps for restoring a previous known-good state after a change?",
              "choices": [
                "Azure",
                "AWS",
                "Rollback plan",
                "Control mapping"
              ],
              "correct": 2,
              "explanation": "Rollback plan: Documented steps for restoring a previous known-good state after a change"
            },
            {
              "question": "Which practical step best demonstrates rollback plan in this lesson?",
              "choices": [
                "Create a two-column AWS/Azure control matrix",
                "Write a safe revert sequence for mock settings",
                "Map a mock Azure resource to a security responsibility",
                "Map equivalent mock AWS security controls"
              ],
              "correct": 1,
              "explanation": "The guided activity for rollback plan is: Write a safe revert sequence for mock settings."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 4,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 25,
      "month": 7,
      "course": 7,
      "title": "Python log parsing and reusable modules",
      "learn": "Function: A reusable block of code that performs one task; Collection: A structure that stores several values together; Exception handling: Code that responds predictably when something goes wrong; Unit test: An automated check of one small behavior of a program",
      "lab": "Create a tested Python parser that counts synthetic failed logins",
      "deliver": "Create a tested Python parser that counts synthetic failed logins. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "The SOC receives synthetic login records that analysts currently process by hand.",
      "challenge": "Create a tested Python parser that counts synthetic failed logins",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: a reusable block of code that performs one task?",
          "choices": [
            "Exception handling",
            "Collection",
            "Unit test",
            "Function"
          ],
          "correct": 3,
          "explanation": "Function — A reusable block of code that performs one task"
        },
        {
          "question": "In this week's AGL training, which concept means: a structure that stores several values together?",
          "choices": [
            "Exception handling",
            "Collection",
            "Function",
            "Unit test"
          ],
          "correct": 1,
          "explanation": "Collection — A structure that stores several values together"
        },
        {
          "question": "In this week's AGL training, which concept means: code that responds predictably when something goes wrong?",
          "choices": [
            "Unit test",
            "Exception handling",
            "Function",
            "Collection"
          ],
          "correct": 1,
          "explanation": "Exception handling — Code that responds predictably when something goes wrong"
        },
        {
          "question": "In this week's AGL training, which concept means: an automated check of one small behavior of a program?",
          "choices": [
            "Unit test",
            "Function",
            "Collection",
            "Exception handling"
          ],
          "correct": 0,
          "explanation": "Unit test — An automated check of one small behavior of a program"
        },
        {
          "question": "To demonstrate function in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Write a Python function to count events",
            "Handle a malformed mock log row without crashing",
            "Test your parser against a known list of input events",
            "Store sample events in a Python list"
          ],
          "correct": 0,
          "explanation": "The intended first activity is to write a Python function to count events; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c7-w25-s1",
          "title": "Function: Python log parsing and reusable modules",
          "term": "Function",
          "definition": "A reusable block of code that performs one task",
          "analogy": "A reusable checklist describes how to inspect every vehicle",
          "scenario": "The SOC receives synthetic login records that analysts currently process by hand.",
          "why": "Function matters because AGL must make reliable, explainable decisions about systems and information. A reusable block of code that performs one task Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The SOC receives synthetic login records that analysts currently process by hand.",
            "Define function in one sentence: A reusable block of code that performs one task",
            "Carry out this small, authorized activity: Write a Python function to count events.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of function, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of function, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write a Python function to count events",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a reusable block of code that performs one task?",
              "choices": [
                "Unit test",
                "Collection",
                "Function",
                "Exception handling"
              ],
              "correct": 2,
              "explanation": "Function: A reusable block of code that performs one task"
            },
            {
              "question": "Which practical step best demonstrates function in this lesson?",
              "choices": [
                "Test your parser against a known list of input events",
                "Write a Python function to count events",
                "Handle a malformed mock log row without crashing",
                "Store sample events in a Python list"
              ],
              "correct": 1,
              "explanation": "The guided activity for function is: Write a Python function to count events."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c7-w25-s2",
          "title": "Collection: guided practice",
          "term": "Collection",
          "definition": "A structure that stores several values together",
          "analogy": "A labeled bin holds multiple package IDs",
          "scenario": "The SOC receives synthetic login records that analysts currently process by hand.",
          "why": "Collection matters because AGL must make reliable, explainable decisions about systems and information. A structure that stores several values together Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The SOC receives synthetic login records that analysts currently process by hand.",
            "Define collection in one sentence: A structure that stores several values together",
            "Carry out this small, authorized activity: Store sample events in a Python list.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of collection, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of collection, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Store sample events in a Python list",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a structure that stores several values together?",
              "choices": [
                "Collection",
                "Unit test",
                "Function",
                "Exception handling"
              ],
              "correct": 0,
              "explanation": "Collection: A structure that stores several values together"
            },
            {
              "question": "Which practical step best demonstrates collection in this lesson?",
              "choices": [
                "Store sample events in a Python list",
                "Handle a malformed mock log row without crashing",
                "Test your parser against a known list of input events",
                "Write a Python function to count events"
              ],
              "correct": 0,
              "explanation": "The guided activity for collection is: Store sample events in a Python list."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c7-w25-s3",
          "title": "Exception handling: business application",
          "term": "Exception handling",
          "definition": "Code that responds predictably when something goes wrong",
          "analogy": "A sorting line diverts unreadable labels for review",
          "scenario": "The SOC receives synthetic login records that analysts currently process by hand.",
          "why": "Exception handling matters because AGL must make reliable, explainable decisions about systems and information. Code that responds predictably when something goes wrong Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The SOC receives synthetic login records that analysts currently process by hand.",
            "Define exception handling in one sentence: Code that responds predictably when something goes wrong",
            "Carry out this small, authorized activity: Handle a malformed mock log row without crashing.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of exception handling, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of exception handling, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Handle a malformed mock log row without crashing",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: code that responds predictably when something goes wrong?",
              "choices": [
                "Exception handling",
                "Function",
                "Collection",
                "Unit test"
              ],
              "correct": 0,
              "explanation": "Exception handling: Code that responds predictably when something goes wrong"
            },
            {
              "question": "Which practical step best demonstrates exception handling in this lesson?",
              "choices": [
                "Test your parser against a known list of input events",
                "Write a Python function to count events",
                "Handle a malformed mock log row without crashing",
                "Store sample events in a Python list"
              ],
              "correct": 2,
              "explanation": "The guided activity for exception handling is: Handle a malformed mock log row without crashing."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c7-w25-s4",
          "title": "Unit test: project evidence",
          "term": "Unit test",
          "definition": "An automated check of one small behavior of a program",
          "analogy": "A quality-control sample checks a scanner before deployment",
          "scenario": "The SOC receives synthetic login records that analysts currently process by hand.",
          "why": "Unit test matters because AGL must make reliable, explainable decisions about systems and information. An automated check of one small behavior of a program Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The SOC receives synthetic login records that analysts currently process by hand.",
            "Define unit test in one sentence: An automated check of one small behavior of a program",
            "Carry out this small, authorized activity: Test your parser against a known list of input events.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of unit test, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of unit test, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Test your parser against a known list of input events",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: an automated check of one small behavior of a program?",
              "choices": [
                "Exception handling",
                "Unit test",
                "Function",
                "Collection"
              ],
              "correct": 1,
              "explanation": "Unit test: An automated check of one small behavior of a program"
            },
            {
              "question": "Which practical step best demonstrates unit test in this lesson?",
              "choices": [
                "Handle a malformed mock log row without crashing",
                "Store sample events in a Python list",
                "Write a Python function to count events",
                "Test your parser against a known list of input events"
              ],
              "correct": 3,
              "explanation": "The guided activity for unit test is: Test your parser against a known list of input events."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 5,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 26,
      "month": 7,
      "course": 7,
      "title": "Security automation and safe APIs",
      "learn": "API: A defined way that one software component requests information from another; JSON: A text format for exchanging structured data; Rate limiting: Controlling how often a client may make requests; Human approval: A review step before automation performs a sensitive action",
      "lab": "Build a mock alert enrichment service using offline sample data",
      "deliver": "Build a mock alert enrichment service using offline sample data. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "An internal automation service needs to produce a safe incident summary from predefined sample data.",
      "challenge": "Build a mock alert enrichment service using offline sample data",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: a defined way that one software component requests information from another?",
          "choices": [
            "API",
            "JSON",
            "Human approval",
            "Rate limiting"
          ],
          "correct": 0,
          "explanation": "API — A defined way that one software component requests information from another"
        },
        {
          "question": "In this week's AGL training, which concept means: a text format for exchanging structured data?",
          "choices": [
            "JSON",
            "Human approval",
            "API",
            "Rate limiting"
          ],
          "correct": 0,
          "explanation": "JSON — A text format for exchanging structured data"
        },
        {
          "question": "In this week's AGL training, which concept means: controlling how often a client may make requests?",
          "choices": [
            "JSON",
            "API",
            "Rate limiting",
            "Human approval"
          ],
          "correct": 2,
          "explanation": "Rate limiting — Controlling how often a client may make requests"
        },
        {
          "question": "In this week's AGL training, which concept means: a review step before automation performs a sensitive action?",
          "choices": [
            "API",
            "Rate limiting",
            "Human approval",
            "JSON"
          ],
          "correct": 2,
          "explanation": "Human approval — A review step before automation performs a sensitive action"
        },
        {
          "question": "To demonstrate api in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Write a policy for simulated API request volume",
            "Create a small sample security alert JSON object",
            "Put a human confirmation before any simulated account lock",
            "Inspect a sample JSON response in a local file"
          ],
          "correct": 3,
          "explanation": "The intended first activity is to inspect a sample JSON response in a local file; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c7-w26-s1",
          "title": "API: Security automation and safe APIs",
          "term": "API",
          "definition": "A defined way that one software component requests information from another",
          "analogy": "Dispatch software asks a carrier service for status data",
          "scenario": "An internal automation service needs to produce a safe incident summary from predefined sample data.",
          "why": "API matters because AGL must make reliable, explainable decisions about systems and information. A defined way that one software component requests information from another Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An internal automation service needs to produce a safe incident summary from predefined sample data.",
            "Define api in one sentence: A defined way that one software component requests information from another",
            "Carry out this small, authorized activity: Inspect a sample JSON response in a local file.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of api, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of api, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Inspect a sample JSON response in a local file",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a defined way that one software component requests information from another?",
              "choices": [
                "API",
                "Human approval",
                "JSON",
                "Rate limiting"
              ],
              "correct": 0,
              "explanation": "API: A defined way that one software component requests information from another"
            },
            {
              "question": "Which practical step best demonstrates api in this lesson?",
              "choices": [
                "Inspect a sample JSON response in a local file",
                "Put a human confirmation before any simulated account lock",
                "Create a small sample security alert JSON object",
                "Write a policy for simulated API request volume"
              ],
              "correct": 0,
              "explanation": "The guided activity for api is: Inspect a sample JSON response in a local file."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c7-w26-s2",
          "title": "JSON: guided practice",
          "term": "JSON",
          "definition": "A text format for exchanging structured data",
          "analogy": "A shipping manifest uses predictable fields for every item",
          "scenario": "An internal automation service needs to produce a safe incident summary from predefined sample data.",
          "why": "JSON matters because AGL must make reliable, explainable decisions about systems and information. A text format for exchanging structured data Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An internal automation service needs to produce a safe incident summary from predefined sample data.",
            "Define json in one sentence: A text format for exchanging structured data",
            "Carry out this small, authorized activity: Create a small sample security alert JSON object.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of json, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of json, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create a small sample security alert JSON object",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a text format for exchanging structured data?",
              "choices": [
                "Rate limiting",
                "Human approval",
                "JSON",
                "API"
              ],
              "correct": 2,
              "explanation": "JSON: A text format for exchanging structured data"
            },
            {
              "question": "Which practical step best demonstrates json in this lesson?",
              "choices": [
                "Write a policy for simulated API request volume",
                "Create a small sample security alert JSON object",
                "Inspect a sample JSON response in a local file",
                "Put a human confirmation before any simulated account lock"
              ],
              "correct": 1,
              "explanation": "The guided activity for json is: Create a small sample security alert JSON object."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c7-w26-s3",
          "title": "Rate limiting: business application",
          "term": "Rate limiting",
          "definition": "Controlling how often a client may make requests",
          "analogy": "A loading dock limits trucks per hour to prevent congestion",
          "scenario": "An internal automation service needs to produce a safe incident summary from predefined sample data.",
          "why": "Rate limiting matters because AGL must make reliable, explainable decisions about systems and information. Controlling how often a client may make requests Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An internal automation service needs to produce a safe incident summary from predefined sample data.",
            "Define rate limiting in one sentence: Controlling how often a client may make requests",
            "Carry out this small, authorized activity: Write a policy for simulated API request volume.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of rate limiting, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of rate limiting, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write a policy for simulated API request volume",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: controlling how often a client may make requests?",
              "choices": [
                "Human approval",
                "Rate limiting",
                "JSON",
                "API"
              ],
              "correct": 1,
              "explanation": "Rate limiting: Controlling how often a client may make requests"
            },
            {
              "question": "Which practical step best demonstrates rate limiting in this lesson?",
              "choices": [
                "Create a small sample security alert JSON object",
                "Put a human confirmation before any simulated account lock",
                "Inspect a sample JSON response in a local file",
                "Write a policy for simulated API request volume"
              ],
              "correct": 3,
              "explanation": "The guided activity for rate limiting is: Write a policy for simulated API request volume."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c7-w26-s4",
          "title": "Human approval: project evidence",
          "term": "Human approval",
          "definition": "A review step before automation performs a sensitive action",
          "analogy": "A supervisor signs off before rerouting high-value freight",
          "scenario": "An internal automation service needs to produce a safe incident summary from predefined sample data.",
          "why": "Human approval matters because AGL must make reliable, explainable decisions about systems and information. A review step before automation performs a sensitive action Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An internal automation service needs to produce a safe incident summary from predefined sample data.",
            "Define human approval in one sentence: A review step before automation performs a sensitive action",
            "Carry out this small, authorized activity: Put a human confirmation before any simulated account lock.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of human approval, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of human approval, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Put a human confirmation before any simulated account lock",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a review step before automation performs a sensitive action?",
              "choices": [
                "Human approval",
                "API",
                "JSON",
                "Rate limiting"
              ],
              "correct": 0,
              "explanation": "Human approval: A review step before automation performs a sensitive action"
            },
            {
              "question": "Which practical step best demonstrates human approval in this lesson?",
              "choices": [
                "Write a policy for simulated API request volume",
                "Create a small sample security alert JSON object",
                "Put a human confirmation before any simulated account lock",
                "Inspect a sample JSON response in a local file"
              ],
              "correct": 2,
              "explanation": "The guided activity for human approval is: Put a human confirmation before any simulated account lock."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 5,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 27,
      "month": 7,
      "course": 7,
      "title": "AI-assisted security triage and validation",
      "learn": "Machine learning: Methods that learn statistical patterns from examples; Generative AI: Models that can create text or other content from patterns in training data; Hallucination: A model output that states unsupported or false details; Evaluation set: A collection of cases used to check system behavior",
      "lab": "Evaluate a rule-based mock AI summary over synthetic cases",
      "deliver": "Evaluate a rule-based mock AI summary over synthetic cases. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "An AI-generated incident synopsis includes a fabricated detail not found in the original case.",
      "challenge": "Evaluate a rule-based mock AI summary over synthetic cases",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: methods that learn statistical patterns from examples?",
          "choices": [
            "Evaluation set",
            "Generative AI",
            "Hallucination",
            "Machine learning"
          ],
          "correct": 3,
          "explanation": "Machine learning — Methods that learn statistical patterns from examples"
        },
        {
          "question": "In this week's AGL training, which concept means: models that can create text or other content from patterns in training data?",
          "choices": [
            "Generative AI",
            "Machine learning",
            "Hallucination",
            "Evaluation set"
          ],
          "correct": 0,
          "explanation": "Generative AI — Models that can create text or other content from patterns in training data"
        },
        {
          "question": "In this week's AGL training, which concept means: a model output that states unsupported or false details?",
          "choices": [
            "Generative AI",
            "Hallucination",
            "Evaluation set",
            "Machine learning"
          ],
          "correct": 1,
          "explanation": "Hallucination — A model output that states unsupported or false details"
        },
        {
          "question": "In this week's AGL training, which concept means: a collection of cases used to check system behavior?",
          "choices": [
            "Generative AI",
            "Hallucination",
            "Machine learning",
            "Evaluation set"
          ],
          "correct": 3,
          "explanation": "Evaluation set — A collection of cases used to check system behavior"
        },
        {
          "question": "To demonstrate machine learning in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Mark claims in a sample AI report as supported or unverified",
            "Check a sample summary against original event facts",
            "Record expected vs actual responses for three synthetic alerts",
            "Explain what training data does and does not prove"
          ],
          "correct": 3,
          "explanation": "The intended first activity is to explain what training data does and does not prove; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c7-w27-s1",
          "title": "Machine learning: AI-assisted security triage and validation",
          "term": "Machine learning",
          "definition": "Methods that learn statistical patterns from examples",
          "analogy": "A sorter learns which package patterns predict damage",
          "scenario": "An AI-generated incident synopsis includes a fabricated detail not found in the original case.",
          "why": "Machine learning matters because AGL must make reliable, explainable decisions about systems and information. Methods that learn statistical patterns from examples Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An AI-generated incident synopsis includes a fabricated detail not found in the original case.",
            "Define machine learning in one sentence: Methods that learn statistical patterns from examples",
            "Carry out this small, authorized activity: Explain what training data does and does not prove.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of machine learning, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of machine learning, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Explain what training data does and does not prove",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: methods that learn statistical patterns from examples?",
              "choices": [
                "Machine learning",
                "Evaluation set",
                "Generative AI",
                "Hallucination"
              ],
              "correct": 0,
              "explanation": "Machine learning: Methods that learn statistical patterns from examples"
            },
            {
              "question": "Which practical step best demonstrates machine learning in this lesson?",
              "choices": [
                "Check a sample summary against original event facts",
                "Mark claims in a sample AI report as supported or unverified",
                "Record expected vs actual responses for three synthetic alerts",
                "Explain what training data does and does not prove"
              ],
              "correct": 3,
              "explanation": "The guided activity for machine learning is: Explain what training data does and does not prove."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c7-w27-s2",
          "title": "Generative AI: guided practice",
          "term": "Generative AI",
          "definition": "Models that can create text or other content from patterns in training data",
          "analogy": "A writing assistant drafts a shift summary but can make mistakes",
          "scenario": "An AI-generated incident synopsis includes a fabricated detail not found in the original case.",
          "why": "Generative AI matters because AGL must make reliable, explainable decisions about systems and information. Models that can create text or other content from patterns in training data Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An AI-generated incident synopsis includes a fabricated detail not found in the original case.",
            "Define generative ai in one sentence: Models that can create text or other content from patterns in training data",
            "Carry out this small, authorized activity: Check a sample summary against original event facts.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of generative ai, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of generative ai, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Check a sample summary against original event facts",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: models that can create text or other content from patterns in training data?",
              "choices": [
                "Machine learning",
                "Hallucination",
                "Evaluation set",
                "Generative AI"
              ],
              "correct": 3,
              "explanation": "Generative AI: Models that can create text or other content from patterns in training data"
            },
            {
              "question": "Which practical step best demonstrates generative ai in this lesson?",
              "choices": [
                "Mark claims in a sample AI report as supported or unverified",
                "Check a sample summary against original event facts",
                "Explain what training data does and does not prove",
                "Record expected vs actual responses for three synthetic alerts"
              ],
              "correct": 1,
              "explanation": "The guided activity for generative ai is: Check a sample summary against original event facts."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c7-w27-s3",
          "title": "Hallucination: business application",
          "term": "Hallucination",
          "definition": "A model output that states unsupported or false details",
          "analogy": "A clerk invents a delivery time not found in the records",
          "scenario": "An AI-generated incident synopsis includes a fabricated detail not found in the original case.",
          "why": "Hallucination matters because AGL must make reliable, explainable decisions about systems and information. A model output that states unsupported or false details Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An AI-generated incident synopsis includes a fabricated detail not found in the original case.",
            "Define hallucination in one sentence: A model output that states unsupported or false details",
            "Carry out this small, authorized activity: Mark claims in a sample AI report as supported or unverified.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of hallucination, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of hallucination, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Mark claims in a sample AI report as supported or unverified",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a model output that states unsupported or false details?",
              "choices": [
                "Generative AI",
                "Machine learning",
                "Hallucination",
                "Evaluation set"
              ],
              "correct": 2,
              "explanation": "Hallucination: A model output that states unsupported or false details"
            },
            {
              "question": "Which practical step best demonstrates hallucination in this lesson?",
              "choices": [
                "Mark claims in a sample AI report as supported or unverified",
                "Explain what training data does and does not prove",
                "Check a sample summary against original event facts",
                "Record expected vs actual responses for three synthetic alerts"
              ],
              "correct": 0,
              "explanation": "The guided activity for hallucination is: Mark claims in a sample AI report as supported or unverified."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c7-w27-s4",
          "title": "Evaluation set: project evidence",
          "term": "Evaluation set",
          "definition": "A collection of cases used to check system behavior",
          "analogy": "A quality team uses known defective and valid sample products",
          "scenario": "An AI-generated incident synopsis includes a fabricated detail not found in the original case.",
          "why": "Evaluation set matters because AGL must make reliable, explainable decisions about systems and information. A collection of cases used to check system behavior Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: An AI-generated incident synopsis includes a fabricated detail not found in the original case.",
            "Define evaluation set in one sentence: A collection of cases used to check system behavior",
            "Carry out this small, authorized activity: Record expected vs actual responses for three synthetic alerts.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of evaluation set, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of evaluation set, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Record expected vs actual responses for three synthetic alerts",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a collection of cases used to check system behavior?",
              "choices": [
                "Generative AI",
                "Hallucination",
                "Machine learning",
                "Evaluation set"
              ],
              "correct": 3,
              "explanation": "Evaluation set: A collection of cases used to check system behavior"
            },
            {
              "question": "Which practical step best demonstrates evaluation set in this lesson?",
              "choices": [
                "Explain what training data does and does not prove",
                "Record expected vs actual responses for three synthetic alerts",
                "Mark claims in a sample AI report as supported or unverified",
                "Check a sample summary against original event facts"
              ],
              "correct": 1,
              "explanation": "The guided activity for evaluation set is: Record expected vs actual responses for three synthetic alerts."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 5,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 28,
      "month": 7,
      "course": 7,
      "title": "AI safeguards, testing and deployable demo",
      "learn": "Prompt injection: Instructions placed in untrusted content to redirect an AI system; Data minimization: Collecting and sharing only the information required for the task; Allowlist: An explicit list of permitted identities or actions; Human-in-the-loop: A workflow requiring a person to verify important automated outputs",
      "lab": "Deliver Project 5 Python triage application with review gate",
      "deliver": "Deliver Project 5 Python triage application with review gate. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "The automation application must be tested against prompt injection and unverified outputs.",
      "challenge": "Deliver Project 5 Python triage application with review gate",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: instructions placed in untrusted content to redirect an AI system?",
          "choices": [
            "Data minimization",
            "Prompt injection",
            "Allowlist",
            "Human-in-the-loop"
          ],
          "correct": 1,
          "explanation": "Prompt injection — Instructions placed in untrusted content to redirect an AI system"
        },
        {
          "question": "In this week's AGL training, which concept means: collecting and sharing only the information required for the task?",
          "choices": [
            "Human-in-the-loop",
            "Allowlist",
            "Data minimization",
            "Prompt injection"
          ],
          "correct": 2,
          "explanation": "Data minimization — Collecting and sharing only the information required for the task"
        },
        {
          "question": "In this week's AGL training, which concept means: an explicit list of permitted identities or actions?",
          "choices": [
            "Allowlist",
            "Data minimization",
            "Human-in-the-loop",
            "Prompt injection"
          ],
          "correct": 0,
          "explanation": "Allowlist — An explicit list of permitted identities or actions"
        },
        {
          "question": "In this week's AGL training, which concept means: a workflow requiring a person to verify important automated outputs?",
          "choices": [
            "Human-in-the-loop",
            "Allowlist",
            "Prompt injection",
            "Data minimization"
          ],
          "correct": 0,
          "explanation": "Human-in-the-loop — A workflow requiring a person to verify important automated outputs"
        },
        {
          "question": "To demonstrate prompt injection in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Identify an unsafe instruction inside synthetic log text",
            "Add a review checkbox before a synthetic response is accepted",
            "Restrict a mock agent to predefined safe operations",
            "Remove unnecessary fields before using AI assistance"
          ],
          "correct": 0,
          "explanation": "The intended first activity is to identify an unsafe instruction inside synthetic log text; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c7-w28-s1",
          "title": "Prompt injection: AI safeguards, testing and deployable demo",
          "term": "Prompt injection",
          "definition": "Instructions placed in untrusted content to redirect an AI system",
          "analogy": "A forged note in a package attempts to change the sorting rules",
          "scenario": "The automation application must be tested against prompt injection and unverified outputs.",
          "why": "Prompt injection matters because AGL must make reliable, explainable decisions about systems and information. Instructions placed in untrusted content to redirect an AI system Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The automation application must be tested against prompt injection and unverified outputs.",
            "Define prompt injection in one sentence: Instructions placed in untrusted content to redirect an AI system",
            "Carry out this small, authorized activity: Identify an unsafe instruction inside synthetic log text.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of prompt injection, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of prompt injection, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Identify an unsafe instruction inside synthetic log text",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: instructions placed in untrusted content to redirect an AI system?",
              "choices": [
                "Allowlist",
                "Prompt injection",
                "Data minimization",
                "Human-in-the-loop"
              ],
              "correct": 1,
              "explanation": "Prompt injection: Instructions placed in untrusted content to redirect an AI system"
            },
            {
              "question": "Which practical step best demonstrates prompt injection in this lesson?",
              "choices": [
                "Identify an unsafe instruction inside synthetic log text",
                "Remove unnecessary fields before using AI assistance",
                "Add a review checkbox before a synthetic response is accepted",
                "Restrict a mock agent to predefined safe operations"
              ],
              "correct": 0,
              "explanation": "The guided activity for prompt injection is: Identify an unsafe instruction inside synthetic log text."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c7-w28-s2",
          "title": "Data minimization: guided practice",
          "term": "Data minimization",
          "definition": "Collecting and sharing only the information required for the task",
          "analogy": "A shipping label need not expose the customer's entire profile",
          "scenario": "The automation application must be tested against prompt injection and unverified outputs.",
          "why": "Data minimization matters because AGL must make reliable, explainable decisions about systems and information. Collecting and sharing only the information required for the task Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The automation application must be tested against prompt injection and unverified outputs.",
            "Define data minimization in one sentence: Collecting and sharing only the information required for the task",
            "Carry out this small, authorized activity: Remove unnecessary fields before using AI assistance.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of data minimization, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of data minimization, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Remove unnecessary fields before using AI assistance",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: collecting and sharing only the information required for the task?",
              "choices": [
                "Allowlist",
                "Prompt injection",
                "Data minimization",
                "Human-in-the-loop"
              ],
              "correct": 2,
              "explanation": "Data minimization: Collecting and sharing only the information required for the task"
            },
            {
              "question": "Which practical step best demonstrates data minimization in this lesson?",
              "choices": [
                "Add a review checkbox before a synthetic response is accepted",
                "Restrict a mock agent to predefined safe operations",
                "Remove unnecessary fields before using AI assistance",
                "Identify an unsafe instruction inside synthetic log text"
              ],
              "correct": 2,
              "explanation": "The guided activity for data minimization is: Remove unnecessary fields before using AI assistance."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c7-w28-s3",
          "title": "Allowlist: business application",
          "term": "Allowlist",
          "definition": "An explicit list of permitted identities or actions",
          "analogy": "Only registered warehouse carriers may enter a loading bay",
          "scenario": "The automation application must be tested against prompt injection and unverified outputs.",
          "why": "Allowlist matters because AGL must make reliable, explainable decisions about systems and information. An explicit list of permitted identities or actions Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The automation application must be tested against prompt injection and unverified outputs.",
            "Define allowlist in one sentence: An explicit list of permitted identities or actions",
            "Carry out this small, authorized activity: Restrict a mock agent to predefined safe operations.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of allowlist, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of allowlist, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Restrict a mock agent to predefined safe operations",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: an explicit list of permitted identities or actions?",
              "choices": [
                "Prompt injection",
                "Allowlist",
                "Human-in-the-loop",
                "Data minimization"
              ],
              "correct": 1,
              "explanation": "Allowlist: An explicit list of permitted identities or actions"
            },
            {
              "question": "Which practical step best demonstrates allowlist in this lesson?",
              "choices": [
                "Add a review checkbox before a synthetic response is accepted",
                "Restrict a mock agent to predefined safe operations",
                "Identify an unsafe instruction inside synthetic log text",
                "Remove unnecessary fields before using AI assistance"
              ],
              "correct": 1,
              "explanation": "The guided activity for allowlist is: Restrict a mock agent to predefined safe operations."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c7-w28-s4",
          "title": "Human-in-the-loop: project evidence",
          "term": "Human-in-the-loop",
          "definition": "A workflow requiring a person to verify important automated outputs",
          "analogy": "A supervisor checks unusual machine decisions before dispatch",
          "scenario": "The automation application must be tested against prompt injection and unverified outputs.",
          "why": "Human-in-the-loop matters because AGL must make reliable, explainable decisions about systems and information. A workflow requiring a person to verify important automated outputs Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The automation application must be tested against prompt injection and unverified outputs.",
            "Define human-in-the-loop in one sentence: A workflow requiring a person to verify important automated outputs",
            "Carry out this small, authorized activity: Add a review checkbox before a synthetic response is accepted.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of human-in-the-loop, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of human-in-the-loop, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Add a review checkbox before a synthetic response is accepted",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a workflow requiring a person to verify important automated outputs?",
              "choices": [
                "Data minimization",
                "Prompt injection",
                "Human-in-the-loop",
                "Allowlist"
              ],
              "correct": 2,
              "explanation": "Human-in-the-loop: A workflow requiring a person to verify important automated outputs"
            },
            {
              "question": "Which practical step best demonstrates human-in-the-loop in this lesson?",
              "choices": [
                "Add a review checkbox before a synthetic response is accepted",
                "Restrict a mock agent to predefined safe operations",
                "Identify an unsafe instruction inside synthetic log text",
                "Remove unnecessary fields before using AI assistance"
              ],
              "correct": 0,
              "explanation": "The guided activity for human-in-the-loop is: Add a review checkbox before a synthetic response is accepted."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 5,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 29,
      "month": 8,
      "course": 8,
      "title": "MASS product requirements and threat model",
      "learn": "Threat model: A structured account of potential harm and ways to reduce it; Message integrity: Assurance that a message has not been changed unnoticed; Identity verification: Confirming who controls a message-sending account or device; Trust boundary: A point where untrusted material enters a sensitive component",
      "lab": "Write MASS v1 features, privacy requirements and architecture",
      "deliver": "Write MASS v1 features, privacy requirements and architecture. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "The MASS project needs a threat model before any code or communications hardware is deployed.",
      "challenge": "Write MASS v1 features, privacy requirements and architecture",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: a structured account of potential harm and ways to reduce it?",
          "choices": [
            "Message integrity",
            "Threat model",
            "Trust boundary",
            "Identity verification"
          ],
          "correct": 1,
          "explanation": "Threat model — A structured account of potential harm and ways to reduce it"
        },
        {
          "question": "In this week's AGL training, which concept means: assurance that a message has not been changed unnoticed?",
          "choices": [
            "Identity verification",
            "Threat model",
            "Message integrity",
            "Trust boundary"
          ],
          "correct": 2,
          "explanation": "Message integrity — Assurance that a message has not been changed unnoticed"
        },
        {
          "question": "In this week's AGL training, which concept means: confirming who controls a message-sending account or device?",
          "choices": [
            "Message integrity",
            "Identity verification",
            "Threat model",
            "Trust boundary"
          ],
          "correct": 1,
          "explanation": "Identity verification — Confirming who controls a message-sending account or device"
        },
        {
          "question": "In this week's AGL training, which concept means: a point where untrusted material enters a sensitive component?",
          "choices": [
            "Message integrity",
            "Trust boundary",
            "Threat model",
            "Identity verification"
          ],
          "correct": 1,
          "explanation": "Trust boundary — A point where untrusted material enters a sensitive component"
        },
        {
          "question": "To demonstrate threat model in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Diagram which inputs MASS treats as untrusted",
            "Identify metadata and impersonation risks in a messaging design",
            "Write a check for altered synthetic message data",
            "Design a device enrollment and revocation process"
          ],
          "correct": 1,
          "explanation": "The intended first activity is to identify metadata and impersonation risks in a messaging design; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c8-w29-s1",
          "title": "Threat model: MASS product requirements and threat model",
          "term": "Threat model",
          "definition": "A structured account of potential harm and ways to reduce it",
          "analogy": "A courier identifies risks to a valuable delivery",
          "scenario": "The MASS project needs a threat model before any code or communications hardware is deployed.",
          "why": "Threat model matters because AGL must make reliable, explainable decisions about systems and information. A structured account of potential harm and ways to reduce it Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The MASS project needs a threat model before any code or communications hardware is deployed.",
            "Define threat model in one sentence: A structured account of potential harm and ways to reduce it",
            "Carry out this small, authorized activity: Identify metadata and impersonation risks in a messaging design.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of threat model, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of threat model, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Identify metadata and impersonation risks in a messaging design",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a structured account of potential harm and ways to reduce it?",
              "choices": [
                "Trust boundary",
                "Message integrity",
                "Threat model",
                "Identity verification"
              ],
              "correct": 2,
              "explanation": "Threat model: A structured account of potential harm and ways to reduce it"
            },
            {
              "question": "Which practical step best demonstrates threat model in this lesson?",
              "choices": [
                "Diagram which inputs MASS treats as untrusted",
                "Design a device enrollment and revocation process",
                "Identify metadata and impersonation risks in a messaging design",
                "Write a check for altered synthetic message data"
              ],
              "correct": 2,
              "explanation": "The guided activity for threat model is: Identify metadata and impersonation risks in a messaging design."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c8-w29-s2",
          "title": "Message integrity: guided practice",
          "term": "Message integrity",
          "definition": "Assurance that a message has not been changed unnoticed",
          "analogy": "A tamper-evident seal protects parcel instructions",
          "scenario": "The MASS project needs a threat model before any code or communications hardware is deployed.",
          "why": "Message integrity matters because AGL must make reliable, explainable decisions about systems and information. Assurance that a message has not been changed unnoticed Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The MASS project needs a threat model before any code or communications hardware is deployed.",
            "Define message integrity in one sentence: Assurance that a message has not been changed unnoticed",
            "Carry out this small, authorized activity: Write a check for altered synthetic message data.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of message integrity, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of message integrity, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write a check for altered synthetic message data",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: assurance that a message has not been changed unnoticed?",
              "choices": [
                "Trust boundary",
                "Message integrity",
                "Identity verification",
                "Threat model"
              ],
              "correct": 1,
              "explanation": "Message integrity: Assurance that a message has not been changed unnoticed"
            },
            {
              "question": "Which practical step best demonstrates message integrity in this lesson?",
              "choices": [
                "Design a device enrollment and revocation process",
                "Write a check for altered synthetic message data",
                "Identify metadata and impersonation risks in a messaging design",
                "Diagram which inputs MASS treats as untrusted"
              ],
              "correct": 1,
              "explanation": "The guided activity for message integrity is: Write a check for altered synthetic message data."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c8-w29-s3",
          "title": "Identity verification: business application",
          "term": "Identity verification",
          "definition": "Confirming who controls a message-sending account or device",
          "analogy": "A driver proves identity before collecting a package",
          "scenario": "The MASS project needs a threat model before any code or communications hardware is deployed.",
          "why": "Identity verification matters because AGL must make reliable, explainable decisions about systems and information. Confirming who controls a message-sending account or device Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The MASS project needs a threat model before any code or communications hardware is deployed.",
            "Define identity verification in one sentence: Confirming who controls a message-sending account or device",
            "Carry out this small, authorized activity: Design a device enrollment and revocation process.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of identity verification, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of identity verification, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Design a device enrollment and revocation process",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: confirming who controls a message-sending account or device?",
              "choices": [
                "Identity verification",
                "Trust boundary",
                "Message integrity",
                "Threat model"
              ],
              "correct": 0,
              "explanation": "Identity verification: Confirming who controls a message-sending account or device"
            },
            {
              "question": "Which practical step best demonstrates identity verification in this lesson?",
              "choices": [
                "Identify metadata and impersonation risks in a messaging design",
                "Diagram which inputs MASS treats as untrusted",
                "Design a device enrollment and revocation process",
                "Write a check for altered synthetic message data"
              ],
              "correct": 2,
              "explanation": "The guided activity for identity verification is: Design a device enrollment and revocation process."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c8-w29-s4",
          "title": "Trust boundary: project evidence",
          "term": "Trust boundary",
          "definition": "A point where untrusted material enters a sensitive component",
          "analogy": "A visitor must be checked before entering a control room",
          "scenario": "The MASS project needs a threat model before any code or communications hardware is deployed.",
          "why": "Trust boundary matters because AGL must make reliable, explainable decisions about systems and information. A point where untrusted material enters a sensitive component Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The MASS project needs a threat model before any code or communications hardware is deployed.",
            "Define trust boundary in one sentence: A point where untrusted material enters a sensitive component",
            "Carry out this small, authorized activity: Diagram which inputs MASS treats as untrusted.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of trust boundary, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of trust boundary, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Diagram which inputs MASS treats as untrusted",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a point where untrusted material enters a sensitive component?",
              "choices": [
                "Identity verification",
                "Threat model",
                "Trust boundary",
                "Message integrity"
              ],
              "correct": 2,
              "explanation": "Trust boundary: A point where untrusted material enters a sensitive component"
            },
            {
              "question": "Which practical step best demonstrates trust boundary in this lesson?",
              "choices": [
                "Write a check for altered synthetic message data",
                "Diagram which inputs MASS treats as untrusted",
                "Design a device enrollment and revocation process",
                "Identify metadata and impersonation risks in a messaging design"
              ],
              "correct": 1,
              "explanation": "The guided activity for trust boundary is: Diagram which inputs MASS treats as untrusted."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 6,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 30,
      "month": 8,
      "course": 8,
      "title": "MASS architecture, Python messages and local data",
      "learn": "Client: Software that requests a service or sends a message; Server: Software that receives requests and returns responses; Message queue: A temporary holding place for data waiting to be processed; Schema: An agreed structure of fields a message must contain",
      "lab": "Build offline send/receive simulation with message status",
      "deliver": "Build offline send/receive simulation with message status. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "MASS is being prototyped on one computer, with no live network peers.",
      "challenge": "Build offline send/receive simulation with message status",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: software that requests a service or sends a message?",
          "choices": [
            "Server",
            "Message queue",
            "Client",
            "Schema"
          ],
          "correct": 2,
          "explanation": "Client — Software that requests a service or sends a message"
        },
        {
          "question": "In this week's AGL training, which concept means: software that receives requests and returns responses?",
          "choices": [
            "Message queue",
            "Schema",
            "Client",
            "Server"
          ],
          "correct": 3,
          "explanation": "Server — Software that receives requests and returns responses"
        },
        {
          "question": "In this week's AGL training, which concept means: a temporary holding place for data waiting to be processed?",
          "choices": [
            "Schema",
            "Server",
            "Client",
            "Message queue"
          ],
          "correct": 3,
          "explanation": "Message queue — A temporary holding place for data waiting to be processed"
        },
        {
          "question": "In this week's AGL training, which concept means: an agreed structure of fields a message must contain?",
          "choices": [
            "Server",
            "Message queue",
            "Schema",
            "Client"
          ],
          "correct": 2,
          "explanation": "Schema — An agreed structure of fields a message must contain"
        },
        {
          "question": "To demonstrate client in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Implement an in-memory Python queue for demo messages",
            "Define a mock client request object",
            "Define server validation in a toy messaging workflow",
            "Validate message sender, recipient and payload fields"
          ],
          "correct": 1,
          "explanation": "The intended first activity is to define a mock client request object; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c8-w30-s1",
          "title": "Client: MASS architecture, Python messages and local data",
          "term": "Client",
          "definition": "Software that requests a service or sends a message",
          "analogy": "A courier app submits orders to dispatch",
          "scenario": "MASS is being prototyped on one computer, with no live network peers.",
          "why": "Client matters because AGL must make reliable, explainable decisions about systems and information. Software that requests a service or sends a message Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: MASS is being prototyped on one computer, with no live network peers.",
            "Define client in one sentence: Software that requests a service or sends a message",
            "Carry out this small, authorized activity: Define a mock client request object.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of client, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of client, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Define a mock client request object",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: software that requests a service or sends a message?",
              "choices": [
                "Message queue",
                "Client",
                "Schema",
                "Server"
              ],
              "correct": 1,
              "explanation": "Client: Software that requests a service or sends a message"
            },
            {
              "question": "Which practical step best demonstrates client in this lesson?",
              "choices": [
                "Validate message sender, recipient and payload fields",
                "Implement an in-memory Python queue for demo messages",
                "Define server validation in a toy messaging workflow",
                "Define a mock client request object"
              ],
              "correct": 3,
              "explanation": "The guided activity for client is: Define a mock client request object."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c8-w30-s2",
          "title": "Server: guided practice",
          "term": "Server",
          "definition": "Software that receives requests and returns responses",
          "analogy": "A central dispatch office coordinates routes",
          "scenario": "MASS is being prototyped on one computer, with no live network peers.",
          "why": "Server matters because AGL must make reliable, explainable decisions about systems and information. Software that receives requests and returns responses Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: MASS is being prototyped on one computer, with no live network peers.",
            "Define server in one sentence: Software that receives requests and returns responses",
            "Carry out this small, authorized activity: Define server validation in a toy messaging workflow.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of server, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of server, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Define server validation in a toy messaging workflow",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: software that receives requests and returns responses?",
              "choices": [
                "Schema",
                "Server",
                "Message queue",
                "Client"
              ],
              "correct": 1,
              "explanation": "Server: Software that receives requests and returns responses"
            },
            {
              "question": "Which practical step best demonstrates server in this lesson?",
              "choices": [
                "Validate message sender, recipient and payload fields",
                "Implement an in-memory Python queue for demo messages",
                "Define server validation in a toy messaging workflow",
                "Define a mock client request object"
              ],
              "correct": 2,
              "explanation": "The guided activity for server is: Define server validation in a toy messaging workflow."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c8-w30-s3",
          "title": "Message queue: business application",
          "term": "Message queue",
          "definition": "A temporary holding place for data waiting to be processed",
          "analogy": "Packages wait in a dispatch queue before shipment",
          "scenario": "MASS is being prototyped on one computer, with no live network peers.",
          "why": "Message queue matters because AGL must make reliable, explainable decisions about systems and information. A temporary holding place for data waiting to be processed Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: MASS is being prototyped on one computer, with no live network peers.",
            "Define message queue in one sentence: A temporary holding place for data waiting to be processed",
            "Carry out this small, authorized activity: Implement an in-memory Python queue for demo messages.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of message queue, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of message queue, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Implement an in-memory Python queue for demo messages",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a temporary holding place for data waiting to be processed?",
              "choices": [
                "Client",
                "Server",
                "Message queue",
                "Schema"
              ],
              "correct": 2,
              "explanation": "Message queue: A temporary holding place for data waiting to be processed"
            },
            {
              "question": "Which practical step best demonstrates message queue in this lesson?",
              "choices": [
                "Implement an in-memory Python queue for demo messages",
                "Validate message sender, recipient and payload fields",
                "Define server validation in a toy messaging workflow",
                "Define a mock client request object"
              ],
              "correct": 0,
              "explanation": "The guided activity for message queue is: Implement an in-memory Python queue for demo messages."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c8-w30-s4",
          "title": "Schema: project evidence",
          "term": "Schema",
          "definition": "An agreed structure of fields a message must contain",
          "analogy": "A shipment form needs tracking number, date and destination",
          "scenario": "MASS is being prototyped on one computer, with no live network peers.",
          "why": "Schema matters because AGL must make reliable, explainable decisions about systems and information. An agreed structure of fields a message must contain Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: MASS is being prototyped on one computer, with no live network peers.",
            "Define schema in one sentence: An agreed structure of fields a message must contain",
            "Carry out this small, authorized activity: Validate message sender, recipient and payload fields.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of schema, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of schema, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Validate message sender, recipient and payload fields",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: an agreed structure of fields a message must contain?",
              "choices": [
                "Client",
                "Schema",
                "Server",
                "Message queue"
              ],
              "correct": 1,
              "explanation": "Schema: An agreed structure of fields a message must contain"
            },
            {
              "question": "Which practical step best demonstrates schema in this lesson?",
              "choices": [
                "Validate message sender, recipient and payload fields",
                "Implement an in-memory Python queue for demo messages",
                "Define server validation in a toy messaging workflow",
                "Define a mock client request object"
              ],
              "correct": 0,
              "explanation": "The guided activity for schema is: Validate message sender, recipient and payload fields."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 6,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 31,
      "month": 8,
      "course": 8,
      "title": "MASS keys, authentication and privacy limits",
      "learn": "End-to-end encryption: Protecting message content so only intended endpoints can decrypt it under the protocol's assumptions; Authenticated encryption: A standard cryptographic approach providing confidentiality plus tampering detection; Key rotation: Replacing keys according to a documented process; Metadata: Information about communication such as timing, participants or message size",
      "lab": "Create an educational authenticated-message protocol sketch",
      "deliver": "Create an educational authenticated-message protocol sketch. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "The MASS design must prevent unauthorized reading of content while explaining metadata risks.",
      "challenge": "Create an educational authenticated-message protocol sketch",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: protecting message content so only intended endpoints can decrypt it under the protocol's assumptions?",
          "choices": [
            "End-to-end encryption",
            "Key rotation",
            "Metadata",
            "Authenticated encryption"
          ],
          "correct": 0,
          "explanation": "End-to-end encryption — Protecting message content so only intended endpoints can decrypt it under the protocol's assumptions"
        },
        {
          "question": "In this week's AGL training, which concept means: a standard cryptographic approach providing confidentiality plus tampering detection?",
          "choices": [
            "Key rotation",
            "End-to-end encryption",
            "Authenticated encryption",
            "Metadata"
          ],
          "correct": 2,
          "explanation": "Authenticated encryption — A standard cryptographic approach providing confidentiality plus tampering detection"
        },
        {
          "question": "In this week's AGL training, which concept means: replacing keys according to a documented process?",
          "choices": [
            "End-to-end encryption",
            "Metadata",
            "Key rotation",
            "Authenticated encryption"
          ],
          "correct": 2,
          "explanation": "Key rotation — Replacing keys according to a documented process"
        },
        {
          "question": "In this week's AGL training, which concept means: information about communication such as timing, participants or message size?",
          "choices": [
            "Key rotation",
            "End-to-end encryption",
            "Metadata",
            "Authenticated encryption"
          ],
          "correct": 2,
          "explanation": "Metadata — Information about communication such as timing, participants or message size"
        },
        {
          "question": "To demonstrate end-to-end encryption in the authorized AGL training exercise, what should you do?",
          "choices": [
            "List metadata privacy risks not solved by message encryption",
            "Diagram where real cryptographic keys must be stored",
            "Specify use of an established audited library rather than a custom cipher",
            "Draft a device key update and revocation plan"
          ],
          "correct": 1,
          "explanation": "The intended first activity is to diagram where real cryptographic keys must be stored; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c8-w31-s1",
          "title": "End-to-end encryption: MASS keys, authentication and privacy limits",
          "term": "End-to-end encryption",
          "definition": "Protecting message content so only intended endpoints can decrypt it under the protocol's assumptions",
          "analogy": "Sealed packages are readable only by sender and recipient",
          "scenario": "The MASS design must prevent unauthorized reading of content while explaining metadata risks.",
          "why": "End-to-end encryption matters because AGL must make reliable, explainable decisions about systems and information. Protecting message content so only intended endpoints can decrypt it under the protocol's assumptions Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The MASS design must prevent unauthorized reading of content while explaining metadata risks.",
            "Define end-to-end encryption in one sentence: Protecting message content so only intended endpoints can decrypt it under the protocol's assumptions",
            "Carry out this small, authorized activity: Diagram where real cryptographic keys must be stored.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of end-to-end encryption, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of end-to-end encryption, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Diagram where real cryptographic keys must be stored",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: protecting message content so only intended endpoints can decrypt it under the protocol's assumptions?",
              "choices": [
                "Metadata",
                "Authenticated encryption",
                "Key rotation",
                "End-to-end encryption"
              ],
              "correct": 3,
              "explanation": "End-to-end encryption: Protecting message content so only intended endpoints can decrypt it under the protocol's assumptions"
            },
            {
              "question": "Which practical step best demonstrates end-to-end encryption in this lesson?",
              "choices": [
                "List metadata privacy risks not solved by message encryption",
                "Draft a device key update and revocation plan",
                "Diagram where real cryptographic keys must be stored",
                "Specify use of an established audited library rather than a custom cipher"
              ],
              "correct": 2,
              "explanation": "The guided activity for end-to-end encryption is: Diagram where real cryptographic keys must be stored."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c8-w31-s2",
          "title": "Authenticated encryption: guided practice",
          "term": "Authenticated encryption",
          "definition": "A standard cryptographic approach providing confidentiality plus tampering detection",
          "analogy": "A sealed tamper-evident container protects contents and shows interference",
          "scenario": "The MASS design must prevent unauthorized reading of content while explaining metadata risks.",
          "why": "Authenticated encryption matters because AGL must make reliable, explainable decisions about systems and information. A standard cryptographic approach providing confidentiality plus tampering detection Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The MASS design must prevent unauthorized reading of content while explaining metadata risks.",
            "Define authenticated encryption in one sentence: A standard cryptographic approach providing confidentiality plus tampering detection",
            "Carry out this small, authorized activity: Specify use of an established audited library rather than a custom cipher.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of authenticated encryption, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of authenticated encryption, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Specify use of an established audited library rather than a custom cipher",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a standard cryptographic approach providing confidentiality plus tampering detection?",
              "choices": [
                "Key rotation",
                "Metadata",
                "Authenticated encryption",
                "End-to-end encryption"
              ],
              "correct": 2,
              "explanation": "Authenticated encryption: A standard cryptographic approach providing confidentiality plus tampering detection"
            },
            {
              "question": "Which practical step best demonstrates authenticated encryption in this lesson?",
              "choices": [
                "List metadata privacy risks not solved by message encryption",
                "Diagram where real cryptographic keys must be stored",
                "Specify use of an established audited library rather than a custom cipher",
                "Draft a device key update and revocation plan"
              ],
              "correct": 2,
              "explanation": "The guided activity for authenticated encryption is: Specify use of an established audited library rather than a custom cipher."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c8-w31-s3",
          "title": "Key rotation: business application",
          "term": "Key rotation",
          "definition": "Replacing keys according to a documented process",
          "analogy": "Replacing employee access cards when roles change",
          "scenario": "The MASS design must prevent unauthorized reading of content while explaining metadata risks.",
          "why": "Key rotation matters because AGL must make reliable, explainable decisions about systems and information. Replacing keys according to a documented process Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The MASS design must prevent unauthorized reading of content while explaining metadata risks.",
            "Define key rotation in one sentence: Replacing keys according to a documented process",
            "Carry out this small, authorized activity: Draft a device key update and revocation plan.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of key rotation, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of key rotation, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Draft a device key update and revocation plan",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: replacing keys according to a documented process?",
              "choices": [
                "Authenticated encryption",
                "End-to-end encryption",
                "Metadata",
                "Key rotation"
              ],
              "correct": 3,
              "explanation": "Key rotation: Replacing keys according to a documented process"
            },
            {
              "question": "Which practical step best demonstrates key rotation in this lesson?",
              "choices": [
                "Diagram where real cryptographic keys must be stored",
                "Draft a device key update and revocation plan",
                "List metadata privacy risks not solved by message encryption",
                "Specify use of an established audited library rather than a custom cipher"
              ],
              "correct": 1,
              "explanation": "The guided activity for key rotation is: Draft a device key update and revocation plan."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c8-w31-s4",
          "title": "Metadata: project evidence",
          "term": "Metadata",
          "definition": "Information about communication such as timing, participants or message size",
          "analogy": "A parcel tracking slip can reveal sender and destination without showing contents",
          "scenario": "The MASS design must prevent unauthorized reading of content while explaining metadata risks.",
          "why": "Metadata matters because AGL must make reliable, explainable decisions about systems and information. Information about communication such as timing, participants or message size Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The MASS design must prevent unauthorized reading of content while explaining metadata risks.",
            "Define metadata in one sentence: Information about communication such as timing, participants or message size",
            "Carry out this small, authorized activity: List metadata privacy risks not solved by message encryption.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of metadata, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of metadata, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "List metadata privacy risks not solved by message encryption",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: information about communication such as timing, participants or message size?",
              "choices": [
                "Authenticated encryption",
                "End-to-end encryption",
                "Key rotation",
                "Metadata"
              ],
              "correct": 3,
              "explanation": "Metadata: Information about communication such as timing, participants or message size"
            },
            {
              "question": "Which practical step best demonstrates metadata in this lesson?",
              "choices": [
                "Draft a device key update and revocation plan",
                "Diagram where real cryptographic keys must be stored",
                "List metadata privacy risks not solved by message encryption",
                "Specify use of an established audited library rather than a custom cipher"
              ],
              "correct": 2,
              "explanation": "The guided activity for metadata is: List metadata privacy risks not solved by message encryption."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 6,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 32,
      "month": 8,
      "course": 8,
      "title": "MASS secure prototype and portfolio evaluation",
      "learn": "Mesh network: A set of devices that can relay messages between nodes where supported; Store and forward: Holding a message until the next connection becomes available; Honeypot: A controlled decoy used to observe attempted misuse in an isolated environment; Security review: A documented examination of design assumptions, tests and remaining risks",
      "lab": "Deliver Project 6 MASS prototype, tests and limitation report",
      "deliver": "Deliver Project 6 MASS prototype, tests and limitation report. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "MASS must clearly distinguish its offline demonstration from a proven real-world secure messenger.",
      "challenge": "Deliver Project 6 MASS prototype, tests and limitation report",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: a set of devices that can relay messages between nodes where supported?",
          "choices": [
            "Honeypot",
            "Mesh network",
            "Security review",
            "Store and forward"
          ],
          "correct": 1,
          "explanation": "Mesh network — A set of devices that can relay messages between nodes where supported"
        },
        {
          "question": "In this week's AGL training, which concept means: holding a message until the next connection becomes available?",
          "choices": [
            "Store and forward",
            "Security review",
            "Mesh network",
            "Honeypot"
          ],
          "correct": 0,
          "explanation": "Store and forward — Holding a message until the next connection becomes available"
        },
        {
          "question": "In this week's AGL training, which concept means: a controlled decoy used to observe attempted misuse in an isolated environment?",
          "choices": [
            "Security review",
            "Mesh network",
            "Store and forward",
            "Honeypot"
          ],
          "correct": 3,
          "explanation": "Honeypot — A controlled decoy used to observe attempted misuse in an isolated environment"
        },
        {
          "question": "In this week's AGL training, which concept means: a documented examination of design assumptions, tests and remaining risks?",
          "choices": [
            "Security review",
            "Store and forward",
            "Mesh network",
            "Honeypot"
          ],
          "correct": 0,
          "explanation": "Security review — A documented examination of design assumptions, tests and remaining risks"
        },
        {
          "question": "To demonstrate mesh network in the authorized AGL training exercise, what should you do?",
          "choices": [
            "List what MASS prototype does not protect or guarantee",
            "Create a local synthetic decoy event with no external connections",
            "Simulate delayed delivery when a recipient is offline",
            "Diagram a simulated two-hop message path without transmitting radio traffic"
          ],
          "correct": 3,
          "explanation": "The intended first activity is to diagram a simulated two-hop message path without transmitting radio traffic; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c8-w32-s1",
          "title": "Mesh network: MASS secure prototype and portfolio evaluation",
          "term": "Mesh network",
          "definition": "A set of devices that can relay messages between nodes where supported",
          "analogy": "Couriers hand parcels between regional hubs instead of using one central depot",
          "scenario": "MASS must clearly distinguish its offline demonstration from a proven real-world secure messenger.",
          "why": "Mesh network matters because AGL must make reliable, explainable decisions about systems and information. A set of devices that can relay messages between nodes where supported Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: MASS must clearly distinguish its offline demonstration from a proven real-world secure messenger.",
            "Define mesh network in one sentence: A set of devices that can relay messages between nodes where supported",
            "Carry out this small, authorized activity: Diagram a simulated two-hop message path without transmitting radio traffic.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of mesh network, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of mesh network, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Diagram a simulated two-hop message path without transmitting radio traffic",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a set of devices that can relay messages between nodes where supported?",
              "choices": [
                "Store and forward",
                "Honeypot",
                "Security review",
                "Mesh network"
              ],
              "correct": 3,
              "explanation": "Mesh network: A set of devices that can relay messages between nodes where supported"
            },
            {
              "question": "Which practical step best demonstrates mesh network in this lesson?",
              "choices": [
                "Simulate delayed delivery when a recipient is offline",
                "Diagram a simulated two-hop message path without transmitting radio traffic",
                "Create a local synthetic decoy event with no external connections",
                "List what MASS prototype does not protect or guarantee"
              ],
              "correct": 1,
              "explanation": "The guided activity for mesh network is: Diagram a simulated two-hop message path without transmitting radio traffic."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c8-w32-s2",
          "title": "Store and forward: guided practice",
          "term": "Store and forward",
          "definition": "Holding a message until the next connection becomes available",
          "analogy": "A dispatch hub holds freight for the next truck",
          "scenario": "MASS must clearly distinguish its offline demonstration from a proven real-world secure messenger.",
          "why": "Store and forward matters because AGL must make reliable, explainable decisions about systems and information. Holding a message until the next connection becomes available Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: MASS must clearly distinguish its offline demonstration from a proven real-world secure messenger.",
            "Define store and forward in one sentence: Holding a message until the next connection becomes available",
            "Carry out this small, authorized activity: Simulate delayed delivery when a recipient is offline.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of store and forward, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of store and forward, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Simulate delayed delivery when a recipient is offline",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: holding a message until the next connection becomes available?",
              "choices": [
                "Security review",
                "Honeypot",
                "Mesh network",
                "Store and forward"
              ],
              "correct": 3,
              "explanation": "Store and forward: Holding a message until the next connection becomes available"
            },
            {
              "question": "Which practical step best demonstrates store and forward in this lesson?",
              "choices": [
                "Create a local synthetic decoy event with no external connections",
                "List what MASS prototype does not protect or guarantee",
                "Simulate delayed delivery when a recipient is offline",
                "Diagram a simulated two-hop message path without transmitting radio traffic"
              ],
              "correct": 2,
              "explanation": "The guided activity for store and forward is: Simulate delayed delivery when a recipient is offline."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c8-w32-s3",
          "title": "Honeypot: business application",
          "term": "Honeypot",
          "definition": "A controlled decoy used to observe attempted misuse in an isolated environment",
          "analogy": "A test door records entry attempts without connecting to a real vault",
          "scenario": "MASS must clearly distinguish its offline demonstration from a proven real-world secure messenger.",
          "why": "Honeypot matters because AGL must make reliable, explainable decisions about systems and information. A controlled decoy used to observe attempted misuse in an isolated environment Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: MASS must clearly distinguish its offline demonstration from a proven real-world secure messenger.",
            "Define honeypot in one sentence: A controlled decoy used to observe attempted misuse in an isolated environment",
            "Carry out this small, authorized activity: Create a local synthetic decoy event with no external connections.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of honeypot, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of honeypot, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create a local synthetic decoy event with no external connections",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a controlled decoy used to observe attempted misuse in an isolated environment?",
              "choices": [
                "Honeypot",
                "Mesh network",
                "Store and forward",
                "Security review"
              ],
              "correct": 0,
              "explanation": "Honeypot: A controlled decoy used to observe attempted misuse in an isolated environment"
            },
            {
              "question": "Which practical step best demonstrates honeypot in this lesson?",
              "choices": [
                "Create a local synthetic decoy event with no external connections",
                "Simulate delayed delivery when a recipient is offline",
                "List what MASS prototype does not protect or guarantee",
                "Diagram a simulated two-hop message path without transmitting radio traffic"
              ],
              "correct": 0,
              "explanation": "The guided activity for honeypot is: Create a local synthetic decoy event with no external connections."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c8-w32-s4",
          "title": "Security review: project evidence",
          "term": "Security review",
          "definition": "A documented examination of design assumptions, tests and remaining risks",
          "analogy": "An engineering inspection signs off only on what was actually tested",
          "scenario": "MASS must clearly distinguish its offline demonstration from a proven real-world secure messenger.",
          "why": "Security review matters because AGL must make reliable, explainable decisions about systems and information. A documented examination of design assumptions, tests and remaining risks Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: MASS must clearly distinguish its offline demonstration from a proven real-world secure messenger.",
            "Define security review in one sentence: A documented examination of design assumptions, tests and remaining risks",
            "Carry out this small, authorized activity: List what MASS prototype does not protect or guarantee.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of security review, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of security review, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "List what MASS prototype does not protect or guarantee",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a documented examination of design assumptions, tests and remaining risks?",
              "choices": [
                "Honeypot",
                "Mesh network",
                "Security review",
                "Store and forward"
              ],
              "correct": 2,
              "explanation": "Security review: A documented examination of design assumptions, tests and remaining risks"
            },
            {
              "question": "Which practical step best demonstrates security review in this lesson?",
              "choices": [
                "Simulate delayed delivery when a recipient is offline",
                "List what MASS prototype does not protect or guarantee",
                "Diagram a simulated two-hop message path without transmitting radio traffic",
                "Create a local synthetic decoy event with no external connections"
              ],
              "correct": 1,
              "explanation": "The guided activity for security review is: List what MASS prototype does not protect or guarantee."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 6,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 33,
      "month": 9,
      "course": 9,
      "title": "Governance, policy and executive risk",
      "learn": "Governance: The decisions and accountability structures for managing security; NIST CSF 2.0: A framework organizing cybersecurity outcomes including Govern, Identify, Protect, Detect, Respond and Recover; Risk register: A record of known risks, likelihood, impact and treatment owners; Policy: A formal statement of required behavior or controls",
      "lab": "Create a governance charter and risk register for AGL",
      "deliver": "Create a governance charter and risk register for AGL. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "The AGL board needs to know who owns a security risk and what standard the control supports.",
      "challenge": "Create a governance charter and risk register for AGL",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: the decisions and accountability structures for managing security?",
          "choices": [
            "Policy",
            "Risk register",
            "NIST CSF 2.0",
            "Governance"
          ],
          "correct": 3,
          "explanation": "Governance — The decisions and accountability structures for managing security"
        },
        {
          "question": "In this week's AGL training, which concept means: a framework organizing cybersecurity outcomes including Govern, Identify, Protect, Detect, Respond and Recover?",
          "choices": [
            "Risk register",
            "Governance",
            "NIST CSF 2.0",
            "Policy"
          ],
          "correct": 2,
          "explanation": "NIST CSF 2.0 — A framework organizing cybersecurity outcomes including Govern, Identify, Protect, Detect, Respond and Recover"
        },
        {
          "question": "In this week's AGL training, which concept means: a record of known risks, likelihood, impact and treatment owners?",
          "choices": [
            "Governance",
            "NIST CSF 2.0",
            "Risk register",
            "Policy"
          ],
          "correct": 2,
          "explanation": "Risk register — A record of known risks, likelihood, impact and treatment owners"
        },
        {
          "question": "In this week's AGL training, which concept means: a formal statement of required behavior or controls?",
          "choices": [
            "Risk register",
            "NIST CSF 2.0",
            "Policy",
            "Governance"
          ],
          "correct": 2,
          "explanation": "Policy — A formal statement of required behavior or controls"
        },
        {
          "question": "To demonstrate governance in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Assign an AGL owner for each security decision",
            "Map one AGL control to a CSF function",
            "Write a short acceptable-use policy",
            "Score three fictional risks and name accountable owners"
          ],
          "correct": 0,
          "explanation": "The intended first activity is to assign an AGL owner for each security decision; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c9-w33-s1",
          "title": "Governance: Governance, policy and executive risk",
          "term": "Governance",
          "definition": "The decisions and accountability structures for managing security",
          "analogy": "A company's leadership sets safety rules and responsibilities",
          "scenario": "The AGL board needs to know who owns a security risk and what standard the control supports.",
          "why": "Governance matters because AGL must make reliable, explainable decisions about systems and information. The decisions and accountability structures for managing security Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The AGL board needs to know who owns a security risk and what standard the control supports.",
            "Define governance in one sentence: The decisions and accountability structures for managing security",
            "Carry out this small, authorized activity: Assign an AGL owner for each security decision.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of governance, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of governance, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Assign an AGL owner for each security decision",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: the decisions and accountability structures for managing security?",
              "choices": [
                "Policy",
                "Governance",
                "Risk register",
                "NIST CSF 2.0"
              ],
              "correct": 1,
              "explanation": "Governance: The decisions and accountability structures for managing security"
            },
            {
              "question": "Which practical step best demonstrates governance in this lesson?",
              "choices": [
                "Assign an AGL owner for each security decision",
                "Write a short acceptable-use policy",
                "Score three fictional risks and name accountable owners",
                "Map one AGL control to a CSF function"
              ],
              "correct": 0,
              "explanation": "The guided activity for governance is: Assign an AGL owner for each security decision."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c9-w33-s2",
          "title": "NIST CSF 2.0: guided practice",
          "term": "NIST CSF 2.0",
          "definition": "A framework organizing cybersecurity outcomes including Govern, Identify, Protect, Detect, Respond and Recover",
          "analogy": "A logistics checklist groups activities by who must act and why",
          "scenario": "The AGL board needs to know who owns a security risk and what standard the control supports.",
          "why": "NIST CSF 2.0 matters because AGL must make reliable, explainable decisions about systems and information. A framework organizing cybersecurity outcomes including Govern, Identify, Protect, Detect, Respond and Recover Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The AGL board needs to know who owns a security risk and what standard the control supports.",
            "Define nist csf 2.0 in one sentence: A framework organizing cybersecurity outcomes including Govern, Identify, Protect, Detect, Respond and Recover",
            "Carry out this small, authorized activity: Map one AGL control to a CSF function.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of nist csf 2.0, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of nist csf 2.0, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Map one AGL control to a CSF function",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a framework organizing cybersecurity outcomes including Govern, Identify, Protect, Detect, Respond and Recover?",
              "choices": [
                "Policy",
                "NIST CSF 2.0",
                "Governance",
                "Risk register"
              ],
              "correct": 1,
              "explanation": "NIST CSF 2.0: A framework organizing cybersecurity outcomes including Govern, Identify, Protect, Detect, Respond and Recover"
            },
            {
              "question": "Which practical step best demonstrates nist csf 2.0 in this lesson?",
              "choices": [
                "Map one AGL control to a CSF function",
                "Write a short acceptable-use policy",
                "Score three fictional risks and name accountable owners",
                "Assign an AGL owner for each security decision"
              ],
              "correct": 0,
              "explanation": "The guided activity for nist csf 2.0 is: Map one AGL control to a CSF function."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c9-w33-s3",
          "title": "Risk register: business application",
          "term": "Risk register",
          "definition": "A record of known risks, likelihood, impact and treatment owners",
          "analogy": "A fleet manager tracks hazards and mitigation plans",
          "scenario": "The AGL board needs to know who owns a security risk and what standard the control supports.",
          "why": "Risk register matters because AGL must make reliable, explainable decisions about systems and information. A record of known risks, likelihood, impact and treatment owners Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The AGL board needs to know who owns a security risk and what standard the control supports.",
            "Define risk register in one sentence: A record of known risks, likelihood, impact and treatment owners",
            "Carry out this small, authorized activity: Score three fictional risks and name accountable owners.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of risk register, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of risk register, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Score three fictional risks and name accountable owners",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a record of known risks, likelihood, impact and treatment owners?",
              "choices": [
                "Governance",
                "Policy",
                "Risk register",
                "NIST CSF 2.0"
              ],
              "correct": 2,
              "explanation": "Risk register: A record of known risks, likelihood, impact and treatment owners"
            },
            {
              "question": "Which practical step best demonstrates risk register in this lesson?",
              "choices": [
                "Map one AGL control to a CSF function",
                "Write a short acceptable-use policy",
                "Assign an AGL owner for each security decision",
                "Score three fictional risks and name accountable owners"
              ],
              "correct": 3,
              "explanation": "The guided activity for risk register is: Score three fictional risks and name accountable owners."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c9-w33-s4",
          "title": "Policy: project evidence",
          "term": "Policy",
          "definition": "A formal statement of required behavior or controls",
          "analogy": "A workplace policy sets expectations for high-value cargo",
          "scenario": "The AGL board needs to know who owns a security risk and what standard the control supports.",
          "why": "Policy matters because AGL must make reliable, explainable decisions about systems and information. A formal statement of required behavior or controls Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: The AGL board needs to know who owns a security risk and what standard the control supports.",
            "Define policy in one sentence: A formal statement of required behavior or controls",
            "Carry out this small, authorized activity: Write a short acceptable-use policy.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of policy, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of policy, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write a short acceptable-use policy",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a formal statement of required behavior or controls?",
              "choices": [
                "Policy",
                "NIST CSF 2.0",
                "Risk register",
                "Governance"
              ],
              "correct": 0,
              "explanation": "Policy: A formal statement of required behavior or controls"
            },
            {
              "question": "Which practical step best demonstrates policy in this lesson?",
              "choices": [
                "Assign an AGL owner for each security decision",
                "Map one AGL control to a CSF function",
                "Score three fictional risks and name accountable owners",
                "Write a short acceptable-use policy"
              ],
              "correct": 3,
              "explanation": "The guided activity for policy is: Write a short acceptable-use policy."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 7,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 34,
      "month": 9,
      "course": 9,
      "title": "Budget, roadmaps and consulting contracts",
      "learn": "Statement of work: A document defining services, scope and expected results; Work breakdown structure: A hierarchy dividing a large effort into manageable tasks; Total cost: The full expense including time, licensing and ongoing operation; Milestone: An observable checkpoint showing progress",
      "lab": "Build a fictional 90-day security delivery plan and budget",
      "deliver": "Build a fictional 90-day security delivery plan and budget. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "AGL has limited funds and must prioritize security improvements over a 90-day period.",
      "challenge": "Build a fictional 90-day security delivery plan and budget",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: a document defining services, scope and expected results?",
          "choices": [
            "Statement of work",
            "Total cost",
            "Milestone",
            "Work breakdown structure"
          ],
          "correct": 0,
          "explanation": "Statement of work — A document defining services, scope and expected results"
        },
        {
          "question": "In this week's AGL training, which concept means: a hierarchy dividing a large effort into manageable tasks?",
          "choices": [
            "Work breakdown structure",
            "Statement of work",
            "Total cost",
            "Milestone"
          ],
          "correct": 0,
          "explanation": "Work breakdown structure — A hierarchy dividing a large effort into manageable tasks"
        },
        {
          "question": "In this week's AGL training, which concept means: the full expense including time, licensing and ongoing operation?",
          "choices": [
            "Total cost",
            "Work breakdown structure",
            "Milestone",
            "Statement of work"
          ],
          "correct": 0,
          "explanation": "Total cost — The full expense including time, licensing and ongoing operation"
        },
        {
          "question": "In this week's AGL training, which concept means: an observable checkpoint showing progress?",
          "choices": [
            "Total cost",
            "Milestone",
            "Work breakdown structure",
            "Statement of work"
          ],
          "correct": 1,
          "explanation": "Milestone — An observable checkpoint showing progress"
        },
        {
          "question": "To demonstrate statement of work in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Set a measurable 30-day delivery checkpoint",
            "Estimate fictional staffing and software costs",
            "Split a mock security program into work packages",
            "Write an authorized security-consulting scope"
          ],
          "correct": 3,
          "explanation": "The intended first activity is to write an authorized security-consulting scope; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c9-w34-s1",
          "title": "Statement of work: Budget, roadmaps and consulting contracts",
          "term": "Statement of work",
          "definition": "A document defining services, scope and expected results",
          "analogy": "A contractor quotes exactly which buildings will be serviced",
          "scenario": "AGL has limited funds and must prioritize security improvements over a 90-day period.",
          "why": "Statement of work matters because AGL must make reliable, explainable decisions about systems and information. A document defining services, scope and expected results Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL has limited funds and must prioritize security improvements over a 90-day period.",
            "Define statement of work in one sentence: A document defining services, scope and expected results",
            "Carry out this small, authorized activity: Write an authorized security-consulting scope.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of statement of work, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of statement of work, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write an authorized security-consulting scope",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a document defining services, scope and expected results?",
              "choices": [
                "Statement of work",
                "Work breakdown structure",
                "Milestone",
                "Total cost"
              ],
              "correct": 0,
              "explanation": "Statement of work: A document defining services, scope and expected results"
            },
            {
              "question": "Which practical step best demonstrates statement of work in this lesson?",
              "choices": [
                "Split a mock security program into work packages",
                "Set a measurable 30-day delivery checkpoint",
                "Write an authorized security-consulting scope",
                "Estimate fictional staffing and software costs"
              ],
              "correct": 2,
              "explanation": "The guided activity for statement of work is: Write an authorized security-consulting scope."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c9-w34-s2",
          "title": "Work breakdown structure: guided practice",
          "term": "Work breakdown structure",
          "definition": "A hierarchy dividing a large effort into manageable tasks",
          "analogy": "A distribution launch divides work by hubs and teams",
          "scenario": "AGL has limited funds and must prioritize security improvements over a 90-day period.",
          "why": "Work breakdown structure matters because AGL must make reliable, explainable decisions about systems and information. A hierarchy dividing a large effort into manageable tasks Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL has limited funds and must prioritize security improvements over a 90-day period.",
            "Define work breakdown structure in one sentence: A hierarchy dividing a large effort into manageable tasks",
            "Carry out this small, authorized activity: Split a mock security program into work packages.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of work breakdown structure, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of work breakdown structure, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Split a mock security program into work packages",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a hierarchy dividing a large effort into manageable tasks?",
              "choices": [
                "Milestone",
                "Total cost",
                "Statement of work",
                "Work breakdown structure"
              ],
              "correct": 3,
              "explanation": "Work breakdown structure: A hierarchy dividing a large effort into manageable tasks"
            },
            {
              "question": "Which practical step best demonstrates work breakdown structure in this lesson?",
              "choices": [
                "Write an authorized security-consulting scope",
                "Estimate fictional staffing and software costs",
                "Set a measurable 30-day delivery checkpoint",
                "Split a mock security program into work packages"
              ],
              "correct": 3,
              "explanation": "The guided activity for work breakdown structure is: Split a mock security program into work packages."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c9-w34-s3",
          "title": "Total cost: business application",
          "term": "Total cost",
          "definition": "The full expense including time, licensing and ongoing operation",
          "analogy": "A vehicle purchase includes fuel and maintenance",
          "scenario": "AGL has limited funds and must prioritize security improvements over a 90-day period.",
          "why": "Total cost matters because AGL must make reliable, explainable decisions about systems and information. The full expense including time, licensing and ongoing operation Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL has limited funds and must prioritize security improvements over a 90-day period.",
            "Define total cost in one sentence: The full expense including time, licensing and ongoing operation",
            "Carry out this small, authorized activity: Estimate fictional staffing and software costs.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of total cost, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of total cost, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Estimate fictional staffing and software costs",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: the full expense including time, licensing and ongoing operation?",
              "choices": [
                "Total cost",
                "Work breakdown structure",
                "Milestone",
                "Statement of work"
              ],
              "correct": 0,
              "explanation": "Total cost: The full expense including time, licensing and ongoing operation"
            },
            {
              "question": "Which practical step best demonstrates total cost in this lesson?",
              "choices": [
                "Split a mock security program into work packages",
                "Set a measurable 30-day delivery checkpoint",
                "Write an authorized security-consulting scope",
                "Estimate fictional staffing and software costs"
              ],
              "correct": 3,
              "explanation": "The guided activity for total cost is: Estimate fictional staffing and software costs."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c9-w34-s4",
          "title": "Milestone: project evidence",
          "term": "Milestone",
          "definition": "An observable checkpoint showing progress",
          "analogy": "A warehouse commissioning project has inspection milestones",
          "scenario": "AGL has limited funds and must prioritize security improvements over a 90-day period.",
          "why": "Milestone matters because AGL must make reliable, explainable decisions about systems and information. An observable checkpoint showing progress Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: AGL has limited funds and must prioritize security improvements over a 90-day period.",
            "Define milestone in one sentence: An observable checkpoint showing progress",
            "Carry out this small, authorized activity: Set a measurable 30-day delivery checkpoint.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of milestone, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of milestone, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Set a measurable 30-day delivery checkpoint",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: an observable checkpoint showing progress?",
              "choices": [
                "Work breakdown structure",
                "Milestone",
                "Statement of work",
                "Total cost"
              ],
              "correct": 1,
              "explanation": "Milestone: An observable checkpoint showing progress"
            },
            {
              "question": "Which practical step best demonstrates milestone in this lesson?",
              "choices": [
                "Write an authorized security-consulting scope",
                "Set a measurable 30-day delivery checkpoint",
                "Estimate fictional staffing and software costs",
                "Split a mock security program into work packages"
              ],
              "correct": 1,
              "explanation": "The guided activity for milestone is: Set a measurable 30-day delivery checkpoint."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 7,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 35,
      "month": 9,
      "course": 9,
      "title": "Security team leadership and executive reporting",
      "learn": "RACI matrix: A way to clarify who is responsible, accountable, consulted and informed; Key performance indicator: A number describing progress toward an operational goal; Executive communication: Reporting risk and decisions in plain language for business leaders; Residual risk: Remaining risk after existing controls are considered",
      "lab": "Create a RACI chart and monthly board dashboard",
      "deliver": "Create a RACI chart and monthly board dashboard. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "A consulting team must explain budget requests and program results in everyday language.",
      "challenge": "Create a RACI chart and monthly board dashboard",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: a way to clarify who is responsible, accountable, consulted and informed?",
          "choices": [
            "Executive communication",
            "Residual risk",
            "Key performance indicator",
            "RACI matrix"
          ],
          "correct": 3,
          "explanation": "RACI matrix — A way to clarify who is responsible, accountable, consulted and informed"
        },
        {
          "question": "In this week's AGL training, which concept means: a number describing progress toward an operational goal?",
          "choices": [
            "Executive communication",
            "RACI matrix",
            "Key performance indicator",
            "Residual risk"
          ],
          "correct": 2,
          "explanation": "Key performance indicator — A number describing progress toward an operational goal"
        },
        {
          "question": "In this week's AGL training, which concept means: reporting risk and decisions in plain language for business leaders?",
          "choices": [
            "RACI matrix",
            "Executive communication",
            "Key performance indicator",
            "Residual risk"
          ],
          "correct": 1,
          "explanation": "Executive communication — Reporting risk and decisions in plain language for business leaders"
        },
        {
          "question": "In this week's AGL training, which concept means: remaining risk after existing controls are considered?",
          "choices": [
            "RACI matrix",
            "Executive communication",
            "Residual risk",
            "Key performance indicator"
          ],
          "correct": 2,
          "explanation": "Residual risk — Remaining risk after existing controls are considered"
        },
        {
          "question": "To demonstrate raci matrix in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Build a RACI table for fictional incident handling",
            "Translate a technical issue into one clear decision request",
            "Document what remains after a fictional fix",
            "Define an incident-response metric with a denominator"
          ],
          "correct": 0,
          "explanation": "The intended first activity is to build a RACI table for fictional incident handling; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c9-w35-s1",
          "title": "RACI matrix: Security team leadership and executive reporting",
          "term": "RACI matrix",
          "definition": "A way to clarify who is responsible, accountable, consulted and informed",
          "analogy": "Each truck handoff assigns an owner and reviewer",
          "scenario": "A consulting team must explain budget requests and program results in everyday language.",
          "why": "RACI matrix matters because AGL must make reliable, explainable decisions about systems and information. A way to clarify who is responsible, accountable, consulted and informed Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A consulting team must explain budget requests and program results in everyday language.",
            "Define raci matrix in one sentence: A way to clarify who is responsible, accountable, consulted and informed",
            "Carry out this small, authorized activity: Build a RACI table for fictional incident handling.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of raci matrix, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of raci matrix, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Build a RACI table for fictional incident handling",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a way to clarify who is responsible, accountable, consulted and informed?",
              "choices": [
                "Residual risk",
                "Executive communication",
                "Key performance indicator",
                "RACI matrix"
              ],
              "correct": 3,
              "explanation": "RACI matrix: A way to clarify who is responsible, accountable, consulted and informed"
            },
            {
              "question": "Which practical step best demonstrates raci matrix in this lesson?",
              "choices": [
                "Define an incident-response metric with a denominator",
                "Document what remains after a fictional fix",
                "Build a RACI table for fictional incident handling",
                "Translate a technical issue into one clear decision request"
              ],
              "correct": 2,
              "explanation": "The guided activity for raci matrix is: Build a RACI table for fictional incident handling."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c9-w35-s2",
          "title": "Key performance indicator: guided practice",
          "term": "Key performance indicator",
          "definition": "A number describing progress toward an operational goal",
          "analogy": "Dispatch measures on-time delivery percentage",
          "scenario": "A consulting team must explain budget requests and program results in everyday language.",
          "why": "Key performance indicator matters because AGL must make reliable, explainable decisions about systems and information. A number describing progress toward an operational goal Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A consulting team must explain budget requests and program results in everyday language.",
            "Define key performance indicator in one sentence: A number describing progress toward an operational goal",
            "Carry out this small, authorized activity: Define an incident-response metric with a denominator.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of key performance indicator, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of key performance indicator, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Define an incident-response metric with a denominator",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a number describing progress toward an operational goal?",
              "choices": [
                "RACI matrix",
                "Key performance indicator",
                "Executive communication",
                "Residual risk"
              ],
              "correct": 1,
              "explanation": "Key performance indicator: A number describing progress toward an operational goal"
            },
            {
              "question": "Which practical step best demonstrates key performance indicator in this lesson?",
              "choices": [
                "Document what remains after a fictional fix",
                "Build a RACI table for fictional incident handling",
                "Translate a technical issue into one clear decision request",
                "Define an incident-response metric with a denominator"
              ],
              "correct": 3,
              "explanation": "The guided activity for key performance indicator is: Define an incident-response metric with a denominator."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c9-w35-s3",
          "title": "Executive communication: business application",
          "term": "Executive communication",
          "definition": "Reporting risk and decisions in plain language for business leaders",
          "analogy": "A director explains warehouse downtime in financial terms",
          "scenario": "A consulting team must explain budget requests and program results in everyday language.",
          "why": "Executive communication matters because AGL must make reliable, explainable decisions about systems and information. Reporting risk and decisions in plain language for business leaders Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A consulting team must explain budget requests and program results in everyday language.",
            "Define executive communication in one sentence: Reporting risk and decisions in plain language for business leaders",
            "Carry out this small, authorized activity: Translate a technical issue into one clear decision request.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of executive communication, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of executive communication, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Translate a technical issue into one clear decision request",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: reporting risk and decisions in plain language for business leaders?",
              "choices": [
                "Key performance indicator",
                "RACI matrix",
                "Residual risk",
                "Executive communication"
              ],
              "correct": 3,
              "explanation": "Executive communication: Reporting risk and decisions in plain language for business leaders"
            },
            {
              "question": "Which practical step best demonstrates executive communication in this lesson?",
              "choices": [
                "Document what remains after a fictional fix",
                "Translate a technical issue into one clear decision request",
                "Define an incident-response metric with a denominator",
                "Build a RACI table for fictional incident handling"
              ],
              "correct": 1,
              "explanation": "The guided activity for executive communication is: Translate a technical issue into one clear decision request."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c9-w35-s4",
          "title": "Residual risk: project evidence",
          "term": "Residual risk",
          "definition": "Remaining risk after existing controls are considered",
          "analogy": "A safety system reduces but never eliminates accident risk",
          "scenario": "A consulting team must explain budget requests and program results in everyday language.",
          "why": "Residual risk matters because AGL must make reliable, explainable decisions about systems and information. Remaining risk after existing controls are considered Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A consulting team must explain budget requests and program results in everyday language.",
            "Define residual risk in one sentence: Remaining risk after existing controls are considered",
            "Carry out this small, authorized activity: Document what remains after a fictional fix.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of residual risk, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of residual risk, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Document what remains after a fictional fix",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: remaining risk after existing controls are considered?",
              "choices": [
                "RACI matrix",
                "Key performance indicator",
                "Executive communication",
                "Residual risk"
              ],
              "correct": 3,
              "explanation": "Residual risk: Remaining risk after existing controls are considered"
            },
            {
              "question": "Which practical step best demonstrates residual risk in this lesson?",
              "choices": [
                "Define an incident-response metric with a denominator",
                "Translate a technical issue into one clear decision request",
                "Build a RACI table for fictional incident handling",
                "Document what remains after a fictional fix"
              ],
              "correct": 3,
              "explanation": "The guided activity for residual risk is: Document what remains after a fictional fix."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 7,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    },
    {
      "week": 36,
      "month": 9,
      "course": 9,
      "title": "Consulting capstone and $120k career pathway",
      "learn": "Portfolio defense: A structured demonstration and explanation of work you actually completed; STAR example: An interview story describing Situation, Task, Action and Result; Job targeting: Matching verified abilities and experience to real job requirements; 90-day plan: A first-quarter action plan with accountable actions and milestones",
      "lab": "Deliver Project 7 AGL board package, seven-case-study portfolio and job plan",
      "deliver": "Deliver Project 7 AGL board package, seven-case-study portfolio and job plan. Evidence: saved screenshots or clearly labeled diagrams, a README and a one-paragraph management summary.",
      "assess": "Identify the four key ideas, explain the correct authorized next step and defend a practical design decision.",
      "example": "A learner presents evidence from seven connected projects to an interview panel.",
      "challenge": "Deliver Project 7 AGL board package, seven-case-study portfolio and job plan",
      "quiz": [
        {
          "question": "In this week's AGL training, which concept means: a structured demonstration and explanation of work you actually completed?",
          "choices": [
            "Job targeting",
            "90-day plan",
            "STAR example",
            "Portfolio defense"
          ],
          "correct": 3,
          "explanation": "Portfolio defense — A structured demonstration and explanation of work you actually completed"
        },
        {
          "question": "In this week's AGL training, which concept means: an interview story describing Situation, Task, Action and Result?",
          "choices": [
            "Job targeting",
            "Portfolio defense",
            "STAR example",
            "90-day plan"
          ],
          "correct": 2,
          "explanation": "STAR example — An interview story describing Situation, Task, Action and Result"
        },
        {
          "question": "In this week's AGL training, which concept means: matching verified abilities and experience to real job requirements?",
          "choices": [
            "STAR example",
            "Job targeting",
            "Portfolio defense",
            "90-day plan"
          ],
          "correct": 1,
          "explanation": "Job targeting — Matching verified abilities and experience to real job requirements"
        },
        {
          "question": "In this week's AGL training, which concept means: a first-quarter action plan with accountable actions and milestones?",
          "choices": [
            "Job targeting",
            "STAR example",
            "90-day plan",
            "Portfolio defense"
          ],
          "correct": 2,
          "explanation": "90-day plan — A first-quarter action plan with accountable actions and milestones"
        },
        {
          "question": "To demonstrate portfolio defense in the authorized AGL training exercise, what should you do?",
          "choices": [
            "Write one truthful work example without inventing outcomes",
            "Present seven honest case studies with evidence links",
            "Create a comparison grid for target cybersecurity jobs",
            "Present a practical first 90 days as a consultant"
          ],
          "correct": 1,
          "explanation": "The intended first activity is to present seven honest case studies with evidence links; record the result and stay inside the training scope."
        }
      ],
      "lessons": [
        {
          "id": "c9-w36-s1",
          "title": "Portfolio defense: Consulting capstone and $120k career pathway",
          "term": "Portfolio defense",
          "definition": "A structured demonstration and explanation of work you actually completed",
          "analogy": "An engineer presents test records to a review committee",
          "scenario": "A learner presents evidence from seven connected projects to an interview panel.",
          "why": "Portfolio defense matters because AGL must make reliable, explainable decisions about systems and information. A structured demonstration and explanation of work you actually completed Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A learner presents evidence from seven connected projects to an interview panel.",
            "Define portfolio defense in one sentence: A structured demonstration and explanation of work you actually completed",
            "Carry out this small, authorized activity: Present seven honest case studies with evidence links.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of portfolio defense, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of portfolio defense, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Present seven honest case studies with evidence links",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a structured demonstration and explanation of work you actually completed?",
              "choices": [
                "Portfolio defense",
                "Job targeting",
                "90-day plan",
                "STAR example"
              ],
              "correct": 0,
              "explanation": "Portfolio defense: A structured demonstration and explanation of work you actually completed"
            },
            {
              "question": "Which practical step best demonstrates portfolio defense in this lesson?",
              "choices": [
                "Present a practical first 90 days as a consultant",
                "Create a comparison grid for target cybersecurity jobs",
                "Write one truthful work example without inventing outcomes",
                "Present seven honest case studies with evidence links"
              ],
              "correct": 3,
              "explanation": "The guided activity for portfolio defense is: Present seven honest case studies with evidence links."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c9-w36-s2",
          "title": "STAR example: guided practice",
          "term": "STAR example",
          "definition": "An interview story describing Situation, Task, Action and Result",
          "analogy": "A supervisor explains a real shipment recovery",
          "scenario": "A learner presents evidence from seven connected projects to an interview panel.",
          "why": "STAR example matters because AGL must make reliable, explainable decisions about systems and information. An interview story describing Situation, Task, Action and Result Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A learner presents evidence from seven connected projects to an interview panel.",
            "Define star example in one sentence: An interview story describing Situation, Task, Action and Result",
            "Carry out this small, authorized activity: Write one truthful work example without inventing outcomes.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of star example, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of star example, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Write one truthful work example without inventing outcomes",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: an interview story describing Situation, Task, Action and Result?",
              "choices": [
                "90-day plan",
                "Job targeting",
                "Portfolio defense",
                "STAR example"
              ],
              "correct": 3,
              "explanation": "STAR example: An interview story describing Situation, Task, Action and Result"
            },
            {
              "question": "Which practical step best demonstrates star example in this lesson?",
              "choices": [
                "Create a comparison grid for target cybersecurity jobs",
                "Write one truthful work example without inventing outcomes",
                "Present seven honest case studies with evidence links",
                "Present a practical first 90 days as a consultant"
              ],
              "correct": 1,
              "explanation": "The guided activity for star example is: Write one truthful work example without inventing outcomes."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c9-w36-s3",
          "title": "Job targeting: business application",
          "term": "Job targeting",
          "definition": "Matching verified abilities and experience to real job requirements",
          "analogy": "A dispatcher checks licensing and route skills before an assignment",
          "scenario": "A learner presents evidence from seven connected projects to an interview panel.",
          "why": "Job targeting matters because AGL must make reliable, explainable decisions about systems and information. Matching verified abilities and experience to real job requirements Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A learner presents evidence from seven connected projects to an interview panel.",
            "Define job targeting in one sentence: Matching verified abilities and experience to real job requirements",
            "Carry out this small, authorized activity: Create a comparison grid for target cybersecurity jobs.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of job targeting, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of job targeting, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Create a comparison grid for target cybersecurity jobs",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: matching verified abilities and experience to real job requirements?",
              "choices": [
                "Portfolio defense",
                "STAR example",
                "Job targeting",
                "90-day plan"
              ],
              "correct": 2,
              "explanation": "Job targeting: Matching verified abilities and experience to real job requirements"
            },
            {
              "question": "Which practical step best demonstrates job targeting in this lesson?",
              "choices": [
                "Write one truthful work example without inventing outcomes",
                "Create a comparison grid for target cybersecurity jobs",
                "Present seven honest case studies with evidence links",
                "Present a practical first 90 days as a consultant"
              ],
              "correct": 1,
              "explanation": "The guided activity for job targeting is: Create a comparison grid for target cybersecurity jobs."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        },
        {
          "id": "c9-w36-s4",
          "title": "90-day plan: project evidence",
          "term": "90-day plan",
          "definition": "A first-quarter action plan with accountable actions and milestones",
          "analogy": "A new operations manager plans inspections and training",
          "scenario": "A learner presents evidence from seven connected projects to an interview panel.",
          "why": "90-day plan matters because AGL must make reliable, explainable decisions about systems and information. A first-quarter action plan with accountable actions and milestones Use this idea to identify the relevant risk, choose a control and test the result.",
          "demo": [
            "Start with the fictional AGL situation: A learner presents evidence from seven connected projects to an interview panel.",
            "Define 90-day plan in one sentence: A first-quarter action plan with accountable actions and milestones",
            "Carry out this small, authorized activity: Present a practical first 90 days as a consultant.",
            "Record what you expected to observe, what actually happened and the difference, if any.",
            "Save a sanitized screenshot, diagram or text note in your course project folder."
          ],
          "expected": "A clearly documented example of 90-day plan, with an explanation of why the action taken is appropriate and what remains simulated.",
          "troubleshooting": "If the result is unclear, re-read the definition of 90-day plan, inspect each step against the expected result, and record the gap rather than inventing a successful outcome.",
          "projectStep": "Present a practical first 90 days as a consultant",
          "knowledgeChecks": [
            {
              "question": "Which term describes this idea: a first-quarter action plan with accountable actions and milestones?",
              "choices": [
                "STAR example",
                "Job targeting",
                "Portfolio defense",
                "90-day plan"
              ],
              "correct": 3,
              "explanation": "90-day plan: A first-quarter action plan with accountable actions and milestones"
            },
            {
              "question": "Which practical step best demonstrates 90-day plan in this lesson?",
              "choices": [
                "Present a practical first 90 days as a consultant",
                "Write one truthful work example without inventing outcomes",
                "Present seven honest case studies with evidence links",
                "Create a comparison grid for target cybersecurity jobs"
              ],
              "correct": 0,
              "explanation": "The guided activity for 90-day plan is: Present a practical first 90 days as a consultant."
            }
          ],
          "source": "Original beginner-first extension of the user-supplied nine-course architecture"
        }
      ],
      "projectId": 7,
      "source": "Gemini course architecture with original beginner-friendly expansion"
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "Enterprise Network Security & Zero Trust Blueprint",
      "weeks": "9–12",
      "summary": "AGL network inventory, trust zones, access matrix, firewall rule review and recovery plan",
      "deliverables": [
        "Invent eight fictional assets and assign owners",
        "Diagram office, guest, service and management zones",
        "Provide allow/deny rule matrix and access design",
        "Create a threat model and named control owners",
        "Test five simulated rules or policies and record results",
        "Present an architecture and risk tradeoff brief"
      ],
      "acceptance": "Deliver all listed artifacts, reproducible authorized or simulated test evidence, an honest limits section, and a brief executive explanation.",
      "course": 3
    },
    {
      "id": 2,
      "title": "Security Operations Center & Detection Monitoring",
      "weeks": "13–16",
      "summary": "A simulated SOC for the enterprise developed in Project 1",
      "deliverables": [
        "Inventory source logs and write parsing assumptions",
        "Create at least eight detection queries/rules over synthetic events",
        "Define alert severity, escalation and ticket formats",
        "Triage at least five simulated incidents",
        "Document false positives and tuning decisions",
        "Present operational dashboard and shift report"
      ],
      "acceptance": "Deliver all listed artifacts, reproducible authorized or simulated test evidence, an honest limits section, and a brief executive explanation.",
      "course": 4
    },
    {
      "id": 3,
      "title": "Authorized Penetration Test & Incident Investigation",
      "weeks": "17–20",
      "summary": "Scope-controlled security testing and incident-response case study",
      "deliverables": [
        "Write explicit authorization and rules of engagement",
        "Assess only isolated intentionally vulnerable examples",
        "Document evidence and validate reproducible findings",
        "Create incident timeline and chain of custody",
        "Explain mitigations and perform benign retests",
        "Submit technical report and client-ready executive findings"
      ],
      "acceptance": "Deliver all listed artifacts, reproducible authorized or simulated test evidence, an honest limits section, and a brief executive explanation.",
      "course": 5
    },
    {
      "id": 4,
      "title": "Azure & AWS Cloud Security Blueprint",
      "weeks": "21–24",
      "summary": "Two-cloud identity, logging, network and cost-control architecture",
      "deliverables": [
        "Design AWS and Azure resources in a simulated architecture",
        "Define least-privilege IAM roles and key handling",
        "Map logging, encryption and network controls",
        "Document a mock misconfiguration and remediation",
        "Create budget alert and cleanup / rollback plan",
        "Present control matrix and architectural review"
      ],
      "acceptance": "Deliver all listed artifacts, reproducible authorized or simulated test evidence, an honest limits section, and a brief executive explanation.",
      "course": 6
    },
    {
      "id": 5,
      "title": "Python, AI & SOC Automation Tool",
      "weeks": "25–28",
      "summary": "An offline Python log-triage application with review workflow",
      "deliverables": [
        "Read and validate synthetic security log data",
        "Write tested parsers and severity indicators",
        "Produce a case summary with source references",
        "Evaluate incorrect or injected synthetic input safely",
        "Require human approval before hypothetical actions",
        "Package a runnable local demo, tests and limitations"
      ],
      "acceptance": "Deliver all listed artifacts, reproducible authorized or simulated test evidence, an honest limits section, and a brief executive explanation.",
      "course": 7
    },
    {
      "id": 6,
      "title": "MASS Private Communications Prototype",
      "weeks": "29–32",
      "summary": "Educational, non-production private messaging prototype and mesh design",
      "deliverables": [
        "Write protocol threat model and privacy requirements",
        "Develop a local send/receive message simulator",
        "Validate identities, message schema and access restrictions",
        "Sketch audited authenticated encryption and key custody",
        "Simulate delay, relay and revocation without live traffic",
        "Document tests, risks, privacy limits and demo"
      ],
      "acceptance": "Deliver all listed artifacts, reproducible authorized or simulated test evidence, an honest limits section, and a brief executive explanation.",
      "course": 8
    },
    {
      "id": 7,
      "title": "Cybersecurity Management & Consulting Program",
      "weeks": "33–36",
      "summary": "AGL full security program and board presentation building on projects 1–6",
      "deliverables": [
        "Prepare security charter, governance and policy library",
        "Build prioritized risk register and compliance mapping",
        "Create security team RACI, roles and staffing plan",
        "Develop fictional budget, vendor matrix and 90-day program",
        "Present KPIs, incident tabletop and board reporting",
        "Deliver seven case studies and credible consulting proposals"
      ],
      "acceptance": "Deliver all listed artifacts, reproducible authorized or simulated test evidence, an honest limits section, and a brief executive explanation.",
      "course": 9
    }
  ],
  "targetHours": 720,
  "lessonCount": 144,
  "courseCardCount": 9,
  "schedule": [
    {
      "day": "Tuesday",
      "label": "Learn",
      "duration": "5h planned study"
    },
    {
      "day": "Wednesday",
      "label": "Lab",
      "duration": "5h planned study"
    },
    {
      "day": "Thursday",
      "label": "Apply",
      "duration": "5h planned study"
    },
    {
      "day": "Friday",
      "label": "Lead + Quiz",
      "duration": "5h planned study"
    }
  ],
  "certifications": [
    "CompTIA Security+",
    "CompTIA CySA+",
    "CompTIA PenTest+",
    "Microsoft SC-200",
    "AWS Security Learning",
    "PMI CAPM",
    "CISM / CISSP domain preparation"
  ]
};
