<template>
  <div class="modules">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" lg="10" xl="10" md="12" sm="10">
          <v-row class="fill-height pa-0 ma-0">
            <v-col cols="12" xl="2" lg="4" md="6">
              <v-img eager src="@/assets/modules-compressed.jpg"></v-img>
            </v-col>
            <v-col cols="12" xl="9" lg="8" md="6">
              <div class="font-weight-bold ml-4 mt-4" :class="heading">
                MODULES
              </div>
              <br />
              <p class="ml-4">
                All of our distance learning courses have been designed to the
                most exacting standards, in accordance with the most stringent
                criteria, in order to provide outstanding education at an
                affordable price while ensuring that individual needs are met
                and that your distance learning experience is both enjoyable and
                beneficial. Our modules are your own personal tutor at home.<br /><br />
                Becton University’s unique, style of distance learning is called
                directed coursework study . This means that you study on your
                own, either at home or wherever suits you with regular ongoing
                support from your designated supervisor.<br /><br />
                You will be taught through printed modules – study materials,
                specially written textbooks or workbooks, audio CDs and video
                DVDs.<br /><br />
              </p>
            </v-col>
          </v-row>
           <v-row class="fill-height pa-0 ma-0">
            <v-col cols="12" xl="11">
              <p>
                When your program starts, you’ll receive your modules by post.
                /courier .Effective 1st of January 2020, the Becton University
                modules have been available to students in e-format and may be
                sent to you as PDF attachments to your emails.
                <br /><br />
                You will purchase the modules at $50.00 per module and they are
                yours to keep and to refer to whenever you wish.<br /><br />
                All modules will direct you to the relevant websites where
                additional resources will be available. Sometime there will be
                books you have to buy yourself or borrow from a local library.
                If required we are happy to do this on your behalf. You’ll get a
                study timetable that will help you plan your reading, and
                assignments due dates.<br /><br />
                With our unique, world-leading style of distance learning,
                Becton University enables you to study from home, work or even
                on the move, at a time that suits you. With a wide choice of
                qualifications, at undergraduate and postgraduate level, Becton
                University offers the choice and flexibility you need.<br /><br />
                “The level of support is fantastic and the modules are
                brilliant. It’s such a wonderful learning experience”
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
  name: 'Modules',
  data() {
    return {
      heading: 'text-h5',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
