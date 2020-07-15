<template>
  <div class="acheivements">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="10">
          <p class="text-h4 font-weight-bold text-center">
            OUR ACHIEVEMENTS
          </p>
          <p class="text-h6 text-center">
            <strong>BECTON UNIVERSITY</strong>
            <br />
            Experience the benefits of a global education community and interact
            with students in countries around the world.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col v-if="$vuetify.breakpoint.mdAndUp" class="d-flex justify-center align-center">
          <div
            v-for="(achievement, i) in achievements"
            :key="i"
            class="pa-4 ml-2 text-center"
          >
            <v-icon class="icon mt-4" :color="color">
              {{ achievement.icon }}
            </v-icon>
            <v-card-text class="text-h6 mt-4">
              {{ achievement.text }}
            </v-card-text>
          </div>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.smAndDown" class="d-flex flex-column">
          <div
            v-for="(achievement, i) in achievements"
            :key="i"
            class="pa-4 ml-2 text-center d-flex"
          >
            <v-icon class="icon mt-4" :color="color">
              {{ achievement.icon }}
            </v-icon>
            <v-card-text class="text-h6 mt-4">
              {{ achievement.text }}
            </v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Acheivements2',
  data() {
    return {
      color: 'green',
      achievements: [
        {
          text: '890+ STUDENTS',
          icon: 'fas fa-user-friends',
        },
        {
          text: '670+ GRADUATE',
          icon: 'fas fa-user-graduate',
        },
        {
          text: '160+ AWARD WINNING',
          icon: 'fas fa-trophy',
        },
        {
          text: '200+ FACULTIES',
          icon: ' fas fa-user-edit',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.icon {
  height: 50px;
  width: 50px;
}
</style>
