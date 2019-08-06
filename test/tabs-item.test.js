const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsItem from '../src/tabs-item'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Button', () => {

    // BDD 行为驱动开发 button可以存在、设置loading 等等（描述行为）
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    })
    it('接收name属性.', ()=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'xxx'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })
    it('接收disabled属性.', ()=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })



})