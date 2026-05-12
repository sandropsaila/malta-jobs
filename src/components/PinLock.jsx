import { useState } from "react";
import { verifyPin, verifyCompaniesPin } from "../utils/auth";

export default function PinLock({ onUnlock, subtitle }) {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  const isCompanies = Boolean(subtitle);

  const handleDigit = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...digits];
    next[i] = val;
    setDigits(next);
    setError(false);

    if (val && i < 3) {
      document.getElementById(`pin-${i + 1}`)?.focus();
    }

    if (next.every((d) => d !== "")) {
      checkPin(next.join(""));
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      document.getElementById(`pin-${i - 1}`)?.focus();
    }
  };

  const checkPin = async (pin) => {
    const ok = isCompanies ? await verifyCompaniesPin(pin) : await verifyPin(pin);
    if (ok) {
      onUnlock();
    } else {
      setShaking(true);
      setError(true);
      setTimeout(() => {
        setDigits(["", "", "", ""]);
        setShaking(false);
        document.getElementById("pin-0")?.focus();
      }, 700);
    }
  };

  return (
    <div className="pin-backdrop">
      <div className={`pin-card${shaking ? " shake" : ""}`}>
        {/* Main app: show logo. Companies: show nothing above keypad */}
        {!isCompanies && (
          <div className="pin-logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="12" fill="#BB1919" fillOpacity="0.12" />
              <path d="M20 8L28 13V27L20 32L12 27V13L20 8Z" stroke="#BB1919" strokeWidth="1.8" fill="none" />
              <circle cx="20" cy="20" r="3.5" fill="#BB1919" />
            </svg>
          </div>
        )}

        <div className="pin-inputs" style={{ marginTop: isCompanies ? 0 : undefined }}>
          {digits.map((d, i) => (
            <input
              key={i}
              id={`pin-${i}`}
              className={`pin-box${error ? " error" : ""}`}
              type="password"
              inputMode="numeric"
              maxLength={1}
              value={d}
              onChange={(e) => handleDigit(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              autoFocus={i === 0}
            />
          ))}
        </div>

        {error && <p className="pin-error">Incorrect PIN. Try again.</p>}
      </div>
    </div>
  );
}
