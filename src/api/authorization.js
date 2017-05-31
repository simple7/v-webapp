/**
 * 企业认证相关服务
 */

import {$http} from './service'

/**
 * 认证供应商
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const authSeller = function (params) {
  $http('/seller/auth', 'post', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 认证保理商
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const authFactor = function (params) {
  $http('/factor/auth', 'post', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 认证核心企业
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const authBuyer = function (params) {
  $http('/buyer/auth', 'post', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 获取供应商信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const sellerInfo = function (params) {
  $http('/seller/info', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 获取保理商信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const factorInfo = function (params) {
  $http('/factor/info', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 获取核心企业信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const buyerInfo = function (params) {
  $http('/buyer/info', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 获取供应商区块链信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const sellerChainInfo = function (params) {
  $http('/chaininfo/seller', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 获取保理商区块链信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const factorChainInfo = function (params) {
  $http('/chaininfo/factor', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 获取核心企业区块链信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const buyerChainInfo = function (params) {
  $http('/chaininfo/buyer', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};
