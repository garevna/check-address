<template>
  <v-container class="homefone mx-auto my-12 px-0 py-12">
    <v-card flat class="transparent mx-auto" max-width="980">
      <v-card-title>
        <h2>FAQ</h2>
      </v-card-title>
      <v-card-text>
        <v-expansion-panels
              v-model="panel"
              accordion
              focusable
              flat
              hover
              tile
        >
          <v-expansion-panel
              v-for="(item, index) in faq"
              :key="index"
          >
            <v-expansion-panel-header height="64">
              <h5 class="my-0">{{ item.question }}</h5>
              <template v-slot:actions>
                <v-icon color="#444">$expand</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="answer" v-html="item.answer">
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>

.v-card__title, h1, h4, h3, p {
  word-break: normal!important;
}

h2 {
  width: 100%;
  color: #000;
  text-align: center;
}
h4 {
  margin: 0;
}

.answer {
  padding: 10px 20px;
}

.v-card__text {
  font-family: 'Gilroy'!important;
  font-style: normal;
  font-weight: normal;
  font-size: 18px!important;
  line-height: 150%;
  color: #2D2D2D!important;

}

@media screen and (max-width: 600px) {
  h2 { margin-left: 20px; }
  h5 { max-width: 80%; }
  .v-card__text {
    font-size: 14px!important;
  }
}

@media screen and (max-width: 320px) {
  h2 {
    max-width: 280px;
  }
  h5 {
    font-size: 13px;
    max-width: 280px;
    line-height: 32px;
  }
  .v-card__text {
    font-size: 12px!important;
  }
}
</style>

<script>

export default {
  name: 'FAQ',
  data: function () {
    return {
      panel: null,
      faq: [
        {
          question: 'Why is DGtek Giving Away Free Internet? ',
          answer: `<div>
              <p>Aside from the fact that it’s our civic duty, and we are clearly all in this together, most of Australia’s internet infrastructure just isn’t equipped to handle traffic of this magnitude.</p>
              <p>DGtek offers the best fibre internet service in Australia. Unfortunately, the only people who know this are already our customers.
              If we can help our fellow Aussies and spread the word at the same time, well that’s a no-brainer.</p>
              <p>If you live in the area or know someone that does - take advantage of FREE fibre internet</p>
          </div>`
        },
        {
          question: 'How Does DGtek’s Symmetrical Fibre Help Me Work or Study from Home?',
          answer: `<div>
                    <p>You might have noticed that all of the NBN’s residential connections have much faster download speeds than upload speeds.</p>
                    <p>An assumption has been made about how we use the internet and to be fair it’s a pretty safe assumption. Unfortunately, their vision wasn’t 2020.</p>
                    <p>Today, the virus has flipped society on its head and turned our homes into our offices.
                    There could be as many people working online in your street as you’d find in a large office building - and that is a problem.</p>
                    <p>Business applications like video conferencing are further antagonising the lack-of-bandwidth issue because they are upload thirsty.
                    Remember, Australian homes had less upload bandwidth to begin with and the added strain has resulted in additional congestion. </p>
                    <p>When the kids are online-learning, parents are online-working and grandma is FaceTiming, that bandwidth is shared by everyone.</p>
                    <p>If there isn’t enough to go around, then connection quality suffers, calls are dropped, and voices are delayed.</p>
                    <p>DGtek’s internet service alleviates all these problems by simply offering symmetrical speeds.</p>
                    <p>All you really need to understand is that our upload speeds are as fast as our downloads.</p>
                    <p>DGtek’s 500Mbps download is 5x faster than the fastest NBN 100 download internet service.</p>
                    <p>DGtek’s 500Mbps upload is over 10x faster than the fastest NBN’s 40Mbps upload internet service.</p>
                  </div>
                   `
        },
        {
          question: 'Where is DGtek Available?',
          answer: `<div>
            <p>
              DGtek currently provides ultra-fast, direct fibre service to homes and businesses across Melbourne CBD and South-East suburbs – Port/South Melbourne, St Kilda, Elwood, Bentleigh and Moorabbin.
            </p>
            <a href="https://dgtek.net/" target="_blank">Check your address</a>
            </div>`
        }
      ]
    }
  }
}
</script>
