import Vue from 'vue';
import Button from './Button';
import Icon from './Icon';

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }
})