<template>
  <div class="university-team">
    <v-container>
      <div class="align-center justify-center d-flex flex-column pa-0 ma-0">
        <span class="text-h4 pa-4 ma-4 font-weight-bold text-center">
          BECTON UNIVERSITY TEAM
        </span>
      </div>
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(faculty, i) in faculties.slice(0, 4)">
          <v-col :key="i" cols="10" md="2">
            <v-hover v-slot:default="{ hover }">
              <div class="d-flex flex-column">
                <v-card
                  v-if="$vuetify.breakpoint.xlOnly"
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  class="hover-card rounded-card-lg"
                  height="300px"
                  width="300px"
                >
                  <v-img :src="faculty.src" class="img"></v-img>
                </v-card>
                <v-card
                  v-else-if="$vuetify.breakpoint.mdAndUp"
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  class="hover-card rounded-card-md"
                  height="180px"
                  width="300px"
                >
                  <v-img :src="faculty.src" class="img"></v-img>
                </v-card>
                <v-card
                  v-else-if="$vuetify.breakpoint.smAndDown"
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  class="hover-card rounded-card-sm"
                  height="300px"
                >
                  <v-img :src="faculty.src" class="img"></v-img>
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
  name: 'UniversityTeam5',
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
          name: 'Prof. DR A.M.Roy Fernando',
          degree: 'MBA. PhD',
          prof: 'Vice Chancellor',
          // eslint-disable-next-line global-require
          src: require('@/assets/faculty3.jpg'),
        },
        {
          name: 'Prof. Dr. A Ra Sivakumaran',
          degree: 'MA. PhD',
          prof: 'BU Head –Tamil Language and Culture Division',
          // eslint-disable-next-line global-require
          src: require('@/assets/team-3.jpg'),
        },
        {
          name: 'Michael Kanthakaran',
          degree: 'BA. BSc. PGD. MBA',
          prof: 'Business Development Manager',
          // eslint-disable-next-line global-require
          src: require('@/assets/faculty4.jpg'),
        },
        {
          name: 'Febrian Nishanthan',
          degree: 'BA. PGD. MA',
          prof: 'Chief Technology Officer',
          // eslint-disable-next-line global-require
          src: require('@/assets/team-1.jpg'),
        },
        {
          name: 'Regina Meganathan',
          degree: 'BSc. BA. PGD',
          prof: 'Social Media Officer',
          // eslint-disable-next-line global-require
          src: require('@/assets/team-2.jpg'),
        },
        {
          name: 'Brintha Ranja Kumar',
          degree: 'BA. PGD',
          prof: 'General Administrator',
          // eslint-disable-next-line global-require
          src: require('@/assets/team-3.jpg'),
        },
        {
          name: 'Dilaxshika Johnsan',
          degree: 'BA. PGD',
          prof: 'Admin Officer',
          // eslint-disable-next-line global-require
          src: require('@/assets/team-4.jpg'),
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
  border-radius: 100px;
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
