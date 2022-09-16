import { createStore } from 'vuex'

export default createStore({
    state: {
        cartList: []
    },
    mutations: {
        add_counter(state, payload) {
            payload.count++;
        },
        add_to_cart(state, payload) {
            payload.isCheck = true;
            state.cartList.push(payload);
        },
        Checked(state, payload) {
            state.cartList[payload].isCheck = !state.cartList[payload].isCheck
        },
        decreased(state, payload) {
            state.cartList[payload].count--
        },
        increased(state, payload) {
            state.cartList[payload].count++
        },
        delete(state) {
            state.cartList.splice(0, state.cartList.length)
        },
        shut(state, payload) {
            state.cartList.splice(payload, 1)
        }
    },
    actions: {
        addCart({ state, commit }, payload) {
            return new Promise(resole => {
                let oldProduct = state.cartList.find(item => {
                    return item.id === payload.id
                })
                if (oldProduct) {
                    commit('add_counter', oldProduct)
                    resole('加入购物车成功')
                } else {
                    payload.count = 1
                    commit('add_to_cart', payload)
                    resole('加入购物车成功')
                }
            })
        },
        isChecked(context, payload) {
            context.commit('Checked', payload)
        },
        decreased(context, payload) {
            context.commit('decreased', payload)
        },
        increased(context, payload) {
            context.commit('increased', payload)
        },
        delete(context) {
            context.commit('delete')
        },
        shut({ commit }, payload) {
            commit('shut', payload)
        }
    },
    getters: {
        cartList(state) {
            return state.cartList
        }
    }
})