import { useState, FormEvent } from "react";
import HandoffPanel from "@/components/feature/HandoffPanel";
import { buildHandoff, type HandoffLinks } from "@/lib/handoff";

const collaborationTypes = [
  "Brand Ambassador",
  "Social Media Campaign",
  "UGC",
  "Product Campaign",
  "Commercial",
  "Billboard",
  "Photography",
  "Video",
  "Event",
  "Long-Term Partnership",
  "Other",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 \u2013 $15,000",
  "$15,000 \u2013 $50,000",
  "$50,000 \u2013 $100,000",
  "$100,000+",
  "Not sure yet",
];

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [handoff, setHandoff] = useState<HandoffLinks | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = ((formData.get("contact_alt") as string) || "").trim();
    if (honeypot !== "") {
      setStatus("success");
      form.reset();
      return;
    }
    formData.delete("contact_alt");

    const links = buildHandoff("New Collaboration Inquiry — Martin Sei Website", [
      { label: "Company / Brand", value: String(formData.get("company") ?? "") },
      { label: "Contact Name", value: String(formData.get("contact_name") ?? "") },
      { label: "Email", value: String(formData.get("email") ?? "") },
      { label: "Phone", value: String(formData.get("phone") ?? "") },
      { label: "Website", value: String(formData.get("website") ?? "") },
      { label: "Collaboration Type", value: String(formData.get("collaboration_type") ?? "") },
      { label: "Campaign Description", value: String(formData.get("campaign_description") ?? "") },
      { label: "Timeline", value: String(formData.get("timeline") ?? "") },
      { label: "Location", value: String(formData.get("location") ?? "") },
      { label: "Budget Range", value: String(formData.get("budget_range") ?? "") },
      { label: "Additional Information", value: String(formData.get("additional_info") ?? "") },
    ]);
    setHandoff(links);

    const payload = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") payload.append(key, value);
    });

    try {
      const response = await fetch("https://readdy.ai/api/form/da44ka30muk3qhp2tfj0", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      const responseText = await response.text();
      let parsed: Record<string, unknown> | null = null;
      try {
        parsed = JSON.parse(responseText) as Record<string, unknown>;
      } catch {
        /* not JSON */
      }

      const serverMsg =
        (parsed?.meta as Record<string, string>)?.message ||
        (parsed as Record<string, string>)?.message ||
        (parsed?.meta as Record<string, string>)?.detail ||
        responseText;

      const isSpam =
        typeof serverMsg === "string" &&
        (serverMsg.toLowerCase().includes("spam") || serverMsg.toLowerCase().includes("form data is spam"));

      if (response.ok && parsed?.code === "OK" && !isSpam) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(serverMsg || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="inquiry" className="bg-background-100">
      <div className="container-x py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
              Partnership Inquiry
            </span>
            <h2 className="mt-4 font-heading uppercase text-foreground-950 text-3xl md:text-4xl lg:text-5xl tracking-tight">
              Start a Collaboration
            </h2>
            <p className="mt-4 text-foreground-700 max-w-xl mx-auto">
              Tell us about your brand, your campaign, and your vision. We will respond within 48 hours.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            data-readdy-form="da44ka30muk3qhp2tfj0"
            className="space-y-6"
          >
            <div className="field-alt">
              <input
                type="text"
                name="contact_alt"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground-800 mb-2">
                  Company / Brand <span className="text-primary-500">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact_name" className="block text-sm font-medium text-foreground-800 mb-2">
                  Contact Name <span className="text-primary-500">*</span>
                </label>
                <input
                  id="contact_name"
                  name="contact_name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground-800 mb-2">
                  Email <span className="text-primary-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground-800 mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-foreground-800 mb-2">
                  Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://"
                  className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="collaboration_type" className="block text-sm font-medium text-foreground-800 mb-2">
                  Collaboration Type <span className="text-primary-500">*</span>
                </label>
                <select
                  id="collaboration_type"
                  name="collaboration_type"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                >
                  <option value="">Select type</option>
                  {collaborationTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="campaign_description" className="block text-sm font-medium text-foreground-800 mb-2">
                Campaign Description <span className="text-primary-500">*</span>
              </label>
              <textarea
                id="campaign_description"
                name="campaign_description"
                required
                maxLength={500}
                rows={4}
                placeholder="Describe your campaign, product, or vision..."
                className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors resize-none"
              />
              <p className="mt-1 text-xs text-foreground-500">Maximum 500 characters</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-foreground-800 mb-2">
                  Campaign Timeline
                </label>
                <input
                  id="timeline"
                  name="timeline"
                  type="text"
                  placeholder="e.g., Q4 2026 or specific dates"
                  className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-foreground-800 mb-2">
                  Location / Shoot City
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="e.g., Dubai, London, Global"
                  className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="budget_range" className="block text-sm font-medium text-foreground-800 mb-2">
                Budget Range
              </label>
              <select
                id="budget_range"
                name="budget_range"
                className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="additional_info" className="block text-sm font-medium text-foreground-800 mb-2">
                Additional Information
              </label>
              <textarea
                id="additional_info"
                name="additional_info"
                maxLength={500}
                rows={3}
                placeholder="Any other details, references, or requirements..."
                className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors resize-none"
              />
              <p className="mt-1 text-xs text-foreground-500">Maximum 500 characters</p>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-md bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-background-50 dark:text-foreground-950 font-semibold tracking-wide whitespace-nowrap cursor-pointer transition-colors"
              >
                {status === "submitting" ? (
                  <>
                    <i className="ri-loader-4-line animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    SUBMIT COLLABORATION REQUEST
                    <i className="ri-arrow-right-line" />
                  </>
                )}
              </button>
            </div>

            {status === "success" && (
              <div className="space-y-4">
                <div className="p-4 rounded-md bg-primary-100 text-primary-900 text-sm">
                  Thank you. Your collaboration inquiry has been received. We will be in touch within 48 hours.
                </div>
                {handoff && <HandoffPanel mailto={handoff.mailto} whatsapp={handoff.whatsapp} />}
              </div>
            )}

            {status === "error" && errorMsg && (
              <div className="space-y-4">
                <div className="p-4 rounded-md bg-accent-100 text-accent-900 text-sm">
                  {errorMsg}
                </div>
                {handoff && <HandoffPanel mailto={handoff.mailto} whatsapp={handoff.whatsapp} />}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}