import { useState, FormEvent } from "react";
import HandoffPanel from "@/components/feature/HandoffPanel";
import { buildHandoff, type HandoffLinks } from "@/lib/handoff";

const interests = [
  "Personal Training",
  "HYROX Coaching",
  "Strength & Functional Training",
  "Nutrition Coaching",
  "Online Coaching",
  "Corporate Wellness",
  "Memberships",
  "Brand Collaborations",
  "Something Else",
];

const CONTACT_FORM = "https://readdy.ai/api/form/da4pjq8et96csusepsg0";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [handoff, setHandoff] = useState<HandoffLinks | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = ((formData.get("phone_alt") as string) || "").trim();
    if (honeypot !== "") {
      setStatus("success");
      form.reset();
      return;
    }
    formData.delete("phone_alt");

    const links = buildHandoff("New Message — Martin Sei Website", [
      { label: "Name", value: String(formData.get("name") ?? "") },
      { label: "Email", value: String(formData.get("email") ?? "") },
      { label: "Phone / WhatsApp", value: String(formData.get("phone") ?? "") },
      { label: "Interested In", value: String(formData.get("interest") ?? "") },
      { label: "Message", value: String(formData.get("message") ?? "") },
    ]);
    setHandoff(links);

    const payload = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") payload.append(key, value);
    });

    try {
      const response = await fetch(CONTACT_FORM, {
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
    <form
      onSubmit={handleSubmit}
      data-readdy-form="da4pjq8et96csusepsg0"
      className="space-y-5"
    >
      <div className="field-alt">
        <input
          type="text"
          name="phone_alt"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          readOnly
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground-800 mb-2">
            Full Name <span className="text-primary-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
          />
        </div>
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
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground-800 mb-2">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-foreground-800 mb-2">
            I'm interested in <span className="text-primary-500">*</span>
          </label>
          <select
            id="interest"
            name="interest"
            required
            className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
          >
            <option value="">Select an option</option>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground-800 mb-2">
          Your Message <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={500}
          rows={5}
          placeholder="Tell Martin about your goals, your current training, and what you'd like to achieve..."
          className="w-full px-4 py-3 rounded-md bg-background-50 border border-background-300/60 text-foreground-950 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors resize-none"
        />
        <p className="mt-1 text-xs text-foreground-500">Maximum 500 characters</p>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-background-50 dark:text-foreground-950 font-semibold tracking-wide whitespace-nowrap cursor-pointer transition-colors"
      >
        {status === "submitting" ? (
          <>
            <i className="ri-loader-4-line animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <i className="ri-send-plane-line" />
          </>
        )}
      </button>

      {status === "success" && (
        <div className="space-y-4">
          <div className="p-4 rounded-md bg-primary-100 text-primary-900 text-sm">
            Thank you for reaching out. Martin will get back to you within 24 hours.
          </div>
          {handoff && <HandoffPanel mailto={handoff.mailto} whatsapp={handoff.whatsapp} />}
        </div>
      )}

      {status === "error" && errorMsg && (
        <div className="space-y-4">
          <div className="p-4 rounded-md bg-accent-100 text-accent-900 text-sm">{errorMsg}</div>
          {handoff && <HandoffPanel mailto={handoff.mailto} whatsapp={handoff.whatsapp} />}
        </div>
      )}
    </form>
  );
}