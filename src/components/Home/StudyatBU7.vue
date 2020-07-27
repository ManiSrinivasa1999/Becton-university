<template>
  <div class="becton-uni bg-img mt-8">
    <v-container class="informn">
      <div class="align-center justify-center d-flex flex-column pa-0 ma-0">
        <span class="text-h4 pa-4 ma-4 font-weight-bold text-center white--text">
          STUDYING AT BECKTON COLLEGE
        </span>
      </div>
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" md="10">
          <p class="title text-center white--text">
            Studying at Beckton College will provide you with the tools you need to forge a bright
            future for yourself.
            With experience in helping students achieve their potential, we are committed
            to excellence in
            learning and teaching.
          </p>
        </v-col>
        <v-col cols="12" md="4" lg="3" class="text-center">
          <v-btn
            color="success"
            dark
            centered
            class="mx-auto"
            width="50%"
            to="/about"
          >
            Read More
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
  background-image: url('../../assets/book2.jpg');
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
