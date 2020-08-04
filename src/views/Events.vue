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
        title: 'Graduation Ceremony 2020',
        text:
          'Have a look at the most captivating moments from our Graduation Ceremony, where we handed out diplomas to our successful graduates.',
        // eslint-disable-next-line global-require
        img: require('@/assets/event3.jpg'),
      },
      {
        title: 'BU Awards 2020',
        text:
          'BU College is not just about students, but also about employees that take care of them from a beautiful island Oahu! Since life is not all about work and no fun',
        // eslint-disable-next-line global-require
        img: require('@/assets/gallery_pic2.jpg'),
      },
      {
        title: 'Graduation Ceremony 2020',
        text:
          'What a great atmosphere we have had at the 2020 Graduation Ceremony! We are glad that graduates, their families and loved ones celebrated it in the best way possible.',
        // eslint-disable-next-line global-require
        img: require('@/assets/event.jpg'),
      },
      {
        title: 'BU Awards 2020',
        text:
          'Gala evening BU Awards 2020 took place in Clarion Congress Hotel Prague, Czech Republic on the 31st January, 2020.',
        // eslint-disable-next-line global-require
        img: require('@/assets/gallery_pic4-compressed.jpg'),
      },
      {
        title: 'Graduation Ceremony, June 2020',
        text:
          'Photos capturing lovely moments from the graduation ceremony that took place at Pruhonice Castle, Czech Republic in June 2020.',
        // eslint-disable-next-line global-require
        img: require('@/assets/gallery_pic5.jpg'),
      },
      {
        title: 'BU Awards 2020',
        text:
          'Photos from the BU AWARDS 2020 gala evening that took place at Clarion Congress Hotel Prague on the 1st February, 2020.',
        // eslint-disable-next-line global-require
        img: require('@/assets/gallery_pic6-compressed.jpg'),
      },
      {
        title: 'Graduation ceremony at BU College, June 2020',
        text:
          'Have a look at the most captivating moments from our Graduation Ceremony, where we handed out diplomas to our successful graduates.',
        // eslint-disable-next-line global-require
        img: require('@/assets/gallery_pic7-compressed.jpg'),
      },
      {
        title: 'BU Awards 2020',
        text:
          'Photos from the BU AWARDS 2015 gala evening that took place in Clarion Congress Hotel Prague on the 4th February, 2020.',
        // eslint-disable-next-line global-require
        img: require('@/assets/gallery_pic8.jpg'),
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
