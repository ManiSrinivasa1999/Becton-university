<template>
  <div class="contacts">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" md="12" class="ma-lg-16">
          <v-row class="pa-0 ma-0">
            <v-col cols="12" xl="2" lg="2"></v-col>
            <v-col cols="12" xl="4" lg="4" md="12" sm="12" xs="12">
              <v-img eager src="@/assets/ukflag-compressed.jpg" height="350"></v-img>
            </v-col>
            <v-col cols="12" xl="4" lg="4" md="12" sm="12" xs="12">
              <v-card height="350">
                <v-card-title>
                  UK Contact Info
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <span class="font-weight-bold green--text">Location: </span
                  ><br />
                  Beckton College, <br />West Midlands House Gipsy
                  Lane,<br />
                  Willenhall West Midlands, WV13 2HA United Kingdom
                </v-card-text>
                <v-card-text>
                  <span class="font-weight-bold green--text">Email: </span><br />
                  info@becktoncollege.org
                </v-card-text>
                <v-card-text>
                  <span class="font-weight-bold green--text">Phone: </span><br />
                  +1 302-827-3939
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
