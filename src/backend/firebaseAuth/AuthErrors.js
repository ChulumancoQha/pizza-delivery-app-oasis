// authErrors.js
// Translates Firebase error codes into messages safe to show to users.
// The guiding rule: never let an error message reveal whether a specific
// email address has an account (that's "user enumeration" and it's how
// attackers build target lists). Wrong password and unknown email get the
// exact same message below on purpose.

export function getAuthErrorMessage(error) {
  switch (error?.code) {
    case "auth/invalid-email":
      return "Enter a valid email address.";

    case "auth/email-already-in-use":
      // Don't say "this email is taken" — that confirms an account exists.
      return "We couldn't create that account. Try signing in instead, or use 'Forgot password' if you already have one.";

    case "auth/weak-password":
      return "Choose a stronger password (at least 8 characters, with a mix of letters and numbers).";

    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      // Same wording for "no such user" and "wrong password" — intentional.
      return "Incorrect email or password.";

    case "auth/too-many-requests":
      return "Too many attempts. Please wait a few minutes before trying again.";

    case "auth/user-disabled":
      return "This account has been disabled. Contact support if you think this is a mistake.";

    case "auth/network-request-failed":
      return "Network error. Check your connection and try again.";

    default:
      return "Something went wrong. Please try again.";
  }
}