import { useState, FormEvent } from "react";
import HandoffPanel from "@/components/feature/HandoffPanel";
import { buildHandoff, type HandoffLinks } from "@/lib/handoff";

const goals = [
  "Lose Weight",
  "Build Muscle",
  "Improve Strength",
  "HYROX Preparation",
  "Improve Athletic Performance",
  "General Fitness & Health",
  "Online Coaching",
  "Corporate Wellness",
  "Nutrition Coaching",
  "Something Else",
];

const experience = [
  "Complete Beginner",
  "Some Training Experience",
  "Intermediate",
  "Advanced / Athlete",
];

const frequency = [
  "1-2 Sessions per Week",
  "3 Sessions per Week",
  "4+ Sessions per Week",
];

const contactMethods = ["WhatsApp", "Email", "Phone Call"];

const BOOK_FORM = "https://readdy.ai/api/form/da717e6ij9sffln41neg";

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [handoff, setHandoff] = useState<HandoffLinks | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = ((formData.get("company_alt") as string) || "").trim();
    if (honeypot !== "") {
      setStatus("success");
      form.reset();
      return;
    }
    formData.delete("company_alt");

    const links = buildHandoff("New Consultation Request — Martin Sei Website", [
      { label: "Name", value: String(formData.get("name") ?? "") },
      { label: "Email", value: String(formData.get("email") ?? "") },
      { label: "Phone / WhatsApp", value: String(formData.get("phone") ?? "") },
      { label: "Primary Goal", value: String(formData.get("primary_goal") ?? "") },
      { label: "Training Experience", value: String(formData.get("training_experience") ?? "") },
      { label: "Preferred Frequency", value: String(formData.get("preferred_frequency") ?? "") },
      { label: "Preferred Contact", value: String(formData.get("preferred_contact") ?? "") },
      { label: "Message", value: String(formData.get("message") ?? "") },
    ]);
    setHandoff(links);

    const payload = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") payload.append(key, value);
    });

    try {
      const response = await fetch(BOOK_FORM, {
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
    <form onSubmit={handleSubmit} data-readdy-form="da717e6ij9sffln41neg" className="space-y-5">
      <div className="field-alt">
        <input
          type="text"
          name="company_alt"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          readOnly
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="input-lux"
          />
        </Field>
        <Field label="Email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className="input-lux"
          />
        </Field>
      </div>

      <Field label="Phone / WhatsApp" required>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+971..."
          className="input-lux"
        />
      </Field>

      <Field label="Primary Goal" required>
        <select id="goal" name="primary_goal" required className="input-lux">
          <option value="">Select your goal</option>
          {goals.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Training Experience" required>
          <select id="experience" name="training_experience" required className="input-lux">
            <option value="">Select experience</option>
            {experience.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred Training Frequency">
          <select id="frequency" name="preferred_frequency" className="input-lux">
            <option value="">How often?</option>
            {frequency.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Preferred Contact Method" required>
        <div className="grid grid-cols-3 gap-3">
          {contactMethods.map((m) => (
            <label
              key={m}
              className="relative flex items-center justify-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="preferred_contact"
                value={m}
                required
                className="peer sr-only"
              />
              <span className="w-full inline-flex items-center justify-center gap-2 px-3 py-3 rounded-md border border-background-300/60 text-foreground-700 text-sm font-medium transition-all peer-checked:border-primary-500 peer-checked:bg-primary-500/10 peer-checked:text-primary-500 hover:border-primary-500">
                <i
                  className={
                    m === "WhatsApp"
                      ? "ri-whatsapp-line"
                      : m === "Email"
                        ? "ri-mail-line"
                        : "ri-phone-line"
                  }
                />
                {m}
              </span>
            </label>
          ))}
        </div>
      </Field>

      <Field label="Personal Goals / Message">
        <textarea
          id="message"
          name="message"
          maxLength={500}
          rows={4}
          placeholder="Tell me about your goals, your story, your schedule, or anything you want me to know..."
          className="input-lux resize-none"
        />
        <p className="mt-1 text-xs text-foreground-500">Maximum 500 characters</p>
      </Field>

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
            REQUEST MY CONSULTATION
            <i className="ri-arrow-right-line" />
          </>
        )}
      </button>

      {status === "success" && (
        <div className="space-y-4">
          <div className="p-4 rounded-md bg-primary-100 text-primary-900 text-sm">
            Thank you. Your consultation request has been received. Martin will reach out within 24
            hours to confirm the details.
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

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground-800 mb-2">
        {label} {required && <span className="text-primary-500">*</span>}
      </label>
      {children}
    </div>
  );
}