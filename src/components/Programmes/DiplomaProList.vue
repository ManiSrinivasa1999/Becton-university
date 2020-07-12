<template>
  <div class="diploma-pro-list">
    <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
      <v-col cols="10" md="10">
        <span class="font-weight-bold text-h5 ml-3">
          Diploma
        </span>
        <v-overflow-btn
          v-model="selected"
          class="my-2"
          :items="dropdown_edit"
          label="Search"
          editable
          item-value="text"
          width="100%"
        ></v-overflow-btn>
        <v-expansion-panels focusable>
          <v-expansion-panel
            v-for="course in dropdown_edit"
            :key="course.title"
          >
            <v-expansion-panel-header>
              {{ course.text }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-if="$vuetify.breakpoint.smAndDown">
                <h3 class="display mb-3">Overview</h3>
                <p>This is the overview of course {{ course.text }}</p>
              </div>
              <div v-if="$vuetify.breakpoint.mdAndUp">
                {{ course.info }}
                <div class="ma-6">
                  <v-btn
                    color="info"
                    class="pa-auto ma-auto"
                    @click.stop="dialog = true"
                    outlined
                  >
                    More info
                  </v-btn>
                  <v-dialog v-model="dialog" max-width="1000px">
                    <v-card>
                      <v-card-text>
                        <span class="text-h4">Overview</span>
                        <p class="mt-4">
                          Diploma in Accounting and Finance qualification is to
                          provide learners with an understanding of:<br />
                          contemporary and specialised approaches to accountancy
                          and finance <br />key practical, theoretical and
                          empirical issues, and academic research the
                          <br />complexity of the ever-changing legal framework
                          in which the financial sector operates <br />the
                          latest developments in accountancy and reporting
                          required by local, national and European government.
                          <br />
                          <br />This qualification is designed for learners who
                          wish to pursue a career in the financial services
                          industry, professional accountancy, banking and
                          finance or management. The qualification equips
                          learners with the essential skills and knowledge
                          needed to pursue high careers in all types of
                          organisations in the public and private sector and
                          within industry and commerce, both in the UK and
                          abroad. Accounting and Finance qualification also
                          provides learners with the opportunity to work toward
                          a relevant master’s programme with advanced standing.
                        </p>
                      </v-card-text>
                      <v-card-text>
                        <span class="text-h4">Entry Requirements</span>
                        <p class="mt-4">
                          Diploma in Accounting and Finance qualification,
                          learners must possess:
                          <br />
                          An honours degree in related subject or UK 6 diploma
                          or an equivalent overseas qualification <br />Mature
                          learners (over 21) with management experience
                          (learners must check with the delivery centre
                          regarding this experience prior to registering for the
                          programme) <br />Learner must be 18 years or older at
                          the beginning of the course <br />English
                          requirements: If a learner is not from a majority
                          English-speaking country must provide evidence of
                          English language competency. For more information
                          visit English Language Expectations page in this
                          website..
                        </p>
                      </v-card-text>
                      <v-card-text>
                        <span class="text-h4">Equivalences</span>
                        <p class="mt-4">
                          represent practical knowledge, skills, capabilities
                          and competences that are assessed in academic terms as
                          being equivalent to Master’s Degrees, Integrated
                          Master’s Degrees, Postgraduate Diplomas, Postgraduate
                          Certificate in Education (PGCE) and Postgraduate
                          Certificates.
                        </p>
                      </v-card-text>
                      <v-card-text>
                        <span class="text-h4">Qualification Structure</span>
                        <p class="mt-4">
                          Diploma in Accounting and Finance qualification
                          consists of 6 mandatory units for a combined total of
                          120 credits, 1200 hours Total Qualification Time (TQT)
                          and 600 Guided Learning Hours (GLH) for the completed
                          qualification.
                        </p>
                      </v-card-text>
                      <v-card-text>
                        <span class="text-h4">Mandatory units</span>
                        <p class="mt-4">
                          Investment Analysis (20 credits)<br />
                          Corporate Social Responsibility and Governance (20
                          credits)<br />
                          Global Finance and Strategy (20 credits)<br />
                          Strategic Financial Management (20 credits)<br />
                          Strategic Audit (20 credits)<br />
                          Corporate Reporting (20 credits)<br />
                        </p>
                      </v-card-text>
                      <v-card-text>
                        <span class="text-h4">Duration and delivery</span>
                        <p class="mt-4">
                          The qualification is designed to be delivered over one
                          academic year for full-time study, but it is also
                          flexible in its delivery in order to accommodate
                          part-time and distance learning. The qualification is
                          delivered face-to-face, through lectures, tutorials,
                          seminars, distance, online by approved centres only.
                        </p>
                      </v-card-text>
                      <v-card-text>
                        <span class="text-h4">Assesment and Verfication </span>
                        <p class="mt-4">
                          All units within this qualification are internally
                          assessed by the centre and externally verified by GTU.
                          The qualifications are criterion referenced, based on
                          the achievement of all the specified learning outcomes
                          To achieve a ‘pass’ for a unit, learners must provide
                          evidence to demonstrate that they have fulfilled all
                          the learning outcomes and meet the standards specified
                          by all assessment criteria. Judgement that the
                          learners have successfully fulfilled the assessment
                          criteria is made by the Assessor. The Assessor should
                          provide an audit trail showing how the judgement of
                          the learners’ overall achievement has been arrived at.
                        </p>
                      </v-card-text>
                      <v-card-text>
                        <span class="text-h4">Progressions </span>
                        <p class="mt-4">
                          Diploma in Accounting and Finance qualification
                          enables learners to progress into or within employment
                          and/or continue their further study. As this
                          qualification is approved and regulated, learners are
                          eligible to progress to master’s top-up programmes at
                          many universities in the UK and overseas with advanced
                          standing. For more information visit University
                          Progressions page in this website.
                        </p>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                          color="green darken-1"
                          text
                          @click="dialog = false"
                        >
                          Close
                        </v-btn>

                        <v-btn
                          color="green darken-1"
                          text
                          @click="dialog = false"
                          to="/apply"
                        >
                          Apply
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn
                    to="/apply"
                    color="success"
                    class="pa-auto ma-auto ml-4"
                    outlined
                  >
                    I Want to Study
                  </v-btn>
                </div>
              </div>
              <div v-if="$vuetify.breakpoint.smAndDown">
                <v-btn color="info" to="/apply" outlined>Apply Now</v-btn>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'DiplomaProList',
  data() {
    return {
      dialog: false,
      selected: '',
      dropdown_edit: [
        {
          text: 'Diploma in Business Management',
          info:
            'This qualification is designed for learners who wish to pursue a career in the financial services industry, professional accountancy, banking and finance or management. The qualification equips learners with the essential skills and knowledge needed to pursue high careers in all types of organisations in the public and private sector and within industry and commerce, both in the UK and abroad. Accounting and Finance qualification also provides learners with the opportunity to work toward a relevant master’s programme with advanced standing.',
        },
        {
          text: 'Diploma in Accounting and Finance Management',
          info:
            'This qualification is designed for learners who wish to pursue a career in the financial services industry, professional accountancy, banking and finance or management. The qualification equips learners with the essential skills and knowledge needed to pursue high careers in all types of organisations in the public and private sector and within industry and commerce, both in the UK and abroad. Accounting and Finance qualification also provides learners with the opportunity to work toward a relevant master’s programme with advanced standing.',
        },
        {
          text: 'Diploma in Education and Training Management ',
          info:
            'Diploma in Education Management and Leadership qualification is to develop learners’ understanding of policy, management theory and practice in education. It provides learners with an opportunity to engage with the challenges facing professionals and policy makers in their own country. It will provide knowledge that underpins the ability to work as an effective manager in the education sector. It combines both theoretical and practical knowledge in the education profession and will develop and enhance knowledge and skills in the areas of leading change, effective performance and team leadership. Learners will be able to work in a variety of roles within education administration and/or management.',
        },
        {
          text: 'Diploma in Health and Social Care Management',
          info:
            'Diploma in Education Management and Leadership qualification is to develop learners’ understanding of policy, management theory and practice in education. It provides learners with an opportunity to engage with the challenges facing professionals and policy makers in their own country. It will provide knowledge that underpins the ability to work as an effective manager in the education sector. It combines both theoretical and practical knowledge in the education profession and will develop and enhance knowledge and skills in the areas of leading change, effective performance and team leadership. Learners will be able to work in a variety of roles within education administration and/or management.',
        },
        {
          text: 'Diploma in Human Resource Management',
          info:
            'Diploma in Human Resource Management qualification is to provide learners with the skills and understanding in human resource management (HRM) that align with good strategic decision making to maintain organisations’ competitive advantage. Learners acquire knowledge through an integrated approach of theory in human resource management and practice using real-time activities. Successful completion of this qualification will develop learners’ strategic human resource management and leadership skills and their ability to focus on the requirements of implementing an organisation’s strategy. Human Resource Management qualification enables learners to progress into or within employment and/or to work toward a relevant Master’s programme with advanced standing.',
        },
        {
          text: 'Diploma in Logistics and Supply Chain Management',
          info:
            'Diploma in Logistics and Supply Chain Management qualification is to broaden learners’ understanding of logistics and supply chain management and is designed for those who wish to prepare for a first professional role and future career in the field. It is also suitable for logistics and supply chain professionals in the early stages of their career looking to enhance their knowledge and skills and move to the next professionally. Successful completion of this qualification will equip learners with the specialist knowledge and skills needed to further their career as a logistics and supply chain professional as well as the opportunity to embark on further study towards a relevant Master’s programme with advanced standing.',
        },
        {
          text: 'Diploma in Travel and Tourism Management',
          info:
            'Diploma in Tourism and Hospitality Management qualification is to provide tourism industry professionals with the specialist knowledge needed to advance their careers, or for graduates entering the tourism and hospitality sector to gain the skills needed to manage business operations. The qualification provides learners with a contemporary, critical, and international programme that supports their development as managers with a lifelong-learning orientation. The qualification enables learners to analyse complex management problems and to apply and adapt specialist skills and technical terminology to propose solutions to these problems informed by best practice and contemporary research. Successful completion of this qualification will enable learners to progress into or within employment and/or continue their study towards a relevant Master’s programme with advanced standing.',
        },
        {
          text: 'Diploma in Hospitality and Management',
          info:
            'Diploma in Tourism and Hospitality Management qualification is to provide tourism industry professionals with the specialist knowledge needed to advance their careers, or for graduates entering the tourism and hospitality sector to gain the skills needed to manage business operations. The qualification provides learners with a contemporary, critical, and international programme that supports their development as managers with a lifelong-learning orientation. The qualification enables learners to analyse complex management problems and to apply and adapt specialist skills and technical terminology to propose solutions to these problems informed by best practice and contemporary research. Successful completion of this qualification will enable learners to progress into or within employment and/or continue their study towards a relevant Master’s programme with advanced standing.',
        },
        {
          text: 'Diploma in Information and Technology Management',
          info:
            'Diploma in Information Technology is designed to ensure that each learner is a confident, independent thinker with a detailed knowledge of Information Technology, and equipped with the skills to adapt rapidly to change at a junior or middle management and aspiring into higher management within their organisation or industry. The qualification is ideal for those who have started, or are planning to move into, a career in private or public sector business.',
        },
        {
          text: 'Diploma in Creative Media and Management',
          info:
            'Diploma in Education Management and Leadership qualification is to develop learners’ understanding of policy, management theory and practice in education. It provides learners with an opportunity to engage with the challenges facing professionals and policy makers in their own country. It will provide knowledge that underpins the ability to work as an effective manager in the education sector. It combines both theoretical and practical knowledge in the education profession and will develop and enhance knowledge and skills in the areas of leading change, effective performance and team leadership. Learners will be able to work in a variety of roles within education administration and/or management.',
        },
        {
          text: 'Diploma in Tamil Education',
          info:
            'Diploma in Education Management and Leadership qualification is to develop learners’ understanding of policy, management theory and practice in education. It provides learners with an opportunity to engage with the challenges facing professionals and policy makers in their own country. It will provide knowledge that underpins the ability to work as an effective manager in the education sector. It combines both theoretical and practical knowledge in the education profession and will develop and enhance knowledge and skills in the areas of leading change, effective performance and team leadership. Learners will be able to work in a variety of roles within education administration and/or management.',
        },
        {
          text: 'Diploma in Tamil History',
          info:
            'Diploma in Education Management and Leadership qualification is to develop learners’ understanding of policy, management theory and practice in education. It provides learners with an opportunity to engage with the challenges facing professionals and policy makers in their own country. It will provide knowledge that underpins the ability to work as an effective manager in the education sector. It combines both theoretical and practical knowledge in the education profession and will develop and enhance knowledge and skills in the areas of leading change, effective performance and team leadership. Learners will be able to work in a variety of roles within education administration and/or management.',
        },
        {
          text: 'Diploma in Tamil Music',
          info:
            'Diploma in Education Management and Leadership qualification is to develop learners’ understanding of policy, management theory and practice in education. It provides learners with an opportunity to engage with the challenges facing professionals and policy makers in their own country. It will provide knowledge that underpins the ability to work as an effective manager in the education sector. It combines both theoretical and practical knowledge in the education profession and will develop and enhance knowledge and skills in the areas of leading change, effective performance and team leadership. Learners will be able to work in a variety of roles within education administration and/or management.',
        },
        {
          text: 'Diploma in Bharatanatya',
          info:
            'Diploma in Education Management and Leadership qualification is to develop learners’ understanding of policy, management theory and practice in education. It provides learners with an opportunity to engage with the challenges facing professionals and policy makers in their own country. It will provide knowledge that underpins the ability to work as an effective manager in the education sector. It combines both theoretical and practical knowledge in the education profession and will develop and enhance knowledge and skills in the areas of leading change, effective performance and team leadership. Learners will be able to work in a variety of roles within education administration and/or management.',
        },
        {
          text: 'Diploma in Yoga',
          info:
            'Diploma in Education Management and Leadership qualification is to develop learners’ understanding of policy, management theory and practice in education. It provides learners with an opportunity to engage with the challenges facing professionals and policy makers in their own country. It will provide knowledge that underpins the ability to work as an effective manager in the education sector. It combines both theoretical and practical knowledge in the education profession and will develop and enhance knowledge and skills in the areas of leading change, effective performance and team leadership. Learners will be able to work in a variety of roles within education administration and/or management.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
