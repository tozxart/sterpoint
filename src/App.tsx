import { AlertTriangle } from "lucide-react";
import { Analytics } from "./components/common/Analytics";

function MaintenanceScreen() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 text-white">
      <div className="max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-sm md:p-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
          <AlertTriangle className="h-8 w-8" aria-hidden="true" />
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/80">
          Temporarily Unavailable
        </p>
        <h1 className="text-3xl font-bold md:text-5xl">Website unavailable</h1>
        <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
          This website is currently unavailable. Please check back later.
        </p>
      </div>
    </main>
  );
}

export function App() {
  return (
    <>
      <Analytics />
      <MaintenanceScreen />
    </>
  );
}

export default App;
