<template>
  <div class="project-content">
    <p class="project-content-grade">
      {{ t("Projects.items.interfaceInteraction.content.grade") }}
    </p>

    <p>{{ t("Projects.items.interfaceInteraction.content.intro1") }}</p>

    <p>{{ t("Projects.items.interfaceInteraction.content.intro2") }}</p>

    <p>{{ t("Projects.items.interfaceInteraction.content.intro3") }}</p>

    <h3>
      {{ t("Projects.items.interfaceInteraction.content.beginschetsenTitle") }}
    </h3>
    <p>{{ t("Projects.items.interfaceInteraction.content.beginschetsen") }}</p>
    <img
      :src="
        publicPath(
          '/projects/interfaceinteractie/interfaceinteractie_beginschetsen.jpeg',
        )
      "
      alt="Interface & interactie beginschetsen"
    />

    <h3>{{ t("Projects.items.interfaceInteraction.content.tposeTitle") }}</h3>
    <p>{{ t("Projects.items.interfaceInteraction.content.tpose") }}</p>
    <img
      :src="
        publicPath(
          '/projects/interfaceinteractie/interfaceinteractie_tpose.png',
        )
      "
      alt="Interface & interactie schetsen T-pose"
    />
    <h4>
      {{
        t("Projects.items.interfaceInteraction.content.tposeInspirationTitle")
      }}
    </h4>
    <p>
      {{ t("Projects.items.interfaceInteraction.content.tposeInspiration1") }}
    </p>
    <p>
      {{ t("Projects.items.interfaceInteraction.content.tposeInspiration2") }}
    </p>

    <h3>
      {{
        t("Projects.items.interfaceInteraction.content.bewegingsconceptenTitle")
      }}
    </h3>
    <p>
      {{ t("Projects.items.interfaceInteraction.content.bewegingsconcepten") }}
    </p>
    <img
      :src="
        publicPath(
          '/projects/interfaceinteractie/interfaceinteractie_schetsen_1.jpeg',
        )
      "
      alt="Interface & interactie schetsen 1"
    />
    <img
      :src="
        publicPath(
          '/projects/interfaceinteractie/interfaceinteractie_schetsen_2.jpeg',
        )
      "
      alt="Interface & interactie schetsen 2"
    />

    <h3>
      {{
        t("Projects.items.interfaceInteraction.content.technicalResearchTitle")
      }}
    </h3>
    <p>
      {{ t("Projects.items.interfaceInteraction.content.technicalResearch1") }}
    </p>
    <p>
      {{ t("Projects.items.interfaceInteraction.content.technicalResearch2") }}
    </p>

    <h3>
      {{ t("Projects.items.interfaceInteraction.content.storyboardTitle") }}
    </h3>
    <p>{{ t("Projects.items.interfaceInteraction.content.storyboard") }}</p>
    <ul>
      <li>
        {{ t("Projects.items.interfaceInteraction.content.storyboard1") }}
      </li>
      <li>
        {{ t("Projects.items.interfaceInteraction.content.storyboard2") }}
      </li>
      <li>
        {{ t("Projects.items.interfaceInteraction.content.storyboard3") }}
      </li>
      <li>
        {{ t("Projects.items.interfaceInteraction.content.storyboard4") }}
      </li>
      <li>
        {{ t("Projects.items.interfaceInteraction.content.storyboard5") }}
      </li>
      <li>
        {{ t("Projects.items.interfaceInteraction.content.storyboard6") }}
      </li>
    </ul>
    <img
      :src="
        publicPath(
          '/projects/interfaceinteractie/interfaceinteractie_storyboard.jpeg',
        )
      "
      alt="Interface & interactie schetsen storyboard"
    />

    <h3>
      {{ t("Projects.items.interfaceInteraction.content.animationTitle") }}
    </h3>

    <h4>{{ t("Projects.items.interfaceInteraction.content.animation1") }}</h4>

    <div class="animation-images">
      <img
        :src="
          publicPath(
            '/projects/interfaceinteractie/interfaceinteractie_animatie1.png',
          )
        "
        alt="Interface & interactie animatie 1"
      />

      <h4>{{ t("Projects.items.interfaceInteraction.content.animation2") }}</h4>
      <div class="animation-row">
        <img
          :src="
            publicPath(
              '/projects/interfaceinteractie/interfaceinteractie_animatie2.png',
            )
          "
          alt="Interface & interactie animatie 2"
        />
        <img
          :src="
            publicPath(
              '/projects/interfaceinteractie/interfaceinteractie_animatie3.png',
            )
          "
          alt="Interface & interactie animatie 3"
        />
      </div> 

      <h4>{{ t("Projects.items.interfaceInteraction.content.animation3") }}</h4>
      <img
        :src="
          publicPath(
            '/projects/interfaceinteractie/interfaceinteractie_animatie4.png',
          )
        "
        alt="Interface & interactie animatie 4"
      />

      <h4>{{ t("Projects.items.interfaceInteraction.content.animation4") }}</h4>
      <img
        :src="
          publicPath(
            '/projects/interfaceinteractie/interfaceinteractie_animatie5.png',
          )
        "
        alt="Interface & interactie animatie 5"
      />
    </div>

    <h3>
      {{ t("Projects.items.interfaceInteraction.content.iconschetsenTitle") }}
    </h3>
    <p>{{ t("Projects.items.interfaceInteraction.content.iconschetsen") }}</p>

    <h4>
      {{ t("Projects.items.interfaceInteraction.content.iconschetsen1Title") }}
    </h4>
    <p>{{ t("Projects.items.interfaceInteraction.content.iconschetsen1") }}</p>
    <h4>
      {{ t("Projects.items.interfaceInteraction.content.iconschetsen2Title") }}
    </h4>
    <p>{{ t("Projects.items.interfaceInteraction.content.iconschetsen2") }}</p>
    <h4>
      {{ t("Projects.items.interfaceInteraction.content.iconschetsen3Title") }}
    </h4>
    <p>{{ t("Projects.items.interfaceInteraction.content.iconschetsen3") }}</p>
    <h4>
      {{ t("Projects.items.interfaceInteraction.content.iconschetsen4Title") }}
    </h4>
    <p>{{ t("Projects.items.interfaceInteraction.content.iconschetsen4") }}</p>
    <img
      :src="
        publicPath(
          '/projects/interfaceinteractie/interfaceinteractie_iconschetsen.jpeg',
        )
      "
      alt="Interface & interactie iconschetsen"
    />

    <h3>{{ t("Projects.items.interfaceInteraction.content.AudioTitle") }}</h3>
    <p>{{ t("Projects.items.interfaceInteraction.content.Audio") }}</p>

    <h3>
      {{ t("Projects.items.interfaceInteraction.content.ReflectionTitle") }}
    </h3>
    <p>{{ t("Projects.items.interfaceInteraction.content.Reflection1") }}</p>
    <p>{{ t("Projects.items.interfaceInteraction.content.Reflection2") }}</p>
    <p>{{ t("Projects.items.interfaceInteraction.content.Reflection3") }}</p>
    <p>{{ t("Projects.items.interfaceInteraction.content.Reflection4") }}</p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
