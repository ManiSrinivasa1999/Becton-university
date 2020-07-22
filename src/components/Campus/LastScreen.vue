<template>
  <div class="lastscreen">
    <v-row id="last-screen" class="pa-0 ma-0">
      <v-col cols="1"></v-col>
      <v-col class="flexClass" cols="12" md="10">
        <h2 class="mx-auto centerClass white--text">
          YOUR FUTURE STARTS HERE.
        </h2>
        <h4 class="mx-auto centerClass white--text">
          Health and Social Care Courses
        </h4>
        <p class="white--text">
          Browse through our available courses in health and social care to find
          the perfect course to progress you career. We offer Cache
          qualifications in health and social care which can be studied online
          through our virtual campus with expert support throughout your
          enrolment.
        </p>
        <v-btn color="warning" x-large>
          <v-icon class="mr-3">fas fa-graduation-cap</v-icon>ENROLL TODAY
        </v-btn>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'LastScreen',
};
</script>

<style lang="scss" scoped>

.flexClass {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}

#last-screen {
  min-height: 50vh;
  background-color: green;
}

.centerClass {
  text-align: center;
}

</style>
