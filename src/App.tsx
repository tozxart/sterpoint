import { FileText } from "lucide-react";

const SETTLEMENT_CONTACT_EMAIL = "fallag.rayen@gmail.com";

function MaintenanceScreen() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-12 text-white">
      <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm md:p-12">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
          <FileText className="h-8 w-8" aria-hidden="true" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <section lang="en">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/80">
              English
            </p>
            <h1 className="text-2xl font-bold md:text-3xl">
              This website is suspended
            </h1>
            <p className="mt-4 text-base font-semibold leading-7 text-slate-100">
              Software commissioned by this company was completed and delivered
              in full. The invoices issued for it remain unpaid.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              The site will be restored as soon as the outstanding balance is
              settled. Complete records of the commission are retained: the
              agreed scope, the delivery confirmations and the correspondence.
            </p>
            <p className="mt-4 border-l-2 border-amber-400/70 pl-3 text-sm font-semibold leading-6 text-amber-100">
              If the balance remains unsettled, the matter will be pursued
              through all available legal remedies.
            </p>
          </section>

          <section lang="pl" className="md:border-l md:border-white/10 md:pl-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/80">
              Polski
            </p>
            <h2 className="text-2xl font-bold md:text-3xl">
              Serwis został wstrzymany
            </h2>
            <p className="mt-4 text-base font-semibold leading-7 text-slate-100">
              Oprogramowanie zamówione przez tę firmę zostało wykonane
              i przekazane w całości. Należność za nie pozostaje nieuregulowana.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Serwis zostanie przywrócony niezwłocznie po opłaceniu zaległych
              faktur. Wykonawca dysponuje pełną dokumentacją zlecenia:
              uzgodnionym zakresem prac, potwierdzeniami przekazania oraz
              korespondencją.
            </p>
            <p className="mt-4 border-l-2 border-amber-400/70 pl-3 text-sm font-semibold leading-6 text-amber-100">
              W przypadku braku uregulowania należności sprawa zostanie
              skierowana na drogę prawną.
            </p>
          </section>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-slate-400">
            <span lang="en">To settle the matter, please get in touch</span>
            <span className="mx-3 text-slate-600" aria-hidden="true">
              ·
            </span>
            <span lang="pl">W sprawie rozliczenia prosimy o kontakt</span>
          </p>
          <a
            className="mt-3 inline-block break-all text-lg font-bold text-amber-300 underline underline-offset-4 hover:text-amber-200"
            href={`mailto:${SETTLEMENT_CONTACT_EMAIL}`}
          >
            {SETTLEMENT_CONTACT_EMAIL}
          </a>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-500">
            Error code <span className="font-bold text-amber-300">402</span>
          </p>
        </div>
      </div>
    </main>
  );
}

export function App() {
  return <MaintenanceScreen />;
}

export default App;
