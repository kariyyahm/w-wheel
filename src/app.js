import Vue from 'vue';
import Button from './Button';
import Icon from './Icon';
import ButtonGroup from './button-group'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }
})