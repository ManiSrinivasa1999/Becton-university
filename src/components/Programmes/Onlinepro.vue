<template>
  <div class="online-pros">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" md="12" lg="12" xl="10" sm="10">
          <v-row
            class="fill-height flex-md-column flex-lg-row"
          >
            <v-col cols="12" md="12" lg="6" xl="6">
              <v-img eager src="@/assets/onlinepro-compressed.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="6">
              <div class="text-h5 font-weight-bold ml-4 mt-4">
                ONLINE DEGREE PROGRAMS
              </div>
              <br />
              <p class="ml-4 text-subtitle">
                Beckton College is a modern College that combines
                practical methods and innovative approaches to the American and
                European system of education. The school came into existence as
                a result of a merger of what were the Beckton College
                and the European Beckton College, both of which have had
                a long tradition of providing interactive online education.<br /><br />
                The mission of Beckton College is to provide
                high-quality MBA, MSc, DBA and Ph.D. programs in multiple
                languages. Based on modern and efficient methods of education,
                which enable graduates to apply the acquired knowledge
                immediately into their professional life. <br /><br />Thanks to
                having interactive online education, Beckton College can
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
            class="fill-height mt-6 flex-md-column"
            align="center"
            justify="center"
          >
            <v-col cols="12" md="12" lg="6" xl="6">
              <v-img eager src="@/assets/enrich-compressed.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="6">
              <div class="text-h5 font-weight-bold ml-4 mb-4">
                HOW IS STUDYING AT BECKTON COLLEGE GOING TO ENRICH ME?
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
          >
            <v-col cols="12" md="12" lg="6" xl="6">
              <div class="text-h5 font-weight-bold ml-4 mb-4">
                HOW IS STUDYING AT BECKTON COLLEGE GOING TO ENRICH ME?
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
            <v-col cols="12" md="12" lg="6" xl="6">
              <v-img eager src="@/assets/enrich-compressed.jpg"></v-img>
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
