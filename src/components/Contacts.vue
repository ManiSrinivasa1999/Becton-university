<template>
  <div class="contacts">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" md="10" class="mt-16 mb-16 pt-16 pb-16">
          <v-row class="pa-0 ma-0">
            <v-col cols="12" md="6">
              <v-img eager src="@/assets/usaflag-compressed.jpg" height="350"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <v-card height="350">
                <v-card-title>
                  USA
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <span class="font-weight-bold blue--text">Location: </span
                  ><br />
                  Becton University, <br />
                  LLC 16192 Coastal Highway Lewes DE 19958 <br />
                  United States of America
                </v-card-text>
                <v-card-text>
                  <span class="font-weight-bold blue--text">Email: </span><br />
                  info@bectonuniversity.org
                </v-card-text>
                <v-card-text>
                  <span class="font-weight-bold blue--text">Phone: </span><br />
                  +1 302-827-3939
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row v-if="$vuetify.breakpoint.lgAndUp" class="pa-0 ma-0">
            <v-col cols="12" md="6">
              <v-card height="350">
                <v-card-title>
                  UK
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <span class="font-weight-bold blue--text">Location: </span
                  ><br />
                  London College of Media, <br />West Midlands House Gipsy
                  Lane,<br />
                  Willenhall West Midlands, WV13 2HA United Kingdom
                </v-card-text>
                <v-card-text>
                  <span class="font-weight-bold blue--text">Email: </span><br />
                  admin@londoncollegeofmedia.com
                </v-card-text>
                <v-card-text>
                  <span class="font-weight-bold blue--text">Phone: </span><br />
                  +44(0)2034752556
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-img eager src="@/assets/ukflag-compressed.jpg" height="350"></v-img>
            </v-col>
          </v-row>
          <v-row v-if="$vuetify.breakpoint.mdAndDown" class="pa-0 ma-0">
            <v-col cols="12" md="6">
              <v-img eager src="@/assets/ukflag-compressed.jpg" height="350"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <v-card height="350">
                <v-card-title>
                  UK
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <span class="font-weight-bold blue--text">Location: </span
                  ><br />
                  London College of Media, <br />West Midlands House Gipsy
                  Lane,<br />
                  Willenhall West Midlands, WV13 2HA United Kingdom
                </v-card-text>
                <v-card-text>
                  <span class="font-weight-bold blue--text">Email: </span><br />
                  admin@londoncollegeofmedia.com
                </v-card-text>
                <v-card-text>
                  <span class="font-weight-bold blue--text">Phone: </span><br />
                  +44(0)2034752556
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
};
</script>

<style lang="scss" scoped>

</style>
