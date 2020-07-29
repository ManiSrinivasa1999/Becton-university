<template>
  <div class="distancing">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" lg="10" xl="10" sm="10" md="12">
          <v-row class="fill-height pa-0 mt-16" align="center" justify="center">
            <v-col cols="12" md="6">
              <v-img eager src="@/assets/distance.jpg" height="280px"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="font-weight-bold" :class="heading">
                WHY DISTANCE LEARNING?
              </div>
              <br />
              <p>
                Very few people can afford to give up work to start studying,
                and with College fees at an all-time high, learning via
                traditional methods is beyond reach for many.<br /><br />
                This exciting alternative in higher education holds for you the
                promise of professional and personal growth without any limits
                or boundaries.
              </p>
            </v-col>
          </v-row>
          <v-row
            v-if="$vuetify.breakpoint.smAndDown"
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-col cols="12">
              <v-img eager src="@/assets/bu-compressed.jpg"></v-img>
            </v-col>
            <v-col cols="12">
              <div class="font-weight-bold" :class="heading">
                LIFE AT BECKTON COLLEGE
              </div>
              <br />
              <p class="text-subtitle">
                Beckton College provides a warm and vibrant environment for students from
                all walks of life.
                The student will find the learning experience relaxed and enjoyable and
                that it will stimulate and stretch mental ability. Leicester is an exciting and
                diverse city with its many shopping areas including the High cross and Haymarket
                shopping centres, Leicester has something for all tastes.<br /><br />
                There is a vast choice of bars and restaurants to enjoy and plenty of
                entertainment available at the various cinemas and theatres around the city.
                Because the city has such a diverse culture it hosts events such as the
                Caribbean Carnival,
                Diwali lights and the Summer Sundae music festival. It is also home
                to the National Space Centre.<br />
                We look forward to welcoming you and helping you to achieve your
                learning objectives.
              </p>
            </v-col>
          </v-row>
          <v-row
            v-if="$vuetify.breakpoint.mdAndUp"
            class="fill-height pa-0 mt-16"
          >
            <v-col cols="12" md="6">
              <div class="font-weight-bold mb-4" :class="heading">
                LIFE AT BECKTON COLLEGE
              </div>
              <br />
              <p class="text-subtitle">
                Beckton College provides a warm and vibrant environment for students from
                all walks of life.
                The student will find the learning experience relaxed and enjoyable and
                that it will stimulate and stretch mental ability. Leicester is an exciting and
                diverse city with its many shopping areas including the High cross and Haymarket
                shopping centres, Leicester has something for all tastes.<br /><br />
                There is a vast choice of bars and restaurants to enjoy and plenty of
                entertainment available at the various cinemas and theatres around the city.
                Because the city has such a diverse culture it hosts events such as the
                Caribbean Carnival,
                Diwali lights and the Summer Sundae music festival. It is also home
                to the National Space Centre.<br />
                We look forward to welcoming you and helping you to achieve your
                learning objectives.
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <v-img eager src="@/assets/bu-compressed.jpg" height="330px"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Distancing4',
  data() {
    return {
      heading: 'text-h5',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
