import { request } from './request'

export function getList() {
    return request({
        url: '/api/getList'
    })
}

export function goodsDetail(goodsNo) {
    return request({
        url: 'api/getGoodsDetail',
        params: {
            goodsNo
        }
    })
}
export function sortPrice(id) {
    return request({
        url: '/api/getGoodsCateList',
        params: {
            ordertype: id
        }
    })
}

export function lowPrise(id) {
    return request({
        url: '/api/getGoodsCateList',
        params: {
            ordertype: id
        }
    })
}

export function newShop(id) {
    return request({
        url: '/api/getGoodsLikeList',
        params: {
            ordertype: id
        }
    })
}

export function likeShop(id) {
    return request({
        url: '/api/getGoodsLikeList',
        params: {
            ordertype: id
        }
    })
}