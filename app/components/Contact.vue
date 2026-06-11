<template>
  <section class="contact section">
    <div class="container contact_container">
      <form
        action="https://formsubmit.co/zcsensoy@gmail.com"
        class="contact_form grid"
        method="POST"
      >
      <h2 class="contact_title">
        <i class="uil uil-message contact_icon"></i>
        {{ t("Contact.title") }}
      </h2>
        <div class="contact_inputs grid">
          <div class="contact_content">
            <label for="" class="contact_label">{{
              t("Contact.Form.name")
            }}</label>
            <input type="text" name="name" class="contact_input" required />
          </div>
          <div class="contact_content">
            <label for="" class="contact_label">{{
              t("Contact.Form.email")
            }}</label>
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
          <label for="" class="contact_label">{{
            t("Contact.Form.subject")
          }}</label>
          <input type="text" name="subject" class="contact_input" />
        </div>
        <div class="contact_content">
          <label for="" class="contact_label">{{
            t("Contact.Form.message")
          }}</label>
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
            {{ t("Contact.Form.sendMessage") }}
            <i class="uil uil-message button_icon"></i>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>