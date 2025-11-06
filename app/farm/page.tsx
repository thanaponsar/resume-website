import ResumePage from "@/components/resume/ResumePage";

const CONTACT = {
  name: "Thanapon Sarasap",
  location: "Caboolture, QLD, Australia",
  phoneDisplay: "+61 493 250 111",
  phoneHref: "+61493250111",
  email: "thanaponsarasap@gmail.com",
  linkedin: "https://www.linkedin.com/in/thanapon-sarasap",
  website: null as string | null,
};

const FARMWORK = {
  title: "Farm Work Resume — Strawberry Farm Worker",
  summary:
    "Strawberry farm worker on WHV with strong piece-rate productivity. Experienced in picking, leaf cleaning, runner cutting, and weeding. Safety-conscious, physically fit, reliable.",
  highlights: [
    "Tray/Kg logging by block (King Rd / Pineapple), rubbish (R kg) tracking",
    "Understands payslips, 15% tax; CSV export for supervisors",
    "PPE: rain gear, sun safety, nitrile gloves",
    "Certs: RSA & RSG (22 Sep 2025)",
  ],
  experience: [
    {
      role: "General Farm Worker (Strawberry, Piece-Rate)",
      company: "E&S Super Growth Pty Ltd — Caboolture, QLD",
      period: "Sep 2025 – Present",
      bullets: [
        "Picked strawberries to quality standards; kept block-based tray/kg records.",
        "Plant maintenance: leaf cleaning, runner cutting, and weeding.",
      ],
    },
  ],
  skills: [
    "Strawberry picking & grading",
    "Leaf cleaning & runner cutting",
    "Weeding & field hygiene",
    "Rain-day workflow & PPE",
    "Record keeping (trays/kg, R kg, CSV)",
    "Teamwork & communication",
  ],
  chips: { date: "Sep 2025 – Now", payType: "Piece-rate", crop: "Strawberry" },
};

export default function Page() {
  return (
    <ResumePage
      variant="farm"
      data={{ ...CONTACT, ...FARMWORK }}
    />
  );
}
