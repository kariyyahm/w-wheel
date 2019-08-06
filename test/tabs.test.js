const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Button', () => {

    // BDD 行为驱动开发 button可以存在、设置loading 等等（描述行为）
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })


})