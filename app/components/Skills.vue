<template>
  <section class="skills section" id="skills">
    <h2 class="section_title">Skills{{ $t("Skills.title") }}</h2>
    <span class="section_subtitle">My technical level{{ $t("Skills.subtitle") }}</span>

    <div class="skills_container container grid">
      <div class="skills_left">
        <!-- PROGRAMMING LANGUAGES -->
        <div
          :class="[
            'skills_content',
            openSkill === 0 ? 'skills_open' : 'skills_close',
          ]"
        >
          <div class="skills_header" @click="toggleSkills(0)">
            <i class="uil uil-server-network skills_icon"></i>
            <div>
              <h1 class="skills_title">{{ $t("Skills.programmingLangTitle") }}</h1>
              <span class="skills_subtitle">{{ $t("Skills.programmingLangSubtitle") }}</span>
            </div>
            <i class="uil uil-angle-down skills_arrow"></i>
          </div>
          <div class="skills_list">
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">{{ $t("Skills.js") }}</h3>
                <div class="skills_number">{{ $t("Skills.jsExperience") }}</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_javascript"></div>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">{{ $t("Skills.ts") }}</h3>
                <div class="skills_number">{{ $t("Skills.tsExperience") }}</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_java"></div>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">{{ $t("Skills.vue") }}</h3>
                <div class="skills_number">{{ $t("Skills.vueExperience") }}</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_php"></div>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">{{ $t("Skills.java") }}</h3>
                <div class="skills_number">{{ $t("Skills.javaExperience") }}</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_csharp"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- FRONTEND TECHNOLOGIES -->
        <div
          :class="[
            'skills_content',
            openSkill === 1 ? 'skills_open' : 'skills_close',
          ]"
        >
          <div class="skills_header" @click="toggleSkills(1)">
            <i class="uil uil-brackets-curly skills_icon"></i>
            <div>
              <h1 class="skills_title">Frontend Technologies</h1>
              <span class="skills_subtitle">More than 3 years</span>
            </div>
            <i class="uil uil-angle-down skills_arrow"></i>
          </div>
          <div class="skills_list">
            <!-- Frontend skills data -->
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">HTML</h3>
                <div class="skills_number">95%</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_html"></div>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">CSS</h3>
                <div class="skills_number">85%</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_css"></div>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">Wordpress</h3>
                <div class="skills_number">100%</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_wordpress"></div>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">React</h3>
                <div class="skills_number">Learning</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_react"></div>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">Tailwind</h3>
                <div class="skills_number">learning</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_tailwind"></div>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">Sass</h3>
                <div class="skills_number">learning</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_sass"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills_right">
        <!-- DATABASE SKILLS -->
        <div
          :class="[
            'skills_content',
            openSkill === 2 ? 'skills_open' : 'skills_close',
          ]"
        >
          <div class="skills_header" @click="toggleSkills(2)">
            <i class="uil uil-database skills_icon"></i>
            <div>
              <h1 class="skills_title">Database Design</h1>
              <span class="skills_subtitle">More than 3 years</span>
            </div>
            <i class="uil uil-angle-down skills_arrow"></i>
          </div>
          <div class="skills_list">
            <!-- Database skills data -->
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">MySQL</h3>
                <div class="skills_number">80%</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_mysql"></div>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">MongoDB</h3>
                <div class="skills_number">40%</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_mongodb"></div>
              </div>
            </div>
            <!-- Add more database skills as needed -->
          </div>
        </div>
        <!-- OTHER TOOLS & TECHNOLOGIES -->
        <div
          :class="[
            'skills_content',
            openSkill === 3 ? 'skills_open' : 'skills_close',
          ]"
        >
          <div class="skills_header" @click="toggleSkills(3)">
            <i class="uil uil-link skills_icon"></i>
            <div>
              <h1 class="skills_title">Other Tools & Technologies</h1>
              <span class="skills_subtitle">Various</span>
            </div>
            <i class="uil uil-angle-down skills_arrow"></i>
          </div>
          <div class="skills_list">
            <!-- Other tools & technologies data -->
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">Git</h3>
                <div class="skills_number">100%</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_git"></div>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">Github</h3>
                <div class="skills_number">100%</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_github"></div>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">Figma</h3>
                <div class="skills_number">100%</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_figma"></div>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_title">
                <h3 class="skills_name">Visual Studio Code</h3>
                <div class="skills_number">100%</div>
              </div>
              <div class="skills_bar">
                <div class="skills_percentage skills_vscode"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const openSkill = ref<number | null>(0);

const toggleSkills = (index: number) => {
  openSkill.value = openSkill.value === index ? null : index;
};
</script>
