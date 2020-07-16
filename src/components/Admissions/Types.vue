<template>
  <div class="types">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <template v-for="(item, i) in items">
          <v-col :key="i" cols="12" md="6" lg="6" xl="3" sm="10">
            <div class="mt-4 item-details text-center">
              <div class="font-weight-bold hover text-h4 mb-2 hg">
                {{ item.title }}
              </div>
              <div class="font-weight-light sub-title mb-2 hg">
                {{ item.subtitle }}
              </div>
              <v-divider></v-divider>
              <div
                class="font-weight-bold text-h3 mt-4 mb-4 hg hover"
              >
                {{ item.price }}
              </div>
              <v-divider></v-divider>
              <div
                class="font-weight-light text-h6 mt-4 black--text text-hg"
              >
                {{ item.text }}
              </div>
              <v-btn x-large color="success" to="/apply" dark width="50%">
                Apply Now
              </v-btn>
            </div>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Types',
  data() {
    return {
      items: [
        {
          title: 'Diploma',
          subtitle: 'and all Diploma Programs',
          price: '$2000*',
          text:
          '$2000.00* for the full diploma programme regardless of duration (programme fees $1500.00 plus $500.00 supervisor’s professional fees)',
        },
        {
          title: 'Undergraduate',
          subtitle: 'and all Undergraduate Programs',
          price: '$5000*',
          text:
          '$5000.00* for the full degree programme regardless of duration (programme fees $4000.00 plus $1000.00 supervisor’s professional fees)',
        },
        {
          title: 'Post Graduate',
          subtitle: 'and all Post Graduate Programs',
          price: '$4000*',
          text:
          '$4000.00* for the full degree programme regardless of duration (programme fees $3000.00 plus $1000.00 supervisor’s professional fees)',
        },
        {
          title: 'Doctorate',
          subtitle: 'and all Doctorate Programs',
          price: '$6000*',
          text:
          '$6000.00* for the full doctorate programme regardless of duration (programme fees $5000.00 plus $1000.00 supervisor’s professional fees)',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.text-hg {
  height: 150px;
}

.hover:hover {
  color: green;
}

</style>
