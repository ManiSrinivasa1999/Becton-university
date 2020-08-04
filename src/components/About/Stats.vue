<template>
  <div class="stats">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" justify="center" align="center">
        <v-col cols="12" lg="12" xl="10">
          <div class="pa-4">
            <p class="text-h6 text-center">
              Beckton College’s formula has proven a great success over the
              years. It is efficient, student-oriented, and can be transmitted
              from any computer terminal anywhere in the world. That is why this
              formula is now being championed by numerous online educational
              institutions around the world.
            </p>
          </div>
        </v-col>
        <v-row class="fill-height pa-0 ma-0" justify="center" align="center">
          <v-col cols="12" lg="12" xl="10">
            <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
              <template v-for="(item, i) in items">
                <v-col cols="12" xl="4" lg="4" md="6" sm="8" :key="i">
                  <div class="text-center cm-hg ma-4">
                    <v-icon class="icon" color="success">
                      {{ item.icon }}
                    </v-icon>
                  </div>
                  <div class="text-h4 text-center cm-h">
                    {{ item.number }}
                  </div>
                  <div class="text-h6 text-center mb-4">
                    {{ item.title }}
                  </div>
                  <v-divider></v-divider>
                  <div v-if="$vuetify.breakpoint.mdAndUp">
                    <div class="text-subtitle text-center text-hg">
                      {{ item.text }}
                    </div>
                  </div>
                  <div v-else>
                    <div class="text-subtitle text-center">
                      {{ item.text }}
                    </div>
                  </div>
                </v-col>
              </template>
            </v-row>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Stats',
  data() {
    return {
      items: [
        {
          icon: 'fas fa-comment-dollar',
          title: 'Low Fee',
          number: '$1.5K',
          text:
            'Pay fee in easy (Interest free) instalments. You can choose from UK online education payments options.',
        },
        {
          icon: 'fas fa-blog',
          title: 'Online and flexible',
          number: '50+',
          text:
            'Study anytime, anywhere - You dont have to attend a College campus so you can study from anywhere in the world. You can download & submit assignments - 100% online.',
        },
        {
          icon: 'fas fa-route',
          title: 'UK Diploma Online Professional Education',
          number: '15+',
          text:
            'Assignments based - no exams for UK diploma All modules are assessed via submission of assignments - there are no exams.',
        },
        {
          icon: 'fas fa-users',
          title: 'UK Accredited Diploma',
          number: '50+',
          text:
            'Beckton Colleges Bachelor and Master Affordable, Accredited and 100% Online Education',
        },
        {
          icon: 'fas fa-map-marked-alt',
          title: 'Athletic Championships',
          number: '270+',
          text: 'Beckton College 270+ Athletic Championships',
        },
        {
          icon: 'fas fa-object-group',
          title: 'Thousand Alumni',
          number: '500+',
          text: 'Beckton College 500+ Thousand Alumni',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.icon {
  height: 60px;
  width: 60px;
}
// common height
.cm-hg {
  height: 60px;
}

.text-hg {
  height: 120px;
}

</style>
