import React from "react";

export function SignInForm() {
  return (
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Sign In</button>
    </form>
  );
}
