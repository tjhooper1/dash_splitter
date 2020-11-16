<template>
  <b-container>
    <b-row>
      <label for="total">Total Earnings</label>
      <b-input-group prepend="$" class="mb-2">
        <b-form-input
          name="total"
          type="number"
          step="0.01"
          v-model="total"
          placeholder="Enter Total Money Earned"
        ></b-form-input>
      </b-input-group>
      <label for="katie">Katie's Total Earnings</label>
      <b-input-group prepend="$" class="mb-2">
        <b-form-input
          name="katie"
          type="number"
          step="0.01"
          v-model="katieEarned"
          placeholder="Enter Katie's earnings"
        ></b-form-input>
      </b-input-group>
      <label for="kassidy">Kassidy's Total Earnings</label>
      <b-input-group prepend="$" class="mb-2">
        <b-form-input
          name="kassidy"
          type="number"
          step="0.01"
          v-model="kassidyEarned"
          placeholder="Enter Kassidy's earnings"
        ></b-form-input>
      </b-input-group>
    </b-row>
    <b-row align-h="between">
      <h1>Katie's Total:</h1>
      <h2>{{ katieTotal }}</h2>
      <h1>Kassidy's Total:</h1>
      <h2>{{ kassidyTotal }}</h2>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      picked: "",
      total: 0,
      katieEarned: 0,
      kassidyEarned: 0,
    };
  },

  methods: {
    getTotal: function (name) {
      const num = (this.total / 2 + parseFloat(name)).toFixed(2);
      return isNaN(num) ? this.total / 2 : num;
    },
  },

  computed: {
    katieTotal: function () {
      return this.getTotal(this.katieEarned);
    },
    kassidyTotal: function () {
      return this.getTotal(this.kassidyEarned)
    },
  },
};
</script>

<style>
</style>