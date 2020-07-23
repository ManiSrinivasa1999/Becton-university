<template>
  <div class="post-pro-list">
    <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
      <v-col cols="10" md="10">
        <span class="font-weight-bold text-h5 ml-3">
          Master of Arts(MA)
        </span>
        <v-expansion-panels class="mt-4" focusable>
          <v-expansion-panel
            v-for="course in dropdown_arts"
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
                          standing. For more information visit College
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
                        standing. For more information visit College
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
                <v-btn color="success" to="/apply" class="mt-4" outlined>Apply Now</v-btn>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="10" md="10">
        <span class="font-weight-bold text-h5 ml-3">
          Master of Science(MSc)
        </span>
        <v-expansion-panels class="mt-4" focusable>
          <v-expansion-panel
            v-for="course in dropdown_science"
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
                          standing. For more information visit College
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
                        standing. For more information visit College
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
                <v-btn color="success" to="/apply" class="mt-4" outlined>Apply Now</v-btn>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="10" md="10">
        <span
          v-if="$vuetify.breakpoint.lgAndUp"
          class="font-weight-bold text-h5 ml-3"
        >
          Master of Businness Administration(MBA)
        </span>
        <span
          v-else-if="$vuetify.breakpoint.mdAndDown"
          class="font-weight-bold text-h5 ml-3"
        >
          Master of Businness <br /><span class="ml-3"
            >Administration(MBA)</span
          >
        </span>
        <v-expansion-panels class="mt-4" focusable>
          <v-expansion-panel v-for="course in dropdown_mba" :key="course.title">
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
                          standing. For more information visit College
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
                        standing. For more information visit College
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
                <v-btn color="success" to="/apply" class="mt-4" outlined>Apply Now</v-btn>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="10" md="10">
        <span class="font-weight-bold text-h5 ml-3">
          Master of Commerce(MCom)
        </span>
        <v-expansion-panels class="mt-4" focusable>
          <v-expansion-panel
            v-for="course in dropdown_mcom"
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
                          standing. For more information visit College
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
                        standing. For more information visit College
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
                <v-btn color="success" to="/apply" class="mt-4" outlined>Apply Now</v-btn>
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
  name: 'PostGrdProList',
  data() {
    return {
      dialog: false,
      dropdown_arts: [
        { text: 'MA in Tamil Education' },
        { text: 'MA in Tamil History' },
        { text: 'MA in Tamil Music' },
        { text: 'MA in Bharatanatya' },
        { text: 'MA in Yoga' },
      ],
      dropdown_science: [
        { text: 'MSc in Project Management' },
        { text: 'MSc in Media Management' },
        { text: 'MSc in Strategic IT Management' },
        { text: 'MSc in International Tourism Management' },
        { text: 'MSc in Hospitality Management' },
      ],
      dropdown_mba: [{ text: 'Master of Bussiness Administration' }],
      dropdown_mcom: [{ text: 'Master of Commerce' }],
    };
  },
};
</script>

<style lang="scss" scoped></style>
