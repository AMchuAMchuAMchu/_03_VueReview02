import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    add(context,value){
        console.log('actions的add被调用了')
        context.commit('ADD',value)
    },
    sub(context,value){
        console.log('actions的sub被调用了')
        context.commit('SUB',value)
    },
    addOdd(context,value){
        console.log('actions的addOdd被调用了')
        if (context.state.sum%2!==0){
            context.commit('ADD',value)
        }
    },
    addWait(context,value){
        console.log('actions的addWait被调用了')
        setTimeout(()=>{
            context.commit('ADD',value)
        },1000)
    }
}
const mutations = {
    ADD(state,value){
        console.log('mutations的ADD被调用了')
        state.sum+=value
    },
    SUB(state,value){
        console.log('mutations的SUB被调用了')
        state.sum-=value
    },
}
const state = {
    school:'尚硅谷',
    subject:'大数据',
    sum:0
}

export default  new Vuex.Store({
    actions,
    mutations,
    state
})

