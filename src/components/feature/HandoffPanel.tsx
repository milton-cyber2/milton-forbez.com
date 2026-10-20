interface HandoffPanelProps {
  mailto: string;
  whatsapp: string;
}

export default function HandoffPanel({ mailto, whatsapp }: HandoffPanelProps) {
  return (
    <div className="rounded-md border border-primary-500/30 bg-background-100 p-5">
      <p className="flex items-center gap-2 text-sm font-semibold text-foreground-900">
        <i className="ri-send-plane-line text-primary-500" />
        Send it straight to Martin
      </p>
      <p className="mt-1 text-xs text-foreground-600 leading-relaxed">
        Your details are ready to go. Send them directly and Martin will reply to you personally.
      </p>
      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <a
          href={mailto}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 text-sm font-semibold whitespace-nowrap cursor-pointer transition-colors"
        >
          <i className="ri-mail-send-line" />
          Send by Email
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-background-50 border border-background-300/60 hover:border-primary-500 text-foreground-800 text-sm font-semibold whitespace-nowrap cursor-pointer transition-colors"
        >
          <i className="ri-whatsapp-line" />
          Send on WhatsApp
        </a>
      </div>
    </div>
  );
}