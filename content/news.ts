// QUICK UPDATE WORKFLOW
// 1. Copy the first object below.
// 2. Change its date, type, title, summary and links.
// 3. Keep newest items at the top and commit the file.
// The homepage automatically shows the first four featured entries.

export type NewsLink = { label: string; href: string };

export type NewsItem = {
  date: string;
  type: "Paper" | "Media" | "People" | "Event" | "Opportunity" | "Award";
  title: string;
  summary: string;
  links: NewsLink[];
  featured?: boolean;
};

export const newsItems: NewsItem[] = [
  {
    date: "2026-08-24",
    type: "People",
    title: "QSE Lab welcomes its first students",
    summary:
      "Dayne and Huaizheng join as PhD students supported by NUS Research Scholarships, leading our NV-in-diamond and quantum Brillouin efforts, respectively. Grace, Yong Le, Surya, Qi Yuan, Kristoffer, Aliyev, Khadijah and Vivekan will contribute across the lab’s research through year-long undergraduate projects.",
    links: [],
    featured: true,
  },
  {
    date: "2026-08-23",
    type: "Opportunity",
    title: "Join the Quantum Systems Engineering Group",
    summary:
      "We welcome enquiries from researchers and students interested in quantum sensing, quantum materials and hybrid spin–phonon systems.",
    links: [{ label: "Email Anthony", href: "mailto:tan.anthony@nus.edu.sg" }],
    featured: true,
  },
  {
    date: "2025-02-18",
    type: "Paper",
    title: "Cooling a mechanical resonator through zero-photon detection",
    summary:
      "Experiment and theory show how conditioning on the absence of scattered photons can enhance optomechanical laser cooling.",
    links: [
      { label: "Physical Review Letters", href: "https://doi.org/10.1103/PhysRevLett.134.073601" },
      { label: "Physical Review A", href: "https://doi.org/10.1103/PhysRevA.111.023516" },
    ],
    featured: true,
  },
  {
    date: "2025-01-08",
    type: "Paper",
    title: "Brillouin scattering in optical fibre at millikelvin temperatures",
    summary:
      "We measured Brillouin–Mandelstam scattering in telecommunications fibre deep in the cryogenic regime.",
    links: [{ label: "APL Photonics", href: "https://doi.org/10.1063/5.0241253" }],
    featured: true,
  },
  {
    date: "2024-02-01",
    type: "Media",
    title: "Emergent magnetic charge work gains international attention",
    summary:
      "Our diamond-magnetometry study of antiferromagnetic textures was highlighted by science outlets and research magazines.",
    links: [
      { label: "Physics World", href: "https://physicsworld.com/a/magnetic-monopoles-appear-in-haematite/" },
      { label: "Scientific American", href: "https://www.scientificamerican.com/article/can-a-magnet-ever-have-only-one-pole/" },
      { label: "Cavmag", href: "https://cavmag.phy.cam.ac.uk/issue-31/research-features/diamonds-and-rust-help-unveil-impossible-quasi-particles/index.html" },
    ],
    featured: true,
  },
  {
    date: "2023-12-05",
    type: "Paper",
    title: "Revealing emergent magnetic charge in an antiferromagnet",
    summary:
      "Diamond quantum magnetometry directly resolves monopolar, dipolar and quadrupolar charge distributions in haematite.",
    links: [{ label: "Nature Materials", href: "https://doi.org/10.1038/s41563-023-01737-4" }],
  },
];

export const featuredNews = newsItems.filter((item) => item.featured).slice(0, 4);
