<template>
  <v-container fluid class="header-back ma-0 pa-0">
    <v-img :src="headerBackImage" :height="headerHeight" :position="headerBackPosition" class="mx-0 px-0">
      <v-row class="mx-0 px-0">
        <v-col cols="12" lg="6" class="mx-0 px-0">
          <v-card flat class="header-card transparent">
            <v-card-title class="mx-0">
              <h1>
                Helping The Community
              </h1>
            </v-card-title>
            <v-card-text class="mx-0">
              <h5>
                The COVID-19 pandemic is the defining challenge of our generation. Here’s how we’re helping.<br>
                500/500 Mbps Unlimited Internet. For Free.
              </h5>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" class="mx-0 px-0 mt-12">
          <v-card flat class="transparent mx-auto my-12 py-12 text-center">
            <v-img
                  src="@/img/top-picture.png"
                  class="picture">
            </v-img>
          </v-card>

        </v-col>
      </v-row>
    </v-img>

  </v-container>
</template>

<style scoped>

.header-back {
  overflow: hidden;
}

.header-card {
  margin-left: 130px!important;
  margin-top: 300px;
  width: 108%;
}

h1 {
  width: 110%;
  text-align: left;
  letter-spacing: 0.16rem;
}

h5 {
  color: #FFFFFF;
  text-align: left;
  letter-spacing: 0.1rem;
}

.picture {
  width: 80%;
  position: absolute;
  right: 44px;
  top: 40%;
}

  @media screen and (min-width: 2600px) {
    h1 { font-size: 72px; }
    h5 { font-size: 40px; }
    .header-card {
      margin-left: 30%!important;
      margin-top: 20%;
      width: 80%;
    }
    .picture {
      width: 900px;
      position: absolute;
      right: 200px;
      top: 0;
    }
  }

  @media screen and (max-width: 900px) {
    h1, h5 { text-align: center; }
    .header-card {
      margin-left: 0!important;
      margin-top: 90px;
      width: 100%;
    }
    .picture {
      width: 50%;
      right: 25%;
      top: -100px;
    }
  }

  @media screen and (max-width: 599px) {
    h1, h5 { text-align: center; }
    h1 { font-size: 36px; letter-spacing: normal; }
    .header-card {
      margin-left: 0!important;
      margin-top: 100px;
      width: 100%;
    }
    .picture {
      width: 80%;
      right: 10%;
      top: -100px;
    }
  }

  @media screen and (max-width: 320px) {
    h1, h5 { width: 100%; text-align: center; }
    h1 {
      letter-spacing: normal;
    }
    .header-card {
      margin-left: 0px;
      margin-top: 130px;
    }
    .picture {
      width: 80%;
      right: 10%;
      top: -50px;
    }
  }
</style>

<script>

export default {
  name: 'Header',
  data: function () {
    return {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  },
  computed: {
    headerHeight () {
      return this.viewport.width >= 1904 ? '1000px' : this.viewport.width >= 1440 ? '810px' : '770px'
    },
    headerBackImage () {
      return this.viewport.width >= 1904 ? require('@/img/header-back-large.png') : this.viewport.width < 900 ? require('@/img/header-back-small.png') : require('@/img/header-back.png')
    },
    headerBackPosition () {
      return this.viewport.width >= 1904 ? 'center top' : 'left top'
    }
  },
  methods: {
    onResize () {
      this.viewport.width = window.innerWidth
      this.viewport.height = window.innerHeight
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  }
}
</script>
