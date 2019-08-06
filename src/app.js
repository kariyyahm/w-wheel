import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'
import ButtonGroup from './button-group'
import Input from './Input'
import Col from './Col'
import Row from './Row'
import Layout from './Layout'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import Sider from './Sider'
import Toast from './Toast'
import Plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsHeadItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsBodyPane from './tabs-pane'
import Popover from './Popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('w-collapse', Collapse)
Vue.component('w-collapse-item', CollapseItem)
Vue.component('w-popover', Popover)
Vue.component('w-toast', Toast)
Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row', Row)
Vue.component('w-col', Col)
Vue.component('w-layout', Layout)
Vue.component('w-content', Content)
Vue.component('w-header', Header)
Vue.component('w-footer', Footer)
Vue.component('w-sider', Sider)
Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-item', TabsHeadItem)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-pane', TabsBodyPane)


Vue.use(Plugin)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: '',
        // selectedTab: 'caijing',
        selectedTab: ['2']
    },
    created() {


    },
    methods: {
        inputChange(e) {
            console.log(e)
        },
        showToast1() {
            this.$toast('朋友，你应该充钱了！！', {
                closeButton: {
                    text: '老子充过了！！',
                    callback() {
                        console.log('用户说他充过了啦')
                    }
                },
                autoClose: 20,
                enableHTML: true,
                position: 'top'
            })
        },
        showToast2() {
            this.$toast('朋友，你应该充钱了！！', {
                closeButton: {
                    text: '老子充过了！！',
                    callback() {
                        console.log('用户说他充过了啦')
                    }
                },
                autoClose: 2,
                enableHTML: true,
                position: 'middle'
            })
        },
        showToast3() {
            this.$toast('朋友，你应该充钱了！！', {
                closeButton: {
                    text: '老子充过了！！',
                    callback() {
                        console.log('用户说他充过了啦')
                    }
                },
                autoClose: 2,
                enableHTML: true,
                position: 'bottom'
            })
        }
    }
})
