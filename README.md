# PATH · Public Assistance and Triage Hub — UI mockup

Interactive UI mockup of **PATH**, the assistance management system that Group 9 is building for **IntellectStorm**, which will host it for NGOs in Guyana.

**Live demo:** see the GitHub Pages link in the repository's About section.

Start on the **sign-in page** and tap any **test account** to sign in automatically (staff accounts go through a two-step login). Password for every test account: `Demo@2026`. Once inside, the **"View as"** bar at the top switches between:

| View | What you can try |
| --- | --- |
| Applicant (public) | Home page, 4-step application for one or more types of help, application confirmation with SMS preview, tracking a request (try `PTH-26-0139`, `PTH-26-0144`), assistance drives by region |
| NGO admin staff | Dashboard, screening queue with duplicate and incomplete flags, assigning a caseworker, requesting documents, logging walk-in and phone requests |
| Caseworker | Only their assigned cases, case notes, communication log, recurring tuition support, ID number hidden until revealed (recorded in the audit log) |
| NGO manager | Reports by month, type of help, region and status |
| IntellectStorm admin | Organisations (launch NGO, more NGOs later), users and roles, two-step login status, audit log, system health and backups |

This is a static mockup for CSE 2101 Software Engineering (University of Guyana). All names, numbers and records are fictional, and nothing you enter leaves your browser.

Built with plain HTML, CSS and JavaScript — no frameworks and no build step. Dark glass design, made for phones first. Open `index.html` to run it locally.
