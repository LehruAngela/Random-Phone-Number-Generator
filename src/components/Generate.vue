<template>
  <div>
    <button @click="generateNumbers">Generate Numbers</button>
    <input type="text" v-model="range" max="10000"/>
    Max: {{ maximum }}
    Min: {{ minimum }}
    <button @click="sortAscend">Ascend</button>
    <button @click="sortDescend">Descend</button>
    <ol v-for="(number, index) in numbers" :key="number">{{ index+1 }}. {{ number }} </ol>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [],
      range: '',
    };
  },
  methods: {
    generateNumbers() {
      const min = '000000001';
      const max = '999999999';
      const maxNumbers = 10000;
      for (let i = 0; i < this.range; i++) {
        const number = Math.floor(
          Math.random() * (Number(max) - Number(min) + 1) + Number(min),
        ).toString();
        let phoneNumber = '0' + number;
        this.numbers.push(phoneNumber);
      }
      const remain = maxNumbers - this.numbers.length
      if (remain < 0){
        alert('Staph nigga')
      }
    },
    sortAscend() {
      this.numbers.sort(function(a, b){return a-b});
    },
    sortDescend() {
      this.numbers.sort(function(a, b){return b-a});
    }  
  },
  computed: {
    maximum() {
      return Math.max(...this.numbers);
    },
    minimum() {
      return Math.min(...this.numbers);
    },
  }
};
</script>
