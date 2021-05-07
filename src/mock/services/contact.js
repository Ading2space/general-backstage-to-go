import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const totalCount = 222

const groups = (options) => {
  const list = []
  for (let i = 0; i < 20; i++) {
    list.push({
      id: Mock.Random.integer(10, 999),
      name: Mock.Random.ctitle(5, 20)
    })
  }
  const data = {
    groupList: list
  }
  return builder(data)
}

const serverList = (options) => {
  const parameters = getQueryParameters(options)
  console.log(parameters)
  const result = []
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? totalCount % pageSize : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: 'No ' + tmpKey,
      description: '这是一段描述',
      callNo: Mock.mock('@integer(1, 999)'),
      status: Mock.mock('@integer(0, 3)'),
      updatedAt: Mock.mock('@datetime'),
      editable: false
    })
  }

  return builder({
    pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: result
  })
}

Mock.mock(/\/api\/contact\/getGroupList/, 'get', groups)
Mock.mock(/\/api\/contact\/getContactList/, 'get', serverList)
