<template>
  <div class="admission">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12">
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
        <v-col cols="12" md="10">
          <v-img src="@/assets/admissions.jpg" class="image"></v-img>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" md="5">
          <p class="text-h5 font-weight-bold text-center">
            Explore the possibilities of a Becton education as you map out your college journey.
          </p>
          <p class="text-h6 text-center">
            We look for distinctive students who exhibit an abundance of energy and curiosity in
            their classes, activities, projects, research and lives.
          </p>
        </v-col>
        <v-col cols="12" md="5">
          <p class="text-h5 font-weight-bold text-center">
            Becton meets the full financial need of every admitted undergrad who qualifies
            for assistance.
          </p>
          <p class="text-h6 text-center">
            Nearly 70% of undergrads receive financial aid. Generally, tuition is covered for
            families with incomes below $125,000.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="10" md="4">
          <v-btn x-large to="/admissions" color="success" width="100%">
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
  height: 50vh;
}

</style>
