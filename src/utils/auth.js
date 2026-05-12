// Main app PIN: 1122
// SHA-256 of "1122"
export const HASHED_PIN =
  "b3282a2f2a28757b3a18ab833de16a9c54518c0b0cf493e3f0a7cf09386f326a";

// Companies directory PIN: 7673
// SHA-256 of "7673"
export const HASHED_COMPANIES_PIN =
  "909033570f5545191e17d1c5ec80f6e822c0ed7f5af9838ee96c0b1781273317";

export async function hashPin(pin) {
  const encoded = new TextEncoder().encode(pin);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoded);
  return [...new Uint8Array(hashBuffer)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifyPin(pin) {
  const h = await hashPin(pin);
  return h === HASHED_PIN;
}

export async function verifyCompaniesPin(pin) {
  const h = await hashPin(pin);
  return h === HASHED_COMPANIES_PIN;
}
