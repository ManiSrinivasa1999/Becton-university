<template>
  <div class="latest-events">
    <v-container>
      <div class="align-center justify-center d-flex flex-column pa-0 ma-0">
        <span class="text-h4 pa-4 ma-4 font-weight-bold text-center">
          LATEST EVENTS
        </span>
      </div>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <template v-for="(Event, i) in Events">
          <v-col :key="i" cols="12" md="3" lg="2" sm="8">
            <v-card class="mb-4" v-if="$vuetify.breakpoint.lgAndUp">
              <v-img :src="Event.src" height="20vh"></v-img>
            </v-card>
            <v-card class="mb-4" v-if="$vuetify.breakpoint.mdOnly">
              <v-img :src="Event.src" height="15vh"></v-img>
            </v-card>
            <v-card class="mb-4" v-if="$vuetify.breakpoint.smAndDown">
              <v-img :src="Event.src" height="30vh"></v-img>
            </v-card>
            <div class="mt-4 event-details">
              <div class="font-weight-light sub-title mb-2">
                {{ Event.date }}
              </div>
              <v-divider></v-divider>
              <div class="font-weight-bold title mb-2 hover">
                {{ Event.name }}
              </div>
              <v-divider></v-divider>
              <div class="font-weight-light sub-title mt-2">
                {{ Event.type }}
              </div>
            </div>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'LatestEvents6',
  data() {
    return {
      Events: [
        {
          name: 'WEST MIDLANDS',
          type:
            'London College of Media West Midlands House Gipsy Lane, Willenhall West Midlands, WV13 2HA United Kingdom ',
          date: '20th May 2020',
          // eslint-disable-next-line global-require
          src: require('../../assets/event1-compressed.jpg'),
        },
        {
          name: 'EAST MIDLANDS',
          type:
            'Midlands College of Media Leicester Business Centre 111 Ross Walk Leicester Leicestershire LE4 5HH United Kingdom',
          date: '20th May 2019',
          // eslint-disable-next-line global-require
          src: require('../../assets/event3-compressed.jpg'),
        },
        {
          name: 'CONVOCATION IN LONDON, UK.',
          type:
            'UK Online Education & Training 100 High Street, Southgate London, N14 6BN United Kingdom ',
          date: '20th May 2020',
          // eslint-disable-next-line global-require
          src: require('../../assets/event2-compressed.jpg'),
        },
        {
          name: 'CENTRAL LONDON.',
          type:
            'Midlands college of Management 58 Underwood Road London E1 5AW United Kingdom',
          date: '20th May 2019',
          // eslint-disable-next-line global-require
          src: require('../../assets/latestevent.jpg'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.event-details {
  height: 230px;
}

.hover {
  height: 55px;
}
.hover:hover {
  color: green;
}

</style>
