<template>
  <v-row id="screen4" class="theme--dark">
    <v-col cols="1"></v-col>
    <v-col
      cols="12"
      md="2"
      sm="12"
      v-for="item in collegeStatistics"
      :key="item.title"
    >
      <div class="screen4Card">
        <h2 class="centerClass">{{ item.title }}</h2>
        <hr
          role="separator"
          aria-orientation="horizontal"
          class="v-divider lineAdjust"
        />
        <h4 class="centerClass">{{ item.label }}</h4>
      </div>
    </v-col>
    <v-col cols="1"></v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    collegeStatistics: [
      {
        title: 19228,
        label: 'Success Stories',
      },
      {
        title: 9213,
        label: 'Courses',
      },
      {
        title: 1742,
        label: 'Happy Students',
      },
      {
        title: 67,
        label: 'Years Experience',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
#screen4 {
  // height: 40vh;
  min-height: 40vh;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  background-color: green;
  color: white;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto Slab", serif !important;
}
.screen4Card {
  display: flex;
  height: 15vh;
  flex-direction: column;
  justify-content: space-between;
}
.centerClass {
  text-align: center;
}
hr {
  width: 20%;
  margin: 0 auto;
  border-top: 5px solid aqua;
}
</style>
