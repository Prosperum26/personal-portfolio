export default function Home() {
  return (
    <section className="flex flex-1 flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Portfolio Preview
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Building a polished personal site with a reusable app shell.
        </h1>
        <p className="text-lg leading-8 text-zinc-600">
          This page is rendered inside the shared header, main content area, and footer so every future page can inherit the same structure.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article id="about" className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <h2 className="text-lg font-semibold text-zinc-900">About</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Add your personal introduction, background, and goals here.
          </p>
        </article>

        <article id="projects" className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <h2 className="text-lg font-semibold text-zinc-900">Projects</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Showcase your work and highlight the problems you solved.
          </p>
        </article>
      </div>

      <div id="contact" className="rounded-xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-50">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-300">
          Place your email, links, and call-to-action buttons in this section.
        </p>
      </div>
    </section>
  );
}
