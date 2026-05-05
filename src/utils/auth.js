// PIN: 1234  →  change by updating HASHED_PIN below.
// To generate a new hash, open your browser console and run:
//   crypto.subtle.digest('SHA-256', new TextEncoder().encode('YOUR_PIN'))
//     .then(b => console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))

// SHA-256 of "1234"
export const HASHED_PIN =
  "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4";

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
