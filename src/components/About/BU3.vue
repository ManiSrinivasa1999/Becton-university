<template>
  <div class="becton-uni bg-img mt-8">
    <v-container class="informn">
      <div class="align-center justify-center d-flex flex-column pa-0 ma-0">
        <span class="text-h4 pa-4 ma-4 font-weight-bold text-center white--text">
          BECTON UNIVERSITY
        </span>
      </div>
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" md="10">
          <p class="title text-center white--text">
            Online and distance learning is the future of education.
            Even though we live in a global village the concept of a becton university –
            not rooted in a particular country – such as Becton  University –
            is occasionally misunderstood by the dinosaurs
            of brick and mortar education especially in countries where
            online education is still a novelty.
            <br />
            Becton University’s formula has proven a great success over the years.
            It is efficient, student-oriented, and can be transmitted from any computer terminal
            anywhere in the world.<br />
            That is why this formula is now being championed by numerous online educational
            institutions around the world.
          </p>
        </v-col>
        <v-col cols="12" md="3" class="text-center">
          <v-btn
            color="success"
            dark
            centered
            class="mx-auto"
            width="50%"
            to="/apply"
          >
            Apply Now
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'StudyatBU7',
};
</script>

<style lang="scss" scoped>

.bg-img {
  background-image: url('../../assets/book3.jpg');
  background-size: cover;
  background-position: center;
  filter: brightness(0.9);
}

.bg-col {
  background-color: rgba(black, 0.2);
}

.informn {
  z-index: 2;
}

</style>
