<template>
  <div>
    <div class="row">
      <div class="col-3 funcs">
        <div class="inner-funcs">
          <div class="generateNumbers">
            <div>
              <p>You have {{ numbersLeft }} numbers left</p>
              <v-text-field
                v-model="range"
                label="How many numbers?"
                required>
              </v-text-field>
            </div>
            <div>
              <button class="generateBtn" @click="generateNumbers">Generate Numbers</button>
            </div>
          </div>
          <div class="generatedNumbers">
            Generated numbers:
            {{ this.numbers.length }}
          </div>
          <div>
            <p>Choose your sorting option</p>
            <v-select
              :items="items"
              label="Sort option"
              @change="sortNumbers"
              outlined>
            </v-select>
          </div>
        </div>
      </div>
      <div class="col numbers">
        <div class="stats">
          Max: {{ maximum }}
          Min: {{ minimum }}
        </div>
        <div class="numberList">
          <ol v-for="(number, index) in numbers" :key="number" class="number">
            <span class="indexNumber">{{ index+1 }}.</span> {{ number }}
            <hr>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [],
      range: '',
      numbersLeft: '',
      items: ['Ascending', 'Descending'],
    };
  },
  mounted() {
    this.numbersLeft = 10000;
  },
  methods: {
    generateNumbers() {
      const min = '000000001';
      const max = '999999999';
      const maxNumbers = 10000;
      if (maxNumbers > 10000) {
        alert('Limit exceeded', 'Input a number within the 10000 range');
        return;
      }
      for (let i = 0; i < this.range; i++) {
        const number = Math.floor(
          Math.random() * (Number(max) - Number(min) + 1) + Number(min),
        ).toString();
        const phoneNumber = `0${number}`;
        this.numbers.push(phoneNumber);
      }
      const remain = maxNumbers - this.numbers.length;
      this.numbersLeft = remain;
      if (remain < 0) {
        alert('Limit exceeded', 'Input a number within the 10000 range');
      }
    },
    sortNumbers(value) {
      if (value === 'Ascending') {
        this.numbers.sort((a, b) => a - b);
      }
      if (value === 'Descending') {
        this.numbers.sort((a, b) => b - a);
      }
    },
  },
  computed: {
    maximum() {
      if (this.numbers.length === 0) {
        return 0;
      }
      const max = Math.max(...this.numbers);
      return `0${max}`;
    },
    minimum() {
      if (this.numbers.length === 0) {
        return 0;
      }
      const min = Math.min(...this.numbers);
      return `0${min}`;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Darker+Grotesque&display=swap");

body {
  font-family: "Darker Grotesque", sans-serif;
}
.funcs {
  background-color: aliceblue;
  height: 100vh;
}
.inner-funcs {
  padding-left: 0.6em;
}
.numbers {
  height: 100vh;
  overflow: scroll;
}

.generateNumbers {
  padding-bottom: 2em;
}
.generateBtn {
  background-color: rgb(81, 216, 216);
  padding: 0.5em;
  border-radius: 0.2em;
  font-family: "Darker Grotesque", sans-serif;
  font-weight: bold;
  letter-spacing: 0.1em;
}
.stats {
  position: fixed;
  top: 0;
  padding: 10px 16px;
  background: #555;
  color: #f1f1f1;
  width: 70%;
}
.numberList {
  padding: 3em 0;
  text-align: left;
}
.generatedNumbers {
  padding-bottom: 1.5em;
}
.number {
  padding: 0.3em;
}
hr {
  margin: 0.5em 0;
  border: 0.5px solid #cccccc;
}
.indexNumber {
  margin-right: 1em;
}
</style>
