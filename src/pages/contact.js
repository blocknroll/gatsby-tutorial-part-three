import React from "react"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <h1>I'd love to talk! Email me at the address below</h1>

      <form
        name="contact-form-test-3"
        method="POST"
        netlify
        data-netlify="true"
        netlify-honeypot="address"
        action="/success"
      >
        <input type="hidden" name="form-name" value="contact-form-test-3" />
        <p>
          <label>
            Name: <input type="text" name="name" placeholder="Borat Sagdiyev" />
          </label>
        </p>
        <p>
          <label>
            Phone: <input type="text" name="phone" placeholder="801-867-5309" />
          </label>
        </p>
        <p>
          <label>
            Email:{" "}
            <input type="email" name="email" placeholder="borat@example.com" />
          </label>
        </p>
        <p>
          <label>
            Tell Us About Yourself:
            <textarea name="message" placeholder="Very Nice!"></textarea>
          </label>
        </p>
        <p style={{ display: "none" }}>
          <label>
            Please don't enter anything here if you are a person:
            <input name="address" autocomplete="off" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}
