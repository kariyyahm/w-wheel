const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/Toast'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })

    describe('props', function () {
        it('接收autoClose.', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1,
                }
            }).$mount(div)
            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('接收closeButton.', () => {
            const callback = sinon.fake()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭哈',
                        callback
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭哈')
            closeButton.click()
            expect(callback).to.have.been.called
        })
        it('接收enableHtml.', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHTML: true
                }
            })
            vm.$slots.default = ['<strong id="test0622">hello</strong>>']
            vm.$mount()
            let strong = vm.$el.querySelector('#test0622')
            expect(strong).to.exist
        })
        it('接收position.', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'bottom'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })

    })
})
