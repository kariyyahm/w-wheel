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

Vue.use(Plugin)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: ''
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

// 单元测试

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const expect = chai.expect

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-settings')

    // 删除button
    button.$el.remove()
    button.$destroy()
}
// 测试按钮含有loaidng
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')


    // 删除button
    vm.$el.remove()
    vm.$destroy()
}

{
    // 生成一个div来挂载button里的svg，order才会被渲染
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')

    // 删除button
    vm.$el.remove()
    vm.$destroy()
}


{
    // 生成一个div来挂载button里的svg，order才会被渲染
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')

    // 删除button
    vm.$el.remove()
    vm.$destroy()
}


{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()
    let spyA = chai.spy(function () {
    })

    vm.$on('click', spyA)
    let button = vm.$el
    button.click()
    expect(spyA).to.have.been.called()
}

