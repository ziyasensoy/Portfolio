<template>
  <section class="contact section" id="contact">
    <h2 class="section_title">{{ $t("Contact.title") }}</h2>
    <span class="section_subtitle">{{ $t("Contact.subtitle") }}</span>

    <div class="contact_container container grid">
      <div>
        <div class="contact_information">
          <i class="uil uil-phone contact_icon"></i>

          <div>
            <h3 class="contact_title">{{ $t("Contact.phoneTitle") }}</h3>
            <span class="contact_subtitle">{{ $t("Contact.phone") }}</span>
          </div>
        </div>

        <div class="contact_information">
          <i class="uil uil-envelope contact_icon"></i>

          <div>
            <h3 class="contact_title">{{ $t("Contact.emailTitle") }}</h3>
            <span class="contact_subtitle">{{ $t("Contact.email") }}</span>
          </div>
        </div>
        <div class="contact_information">
          <i class="uil uil-map-marker contact_icon"></i>

          <div>
            <h3 class="contact_title">{{ $t("Contact.locationTitle") }}</h3>
            <span class="contact_subtitle">{{ $t("Contact.location") }}</span>
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
            <label for="" class="contact_label">{{ $t("Contact.Form.name") }}</label>
            <input type="text" name="name" class="contact_input" required />
          </div>
          <div class="contact_content">
            <label for="" class="contact_label">{{ $t("Contact.Form.email") }}</label>
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
          <label for="" class="contact_label">{{ $t("Contact.Form.subject") }}</label>
          <input type="text" name="subject" class="contact_input" />
        </div>
        <div class="contact_content">
          <label for="" class="contact_label">{{ $t("Contact.Form.message") }}</label>
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
            {{ $t("Contact.Form.sendMessage") }}
            <i class="uil uil-message button_icon"></i>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
