<template>
  <div class="general">
    <v-container>
      <v-row class="fill-height" justify="center" align="center">
        <v-col cols="12" md="10">
          <v-row class="fill-height" justify="center" align="center">
            <v-col cols="12" md="4">
              <a href="/about" class="links">
                <v-img src="@/assets/general1.jpg" height="250" class="mb-4">
                  <v-row
                    align="end"
                    class="lightbox white--text pa-2 fill-height"
                  >
                    <v-col>
                      <div :class="text" class="font-weight-bold">200+ Prestigious Faculty</div>
                    </v-col>
                  </v-row>
                </v-img>
              </a>
              <a href="/admissions" class="links">
                <v-img src="@/assets/general2-compressed.jpg" height="250">
                  <v-row
                    align="end"
                    class="lightbox white--text pa-2 fill-height"
                  >
                    <v-col>
                      <div :class="text" class="font-weight-bold">800+ Scholars</div>
                    </v-col>
                  </v-row>
                </v-img>
              </a>
            </v-col>
            <v-col cols="12" md="4">
              <a href="/programmes" class="links">
                <v-img src="@/assets/general3.jpg" height="250" class="mb-4">
                  <v-row
                    align="end"
                    class="lightbox white--text pa-2 fill-height"
                  >
                    <v-col>
                      <div :class="text" class="font-weight-bold">40+ Elite Programs</div>
                    </v-col>
                  </v-row>
                </v-img>
              </a>
              <a href="/gallery" class="links">
                <v-img src="@/assets/general4-compressed.jpg" height="250">
                  <v-row
                    align="end"
                    class="lightbox white--text pa-2 fill-height"
                  >
                    <v-col>
                      <div :class="text" class="font-weight-bold">270+ Atheletic Championships</div>
                    </v-col>
                  </v-row>
                </v-img>
              </a>
            </v-col>
            <v-col cols="12" md="4">
              <a href="/programmes" class="links">
                <v-img src="@/assets/general5-compressed.jpg" height="500">
                  <v-row
                    align="end"
                    class="lightbox white--text pa-2 fill-height"
                  >
                    <v-col>
                      <div :class="text" class="font-weight-bold">Our Courses</div>
                    </v-col>
                  </v-row>
                </v-img>
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'General3',
  data() {
    return {
      text: 'text-h5',
    };
  },
};
</script>

<style lang="scss" scoped>
.links {
  text-decoration: none;
}
</style>
