<template>
  <v-row justify="center">
    <v-dialog v-model="opened" persistent min-width="340" max-width="480">
      <v-card class="pa-6">
        <v-img v-if="image" :src="image" width="120" contain />
        <v-card-title class="my-2">
          <h2 text-color-primary>{{ title }}</h2>
        </v-card-title>
        <v-card-text>
          <p>{{ text }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="primary" text @click="$emit('update:opened', false)">CLOSE</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'Popup',
  props: ['opened', 'image', 'title', 'text']
}
</script>
