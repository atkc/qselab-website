export type Publication = {
  year: number;
  title: string;
  authors: string;
  venue: string;
  href: string;
  tags: string[];
  selected?: boolean;
};

// Add new papers at the top. Use a stable tag from PUBLICATION_TAGS so filters stay tidy.
export const PUBLICATION_TAGS = [
  "Quantum sensing",
  "Quantum materials",
  "Magnonics",
  "Phonons & Brillouin",
  "Quantum optomechanics",
] as const;

export const publications: Publication[] = [
  {
    year: 2025,
    title: "Enhanced Laser Cooling of a Mechanical Resonator via Zero-Photon Detection",
    authors: "E. A. Cryer-Jenkins, K. D. Major, J. Clarke, et al., including A. K. C. Tan",
    venue: "Physical Review Letters",
    href: "https://doi.org/10.1103/PhysRevLett.134.073601",
    tags: ["Quantum optomechanics"],
    selected: true,
  },
  {
    year: 2025,
    title: "Theoretical Framework for Enhancing or Enabling Cooling of a Mechanical Resonator via the anti-Stokes or Stokes Interaction and Zero-Photon Detection",
    authors: "J. Clarke, E. A. Cryer-Jenkins, A. K. Gupta, et al., including A. K. C. Tan",
    venue: "Physical Review A",
    href: "https://doi.org/10.1103/PhysRevA.111.023516",
    tags: ["Quantum optomechanics"],
    selected: true,
  },
  {
    year: 2025,
    title: "Brillouin–Mandelstam Scattering in Telecommunications Optical Fiber at Millikelvin Temperatures",
    authors: "E. A. Cryer-Jenkins, A. C. Leung, H. Rathee, A. K. C. Tan, K. D. Major & M. R. Vanner",
    venue: "APL Photonics",
    href: "https://doi.org/10.1063/5.0241253",
    tags: ["Phonons & Brillouin", "Quantum optomechanics"],
    selected: true,
  },
  {
    year: 2024,
    title: "Evidencing Dissipation Dilution in Large-Scale Arrays of Single-Layer WSe₂ Mechanical Resonators",
    authors: "M. R. Pitts, M. S. G. Feuer, A. K. C. Tan, et al.",
    venue: "ACS Applied Electronic Materials",
    href: "https://doi.org/10.1021/acsaelm.4c01261",
    tags: ["Quantum materials", "Quantum optomechanics"],
    selected: true,
  },
  {
    year: 2024,
    title: "Revealing Emergent Magnetic Charge in an Antiferromagnet with Diamond Quantum Magnetometry",
    authors: "A. K. C. Tan, H. Jani, M. Högen, L. Stefan, et al.",
    venue: "Nature Materials",
    href: "https://doi.org/10.1038/s41563-023-01737-4",
    tags: ["Quantum sensing", "Quantum materials", "Magnonics"],
    selected: true,
  },
  {
    year: 2023,
    title: "Imaging Nucleation and Propagation of Pinned Domains in Few-Layer Fe₅₋ₓGeTe₂",
    authors: "M. Högen, R. Fujita, A. K. C. Tan, A. A. Geim, et al.",
    venue: "ACS Nano",
    href: "https://doi.org/10.1021/acsnano.3c03825",
    tags: ["Quantum sensing", "Quantum materials"],
  },
  {
    year: 2023,
    title: "Intrinsic Giant Magnetoresistance due to Exchange-Bias-Type Effects at the Surface of Single-Crystalline NiS₂ Nanoflakes",
    authors: "R. Hartmann, M. Högen, D. Lignon, A. K. C. Tan, et al.",
    venue: "Nanoscale",
    href: "https://doi.org/10.1039/D3NR00467H",
    tags: ["Quantum materials"],
  },
  {
    year: 2022,
    title: "Unveiling the Emergent Traits of Chiral Spin Textures in Magnetic Multilayers",
    authors: "X. Chen, M. Lin, J. F. Kong, H. R. Tan, A. K. C. Tan, et al.",
    venue: "Advanced Science",
    href: "https://doi.org/10.1002/advs.202103978",
    tags: ["Quantum materials", "Magnonics"],
  },
  {
    year: 2021,
    title: "Multiangle Reconstruction of Domain Morphology with All-Optical Diamond Magnetometry",
    authors: "L. Stefan, A. K. C. Tan, B. Vindolet, M. Högen, et al.",
    venue: "Physical Review Applied",
    href: "https://doi.org/10.1103/PhysRevApplied.16.014054",
    tags: ["Quantum sensing", "Quantum materials"],
  },
  {
    year: 2021,
    title: "Visualizing the Strongly Reshaped Skyrmion Hall Effect in Multilayer Wire Devices",
    authors: "A. K. C. Tan, P. Ho, J. Lourembam, L. Huang, et al.",
    venue: "Nature Communications",
    href: "https://doi.org/10.1038/s41467-021-24114-8",
    tags: ["Quantum materials", "Magnonics"],
  },
  {
    year: 2020,
    title: "Skyrmion Generation from Irreversible Fission of Stripes in Chiral Multilayer Films",
    authors: "A. K. C. Tan, J. Lourembam, X. Chen, P. Ho, H. K. Tan & A. Soumyanarayanan",
    venue: "Physical Review Materials",
    href: "https://doi.org/10.1103/PhysRevMaterials.4.114419",
    tags: ["Quantum materials", "Magnonics"],
  },
  {
    year: 2019,
    title: "The Evolution of Skyrmions in Ir/Fe/Co/Pt Multilayers and Their Topological Hall Signature",
    authors: "M. Raju, A. Yagil, A. Soumyanarayanan, A. K. C. Tan, et al.",
    venue: "Nature Communications",
    href: "https://doi.org/10.1038/s41467-018-08041-9",
    tags: ["Quantum materials", "Magnonics"],
  },
  {
    year: 2019,
    title: "Geometrically Tailored Skyrmions at Zero Magnetic Field in Multilayered Nanostructures",
    authors: "P. Ho, A. K. C. Tan, S. Goolaup, A. L. Gonzalez Oyarce, et al.",
    venue: "Physical Review Applied",
    href: "https://doi.org/10.1103/PhysRevApplied.11.024064",
    tags: ["Quantum materials", "Magnonics"],
  },
  {
    year: 2018,
    title: "Stray Field Signatures of Néel-Textured Skyrmions in Ir/Fe/Co/Pt Multilayer Films",
    authors: "A. Yagil, A. Almoalem, A. Soumyanarayanan, A. K. C. Tan, et al.",
    venue: "Applied Physics Letters",
    href: "https://doi.org/10.1063/1.5027602",
    tags: ["Quantum materials", "Magnonics"],
  },
  {
    year: 2017,
    title: "Tunable Room-Temperature Magnetic Skyrmions in Ir/Fe/Co/Pt Multilayers",
    authors: "A. Soumyanarayanan, M. Raju, A. L. Gonzalez Oyarce, A. K. C. Tan, et al.",
    venue: "Nature Materials",
    href: "https://doi.org/10.1038/nmat4934",
    tags: ["Quantum materials", "Magnonics"],
  },
];

export const selectedPublications = publications.filter((publication) => publication.selected);
