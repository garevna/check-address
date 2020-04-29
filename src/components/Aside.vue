<template>
  <v-card
        flat
        class="aside-card transparent mx-3"
        width="480"
  >
    <v-card-title>
      <h2>Our Offer To The Community</h2>
    </v-card-title>
    <v-card-text>
      <p>
        DGtek wants to help you adjust to the new normal.<br>
        That’s why we are giving away ultra-fast fibre connections - for free. No strings attached.<br>
        No clauses or contracts.
      </p>
    </v-card-text>
    <v-card-text>
      <p style="margin-left: 0!important">
        <b>Exactly what’s on offer:</b>
      </p>
      <h5>500/500 Mbps</h5>
      <h5>6 months <span class="red--text">of free internet*</span></h5>
      <h5>3 months <span class="red--text">of free internet**</span></h5>
    </v-card-text>
    <v-card-text>
      <p class="small">
        *to pensioners, retirees and residents in aged care facilities<br>
        **to all families impacted by COVID-19
      </p>
    </v-card-text>
  </v-card>
</template>

<style scoped>

.aside-card {
  padding-top: 150px;
}

h2 {
  color: #1A1A1A;
  letter-spacing: 0.1rem;
}
h4 {
  color: #665566;
}
.red--text {
  color: #F54436;
}
p {
  color: #665566;
}
.small {
  font-size: 14px;
}

@media screen and (max-width: 900px) {
  .aside-card {
    margin-top: -180px;
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 600px) {
  .aside-card {
    margin-top: -90px;
    margin-bottom: 80px;
  }
}

</style>
