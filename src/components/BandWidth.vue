<template>
  <v-container fluid class="homefone ma-0 pa-0">
    <v-img src="@/img/red-background.png" :height="backgroundHeight" position="center" class="mx-0 px-0"></v-img>
      <v-card flat class="white-title transparent mx-auto" :style="{ marginTop: whiteTextMarginTop }">
        <v-card-title>
          <h2>All The Bandwidth You’ll Ever Need , Zero Congestion.</h2>
        </v-card-title>
        <v-card-text>
          <h5>We started building our fibre-to-the-home network in 2016.<br>
            In all this time, we have maintained 99.9% uptime and have never delivered a speed below what we promised to a customer.
          </h5>
        </v-card-text>
      </v-card>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" lg="10" xl="8" class="mx-auto">
            <v-row
                align="center"
                justify="center"
            >
              <v-col
                  cols="12"
                  lg="4"
                  v-for="(card, index) in cards"
                  :key="index"
              >
                <v-card
                    shaped
                    elevation="10"
                    class="cards mx-auto px-6 px-xs-4"
                    :style="{ marginTop: cardsMarginTop, height: cardHeight, width: cardWidth }"
                >
                  <v-img
                      class="red-icons"
                      :src="card.image"
                      :width="iconSize"
                      :height="iconSize"
                      contain
                      position="left"
                  ></v-img>
                  <h3>{{ card.title }}</h3>
                  <v-card-text>
                    <p>{{ card.text }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
  </v-container>
</template>

<style scoped>

.header-back {
  overflow: hidden;
}

.v-card__title, h1, h3, h5, p {
  word-break: normal!important;
}

h2 {
  color: #FFFFFF;
  text-align: left;
  margin-left: 130px;
}

h3 {
  margin-top: 32px;
}

h5 {
  color: #FFFFFF;
  text-align: left;
  margin-left: 130px;
  max-width: calc(100% - 260px);
}

p {
  color: #2D2D2D;
}

.cards {
  border-radius: 15px;
  /* width: 380px;
  height: 400px; */
  padding-top: 20px;
}
.red-icons {
  border-radius: 0!important;
}

@media screen and (max-width: 600px) {
  h2 { margin-left: 20px; }
  h3 {
    margin-top: 0px;
    vertical-align: bottom;
  }
  h5 {
    max-width: 80%;
    margin-left: 10%;
  }
  .cards {
    width: 80%;
    height: max-content;
    padding-top: 20px;

  }
  .red-icons, h3 {
    display: inline-block;
  }
  .red-icons {
    margin-right: 16px;
  }
}
@media screen and (max-width: 400px) {
  h2 { margin-left: 20px; }
  h3 {
    margin-top: 0px;
    vertical-align: bottom;
  }
  h5 {
    max-width: 80%;
    margin-left: 10%;
  }
  /* .cards {
    width: 90%;
    height: max-content;
    padding-top: 20px;

  } */
  .red-icons, h3 {
    display: inline-block;
  }
  .red-icons {
    margin-right: 16px;
  }
}

@media screen and (max-width: 320px) {
  h2 {
    margin-left: 24px;
    max-width: 280px;
  }
  h3 {
    margin-top: 0px;
    vertical-align: bottom;
  }
  h5 {
    margin-left: 24px;
    max-width: 280px;
    line-height: 32px;
  }
  .cards {
    /* width: 98%; */
    /* height: max-content; */
  }
  .red-icons, h3 {
    display: inline-block;
  }
  .red-icons {
    margin-right: 10px;
  }
}

@media screen and (min-width: 1904px) {
  .white-title * {
    width: 100%;
    text-align: center;
  }
}
</style>

<script>

export default {
  name: 'BandWidth',
  data: function () {
    return {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      cards: [
        {
          image: require('@/img/ico-1.svg'),
          title: 'Symmetrical Speeds',
          text: `DGTek gives you the same upload and download speed.
            Our upload speeds are 20x faster than the NBN.
            This means all your upload thirsty Skype, Zoom and Google Hangouts calls are handled, no issue!`
        },
        {
          image: require('@/img/ico-2.svg'),
          title: 'Zero Congestion',
          text: 'Stream in 4K on every TV, laptop and phone in your house - no waiting time. With our 500Mbps fibre connection, we never miss a beat.'
        },
        {
          image: require('@/img/ico-3.svg'),
          title: 'Reliability',
          text: 'In these uncertain times, the internet is our lifeline. It connects us to our work, our friends and our families. DGtek’s fibre has 99.9% uptime, how’s that for peace of mind?'
        }
      ]
    }
  },
  computed: {
    backgroundHeight () {
      return this.viewport.width <= 320 ? '1100px' : this.viewport.width <= 360 ? '1000' : this.viewport.width >= 1264 ? '635px' : '1040px'
    },
    whiteTextMarginTop () {
      return this.viewport.width <= 320 ? '-1050px' : this.viewport.width <= 360 ? '-950px' : this.viewport.width >= 1264 ? '-580px' : '-1000px'
    },
    whiteTextMarginLeft () {
      return this.viewport.width >= 1264 ? '380px' : '100px'
    },
    cardsMarginTop () {
      return this.viewport.width >= 1264 ? '40px' : '0px'
    },
    cardHeight () {
      return this.viewport.width >= 1264 ? '400px' : 'max-content'
    },
    cardWidth () {
      return this.viewport.width >= 1264 ? '400px' : '320px'
    },
    iconSize () {
      return this.viewport.width >= 1264 ? '51px' : '32px'
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
