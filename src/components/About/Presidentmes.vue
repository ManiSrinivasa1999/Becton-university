<template>
  <div class="pres-mes">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" md="12" sm="10" lg="10" xl="10">
          <v-row class="fill-height pa-0 ma-0">
            <v-col cols="12" md="3" lg="3" xl="3" sm="10">
              <v-img eager src="@/assets/president.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="9">
              <div class="font-weight-bold  mt-4" :class="heading">
                PRESIDENT'S MESSAGE
              </div>
              <br />
              <p class="">
                 Becton University is a high quality progressive modern e
                learning university. Our aim is to create a friendly environment
                for people who decide to work hard on their professional and
                personal development. Nothing makes us happier and more
                satisfied than our students, lecturers, and employees being
                proud to be a part of Becton University.<br />
                <br />
                I am very honored to be the President of Becton University. The
                University as it is today is the result of the dedication that
                called for lots of energy, diligence, and enthusiasm of students
                and graduates; excellent support, care, and effort of staff and
                employees; passion and active involvement of many of our
                lecturers, partners, and other coworkers.<br />
                <br />
                Currently students from all over the world study in our
                interactive online diploma and degree programs provided in the
                English and Tamil languages. In the upcoming years, our plan is
                to expand and launch new specializations and languages of
                instruction to make it possible to study in a university of high
                quality at a reasonable price for anyone who wants to learn,
                develop and work on their future.<br />
                <br />
                We know that to achieve our goals, visions, and plans, we need
                to work hard, and we need to continually look for new methods
                and solutions, we need to follow current trends in education and
                information technology and not be afraid to take risks. That is
                why we support creative minds, ideas and commitment to others,
                and invest our profits to the development of new systems and
                study materials. <br />
                <br />Take the opportunity to explore what Becton University has
                to offer and what makes it unique. Do not hesitate to contact us
                with any questions - we will be happy to answer all your
                inquiries! <br />
                <br />I believe you will find the story of Becton University
                inspiring and become a part of it - because thanks to YOU we
                have the chance to grow and continue to make a difference!
                <br />
                <br />
                <b>
                  Sincerely,<br />
                  <br />
                  Dr Larry Adams <br />
                  <br />President of Becton University
                </b>
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Presidentmes',
  data() {
    return {
      heading: 'text-h5',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
