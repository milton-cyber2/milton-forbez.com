import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures every route change starts the visitor at the very top of the new
 * page. Without this, a single-page app keeps the previous scroll position,
 * so clicking a link can drop you halfway down the next page.
 *
 * If a route is opened with a hash (e.g. /brand-collaborations#modelling),
 * we smooth-scroll to that section instead, retrying briefly while the new
 * page finishes mounting.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      let tries = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (tries < 12) {
          tries += 1;
          requestAnimationFrame(tryScroll);
        }
      };
      requestAnimationFrame(tryScroll);
      return;
    }

    // "instant" keeps navigation snappy — never animates a long scroll upward.
    window.scrollTo({ top: 0, left: 0 });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, hash]);

  return null;
}