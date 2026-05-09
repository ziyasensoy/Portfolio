<template>
  <section class="contact section" id="contact">
    <h2 class="section_title">Contact Me</h2>
    <span class="section_subtitle">Get in touch</span>

    <div class="contact_container container grid">
      <div>
        <div class="contact_information">
          <i class="uil uil-phone contact_icon"></i>

          <div>
            <h3 class="contact_title">Call Me</h3>
            <span class="contact_subtitle">+31 6 189 44 143</span>
          </div>
        </div>

        <div class="contact_information">
          <i class="uil uil-envelope contact_icon"></i>

          <div>
            <h3 class="contact_title">Email</h3>
            <span class="contact_subtitle">zcsensoy@gmail.com</span>
          </div>
        </div>
        <div class="contact_information">
          <i class="uil uil-map-marker contact_icon"></i>

          <div>
            <h3 class="contact_title">Location</h3>
            <span class="contact_subtitle">Amsterdam, Netherlands</span>
          </div>
        </div>
      </div>

      <form
        action="https://formsubmit.co/zcsensoy@gmail.com"
        class="contact_form grid"
        method="POST"
      >
        <div class="contact_inputs grid">
          <div class="contact_content">
            <label for="" class="contact_label">Name</label>
            <input type="text" name="name" class="contact_input" required />
          </div>
          <div class="contact_content">
            <label for="" class="contact_label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              class="contact_input"
              required
            />
          </div>
        </div>
        <div class="contact_content">
          <label for="" class="contact_label">Subject</label>
          <input type="text" name="subject" class="contact_input" />
        </div>
        <div class="contact_content">
          <label for="" class="contact_label">Message</label>
          <textarea
            cols="0"
            rows="7"
            name="message"
            class="contact_input"
            required
          ></textarea>
        </div>
        <div>
          <button type="submit" class="button button-flex">
            Send Message
            <i class="uil uil-message button_icon"></i>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
