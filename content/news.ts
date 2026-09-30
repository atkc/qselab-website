// QUICK UPDATE WORKFLOW
// 1. Copy the first object below.
// 2. Change its date, type, title, summary and links.
// 3. Keep newest items at the top and commit the file.
// The homepage automatically shows the first four featured entries.
// For visitor news, lead the title with the visitors' names.

export type NewsLink = { label: string; href: string };

export type NewsImage = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type NewsItem = {
  date: string;
  type: "Paper" | "Media" | "People" | "Event" | "Opportunity" | "Award";
  title: string;
  summary: string;
  links: NewsLink[];
  images?: NewsImage[];
  featured?: boolean;
};

export const newsItems: NewsItem[] = [
  {
    date: "2026-09-30",
    type: "Event",
    title: "Our first widefield NV imaging!",
    summary:
      "Another milestone for the lab! On 30 September, we performed our first widefield imaging of NV centres in diamond and measured an optically detected magnetic resonance (ODMR) signal from a selected region. An exciting step forward for our camera-based quantum-sensing experiments! 💎📷",
    links: [],
    images: [
      {
        src: "/images/news/first-widefield-nv-imaging.jpeg",
        alt: "Widefield fluorescence image of NV centres in diamond alongside the ODMR signal and contrast measured from a selected region",
        caption: "Our first widefield NV image and the ODMR signal from the selected region, recorded on 30 September 2026.",
        width: 2494,
        height: 1615,
      },
    ],
    featured: true,
  },
  {
    date: "2026-09-05",
    type: "Event",
    title: "Qian Ling and Zak visit from the University of Cambridge!",
    summary:
      "A big welcome to Qian Ling and Zak who dropped by the lab from Cambridge! Qian Ling (from the QOMS group at Cavendish Laboratory) gave an awesome talk on her scanning NV microscopy research, and Zak (from QEG) joined the tour to check out our setup. Thanks for dropping by! Great science chats, great company! ☕️✨",
    links: [],
    images: [
      {
        src: "/images/news/qian-ling-scanning-nv-talk.jpeg",
        alt: "Qian Ling presenting scanning NV microscopy research to members of QSE Lab",
        caption: "Qian Ling gives a research talk to QSE Lab.",
        width: 2048,
        height: 1536,
      },
      {
        src: "/images/news/cavendish-researchers-lab-visit.jpeg",
        alt: "Researchers visiting the QSE Lab experimental laboratory",
        caption: "Visitors from the Cavendish Laboratory tour the QSE Lab.",
        width: 1536,
        height: 2048,
      },
    ],
    featured: true,
  },
  {
    date: "2026-09-04",
    type: "Event",
    title: "Our first NV ODMR signal!",
    summary:
      "A Friday milestone for the lab! On 4 September, we observed our first optically detected magnetic resonance (ODMR) signal from an NV centre in diamond. As the applied magnetic field increased, the resonance peaks split further apart—an exciting first step for our diamond quantum-sensing work! 💎✨",
    links: [],
    images: [
      {
        src: "/images/news/first-nv-odmr-lower-field.webp",
        alt: "ODMR frequency scan showing the NV resonance splitting at a lower applied magnetic field",
        caption: "Our first NV ODMR spectrum, at the lower applied magnetic field.",
        width: 900,
        height: 500,
      },
      {
        src: "/images/news/first-nv-odmr-higher-field.webp",
        alt: "ODMR frequency scan showing wider NV resonance splitting at a higher applied magnetic field",
        caption: "The ODMR resonances split further apart as the magnetic field increases.",
        width: 900,
        height: 500,
      },
    ],
    featured: true,
  },
  {
    date: "2026-08-25",
    type: "People",
    title: "Priyanshu Bhattacharya joins QSE Lab!",
    summary:
      "A warm welcome to Priyanshu Bhattacharya, who joined QSE Lab as a Research Engineer on 25 August! A recent graduate of the University of Maryland, he will build on his undergraduate research on NV centres in diamond as part of our quantum-sensing efforts. 💎✨",
    links: [],
    featured: true,
  },
  {
    date: "2026-08-24",
    type: "People",
    title: "QSE Lab welcomes its first students",
    summary:
      "Dayne Dai and Huaizheng Ye join as PhD students supported by NUS Research Scholarships, leading our NV-in-diamond and quantum Brillouin efforts, respectively. Grace Lee, Yong Le Lee, Surya Nayar, Qi Yuan Yu, Kristoffer Videl Wijono, Aliyev, Khadijah and Vivekan will contribute across the lab’s research through year-long undergraduate projects.",
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
