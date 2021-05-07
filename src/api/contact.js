import request from '@/utils/request'

export function getContactGroups (parameter) {
  return request({
    url: '/contact/getGroupList',
    method: 'get',
    params: parameter,
  })
}

export function getContacts (parameter) {
  return request({
    url: 'contact/getContactList',
    method: 'get',
    params: parameter
  })
}
