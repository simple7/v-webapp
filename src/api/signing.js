/**
 * 签订合同相关服务
 */

import {$http} from './service'

/**
 * 保理商拟定合同
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const drawUp = function (params) {
  $http('/signing/drawup', 'post', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 供应商签订合同
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const sellerSign = function (params) {
  $http('/signing/sellersign', 'post', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 保理商签订合同
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const factorSign = function (params) {
  $http('/signing/factorsign', 'post', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 核心企业收到通知书的反馈
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const buyerFeedBack = function (params) {
  $http('/signing/buyerfeedback', 'post', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 保理商拟定合同区块链信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const drawUpChainInfo = function (params) {
  $http('/chaininfo/drawup', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 供应商签订合同区块链信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const sellerSignChainInfo = function (params) {
  $http('/chaininfo/sellersign', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 保理商签订合同区块链信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const factorSignChainInfo = function (params) {
  $http('/chaininfo/factorsign', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 核心企业收到通知书的反馈区块链信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const buyerFeedBackChainInfo = function (params) {
  $http('/chaininfo/buyerfeedback', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};


