import Vue from 'vue';
import Vuetify, {
  VSelect,
  VTextField,
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VSelect,
    VTextField,
  },
});

export default new Vuetify({});
