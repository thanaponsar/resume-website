"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Globe, Languages, Printer, ExternalLink, ClipboardList, Hammer, Leaf, CalendarDays, BriefcaseBusiness, FileDown, Share2 } from "lucide-react";

/**
 * Dual‑Resume Website — Redesigned (User‑Friendly)
 * -------------------------------------------------------------
 * • Mobile‑first, bigger touch targets, clearer hierarchy.
 * • Sticky Quick‑Actions bar (Print PDF, Copy ATS, Share).
 * • Language toggle (EN/TH) at top right.
 * • Minimal color, strong whitespace, legible fonts.
 * • Same data objects (CONTACT, PROFESSIONAL, FARMWORK) — just cleaner UI.
 */

// ---------- Editable profile data -------------------------------------------------
const CONTACT = {
  name: "Thanapon Sarasap",
  locationEN: "Caboolture, QLD, Australia",
  locationTH: "คาบูลเจอร์ รัฐควีนส์แลนด์ ออสเตรเลีย",
  phoneDisplay: "+61 493 250 111",
  phoneHref: "+61493250111",
  email: "thanaponsarasap@gmail.com",
  linkedin: "https://www.linkedin.com/in/thanapon-sarasap",
  website: null,
};

// Professional (QA/IT) resume content
const PROFESSIONAL = {
  titleEN: "Professional Resume — QA / IT",
  titleTH: "เรซูเมอาชีพ — ทดสอบซอฟต์แวร์ / ไอที",
  summaryEN:
    "QA professional across manual & automation testing, SDLC/Agile, API health checks and release quality. Led testing scope for enterprise insurance platforms; Robot Framework, Zephyr/TestRail, JIRA, Jenkins/Newman.",
  summaryTH:
    "ผู้เชี่ยวชาญด้าน QA ทั้งแมนนวล/อัตโนมัติ เข้าใจ SDLC/Agile ทำ API health check และควบคุมคุณภาพก่อนปล่อยระบบ เคยดูแลงานทดสอบระบบประกันระดับองค์กร ถนัด Robot Framework, Zephyr/TestRail, JIRA, Jenkins/Newman",
  highlightsEN: [
    "SDLC, Agile, BDD; test planning & execution",
    "Robot Framework (web/UI)", 
    "Jenkins + Newman (API)",
    "JIRA, Zephyr Scale, TestRail; defect lifecycle",
    "SQL basics; ETL testing & data validation",
  ],
  highlightsTH: [
    "SDLC, Agile, BDD; วางแผน/รันทดสอบ",
    "Robot Framework (Web/UI)", 
    "Jenkins + Newman (API)",
    "JIRA, Zephyr Scale, TestRail; วงจรบั๊ก",
    "พื้นฐาน SQL; ทดสอบ ETL/ตรวจสอบข้อมูล",
  ],
  experienceEN: [
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
        "Implemented defect tracking & cross‑team collaboration.",
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
  experienceTH: [
    {
      role: "Technical Test Lead",
      company: "Infosys Services (Thailand) Ltd., กรุงเทพฯ",
      period: "12/2024 – 04/2025",
      bullets: [
        "บริหารขอบเขตการทดสอบและความพร้อมของงานให้ตรงความคาดหวังลูกค้า",
        "เพิ่มประสิทธิภาพการรันทดสอบ การจัดการสภาพแวดล้อม และทรัพยากร",
        "ทำงานกับ BA เพื่อยกระดับมาตรฐานคุณภาพ",
      ],
    },
    {
      role: "Senior QA Analyst",
      company: "Allianz Technology (Thailand) Co., Ltd., กรุงเทพฯ",
      period: "04/2023 – 08/2024",
      bullets: [
        "ดูแลคุณภาพขอบเขตงาน ให้คำแนะนำ business logic",
        "วางกระบวนการติดตามบั๊กและประสานงานข้ามทีม",
        "จัดการการรันทดสอบและ environment ให้มีประสิทธิภาพ",
      ],
    },
    {
      role: "Advanced QA Analyst",
      company: "Allianz Technology (Thailand) Co., Ltd., กรุงเทพฯ",
      period: "01/2021 – 03/2023",
      bullets: [
        "สร้าง/ดูแล test case บน Zephyr Scale บันทึกผล",
        "วิเคราะห์บั๊กพร้อม repro steps (JIRA); ดูแล Robot Framework",
        "ทำ API health check (Jenkins); ทดสอบ ETL",
      ],
    },
    {
      role: "Associate QA Analyst",
      company: "Allianz Technology (Thailand) Co., Ltd., กรุงเทพฯ",
      period: "07/2019 – 12/2020",
      bullets: [
        "พัฒนา test case และรันทดสอบด้วย TestRail; ติดตามบั๊กใน JIRA",
        "ดูแล Robot Framework web automation; API check (Newman + Jenkins)",
      ],
    },
    {
      role: "Software Tester",
      company: "Digio (Thailand) Co., Ltd., กรุงเทพฯ",
      period: "06/2018 – 06/2019",
      bullets: [
        "วางแผน/รันทดสอบโปรเจกต์จ่ายเงินด้วย QR (PromptPay Tag29, VISA/MasterCard, Tag30)",
        "ออโตเมชันด้วย Robot Framework สำหรับ QR generator API; ทดสอบ Smart EDC (Android)",
      ],
    },
  ],
  skillsEN: [
    "Manual & Automation Testing",
    "Robot Framework / Jenkins / Newman",
    "JIRA / Zephyr Scale / TestRail",
    "API Testing / ETL Testing",
    "SQL basics",
    "Agile / Scrum",
  ],
  skillsTH: [
    "ทดสอบแบบแมนนวลและอัตโนมัติ",
    "Robot Framework / Jenkins / Newman",
    "JIRA / Zephyr Scale / TestRail",
    "ทดสอบ API / ทดสอบ ETL",
    "พื้นฐาน SQL",
    "Agile / Scrum",
  ],
};

// Farm‑work resume content
const FARMWORK = {
  titleEN: "Farm Work Resume — Strawberry Farm Worker",
  titleTH: "เรซูเมงานฟาร์ม — พนักงานเก็บสตรอเบอรี่",
  summaryEN:
    "Strawberry farm worker on WHV with strong piece‑rate productivity. Experienced in picking, leaf cleaning, runner cutting, and weeding. Safety‑conscious, physically fit, reliable.",
  summaryTH:
    "พนักงานเก็บสตรอเบอรี่บนวีซ่า WHV ผลงานดีในระบบคิดชิ้นงาน ชำนาญการเก็บ ทำความสะอาดใบ ตัดรันเนอร์ กำจัดวัชพืช ใส่ใจความปลอดภัย แข็งแรง เชื่อถือได้",
  highlightsEN: [
    "Tray/Kg logging by block (King Rd / Pineapple), rubbish (R kg) tracking",
    "Understands payslips, 15% tax; CSV export for supervisors",
    "PPE: rain gear, sun safety, nitrile gloves",
    "Certs: RSA & RSG (22 Sep 2025)",
  ],
  highlightsTH: [
    "บันทึกถาด/กก. แยกแปลง (King Rd / Pineapple) และ R (กก.)",
    "เข้าใจสลิปเงินเดือน ภาษี 15% ส่งออก CSV ให้หัวหน้า",
    "PPE ครบ: เสื้อกันฝน กันแดด ถุงมือไนไตรล์",
    "ใบรับรอง: RSA & RSG (22 ก.ย. 2025)",
  ],
  experienceEN: [
    {
      role: "General Farm Worker (Strawberry, Piece‑Rate)",
      company: "E&S Super Growth Pty Ltd — Caboolture, QLD",
      period: "Sep 2025 – Present",
      bullets: [
        "Picked strawberries to quality standards; kept block‑based tray/kg records.",
        "Plant maintenance: leaf cleaning, runner cutting, and weeding.",
      ],
    },
  ],
  experienceTH: [
    {
      role: "พนักงานฟาร์มทั่วไป (สตรอเบอรี่, คิดชิ้นงาน)",
      company: "E&S Super Growth Pty Ltd — คาบูลเจอร์, QLD",
      period: "ก.ย. 2025 – ปัจจุบัน",
      bullets: [
        "เก็บสตรอเบอรี่ตามมาตรฐานคุณภาพ; บันทึกถาด/กก. แยกตามแปลง",
        "ดูแลต้น: ทำความสะอาดใบ ตัดรันเนอร์ และกำจัดวัชพืช",
      ],
    },
  ],
  skillsEN: [
    "Strawberry picking & grading",
    "Leaf cleaning & runner cutting",
    "Weeding & field hygiene",
    "Rain‑day workflow & PPE",
    "Record keeping (trays/kg, R kg, CSV)",
    "Teamwork & communication",
  ],
  skillsTH: [
    "เก็บ/คัดเกรดสตรอเบอรี่",
    "ทำความสะอาดใบ/ตัดรันเนอร์",
    "กำจัดวัชพืช/ความสะอาดแปลง",
    "เวิร์กโฟลว์วันฝนตก & PPE",
    "บันทึกผลงาน (ถาด/กก., R กก., CSV)",
    "ทำงานเป็นทีม/สื่อสาร",
  ],
};

// ---------- Small helpers --------------------------------------------------------
const Line = () => <div className="h-px w-full bg-muted/60" />;
const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="pl-1 leading-relaxed">{children}</li>
);

// ---------- Redesigned Component --------------------------------------------------
export default function DualResumeSite() {
  const [lang, setLang] = useState<"EN" | "TH">("EN");
  const [activeTab, setActiveTab] = useState("professional");

  const t = useMemo(
    () => ({
      location: lang === "EN" ? CONTACT.locationEN : CONTACT.locationTH,
      labels: {
        professional: lang === "EN" ? "Professional (QA/IT)" : "สายอาชีพ (QA/IT)",
        farm: lang === "EN" ? "Farm Work" : "งานฟาร์ม",
        summary: lang === "EN" ? "Summary" : "สรุปโปรไฟล์",
        highlights: lang === "EN" ? "Highlights" : "จุดเด่น",
        experience: lang === "EN" ? "Experience" : "ประสบการณ์",
        skills: lang === "EN" ? "Skills" : "ทักษะ",
        print: lang === "EN" ? "Print" : "พิมพ์",
        copy: lang === "EN" ? "Copy ATS text" : "คัดลอกข้อความ ATS",
        share: lang === "EN" ? "Share" : "แชร์",
        langToggle: lang === "EN" ? "ภาษาไทย" : "English",
      },
    }),
    [lang]
  );

  const data = activeTab === "professional" ? PROFESSIONAL : FARMWORK;
  const summary = lang === "EN" ? data.summaryEN : data.summaryTH;
  const highlights = lang === "EN" ? data.highlightsEN : data.highlightsTH;
  const experience = lang === "EN" ? data.experienceEN : data.experienceTH;
  const skills = lang === "EN" ? data.skillsEN : data.skillsTH;

  const handlePrint = () => window.print();
  const handleCopyATS = async () => {
    const lines: string[] = [];
    lines.push(`${CONTACT.name} — ${t.location}`);
    lines.push(`Phone: ${CONTACT.phoneDisplay} • Email: ${CONTACT.email}`);
    if (CONTACT.linkedin) lines.push(`LinkedIn: ${CONTACT.linkedin}`);
    lines.push("");
    lines.push(lang === "EN" ? "SUMMARY" : "สรุป");
    lines.push(summary);
    lines.push("");
    lines.push(lang === "EN" ? "HIGHLIGHTS" : "จุดเด่น");
    highlights.forEach((h) => lines.push(`• ${h}`));
    lines.push("");
    lines.push(lang === "EN" ? "EXPERIENCE" : "ประสบการณ์");
    experience.forEach((e: any) => {
      lines.push(`${e.role} — ${e.company} (${e.period})`);
      e.bullets.forEach((b: string) => lines.push(`- ${b}`));
    });
    lines.push("");
    lines.push(lang === "EN" ? "SKILLS" : "ทักษะ");
    lines.push(skills.join(", "));

    try {
      const text = lines.join("\n");  
      await navigator.clipboard.writeText(text);
      alert(lang === "EN" ? "Copied!" : "คัดลอกแล้ว");
    } catch (e) {
      alert(lang === "EN" ? "Copy failed" : "คัดลอกไม่สำเร็จ");
    }
  };
  const handleShare = async () => {
    const shareData = {
      title: "Thanapon Sarasap — Resume",
      text: "My dual‑resume (Professional + Farm Work)",
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert(lang === "EN" ? "Link copied" : "คัดลอกลิงก์แล้ว");
      }
    } catch (_) {}
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-3">
          <BriefcaseBusiness className="size-6" />
          <h1 className="text-lg font-semibold tracking-tight">{CONTACT.name}</h1>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setLang(lang === "EN" ? "TH" : "EN")}>
              <Languages className="mr-2 size-4" />{t.labels.langToggle}
            </Button>
          </div>
        </div>
      </header>

      {/* Intro Card */}
      <main className="mx-auto max-w-5xl px-4 py-5 space-y-5">
        <Card className="border-muted-foreground/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl sm:text-3xl">{CONTACT.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><MapPin className="size-4" />{t.location}</span>
            <a className="inline-flex items-center gap-1 hover:underline" href={`tel:${CONTACT.phoneHref}`}><Phone className="size-4" />{CONTACT.phoneDisplay}</a>
            <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${CONTACT.email}`}><Mail className="size-4" />{CONTACT.email}</a>
            {CONTACT.linkedin && (
              <a className="inline-flex items-center gap-1 hover:underline" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="size-4" />LinkedIn <ExternalLink className="size-3" />
              </a>
            )}
            {CONTACT.website && (
              <a className="inline-flex items-center gap-1 hover:underline" href={CONTACT.website} target="_blank" rel="noreferrer">
                <Globe className="size-4" />Website <ExternalLink className="size-3" />
              </a>
            )}
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="professional">{t.labels.professional}</TabsTrigger>
            <TabsTrigger value="farm">{t.labels.farm}</TabsTrigger>
          </TabsList>

          {/* Professional */}
          <TabsContent value="professional" className="mt-5">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid gap-5 lg:grid-cols-3">
              <section className="lg:col-span-2 space-y-5">
                <Card>
                  <CardContent className="p-5 space-y-3">
                    <h2 className="text-xl font-semibold tracking-tight">{lang === "EN" ? PROFESSIONAL.titleEN : PROFESSIONAL.titleTH}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2"><CardTitle className="text-base">{t.labels.experience}</CardTitle></CardHeader>
                  <CardContent className="p-5 pt-2 space-y-6">
                    {experience.map((e: any, idx: number) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-semibold">{e.role}</h4>
                          <span className="text-muted-foreground">— {e.company}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{e.period}</div>
                        <ul className="list-disc ml-5 space-y-1">
                          {e.bullets.map((b: string, i: number) => <Bullet key={i}>{b}</Bullet>)}
                        </ul>
                        {idx < experience.length - 1 && <Line />}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </section>

              <aside className="space-y-5">
                <Card className="relative z-0 overflow-hidden border transition-all duration-300 hover:border-primary/60 hover:shadow-md bg-gradient-to-b from-background to-muted/20">
  <div className="absolute inset-0 rounded-xl border border-border/40 z-0" />
  <CardHeader className="relative z-10 pb-2">
    <CardTitle className="text-base font-semibold flex items-center gap-2">
      <span className="inline-block w-1.5 h-4 bg-primary rounded-sm" />
      {t.labels.highlights}
    </CardTitle>
  </CardHeader>
  <CardContent className="relative z-10 flex flex-wrap gap-2">
    {highlights.map((h, i) => (
      <Badge key={i} variant="secondary" className="px-3 py-1 text-xs rounded-full transition-colors duration-300 hover:bg-primary/20 hover:text-primary">{h}</Badge>
    ))}
  </CardContent>
</Card>

                <Card>
                  <CardHeader className="pb-2"><CardTitle className="text-base">{t.labels.skills}</CardTitle></CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                      <Badge key={i} variant="outline" className="px-2 py-1 text-xs">{s}</Badge>
                    ))}
                  </CardContent>
                </Card>
              </aside>
            </motion.div>
          </TabsContent>

          {/* Farm */}
          <TabsContent value="farm" className="mt-5">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid gap-5 lg:grid-cols-3">
              <section className="lg:col-span-2 space-y-5">
                <Card>
                  <CardContent className="p-5 space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">{lang === "EN" ? FARMWORK.titleEN : FARMWORK.titleTH}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <Badge variant="secondary" className="flex items-center gap-1"><CalendarDays className="size-3" /> Sep 2025 – Now</Badge>
                      <Badge variant="secondary" className="flex items-center gap-1"><Hammer className="size-3" /> Piece‑rate</Badge>
                      <Badge variant="secondary" className="flex items-center gap-1"><Leaf className="size-3" /> Strawberry</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2"><CardTitle className="text-base">{t.labels.experience}</CardTitle></CardHeader>
                  <CardContent className="p-5 pt-2 space-y-6">
                    {(lang === "EN" ? FARMWORK.experienceEN : FARMWORK.experienceTH).map((e: any, idx: number) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-semibold">{e.role}</h4>
                          <span className="text-muted-foreground">— {e.company}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{e.period}</div>
                        <ul className="list-disc ml-5 space-y-1">
                          {e.bullets.map((b: string, i: number) => <Bullet key={i}>{b}</Bullet>)}
                        </ul>
                        {idx < ((lang === "EN" ? FARMWORK.experienceEN : FARMWORK.experienceTH).length - 1) && <Line />}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </section>

              <aside className="space-y-5">
                <Card className="relative z-0 overflow-hidden border transition-all duration-300 hover:border-primary/60 hover:shadow-md bg-gradient-to-b from-background to-muted/20">
  <div className="absolute inset-0 rounded-xl border border-border/40 z-0" />
  <CardHeader className="relative z-10 pb-2">
    <CardTitle className="text-base font-semibold flex items-center gap-2">
      <span className="inline-block w-1.5 h-4 bg-primary rounded-sm" />
      {t.labels.highlights}
    </CardTitle>
  </CardHeader>
  <CardContent className="relative z-10 flex flex-wrap gap-2">
    {(lang === "EN" ? FARMWORK.highlightsEN : FARMWORK.highlightsTH).map((h, i) => (
      <Badge key={i} variant="secondary" className="px-3 py-1 text-xs rounded-full transition-colors duration-300 hover:bg-primary/20 hover:text-primary">{h}</Badge>
    ))}
  </CardContent>
</Card>

                <Card>
                  <CardHeader className="pb-2"><CardTitle className="text-base">{t.labels.skills}</CardTitle></CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {(lang === "EN" ? FARMWORK.skillsEN : FARMWORK.skillsTH).map((s, i) => (
                      <Badge key={i} variant="outline" className="px-2 py-1 text-xs">{s}</Badge>
                    ))}
                  </CardContent>
                </Card>
              </aside>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Sticky Quick Actions (bottom) */}
        <div className="sticky bottom-3 z-40">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-2xl border bg-background/95 shadow-lg backdrop-blur p-2 flex items-center gap-2 justify-between">
              <div className="text-xs text-muted-foreground px-2 truncate">
                {activeTab === "professional" ? (lang === "EN" ? PROFESSIONAL.titleEN : PROFESSIONAL.titleTH) : (lang === "EN" ? FARMWORK.titleEN : FARMWORK.titleTH)}
              </div>
              <div className="flex items-center gap-2">
                <Button variant="secondary" size="sm" onClick={handleCopyATS}><ClipboardList className="mr-2 size-4" />{t.labels.copy}</Button>
                <Button variant="secondary" size="sm" onClick={handleShare}><Share2 className="mr-2 size-4" />{t.labels.share}</Button>
                <Button size="sm" onClick={handlePrint}><Printer className="mr-2 size-4" />{t.labels.print}</Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {CONTACT.name}. {lang === "EN" ? "Designed with Tailwind + shadcn/ui." : "ออกแบบด้วย Tailwind + shadcn/ui"}
          </p>
          
        </div>

      </main>

      {/* Print styles */}
      <style>{`
        @media print {
          header, .sticky, [role="tablist"], button { display: none !important; }
          main { padding: 0 !important; }
          .max-w-5xl { max-width: 900px !important; }
          .card, .shadow, .shadow-sm, .shadow-md, .shadow-lg { box-shadow: none !important; }
          a[href]:after { content: "" !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
    </div>
  );
}
