export type ResearchTheme = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  thesis: string;
  question: string;
  image: string;
  imageAlt: string;
  accent: "gold" | "rust" | "navy" | "plum";
  approach: Array<{ label: string; text: string }>;
  projects: Array<{ title: string; text: string }>;
  collaborators?: string[];
};

export const researchThemes: ResearchTheme[] = [
  {
    slug: "emergent-physics",
    number: "01",
    eyebrow: "Quantum sensing",
    title: "Quantum Probes for Condensed Matter",
    shortTitle: "Emergent physics",
    summary: "We use atomic spins in diamond to unveil hidden magnetic order, topology and dynamics at the nanoscale.",
    thesis:
      "A quantum sensor placed nanometres from a material can turn weak local fields into quantitative images of collective behaviour.",
    question:
      "Many of the most interesting states of matter are defined by textures, fluctuations or dynamics that conventional probes average away. We develop diamond quantum microscopy to see these signatures locally, while disturbing the material as little as possible.",
    image: "/images/research/emergent-textures.png",
    imageAlt: "False-colour nanoscale magnetic-field texture measured with a quantum probe",
    accent: "navy",
    approach: [
      {
        label: "Platform",
        text: "Single-spin and widefield nitrogen-vacancy magnetometers in diamond.",
      },
      {
        label: "Measurement",
        text: "Static fields, magnetic noise and driven dynamics across nanometre-to-device length scales.",
      },
      {
        label: "Scientific target",
        text: "Topological textures, antiferromagnets, two-dimensional magnets and hybrid quantum materials.",
      },
    ],
    projects: [
      {
        title: "Vector magnetic microscopy",
        text: "Reconstructing quantitative field and magnetisation maps from complementary quantum-sensor views.",
      },
      {
        title: "Noise as a signal",
        text: "Using spin relaxation and correlation spectroscopy to reveal fluctuating magnetic modes.",
      },
      {
        title: "Dynamics in real space",
        text: "Imaging how domains, waves and defects move under fields, currents and coherent drive.",
      },
    ],
  },
  {
    slug: "quantum-diagnostics",
    number: "02",
    eyebrow: "Quantum diagnostics",
    title: "Robust sensors for the real world",
    shortTitle: "Quantum diagnostics",
    summary: "We turn precise quantum measurements into robust sensors for industrial and extreme environments.",
    thesis:
      "Quantum advantage in sensing is only useful when the sensor, control and inference stack survives outside an ideal laboratory.",
    question:
      "How do we preserve sensitivity while adding bandwidth, dynamic range, packaging and reliable reconstruction? Our work treats the quantum sensor and its classical measurement chain as one engineered system.",
    image: "/images/research/diamond-device.png",
    imageAlt: "Electron micrograph of a fabricated diamond sensing structure",
    accent: "rust",
    approach: [
      {
        label: "Platform",
        text: "Diamond devices, integrated optics and compact microwave delivery.",
      },
      {
        label: "Measurement",
        text: "Coherent protocols, multiplexed readout, calibration and inverse reconstruction.",
      },
      {
        label: "Scientific target",
        text: "Diagnostics for electronics, magnetic systems and other high-demand environments.",
      },
    ],
    projects: [
      {
        title: "Integrated diamond sensors",
        text: "Packaging light, microwaves and diamond into modular heads that can be deployed and reproduced.",
      },
      {
        title: "Coded quantum readout",
        text: "Separating multiple sources at one carrier frequency through phase coding and coherent detection.",
      },
      {
        title: "Self-calibrating measurements",
        text: "Combining physical models and adaptive control so that measurements remain trustworthy as conditions change.",
      },
    ],
  },
  {
    slug: "magnons-phonons",
    number: "03",
    eyebrow: "Hybrid Quantum Systems",
    title: "Photons, Magnons and Phonons",
    shortTitle: "Magnons & phonons",
    summary: "We explore new avenues of quantum control and information exchange in travelling quasiparticles.",
    thesis:
      "Collective excitations can act as a tunable bridge between quantum systems that otherwise do not naturally communicate.",
    question:
      "Magnons carry collective spin motion; phonons carry motion through a crystal. We study both as measurable physical systems and as possible links between microwave, optical and solid-state quantum platforms.",
    image: "/images/research/brillouin-map.png",
    imageAlt: "False-colour Brillouin scattering measurement with a diagonal spectral feature",
    accent: "gold",
    approach: [
      {
        label: "Platform",
        text: "Diamond, optical fibres, magnetic films and nanomechanical structures.",
      },
      {
        label: "Measurement",
        text: "Brillouin spectroscopy, heterodyne detection, photon counting and local magnetic imaging.",
      },
      {
        label: "Scientific target",
        text: "Coherent transport, non-equilibrium statistics and microwave-to-optical transduction.",
      },
    ],
    projects: [
      {
        title: "Travelling phonon links",
        text: "Controlling high-frequency sound in low-loss structures for distributed quantum technologies.",
      },
      {
        title: "Magnons in real space",
        text: "Resolving interference, propagation and nonlinear dynamics with diamond magnetic microscopy.",
      },
      {
        title: "Quantum-aware receivers",
        text: "Combining heterodyne and photon-counting measurements to access phase and statistics together.",
      },
    ],
    collaborators: ["Michael Vanner · Imperial College London"],
  },
  {
    slug: "rare-earth-interfaces",
    number: "04",
    eyebrow: "Joint Programme with A*STAR Q.INC",
    title: "Rare-earth quantum interfaces",
    shortTitle: "Rare-earth systems",
    summary: "We explore using magnons to transduce quantum information from microwave to optical photons.",
    thesis:
      "Rare-earth spins and collective magnetic excitations offer a route between microwave quantum systems and telecom-band light.",
    question:
      "Can magnons mediate a coherent exchange between microwave and optical photons? Together with A*STAR Q.INC, we study erbium-based systems in which rare-earth transitions, magnetic order and light can be engineered as one interface.",
    image: "/images/research/magnetic-textures.png",
    imageAlt: "False-colour spatial measurement of collective magnetic structure",
    accent: "plum",
    approach: [
      {
        label: "Platform",
        text: "Erbium-based crystals and hybrid rare-earth magnetic systems.",
      },
      {
        label: "Measurement",
        text: "Cryogenic optical spectroscopy, coherent microwave control and magnon spectroscopy.",
      },
      {
        label: "Scientific target",
        text: "Coherent microwave-to-optical transduction through rare-earth–magnon interactions.",
      },
    ],
    projects: [
      {
        title: "Rare-earth–magnon coupling",
        text: "Mapping how erbium spins hybridise with collective magnetic modes across field and frequency.",
      },
      {
        title: "Microwave access",
        text: "Driving and reading magnetic excitations while preserving the coherence needed for transduction.",
      },
      {
        title: "Telecom optical interface",
        text: "Connecting those excitations to erbium optical transitions at useful wavelengths.",
      },
    ],
    collaborators: ["Jian-Rui Soh · A*STAR Quantum Innovation Centre (Q.InC)"],
  },
];

export function getResearchTheme(slug: string) {
  return researchThemes.find((theme) => theme.slug === slug);
}
