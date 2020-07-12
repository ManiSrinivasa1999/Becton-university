<template>
  <div class="online-pros">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="10" md="10">
          <v-row lass="fill-height" align="center" justify="center">
            <v-col cols="12" md="6">
              <v-img src="@/assets/onlinepro.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-h5 font-weight-bold ml-4 mt-4">
                ONLINE DEGREE PROGRAMS
              </div>
              <br />
              <p class="ml-4 text-subtitle">
                Becton University is a modern university that combines
                practical methods and innovative approaches to the American and
                European system of education. The school came into existence as
                a result of a merger of what were the Becton University
                and the European Becton University, both of which have had
                a long tradition of providing interactive online education.<br /><br />
                The mission of Becton University is to provide
                high-quality MBA, MSc, DBA and Ph.D. programs in multiple
                languages. Based on modern and efficient methods of education,
                which enable graduates to apply the acquired knowledge
                immediately into their professional life. <br /><br />Thanks to
                having interactive online education, Becton University can
                truly be international. Students from all over the world are
                welcome to enroll in our programs! Moreover, the faculty is also
                an international one with lecturers coming from and living in
                the U.S., Europe, Australia and Asia. Come and join our
                international community!
              </p>
            </v-col>
          </v-row>
          <v-row
            v-if="$vuetify.breakpoint.mdAndDown"
            class="fill-height mt-6"
            align="center"
            justify="center"
          >
            <v-col cols="12" md="6">
              <v-img src="@/assets/enrich.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-h5 font-weight-bold ml-4 mb-4">
                HOW IS STUDYING AT BECTON UNIVERSITY GOING TO ENRICH ME?
              </div>
              <p class="ml-4 text-subtitle">
                Skills and knowledge immediately applicable into practice<br /><br />
                New information and know-how from the important fields
                <br /><br />Way-out from the personal and professional
                stagnation <br /><br />Competitive advantage over others<br /><br />
                The chance for career advancement <br /><br />Prerequisite for
                higher evaluation at work<br /><br />
                Modern way of education <br /><br />Quality education
              </p>
            </v-col>
          </v-row>
          <v-row
            v-if="$vuetify.breakpoint.lgAndUp"
            class="fill-height mt-6"
            align="center"
            justify="center"
          >
            <v-col cols="12" md="6">
              <div class="text-h5 font-weight-bold ml-4 mb-4">
                HOW IS STUDYING AT BECTON UNIVERSITY GOING TO ENRICH ME?
              </div>
              <p class="ml-4 text-subtitle">
                Skills and knowledge immediately applicable into practice<br /><br />
                New information and know-how from the important fields
                <br /><br />Way-out from the personal and professional
                stagnation <br /><br />Competitive advantage over others<br /><br />
                The chance for career advancement <br /><br />Prerequisite for
                higher evaluation at work<br /><br />
                Modern way of education <br /><br />Quality education
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <v-img src="@/assets/enrich.jpg"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Onlinepro',
};
</script>

<style lang="scss" scoped>

</style>
