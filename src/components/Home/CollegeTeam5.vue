<template>
  <div class="College-team">
    <v-container>
      <div class="align-center justify-center d-flex flex-column pa-0 ma-0">
        <span class="text-h4 pa-4 ma-4 font-weight-bold text-center">
          BECKTON COLLEGE TEAM
        </span>
      </div>
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(faculty, i) in faculties.slice(0, 4)">
          <v-col :key="i" cols="12" md="3" lg="2">
            <v-hover v-slot:default="{ hover }">
              <div class="d-flex flex-column justify-center align-center">
                <v-card
                  v-if="$vuetify.breakpoint.lgAndUp"
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  class="hover-card rounded-card-lg"
                  height="20vh"
                  width="20vh"
                >
                  <v-img eager :src="faculty.src" class="img"></v-img>
                </v-card>
                <v-card
                  v-else-if="$vuetify.breakpoint.mdOnly"
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  class="hover-card rounded-card-md"
                  height="15vh"
                  width="15vh"
                >
                  <v-img eager :src="faculty.src" class="img"></v-img>
                </v-card>
                <v-card
                  v-else-if="$vuetify.breakpoint.smOnly"
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  class="hover-card rounded-card-sm mx-auto"
                  height="40vh"
                  width="50%"
                >
                  <v-img eager :src="faculty.src" class="img"></v-img>
                </v-card>
                <v-card
                  v-else-if="$vuetify.breakpoint.xsOnly"
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  class="hover-card rounded-card-sm mx-auto"
                  height="50vh"
                  width="100%"
                >
                  <v-img eager :src="faculty.src" class="img"></v-img>
                </v-card>
                <div class="faculty-details ma-2 text-center">
                  <div class="font-weight-bold  title mb-2">
                    {{ faculty.name }}
                  </div>
                  <div class="font-weight-light sub-title mb-2">
                    {{ faculty.degree }}
                  </div>
                  <div class="font-weight-light sub-title mb-2">
                    {{ faculty.prof }}
                  </div>
                </div>
              </div>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'CollegeTeam5',
  data() {
    return {
      faculties: [
        {
          name: 'Dr.Larry Adams',
          degree: 'MA,MBA,PhD,DBA,DCD',
          prof: 'Chancellor',
          // eslint-disable-next-line global-require
          src: require('@/assets/team-1.jpg'),
        },
        {
          name: 'Regine Meganathan',
          degree: 'MBA. PhD',
          prof: 'Vice Chancellor',
          // eslint-disable-next-line global-require
          src: require('@/assets/faculty3.jpg'),
        },
        {
          name: 'Prof. Dr. A Ra Sivakumaran',
          degree: 'MA. PhD',
          prof: 'BU Head –Culture Division',
          // eslint-disable-next-line global-require
          src: require('@/assets/team-5-compressed.jpg'),
        },
        {
          name: 'Michael Kanthakaran',
          degree: 'BA. BSc. PGD. MBA',
          prof: 'Business Development Manager',
          // eslint-disable-next-line global-require
          src: require('@/assets/faculty4-compressed.jpg'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.rounded-card-lg {
  border-radius: 140px;
}

.rounded-card-md {
  border-radius: 140px;
}

.rounded-card-sm {
  border-radius: 250px;
}

.img {
  width: 100%;
  height: 100%;
}

.faculty-details {
  height: 150px !important;
}

</style>
