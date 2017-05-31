/**
 * 支付相关服务
 */

import {$http} from './service'

/**
 * 付款确认
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const paid = function (params) {
  $http('/pay/paid', 'post', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 收款确认
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const collected = function (params) {
  $http('/pay/collected', 'post', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 获取收付款信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const payment = function (params) {
  $http('/pay/payment', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 获取付款确认区块链信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const paidChainInfo = function (params) {
  $http('/chaininfo/paid', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 获取收款确认区块链信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const collectedChainInfo = function (params) {
  $http('/chaininfo/collected', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};
