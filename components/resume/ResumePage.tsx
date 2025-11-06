// ==== FILE: components/resume/ResumePage.tsx ====
"use client";

import React, { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Printer,
  ExternalLink,
  ClipboardList,
  Hammer,
  Leaf,
  CalendarDays,
  BriefcaseBusiness,
  FileDown,
  Share2,
} from "lucide-react";

type Experience = { role: string; company: string; period: string; bullets: string[] };
type ResumeData = {
  name: string;
  location: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  linkedin?: string | null;
  website?: string | null;
  title: string;
  summary: string;
  highlights: string[];
  experience: Experience[];
  skills: string[];
  chips?: { date?: string; payType?: string; crop?: string };
};

const Line = () => <div className="h-px w-full bg-muted/60" />;
const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="pl-1 leading-relaxed">{children}</li>
);

export default function ResumePage({ data, variant }: { data: ResumeData; variant: "professional" | "farm" }) {
  const pdfRef = useRef<HTMLDivElement>(null);

  const labels = useMemo(
    () => ({
      experience: "Experience",
      skills: "Skills",
      highlights: "Highlights",
      copy: "Copy ATS text",
      share: "Share",
      print: "Print",
      savePdf: "Save PDF",
    }),
    []
  );

  const handlePrint = () => window.print();

  const handleSavePDF = async () => {
    const el = pdfRef.current;
    if (!el) return;

    const { jsPDF } = await import("jspdf");
    const html2canvas = (await import("html2canvas")).default;

    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      windowWidth: el.scrollWidth,
      onclone: (doc) => {
        const style = doc.createElement("style");
        style.textContent = `
          * { background-image: none !important; }
          :root, body, #print-root, #print-root * {
            --background:#ffffff !important; --foreground:#111 !important;
            --card:#ffffff !important; --card-foreground:#111 !important;
            --popover:#ffffff !important; --popover-foreground:#111 !important;
            --primary:#0ea5e9 !important; --primary-foreground:#fff !important;
            --secondary:#f3f4f6 !important; --secondary-foreground:#111 !important;
            --muted:#f5f5f5 !important; --muted-foreground:#4b5563 !important;
            --accent:#f3f4f6 !important; --accent-foreground:#111 !important;
            --destructive:#ef4444 !important; --destructive-foreground:#fff !important;
            --border:#e5e7eb !important; --input:#e5e7eb !important; --ring:#0ea5e9 !important;
            color-scheme: light !important;
          }
          #print-root, #print-root * { background-color:#ffffff !important; }
          .border, [class*="border"] { border-color:#e5e7eb !important; }
        `;
        doc.head.appendChild(style);
      },
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.95);
    const pdf = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20; // ≈ 7mm
    const usableWidth = pageWidth - margin * 2;
    const imgHeight = (canvas.height * usableWidth) / canvas.width;

    let position = margin;
    let heightLeft = imgHeight;

    while (heightLeft > 0) {
      pdf.addImage(imgData, "JPEG", margin, position, usableWidth, imgHeight);
      heightLeft -= pageHeight - margin * 2;
      if (heightLeft > 0) {
        pdf.addPage();
        position = margin - (pageHeight - margin * 2);
      }
    }

    pdf.save(`Thanapon-Resume-${variant}.pdf`);
  };

  const handleCopyATS = async () => {
    const lines: string[] = [];
    lines.push(`${data.name} — ${data.location}`);
    lines.push(`Phone: ${data.phoneDisplay} • Email: ${data.email}`);
    if (data.linkedin) lines.push(`LinkedIn: ${data.linkedin}`);
    lines.push("");
    lines.push("SUMMARY");
    lines.push(data.summary);
    lines.push("");
    lines.push("HIGHLIGHTS");
    data.highlights.forEach((h) => lines.push(`• ${h}`));
    lines.push("");
    lines.push("EXPERIENCE");
    data.experience.forEach((e) => {
      lines.push(`${e.role} — ${e.company} (${e.period})`);
      e.bullets.forEach((b) => lines.push(`- ${b}`));
    });
    lines.push("");
    lines.push("SKILLS");
    lines.push(data.skills.join(", "));

    try {
      const text = lines.join(`
`);
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch {
      alert("Copy failed");
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${data.name} — ${variant === "professional" ? "Professional Resume" : "Farm Work Resume"}`,
      text: `My ${variant} resume`,
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    try {
      if (navigator.share) await navigator.share(shareData);
      else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied");
      }
    } catch {}
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur no-pdf">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-3">
          <BriefcaseBusiness className="size-6" />
          <h1 className="text-lg font-semibold tracking-tight">{data.name}</h1>
        </div>
      </header>

      {/* Printable area */}
      <div ref={pdfRef} id="print-root">
        <main className="mx-auto max-w-5xl px-4 py-5 space-y-5">
          {/* Intro */}
          <Card className="border-muted-foreground/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl sm:text-3xl">{data.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1"><MapPin className="size-4" />{data.location}</span>
              <a className="inline-flex items-center gap-1 hover:underline" href={`tel:${data.phoneHref}`}><Phone className="size-4" />{data.phoneDisplay}</a>
              <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${data.email}`}><Mail className="size-4" />{data.email}</a>
              {data.linkedin && (
                <a className="inline-flex items-center gap-1 hover:underline" href={data.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="size-4" />LinkedIn <ExternalLink className="size-3" />
                </a>
              )}
              {data.website && (
                <a className="inline-flex items-center gap-1 hover:underline" href={data.website} target="_blank" rel="noreferrer">
                  <Globe className="size-4" />Website <ExternalLink className="size-3" />
                </a>
              )}
            </CardContent>
          </Card>

          {/* Content */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid gap-5 lg:grid-cols-3">
            <section className="lg:col-span-2 space-y-5">
              <Card>
                <CardContent className="p-5 space-y-3">
                  <h2 className="text-xl font-semibold tracking-tight">{data.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{data.summary}</p>
                  {variant === "farm" && data.chips && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {data.chips.date && <Badge variant="secondary" className="flex items-center gap-1"><CalendarDays className="size-3" /> {data.chips.date}</Badge>}
                      {data.chips.payType && <Badge variant="secondary" className="flex items-center gap-1"><Hammer className="size-3" /> {data.chips.payType}</Badge>}
                      {data.chips.crop && <Badge variant="secondary" className="flex items-center gap-1"><Leaf className="size-3" /> {data.chips.crop}</Badge>}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-base">Experience</CardTitle></CardHeader>
                <CardContent className="p-5 pt-2 space-y-6">
                  {data.experience.map((e, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-semibold">{e.role}</h4>
                        <span className="text-muted-foreground">— {e.company}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{e.period}</div>
                      <ul className="list-disc ml-5 space-y-1">
                        {e.bullets.map((b, i) => <Bullet key={i}>{b}</Bullet>)}
                      </ul>
                      {idx < data.experience.length - 1 && <Line />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            <aside className="space-y-5">
              <Card className="relative z-0 overflow-hidden border bg-gradient-to-b from-background to-muted/20">
                <div className="absolute inset-0 rounded-xl border border-border/40 z-0" />
                <CardHeader className="relative z-10 pb-2">
                  <CardTitle className="text-base font-semibold flex items-center gap-2">
                    <span className="inline-block w-1.5 h-4 bg-primary rounded-sm" />
                    Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 flex flex-wrap gap-2">
                  {data.highlights.map((h, i) => (
                    <Badge key={i} variant="secondary" className="px-3 py-1 text-xs rounded-full">{h}</Badge>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-base">Skills</CardTitle></CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {data.skills.map((s, i) => (
                    <Badge key={i} variant="outline" className="px-2 py-1 text-xs">{s}</Badge>
                  ))}
                </CardContent>
              </Card>
            </aside>
          </motion.div>
        </main>
      </div>

      {/* Actions (not in PDF) */}
      <div className="sticky bottom-3 z-40 no-pdf">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-2xl border bg-background/95 shadow-lg backdrop-blur p-2 flex items-center gap-2 justify-between">
            <div className="text-xs text-muted-foreground px-2 truncate">{data.title}</div>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm" onClick={handleCopyATS}><ClipboardList className="mr-2 size-4" />{labels.copy}</Button>
               {/*<Button variant="secondary" size="sm" onClick={handleShare}><Share2 className="mr-2 size-4" />{labels.share}</Button>
             <Button size="sm" onClick={handleSavePDF}><FileDown className="mr-2 size-4" />{labels.savePdf}</Button>
              <Button size="sm" onClick={handlePrint}><Printer className="mr-2 size-4" />{labels.print}</Button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @page { size: A4; margin: 10mm 12mm 10mm 12mm; }
        @media print {
          header, .sticky, [role="tablist"], button, .no-pdf { display: none !important; }
          html, body { background: white; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          main { margin: 0 auto; padding: 8mm 10mm; }
          .max-w-5xl { max-width: 180mm !important; }
          .card, .shadow, .shadow-sm, .shadow-md, .shadow-lg { box-shadow: none !important; }
          a[href]:after { content: "" !important; }
        }
      `}</style>
    </div>
  );
}



