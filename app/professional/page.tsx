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

const PROFESSIONAL = {
  title: "Professional Resume — QA / IT",
  summary:
    "QA professional across manual & automation testing, SDLC/Agile, API health checks and release quality. Led testing scope for enterprise insurance platforms; Robot Framework, Zephyr/TestRail, JIRA, Jenkins/Newman.",
  highlights: [
    "SDLC, Agile, BDD; test planning & execution",
    "Robot Framework (web/UI)",
    "Jenkins + Newman (API)",
    "JIRA, Zephyr Scale, TestRail; defect lifecycle",
    "SQL basics; ETL testing & data validation",
  ],
  experience: [
    {
      role: "Technical Test Lead",
      company: "Infosys Services (Thailand) Ltd., Bangkok",
      period: "12/2024 – 04/2025",
      bullets: [
        "Managed test scope and ticket readiness to meet client expectations.",
        "Optimized test execution, environments and resources for efficiency.",
        "Collaborated with BAs to enforce quality standards.",
      ],
    },
    {
      role: "Senior Quality Assurance Analyst",
      company: "Allianz Technology (Thailand) Co., Ltd., Bangkok",
      period: "04/2023 – 08/2024",
      bullets: [
        "Ensured scope quality; guided stakeholders on business logic.",
        "Implemented defect tracking & cross-team collaboration.",
        "Managed test execution and environments for efficiency.",
      ],
    },
    {
      role: "Advanced Quality Assurance Analyst",
      company: "Allianz Technology (Thailand) Co., Ltd., Bangkok",
      period: "01/2021 – 03/2023",
      bullets: [
        "Created/Maintained test cases (Zephyr Scale) and documented results.",
        "Analyzed defects with repro steps (JIRA); maintained Robot Framework automation.",
        "Built API health checks via Jenkins; tested ETL data pipelines.",
      ],
    },
    {
      role: "Associate Quality Assurance Analyst",
      company: "Allianz Technology (Thailand) Co., Ltd., Bangkok",
      period: "07/2019 – 12/2020",
      bullets: [
        "Developed test cases and executed tests using TestRail; tracked defects in JIRA.",
        "Maintained Robot Framework web automation; API checks with Newman + Jenkins.",
      ],
    },
    {
      role: "Software Tester",
      company: "Digio (Thailand) Co., Ltd., Bangkok",
      period: "06/2018 – 06/2019",
      bullets: [
        "Planned & executed manual tests for QR payments (PromptPay Tag29, VISA/MasterCard, Tag30).",
        "Built Robot Framework automation for QR generator API; tested Smart EDC (Android).",
      ],
    },
  ],
  skills: [
    "Manual & Automation Testing",
    "Robot Framework / Jenkins / Newman",
    "JIRA / Zephyr Scale / TestRail",
    "API Testing / ETL Testing",
    "SQL basics",
    "Agile / Scrum",
  ],
};

export default function Page() {
  return (
    <ResumePage
      variant="professional"
      data={{ ...CONTACT, ...PROFESSIONAL }}
    />
  );
}
