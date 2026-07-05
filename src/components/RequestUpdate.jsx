import { useState } from "react";
import { Bell, Send, X, Check, AlertCircle } from "lucide-react";

// Formsubmit.co delivers the submission to this inbox (no API key needed).
// NOTE: the first time a submission is sent, Formsubmit emails a one-time
// activation link to this address — it must be clicked once to enable delivery.
const TARGET_EMAIL = "sandro.psaila@gmail.com";

export default function RequestUpdate() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [errorMsg, setErrorMsg] = useState("");

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "update searches",
          _template: "table",
          message: email.trim(),
        }),
      });

      const data = await res.json();
      if (res.ok && (data.success === "true" || data.success === true)) {
        setStatus("done");
        setEmail("");
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setErrorMsg(
        "Couldn't send right now. If this is the first request, the inbox owner may need to confirm activation."
      );
      setStatus("error");
    }
  };

  const close = () => {
    setOpen(false);
    setStatus("idle");
    setEmail("");
    setErrorMsg("");
  };

  return (
    <div className="requpdate">
      {!open ? (
        <button className="requpdate-trigger" onClick={() => setOpen(true)}>
          <Bell size={16} />
          Request a search update
        </button>
      ) : (
        <div className="requpdate-panel">
          {status === "done" ? (
            <div className="requpdate-success">
              <div className="requpdate-success-icon">
                <Check size={22} />
              </div>
              <p className="requpdate-success-title">Request sent</p>
              <p className="requpdate-success-sub">
                Thanks — your update request has been submitted.
              </p>
              <button className="requpdate-close-btn" onClick={close}>
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="requpdate-head">
                <p className="requpdate-title">Request a search update</p>
                <button className="requpdate-x" onClick={close} aria-label="Close">
                  <X size={16} />
                </button>
              </div>
              <p className="requpdate-msg">
                Enter your email and we'll trigger a fresh search of Malta's
                senior vacancies.
              </p>
              <input
                className="requpdate-input"
                type="email"
                inputMode="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                autoFocus
              />
              {status === "error" && (
                <div className="requpdate-error">
                  <AlertCircle size={14} />
                  <span>{errorMsg}</span>
                </div>
              )}
              <button
                className="requpdate-submit"
                onClick={handleSubmit}
                disabled={status === "sending"}
              >
                <Send size={14} />
                {status === "sending" ? "Sending…" : "Submit"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
