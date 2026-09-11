import { Fragment } from "react";
import Link from "next/link";
import { researchThemes } from "@/content/research";
import styles from "./Recruitment.module.css";

const phdThemes = researchThemes.filter((theme) => ["01", "02", "03"].includes(theme.number));
const postdocThemes = researchThemes.filter((theme) => theme.number === "04");
const email = "mailto:tan.anthony@nus.edu.sg";

type Opportunity = { title: string; href: string; description: string };

const phdScholarships: Opportunity[] = [
  {
    title: "National Quantum Scholarships Scheme (PhD)",
    href: "https://nusgs.nus.edu.sg/scholarships/national-quantum-scholarships-scheme-phd",
    description:
      "For doctoral research in quantum technologies. The listed application route requires an eligible CQT supervisor and an agreed project.",
  },
  {
    title: "A*STAR Graduate Scholarship",
    href: "https://nusgs.nus.edu.sg/scholarships/astar-graduate-scholarship",
    description:
      "A route to PhD research with A*STAR and a Singapore university, subject to the scheme’s eligibility and project arrangements.",
  },
  {
    title: "NUS ASEAN Research Scholarship",
    href: "https://nusgs.nus.edu.sg/scholarships/nus-asean-research-scholarship",
    description: "For outstanding research students from ASEAN countries other than Singapore.",
  },
  {
    title: "Commonwealth Scholarship",
    href: "https://nusgs.nus.edu.sg/scholarships/commonwealth-scholarship",
    description:
      "For eligible incoming research students from Commonwealth countries who are not Singapore citizens or permanent residents.",
  },
];

const internships: Opportunity[] = [
  {
    title: "IRIS@NUS",
    href: "https://nusgs.nus.edu.sg/page/irisnus/",
    description:
      "Internship and Research Immersion in Singapore: funded research attachments for undergraduate and master’s students from around the world. Current NUS students are not eligible.",
  },
  {
    title: "SERIUS",
    href: "https://cde.nus.edu.sg/undergraduate/study-abroad-internships/incoming-students/serius/",
    description:
      "Summer engineering research attachments at NUS for students from participating US and Canadian universities.",
  },
  {
    title: "Amgen Scholars Program",
    href: "https://www.dbs.nus.edu.sg/outreach/amgen-scholars-program/",
    description:
      "Biomedical-focused summer research for eligible undergraduates studying in Asia. Apply through the programme; projects are centrally matched, rather than arranged by contacting supervisors.",
  },
];

function OpportunityLink({ opportunity }: { opportunity: Opportunity }) {
  return (
    <>
      <a className={styles.resourceLink} href={opportunity.href} target="_blank" rel="noopener noreferrer">
        <span>{opportunity.title}</span>
        <span aria-hidden="true">↗</span>
      </a>
      <p className={styles.resourceDescription}>{opportunity.description}</p>
    </>
  );
}

export function RecruitmentBanner() {
  return (
    <div className={`section-shell ${styles.bannerShell}`}>
      <aside className={styles.banner} aria-label="Current recruitment">
        <span className={styles.bannerLabel}>We’re recruiting</span>
        <div className={styles.bannerCopy}>
          <p>
            <strong>PhD students</strong> in Research{" "}
            {phdThemes.map((theme, index) => (
              <Fragment key={theme.slug}>
                {index > 0 ? (index === phdThemes.length - 1 ? " & " : ", ") : ""}
                <Link href={`/research/${theme.slug}/`} aria-label={`Research ${theme.number}: ${theme.title}`}>
                  {theme.number}
                </Link>
              </Fragment>
            ))}
          </p>
          <p>
            <strong>1 postdoctoral researcher</strong> in{" "}
            {postdocThemes.map((theme) => (
              <Link key={theme.slug} href={`/research/${theme.slug}/`} aria-label={`Research ${theme.number}: ${theme.title}`}>
                Research {theme.number}
              </Link>
            ))}
          </p>
        </div>
        <a className={styles.bannerAction} href="#join">
          Join us <span aria-hidden="true">→</span>
        </a>
      </aside>
    </div>
  );
}

export function JoinSection() {
  return (
    <section id="join" className={`section-shell ${styles.joinSection}`} data-nav-section aria-labelledby="join-heading">
      <div className={styles.joinIntro}>
        <div>
          <p className="eyebrow">Join us</p>
          <h2 id="join-heading">Build quantum systems with us.</h2>
          <p className={styles.introText}>
            We are recruiting PhD students in research areas 01–03 and one postdoctoral researcher in research area 04.
            We also welcome master’s, student internship and collaboration enquiries.
          </p>
        </div>
        <div className={styles.contactBox}>
          <p className="eyebrow">Start a conversation</p>
          <p>
            For PhD, master’s or postdoctoral enquiries, email Anthony with your CV and a short description of your
            research interests. For internships, follow the relevant programme’s application process.
          </p>
          <a className="button button-dark" href={email}>
            Email Anthony <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className={styles.openingGrid}>
        <article id="join-phd" className={styles.panel} aria-labelledby="phd-opening-heading">
          <p className="eyebrow">Research 01 · 02 · 03</p>
          <h3 id="phd-opening-heading">PhD students</h3>
          <p>Explore PhD opportunities across three of our research themes.</p>
          <ul className={styles.themeList}>
            {phdThemes.map((theme) => (
              <li key={theme.slug}>
                <Link className={styles.themeLink} href={`/research/${theme.slug}/`}>
                  <span className={styles.themeNumber}>{theme.number}</span>
                  <span>{theme.title}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className={styles.fundingNote}>
            <strong>PhD scholarships are also available within the group.</strong> Please contact us to discuss current
            projects and funding.
          </p>
        </article>
        <article id="join-postdoc" className={styles.panel} aria-labelledby="postdoc-opening-heading">
          <p className="eyebrow">Research 04 · 1 opening</p>
          <h3 id="postdoc-opening-heading">Postdoctoral researcher</h3>
          <ul className={styles.themeList}>
            {postdocThemes.map((theme) => (
              <li key={theme.slug}>
                <Link className={styles.themeLink} href={`/research/${theme.slug}/`}>
                  <span className={styles.themeNumber}>{theme.number}</span>
                  <span>{theme.title}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
          <p>
            Join our work on rare-earth quantum interfaces, exploring connections between microwave excitations and
            optical photons.
          </p>
          <a className={styles.inlineLink} href={`${email}?subject=Postdoctoral%20enquiry%20%E2%80%94%20Research%2004`}>
            Enquire about this position <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>

      <div className={styles.fundingHeader}>
        <p className="eyebrow">Scholarships & funding</p>
        <h3>Routes into research</h3>
        <p>
          Alongside the group’s PhD scholarships, prospective students can explore the schemes below. Eligibility,
          project fit and application arrangements vary by programme.
        </p>
      </div>
      <div className={styles.fundingGrid}>
        <article className={`${styles.panel} ${styles.mastersPanel}`} aria-labelledby="masters-scholarship-heading">
          <p className="eyebrow">Master’s · National Quantum Office</p>
          <h4 id="masters-scholarship-heading">National Quantum Scholarships Scheme (Master’s)</h4>
          <p>
            An opportunity for students interested in advancing their careers in quantum research or quantum engineering,
            offered by the National Quantum Office (NQO).
          </p>
          <a
            className={styles.inlineLink}
            href="https://nusgs.nus.edu.sg/scholarships/national-quantum-scholarships-scheme-masters"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the master’s scholarship <span aria-hidden="true">↗</span>
          </a>
        </article>
        <article className={styles.panel} aria-labelledby="phd-scholarships-heading">
          <p className="eyebrow">Doctoral study</p>
          <h4 id="phd-scholarships-heading">PhD scholarship options</h4>
          <ul className={styles.resourceList}>
            {phdScholarships.map((opportunity) => (
              <li key={opportunity.href}>
                <OpportunityLink opportunity={opportunity} />
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div id="join-internships" className={styles.internships}>
        <p className="eyebrow">Research experience</p>
        <h3>Student internships</h3>
        <p className={styles.sectionDescription}>
          Explore these student research programmes at NUS. Placements in our group depend on programme participation,
          available projects and selection; the listings below do not imply a confirmed QSE placement.
        </p>
        <ul className={styles.internshipGrid}>
          {internships.map((opportunity) => (
            <li className={styles.panel} key={opportunity.href}>
              <OpportunityLink opportunity={opportunity} />
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.terms}>
        Please check the official programme pages for current eligibility, application windows, funding terms and
        application procedures. Scholarship awards and admission are subject to the relevant selection processes.
      </p>

      <div className={styles.joinFooter}>
        <div>
          <p className="eyebrow">Collaborate</p>
          <h3>Bring us an interesting idea or problem.</h3>
          <p>We welcome collaborations with scientists and industry teams.</p>
          <a className={styles.inlineLink} href={email}>
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div>
          <p className="eyebrow">Find us</p>
          <h3>Quantum Engineering Lab @ NUS</h3>
          <address>4 Engineering Drive 3<br />Block E4 #02-04</address>
          <a
            className={styles.inlineLink}
            href="https://maps.google.com/?q=National+University+of+Singapore+Electrical+and+Computer+Engineering"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open map <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
