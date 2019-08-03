const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })

    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        })
        it('可以接收value.', () => {
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
        })

        it('可以接收disabled.', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })

        it('可以接收readonly.', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })

        it('可以接收error.', () => {
            vm = new Constructor({
                propsData: {
                    error: '出错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('出错了')
        })
    })

    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        })
        it('支持change/input/focus/blur事件.', () => {
            ['change', 'input', 'focus', 'blur'].forEach(eachName => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eachName, callback)
                // 触发input的change事件
                let event = new Event(eachName)
                Object.defineProperty(
                    event, 'target', {value: {value: 'hi'}, enumerable: true})
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            })
        })
    })
})