<template>
  <div class="faculty">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" lg="12" xl="10" md="12" sm="10">
          <v-row class="fill-height pa-0 ma-0">
            <v-col cols="12" md="4">
              <v-img eager src="@/assets/faculty2.jpg" height="350px"></v-img>
            </v-col>
            <v-col cols="12" md="8">
              <div class="font-weight-bold  mt-2" :class="heading">
                OUR VISION
              </div>
              <br />
              <p class="font-weight-bold">
                We will dramatically grow our positive impact in a world economy in
                dire need of the global leadership talent we were founded to provide.
              </p>
              <p>
                We will dramatically grow our positive impact in a world economy in
                dire need of the global leadership talent we were founded to provide.
                Becoming outstanding in everything that we do Offering personalised
                and challenging study programmes for students to prepare them for life,
                work and citizenship Ensuring consistently excellent teaching and best
                practice in an inspiring learning environment, within an inclusive curriculum
                Supporting and developing enquiring, skilled learners who are committed
                to continuous improvement .
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Faculty5',
  data() {
    return {
      heading: 'text-h5',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
