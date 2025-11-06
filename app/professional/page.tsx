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
  title: "Software Tester / QA",
  summary:
    "QA Analyst with expertise in manual/automation testing, API checks, defect management, and Agile SDLC. Experienced in enterprise insurance systems, Robot Framework, Jenkins/Newman, Zephyr Scale, TestRail, and JIRA.",
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
        "Delivered high-quality solutions by ensuring all assigned scope and tickets met clientexpectations.",
        "Optimized testing efficiency through effective management of test case execution, environments,and resources.",
        "Collaborated closely with business analysts to uphold and enforce quality standards.",
      ],
    },
    {
      role: "Senior Quality Assurance Analyst",
      company: "Allianz Technology (Thailand) Co., Ltd., Bangkok",
      period: "04/2023 – 08/2024",
      bullets: [
        "Ensured the quality of assigned scope/tickets meets the client's expectations.",
        "Offered guidance and conducted demonstrations for stakeholders on business logic aspects.",
        "Implemented defect tracking and management processes, fostering collaboration with project teams to promptly address issues and enhance product quality.",
        "Managed the execution of test cases and scenarios, overseeing test environments and resources to ensure efficient testing processes.",
      ],
    },
    {
      role: "Advanced Quality Assurance Analyst",
      company: "Allianz Technology (Thailand) Co., Ltd., Bangkok",
      period: "01/2021 – 03/2023",
      bullets: [
        "Created/Maintained test cases (Zephyr Scale) and documented results.",
        "Analyzed defects with repro steps (JIRA); maintained Robot Framework automation.",
        "Developed API health checks to ensure system integration availability and scheduling before business operations, leveraging Newman integrated with Jenkins.",
        "Worked closely with the development team to uphold software quality standards.",
        "Formulated comprehensive test cases and conducted testing for ETL projects, ensuring accurate data transformation and loading into target systems.",
        "Worked independently and collaboratively with other Quality Assurance analysts on analyzing requirements, tasks, results, and defects.",
      ],
    },
    {
      role: "Associate Quality Assurance Analyst",
      company: "Allianz Technology (Thailand) Co., Ltd., Bangkok",
      period: "07/2019 – 12/2020",
      bullets: [
        "Developed test cases and executed tests using TestRail; tracked defects in JIRA.",
        "Maintained Robot Framework web automation test script to sustain optimal performance.; API checks with Newman + Jenkins.",
        "Worked closely with the development team to ensure the quality of the software.",
      ],
    },
    {
      role: "Software Tester",
      company: "Digio (Thailand) Co., Ltd., Bangkok",
      period: "06/2018 – 06/2019",
      bullets: [
        "Planned & executed manual tests for QR payments (QR PromptPay, QR VISA/MasterCard, QR Payment).",
        "Developed automation testing script to test QR code generator API using Robot Framework.; tested Smart EDC (Android).",
      ],
    },
  ],
  skills: [
    "Manual & Automation Testing",
    "Robot Framework / Jenkins / Newman",
    "JIRA / Zephyr Scale / TestRail",
    "API Testing / ETL Testing",
    "SQL basics",
    "SDLC / Agile",
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
