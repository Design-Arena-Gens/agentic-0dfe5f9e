import Link from "next/link";
import { ArrowRight, BrainCircuit, Sparkles, Workflow } from "lucide-react";

export default function Home() {
  const featureCards = [
    {
      title: "Autonomous Routines",
      description:
        "Launch reusable execution loops that adapt to context, deadlines, and delivery targets in real time.",
      icon: BrainCircuit,
      emphasis: "context-aware",
    },
    {
      title: "Adaptive Canvas",
      description:
        "Blend documents, data, and decisions into one evolving surface that stays synchronized across every contributor.",
      icon: Sparkles,
      emphasis: "collaborative",
    },
    {
      title: "Flow Orchestration",
      description:
        "Connect your stack with declarative recipes that you can monitor, remix, and optimize without touching glue code.",
      icon: Workflow,
      emphasis: "composable",
    },
  ];

  const timeline = [
    {
      label: "Sense",
      title: "Listen to signals that matter",
      copy: "Ingest conversations, docs, and events. The agent trims noise, extrapolates intent, and materializes briefs instantly.",
    },
    {
      label: "Shape",
      title: "Design the path forward",
      copy: "Generate plans with measurable checkpoints, routed to the right teammates with the right context and timing.",
    },
    {
      label: "Ship",
      title: "Deliver outcomes on autopilot",
      copy: "Deploy automations, schedule reviews, and keep stakeholders aligned with digestible updates as work lands.",
    },
  ];

  const stats = [
    { value: "4x", label: "Faster kickoff cycles" },
    { value: "92%", label: "Signal capture accuracy" },
    { value: "24/7", label: "Continuous orchestration" },
  ];

  const faqs = [
    {
      q: "How does the agent stay aligned with my team?",
      a: "Every flow starts with your source-of-truth workspaces. The agent syncs context, proposes adjustments, and waits for approval before touching production-critical systems.",
    },
    {
      q: "Can I plug in existing automations?",
      a: "Yes. Bring your own APIs, webhooks, or internal scripts. Map them into reusable blocks and compose them visually or through the recipe editor.",
    },
    {
      q: "What does onboarding look like?",
      a: "Kick off with a guided workshop. We translate your top workflows into agentic loops, configure safeguards, and ship a pilot in days—not months.",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black" />
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.35),transparent_65%)] blur-3xl" />
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-32 px-6 pb-24 pt-20 sm:px-12 lg:px-20">
        <section className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              Agentic workspace preview
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, meet the operating system for teams who move at agentic
              velocity.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              Coordinate deep work, surface the right insight at the right
              second, and keep outcomes on track without the ritual overhead.
              This canvas listens, plans, and ships alongside your team.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-violet-200"
              >
                Experience the live canvas
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#faq"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Explore how it works
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 pt-6 text-white/70">
              {stats.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden h-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(99,102,241,0.25)] backdrop-blur md:flex md:flex-col md:justify-between">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>Agent Channel</span>
              <span>Real-time pilot</span>
            </div>
            <div className="space-y-4">
              <p className="rounded-2xl bg-black/40 p-4 text-sm text-white/80">
                “Synthesized team goals from Monday’s sync. Recommended three
                shippable outcomes and mapped tasks to the design pod.”
              </p>
              <p className="rounded-2xl bg-black/20 p-4 text-sm text-white/70">
                “Detected conflicting feedback in the research doc. Suggested a
                follow-up loop with context-specific prompts.”
              </p>
              <p className="rounded-2xl bg-black/40 p-4 text-sm text-white/80">
                “Scheduled a build review, attached scenario tests, and notified
                stakeholders with a 90-second digest.”
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4 text-white/70">
              <p className="text-sm font-medium text-white/80">Outcome status</p>
              <div className="mt-4 space-y-4">
                <ProgressRow label="Briefing" value={100} />
                <ProgressRow label="Execution" value={68} />
                <ProgressRow label="QA & Launch" value={28} />
              </div>
            </div>
          </div>
        </section>

        <section
          id="demo"
          className="space-y-12 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-12"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                A modular brain that learns your rhythm.
              </h2>
              <p className="max-w-2xl text-base text-white/70">
                Each block is aware of your calendar load, documentation drift,
                and the humans behind the work. Compose flows with live
                feedback, then let the agent keep them fresh.
              </p>
            </div>
            <a
              href="https://cal.com/?agentic-preview"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/70 transition hover:border-white/50 hover:text-white"
            >
              Book an activation session
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <article
                key={feature.title}
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-black/30 p-6 transition duration-200 hover:border-violet-400/60 hover:bg-black/10"
              >
                <div className="space-y-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {feature.description}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.3em] text-violet-200/80">
                  {feature.emphasis}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-black/30 p-8 md:p-12 lg:grid-cols-[0.5fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Move in loops.</h2>
            <p className="text-sm leading-relaxed text-white/70">
              The agent keeps your operating rhythm tight—from intake to
              delivery. Every stage feeds the next, and you always see what
              happens next.
            </p>
          </div>
          <div className="space-y-8">
            {timeline.map((item) => (
              <div
                key={item.label}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-6 text-white"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-200/80">
                  {item.label}
                </span>
                <p className="mt-2 text-2xl font-semibold">{item.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {item.copy}
                </p>
                <div className="absolute inset-y-0 -left-px hidden w-px bg-gradient-to-b from-transparent via-white/60 to-transparent md:block" />
              </div>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="grid gap-12 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:grid-cols-2 md:p-12"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Bring your team online with confidence.
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              Built for secure collaboration. Guardrails, approvals, and
              telemetry are baked into every loop so you can move fast without
              losing control.
            </p>
            <div className="flex flex-col gap-3 text-white/60">
              <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                <p className="text-sm font-medium text-white/80">
                  SOC 2 Type II alignment
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Enterprise-grade controls with granular activity trails.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                <p className="text-sm font-medium text-white/80">
                  Human-in-the-loop checkpoints
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Automations pause for human approval where it matters most.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-white/10 bg-black/20 p-6 text-white/80"
              >
                <p className="text-base font-medium text-white">{item.q}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-500/20 via-indigo-500/20 to-cyan-400/20 p-10 text-white">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Ready to ship your next milestone with an agentic co-pilot?
              </h2>
              <p className="max-w-2xl text-sm text-white/80">
                We partner with product, research, and go-to-market teams to
                unlock a decision-making flow that scales with ambition.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <a
                href="mailto:hello@agenticpresence.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-violet-200"
              >
                Start a pilot
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://calendar.google.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              >
                View release notes
              </a>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 pb-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Agentic Presence. Built for teams in motion.</p>
          <div className="flex gap-4">
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Powered by Vercel
            </a>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Made with Next.js
            </a>
          </div>
        </footer>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(circle_at_50%_100%,rgba(34,197,94,0.25),transparent_65%)] blur-3xl" />
    </main>
  );
}

function ProgressRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-2 text-sm">
      <div className="flex items-center justify-between text-white/60">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
