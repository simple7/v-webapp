/**
 * 帐户相关服务
 */

import {$http} from './service'

/**
 * 登录
 * @param   {Object}  params   parameters to request
 * @returns  {any}  result
 */
export const login = async function (params) {
  return new Promise((resolve, reject) => {
    $http('/users/login', 'post', params).then((res)=>{
      console.log(res)
      resolve(res)
    }).catch((e)=>{
      console.log(e)
      reject(e)
    })
  })

  /*try{
    return await $http('/users/login', 'post', params)
  } catch (e){
    console.log(e)
    return e
  }*/
};

/**
 * 注册
 * @param   {any}  params   parameters to request
 * @returns  {any}  result
 */
export const register = async function (params) {
  try {
    return await $http('/users/register', 'post', params)
  } catch (e) {
    return e
  }
};
