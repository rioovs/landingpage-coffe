"use client";

import { useState, FormEvent } from "react";

// Replace with your deployed Google Apps Script URL
const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? "";

interface FormData {
  nama: string;
  noWa: string;
  tanggal: string;
  detail: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ nama: "", noWa: "", tanggal: "", detail: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      if (APPS_SCRIPT_URL) {
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      setStatus("success");
      setForm({ nama: "", noWa: "", tanggal: "", detail: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontak" className="py-24 md:py-32 bg-coffee-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            — Coffee Catering & Reservasi —
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gradient mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Wujudkan Acara Spesialmu
          </h2>
          <p className="text-cream-200/60 max-w-xl mx-auto text-base">
            Butuh layanan Coffee Catering atau reservasi tempat? Isi form di bawah dan tim kami akan menghubungimu via WhatsApp.
          </p>
        </div>

        {/* Card */}
        <div className="glass rounded-3xl p-8 md:p-10">
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-cream-100 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                Terima kasih! 🎉
              </h3>
              <p className="text-cream-200/70 text-base max-w-md mx-auto">
                Tim Eazy Coffee akan segera menghubungi Anda via WhatsApp. Kami senang bisa membantu acara spesialmu!
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 px-6 py-3 rounded-full glass-light text-amber-400 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Kirim Pesan Lagi
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nama */}
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="text-cream-200/80 text-sm font-medium">
                  Nama Lengkap <span className="text-amber-400">*</span>
                </label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  required
                  value={form.nama}
                  onChange={handleChange}
                  placeholder="Contoh: Budi Santoso"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream-100 placeholder-cream-200/30 focus:outline-none focus:border-amber-500/60 focus:bg-white/8 transition-all text-sm"
                />
              </div>

              {/* No WA */}
              <div className="flex flex-col gap-2">
                <label htmlFor="noWa" className="text-cream-200/80 text-sm font-medium">
                  Nomor WhatsApp <span className="text-amber-400">*</span>
                </label>
                <input
                  id="noWa"
                  name="noWa"
                  type="tel"
                  required
                  value={form.noWa}
                  onChange={handleChange}
                  placeholder="0812-3456-7890"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream-100 placeholder-cream-200/30 focus:outline-none focus:border-amber-500/60 focus:bg-white/8 transition-all text-sm"
                />
              </div>

              {/* Tanggal */}
              <div className="flex flex-col gap-2">
                <label htmlFor="tanggal" className="text-cream-200/80 text-sm font-medium">
                  Tanggal Acara <span className="text-amber-400">*</span>
                </label>
                <input
                  id="tanggal"
                  name="tanggal"
                  type="date"
                  required
                  value={form.tanggal}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream-100 placeholder-cream-200/30 focus:outline-none focus:border-amber-500/60 focus:bg-white/8 transition-all text-sm [color-scheme:dark]"
                />
              </div>

              {/* Detail */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="detail" className="text-cream-200/80 text-sm font-medium">
                  Detail Acara <span className="text-amber-400">*</span>
                </label>
                <textarea
                  id="detail"
                  name="detail"
                  required
                  rows={4}
                  value={form.detail}
                  onChange={handleChange}
                  placeholder="Ceritakan kebutuhan acaramu: jumlah tamu, jenis acara, menu yang diinginkan, dll."
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream-100 placeholder-cream-200/30 focus:outline-none focus:border-amber-500/60 focus:bg-white/8 transition-all text-sm resize-none"
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <div className="md:col-span-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  Terjadi kesalahan. Silahkan coba lagi atau hubungi kami via WhatsApp.
                </div>
              )}

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:bg-amber-800 text-coffee-950 font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:scale-100"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Kirim Pesan via WhatsApp
                    </>
                  )}
                </button>
                <p className="text-center text-cream-200/40 text-xs mt-3">
                  Tim kami akan merespons dalam 1×24 jam di hari kerja.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
