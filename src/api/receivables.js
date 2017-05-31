/**
 * 登产登记相关服务
 */

import {$http} from './service'

/**
 * 应收帐款债权转让申请
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const apply = function (params) {
  $http('/receivables/apply', 'post', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 应收帐款债权转让受理
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const accept = function (params) {
  $http('/receivables/accept', 'post', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 应收帐款债权转让确权
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const right = function (params) {
  $http('/receivables/right', 'post', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 应收帐款债权转让复核
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const review = function (params) {
  $http('/receivables/review', 'post', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 应收帐款债权转让申请区块链信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const applyChainInfo = function (params) {
  $http('/chaininfo/apply', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 应收帐款债权转让受理区块链信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const acceptChainInfo = function (params) {
  $http('/chaininfo/accept', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 应收帐款债权转让确权区块链信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const rightChainInfo = function (params) {
  $http('/chaininfo/right', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

/**
 * 应收帐款债权转让复核区块链信息
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const reviewChainInfo = function (params) {
  $http('/chaininfo/review', 'get', params).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
};

