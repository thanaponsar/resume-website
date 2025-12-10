import ResumePage from "@/components/resume/ResumePage";

const CONTACT = {
  name: "Thanapon Sarasap",
  location: "Caboolture, QLD, Australia",
  phoneDisplay: "+61 493 250 111",
  phoneHref: "+61493250111",
 phoneTHDisplay: "+66 956 696 801",
  phoneTHHref: "+66956696801",
  email: "thanaponsarasap@gmail.com",
  /* linkedin: "https://www.linkedin.com/in/thanapon-sarasap", */
  website: null as string | null,
};

const FARMWORK = {
  title: "Open to Farm, Hospitality, General labour opportunities.",
  summary:
    "Motivated and adaptable Working Holiday Visa (Subclass 462) holder with a strong work ethic, reliability, and willingness to take on physical and hands-on tasks. Background in IT/Quality Assurance with transferable skills in problem solving, teamwork, and attention to detail. Ready to contribute to farm, hospitality, or general labor roles across Australia.",
  highlights: [
    "Reliable & hardworking with a positive attitude",
    "Quick learner",
    "Adaptable to new environments and tasks",
    "Organised and able to manage time effectively",
    "Physically fit and safety-conscious",
    "Flexible with hours, shifts",
    "RSA & RSG Certified",
  ],
  experience: [
    {
      role: "General Farm Worker (Strawberry, Piece-Rate)",
      company: "E&S Super Growth Pty Ltd — Caboolture, QLD",
      period: "Sep 2025 – Present",
      bullets: [
        "Picked strawberries to quality standards",
        "Plant maintenance: leaf cleaning, runner cutting, and weeding.",
      ],
    },
    {
      role: "IT & Quality Assurance Professional – Thailand (2018 – 2025)",
      company: "Thailand",
      period: "2018 – 2025",
      bullets: [
        "Built strong attention to detail and accuracy through testing and quality checks",
        "Adapted quickly to changing projects, environments, and deadlines",
        "Worked closely with diverse teams to achieve common goals",
        "Applied problem-solving skills to deliver results under pressure",
      ],
    },
  ],
  skills: [
    "Strawberry picking & grading",
    "Leaf cleaning & runner cutting",
    "Weeding & field hygiene",
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
