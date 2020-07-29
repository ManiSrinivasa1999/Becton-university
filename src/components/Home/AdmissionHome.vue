<template>
  <div class="admission">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" lg="10" md="12" sm="8">
          <p class="text-h4 font-weight-bold text-center">
            ADMISSIONS
          </p>
          <p class="text-h6 text-center">
            An extraordinary freedom of opportunity—to explore,
            to collaborate and to challenge yourself
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" lg="10" md="12" sm="10">
            <v-img eager src="@/assets/admissions.jpg" class="image"></v-img>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" md="6" sm="10" lg="5">
          <p class="text-h5 font-weight-bold text-center">
            Explore the possibilities of a Beckton education as you map out your college journey.
          </p>
          <p class="text-h6 text-center">
            Learners at Beckton college have at least one thing in common:<br />
            they are all learning for success. The College is committed to promoting
            equality and valuing diversity, as we have students of all ages,
            backgrounds and beliefs.
          </p>
        </v-col>
        <v-col cols="12" md="6" sm="10" lg="5">
          <p class="text-h5 font-weight-bold text-center">
            Beckton meets the full financial need of every admitted undergrad who qualifies
            for assistance.
          </p>
          <p class="text-h6 text-center">
            In our College there will be opportunities to make new friends,
            take part in national competitions, gain work experience,
            be involved with work experience and visit new and exciting places,
            amongst other activities, ensuring your time here is enjoyable and rewarding.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="10" md="6" lg="4" sm="8">
          <v-btn x-large to="/programmes" color="success" width="100%">
            More about admission
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AdmissionHome',
};
</script>

<style lang="scss" scoped>

.image {
  height: 60vh;
}
</style>
