module.exports = {
    CODE_SUCCESS: {
      code: 0,
      message: '请求成功',
      key: 'CODE_SUCCESS'
    },
    CODE_SYSTEM_ERROR: {
      code: -1,
      message: '系统异常',
      key: 'CODE_SYSTEM_ERROR'
    },
    CODE_SYSTEM_ILLEGAL_REQ: {
      code: -2,
      message: '非法的服务器请求',
      key: 'CODE_SYSTEM_ILLEGAL_REQ'
    },
    CODE_NEED_LOGIN: {
      code: 70001,
      message: '请先登录',
      key: 'CODE_NEED_LOGIN'
    },
    CODE_ARGS_NOT_MATCH: {
      code: 70002,
      message: '请求参数不正确',
      key: 'CODE_ARGS_NOT_MATCH'
    },
    CODE_MYSQL_ERROR: {
      code: 70003,
      message: 'Mysql异常',
      key: 'CODE_MYSQL_ERROR'
    },
    CODE_LOGIN_ERROR: {
      code: 70004,
      message: '邮箱或密码错误！',
      key: 'CODE_LOGIN_ERROR'
    },
    CODE_PassportRPCError: {
      code: 70005,
      message: '远程调用passport失败',
      key: 'CODE_PassportRPCError'
    },
    CODE_USERNAME_REPEAT_ERROR: {
      code: 70006,
      message: '昵称已存在，不允许修改',
      key: 'CODE_USERNAME_REPEAT_ERROR'
    },
    CODE_ALI_ACCESS_TOKEN_ERROR: {
      code: 70007,
      message: '阿里OSS获取令牌失败',
      key: 'CODE_ALI_ACCESS_TOKEN_ERROR'
    },
    CODE_MYSQL_EXEC_ERROR: {
      code: 70007,
      message: 'MySQL执行异常',
      key: 'CODE_MYSQL_EXEC_ERROR'
    },
    CODE_NO_RIGHT: {
      code: 70008,
      message: '没有权限',
      key: 'CODE_NO_RIGHT'
    },
    CODE_NO_USER: {
      code: 70009,
      message: '目标用户不存在',
      key: 'CODE_NO_USER'
    },
    CODE_PROJECT_PUBLISHED: {
      code: 70010,
      message: '项目已经发布',
      key: 'CODE_PROJECT_PUBLISHED'
    },
    CODE_PID_NOT_FOUND: {
      code: 70011,
      message: 'pid不存在',
      key: 'CODE_PID_NOT_FOUND'
    },
    CODE_JSSDK_ERROR: {
      code: 70012,
      message: '获取微信jsapi_ticket失败',
      key: 'CODE_JSSDK_ERROR'
    },
    CODE_PROJECT_EXIST: {
      code: 70013,
      message: '作品已存在专题内，请不要重复投稿哦！',
      key: 'CODE_PROJECT_EXIST'
    },
    CODE_PROJECT_DISABLE: {
      code: 70014,
      message: '作品未发布或已删除',
      key: 'CODE_PROJECT_DISABLE'
    },
    CODE_SIGNUP_FAIL: {
      code: 70015,
      message: '参赛失败',
      key: 'CODE_SIGNUP_FAIL'
    },
    CODE_LIKE_FAIL: {
      code: 70016,
      message: '重复点赞',
      key: 'CODE_LIKE_FAIL'
    }
  } 