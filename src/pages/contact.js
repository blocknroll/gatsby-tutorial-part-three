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
        netlify-honeypot="bot-field"
        action="/success"
      >
        <input type="hidden" name="form-name" value="contact-form-test-3" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="widget-maker">Widget Maker</option>
              <option value="widget-seller">Widget Seller</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p class="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}
