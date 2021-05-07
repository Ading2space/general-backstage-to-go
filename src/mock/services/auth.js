import Mock from 'mockjs2'
import { builder, getBody } from '../util'

const usernames = ['admin', 'super']
const passwords = ['ant.design', 'admin']

const login = (options) => {
  const body = getBody(options)
  const { password, username, type } = body
  if (!usernames.includes(username) || !passwords.includes(password)) {
    return builder({ isLogin: true }, '账户或密码错误', 401)
  }

  return builder(
    {
      token: 'use-token',
    },
    '登陆成功',
    200
  )
}

const logout = () => {
  return builder({}, '[测试接口] 注销成功')
}

const smsCaptcha = () => {
  return builder({ captcha: Mock.mock('@integer(10000, 99999)') })
}

Mock.mock(/\/api\/login\/account/, 'post', login)
Mock.mock(/\/api\/logout/, 'post', logout)
Mock.mock(/\/api\/message\/sms/, 'post', smsCaptcha)
