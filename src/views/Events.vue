<template>
  <div class="gallery">
    <CommonBanner1 pageHeading="Events" caption="Events" />
    <v-container>
      <v-row class="fill-height pa-0 ma-0 mt-10" align="center" justify="center">
        <v-col cols="12" md="6" lg="4" xl="3" sm="6" v-for="(item, i) in items" :key="i">
          <div class="hg-wd mx-auto" max-width="400">
            <v-img eager class="mx-auto" :src="item.img" height="250" max-width="300">
            </v-img>
            <div class="text-center">
              <div class="font-weight-bold title mb-2 green--text mt-2">
                {{ item.title }}
              </div>
              <div class="font-weight-light sub-title mb-2">
                {{ item.text }}
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CommonBanner1 from '@/components/CommonBanner1.vue';

export default {
  name: 'Gallery',
  components: {
    CommonBanner1,
  },
  data: () => ({
    height: 0,
    items: [
      {
        title: 'Graduation Ceremony at BC, December 2019',
        text:
          'Have a look at the most captivating moments from our Graduation Ceremony, where we handed out diplomas to our successful graduates.',
        // eslint-disable-next-line global-require
        img: require('@/assets/event3.jpg'),
      },
      {
        title: 'BC Awards, December 2019',
        text:
          'Have a look at the most captivating moments from our BC Awards, where we handed out awards to our successful students.',
        // eslint-disable-next-line global-require
        img: require('@/assets/gallery_pic2.jpg'),
      },
      {
        title: 'Graduation Ceremony at BC, March 2020',
        text:
          'Have a look at the most captivating moments from our Graduation Ceremony, where we handed out diplomas to our successful graduates.',
        // eslint-disable-next-line global-require
        img: require('@/assets/event.jpg'),
      },
      {
        title: 'BC Awards, March 2020',
        text:
          'Have a look at the most captivating moments from our BC Awards, where we handed out awards to our successful students.',
        // eslint-disable-next-line global-require
        img: require('@/assets/gallery_pic8.jpg'),
      },
      {
        title: 'Graduation Ceremony at BC, May 2020',
        text:
          'Have a look at the most captivating moments from our Graduation Ceremony, where we handed out diplomas to our successful graduates.',
        // eslint-disable-next-line global-require
        img: require('@/assets/gallery_pic5.jpg'),
      },
      {
        title: 'BC Awards, May 2020',
        text:
          'Have a look at the most captivating moments from our BC Awards, where we handed out awards to our successful students.',
        // eslint-disable-next-line global-require
        img: require('@/assets/gallery_pic6-compressed.jpg'),
      },
      {
        title: 'Graduation Ceremony at BC, June 2020',
        text:
          'Have a look at the most captivating moments from our Graduation Ceremony, where we handed out diplomas to our successful graduates.',
        // eslint-disable-next-line global-require
        img: require('@/assets/gallery_pic7-compressed.jpg'),
      },
      {
        title: 'BC Awards, June 2020',
        text:
          'Have a look at the most captivating moments from our BC Awards, where we handed out awards to our successful students.',
        // eslint-disable-next-line global-require
        img: require('@/assets/gallery_pic4-compressed.jpg'),
      },
    ],
    transparent: 'rgba(255, 255, 255, 0)',
  }),
};
</script>

<style lang="scss" scoped>

.screen1 {
  background-image: url('../assets/gallery-banner.jpg');
}

.hg-wd {
  height: 450px;
  width: 300px;
}

</style>
