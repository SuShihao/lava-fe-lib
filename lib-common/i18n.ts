// 使用BCP-47语言标识规范 https://juejin.cn/post/6844903863556767758
// 常用地区见 https://www.techonthenet.com/js/language_tags.php
/* eslint-disable @typescript-eslint/naming-convention */
import { Response } from './http'

export const messages = {
  'zh-CN': {
    // 一般类别
    common: {},
    // 错误
    errors: {
      'common.error.internal': '系统错误',
      'common.error.requestUnmarshal': '请求参数错误',
      'lava.error.changePassword.passwordFormat': '请输入正确的8-50位由数字，字母（包含大小写）和符号组合的密码',
      'lava.error.exist.emailDuplicate': '邮箱已被使用，请重新输入',
      'lava.error.exist.phoneDuplicate': '手机号已被使用，请重新输入',
      'lava.error.exist.userDuplicate': '用户名已存在，请重新输入',
      // 注意 @ 是vue-i18n的特殊字符，需要改成{'@'}
      'lava.error.login.credentialInvalid': '请输入正确的用户名，子用户名/主账号ID，手机号或密码',
      'lava.error.login.failTimes': '由于您密码输入错误次数过多，该账户已锁定暂时无法登录，您可以选择找回密码后在重新尝试，子账号请联系主账号修改',
      'lava.error.login.needApprove': '该用户正在审批中，请联系主账号确认',
      'lava.error.login.newUser': '新用户，需要重置密码',
      'lava.error.login.passwordExpired': '密码已过期，需要重置密码',
      'lava.error.login.passwordReset': '需要重置密码',
      'lava.error.login.userInactive': '用户未激活',
      'lava.error.login.userNotApproved': '用户审批未通过',
      'lava.error.no.records': '记录不存在',
      'lava.error.register.verifyCode': '验证码错误，请检查后重新输入',
      'lava.error.secretKey.tooMany': '一个用户最多创建两个秘钥',
      'lava.error.user.notFound': '请输入正确的用户名，子用户名{\'@\'}主账号ID，手机号或密码',
      'lava.error.verifyCaptcha.codeIncorrect': '验证码错误，请检查后重新输入',
      'lava.error.verifyCode.expired': '验证码已过期，请重新获取后输入',
      // 'lava.error.db.canNotSetSchema': '当前 schema 已不存在，请检查后重新选择schema',
      'lava.error.worksheetHistoryNotExist': '很遗憾！您的执行历史已被删除，请刷新列表',
      'lava.error.worksheetSqlNotExist': '很遗憾！您的版本历史已被删除，请稍后再试',
      'lava.error.worksheetNotExist': '很遗憾！当前工作簿（工作簿名）已被删除。',
      'lava.error.worksheetNameNotFormat': '请填写正确的50位字符以内不包涵<,>,/,|,*,,的名称',
      'lava.error.worksheetNameAlreadyExist': '您填写的工作簿名已存在，请检查后重新填写',
      'lava.error.worksheetFolderNotExist': '很遗憾！当前文件夹（文件夹名）已被删除。',
      'lava.error.worksheetFolderNameNotFormat': '请填写正确的50位字符以内不包涵<,>,/,|,*,,的名称',
      'lava.error.worksheetFolderNameAlreadyExist': '您填写的文件夹名已存在，请检查后重新填写',
      'lava.error.loadTaskNotExist': '很遗憾！当前传输任务（传输任务名）已被删除。',
      'lava.error.loadTaskNotInLoading': '很遗憾！传输任务取消失败。',
      'lava.error.loadTaskNameAlreadyExist': '您填写的传输任务名已存在，请检查后重新填写',
      'lava.error.db.canNotConnectToOushuDB': '很遗憾！连接OushuDB实例失败，请稍后刷新页面重试',
      'lava.error.db.canNotFindPid': '很遗憾！获取SQL进程失败，请稍后刷新页面重试',
      'lava.error.db.canNotSetResourceQueue': '很遗憾！配置命名空间失败，请稍后刷新页面重试',
      'lava.error.db.canNotSetSchema': '很遗憾！配置命名空间失败，请稍后刷新页面重试',
      'lava.error.cos.canNotGetTempCredential': '很遗憾！获取临时令牌失败，请稍后刷新页面重试',
      'lava.error.cos.canNotCompressFiles': '很遗憾！获取压缩文件失败，请稍后刷新页面重试',
      'lava.error.messageNotFound': '消息未找到',
      'lava.error.failedToMsgTypes': '获取消息类型列表失败',
      'lava.error.failedToGetTypeAndChannels': '获取消息类型和订阅方式失败',
      'lava.error.failedToGetSubscribeUsers': '获取订阅用户/用户组失败',
      'lava.error.failedToDelSubscribeUsers': '删除订阅用户/用户组失败',
      'lava.error.failedToAddSubscribeUsers': '添加订阅用户/用户组失败',
      'lava.error.failedToGetUserSubscribe': '获取用户/用户组订阅失败',
      'lava.error.failedToDelUserSubscribe': '删除用户/用户组订阅失败',
      'lava.error.failedToAddUserSubscribe': '添加用户/用户组订阅失败',
      'lava.error.failedToGetChannels': '获取订阅方式失败',
      'lava.error.failedToDelChannel': '删除订阅方式失败',
      'lava.error.failedToAddChannel': '添加订阅方式失败',
      'lava.error.failedToGetRsTypeActions': '获取资源事件列表失败',
      'lava.error.failedToGetAudits': '获取审计列表失败',
      'lava.error.refreshToken.parseToken': '解析token失败',
      'lava.error.refreshToken.userNonExistent': '用户不存在',
      'lava.error.syncingUser.operationPrevent': '正在同步用户中，请稍后再试',
      'lava.error.register.userNameIsBlank': '用户名不能为空',
      'lava.error.register.defaultRegionIsBlank': '没有选择默认地域',
      'lava.error.register.passwordNotEqualConfirmPassword': '两次输入的密码不一致',
      'lava.error.userNotExistError': '用户不存在',
      'lava.error.notTokenGranter': '不是tokenGranter用户，无法实现此操作',
      'lava.error.userPhone.notMatch': '用户和手机号不匹配',
      'lava.error.user.notRootUser': '不是主账号，无法实现此操作',
      'lava.error.userPhone.notSubmit': '此手机号尚未注册',
      'lava.error.userPhone.notExist': '此手机号不存在',
      'lava.error.getPubKey.generateRSAKey': '获取公钥失败',
      'lava.error.changePassword.oldPassword': '旧密码输入错误',
      'lava.error.changePassword.notFindUser': '此用户不存在',
      'lava.error.resetPassword.notAllowed': '只能重置自己的密码',
      'lava.error.newSubUser.userNameAlreadyExist': '用户名已存在',
      'lava.error.newSubUser.userNameIsBlank': '用户名不能为空',
      'lava.error.newSubUser.userNameFormat': '用户名格式不正确',
      'lava.error.newSubUser.subUserExistent': '子用户已存在',
      'lava.error.updateUser.userNameIsBlank': '用户名不能为空',
      'lava.error.updateUser.userNameFormat': '用户名格式不正确',
      'lava.error.deleteSubUsers.canNotDeleteRootUser': '不能删除主账号',
      'lava.error.resetSubUserPassword.notFindUser': '用户不存在',
      'lava.error.lockUser.canNotLockTenantUser': '不能锁定主账号',
      'lava.error.newGroup.groupNameIsBlank': '用户组名称不能为空',
      'lava.error.newGroup.groupNameAlreadyExist': '用户组名称已存在',
      'lava.error.updateUserGroup.groupNameIsBlank': '用户组名称不能为空',
      'lava.error.updateUserGroup.groupNameAlreadyExist': '用户组名称已存在',
      'lava.error.newRole.roleNameIsBlank': '角色名称不能为空',
      'lava.error.newRole.roleNameAlreadyExist': '角色已存在',
      'lava.error.newRole.roleNameEqualMainUser': '角色名称不能和主账号相同',
      'lava.error.roleNameFormat': '角色名称格式错误',
      'lava.error.roleNameReserved': '不能使用预留的角色名称',
      'lava.error.updateRole.roleNameIsBlank': '角色名不能为空',
      'lava.error.updateRole.roleNameAlreadyExist': '角色名已存在',
      'lava.error.updateRole.systemRole': '不能修改系统角色',
      'lava.error.updateRole.publicRole': '不能修改公共角色',
      'lava.error.deleteRole.systemRole': '不能删除系统角色',
      'lava.error.deleteRole.publicRole': '不能删除公共角色',
      'lava.error.deleteRole.notExist': '角色不存在',
      'lava.error.role.notFound': '角色不存在',
      'lava.error.verifyCaptcha.codeExpired': '验证码已过期',
      'lava.error.verifyPerson.coolingOffPeriodIsNotOver': '距离上次认证时间过短，无法认证',
      'lava.error.verifyPerson.nameOrCodeIsWrong': '用户名或验证码错误',
      'lava.error.verify.isNotExist': '认证不存在',
      'lava.error.verify.isDuring': '已在认证中',
      'lava.error.verifyCompany.coolingOffPeriodIsNotOver': '距离上次企业认证时间过短，无法认证',
      'lava.error.verifyCompany.nameOrCodeIsWrong': '名称或验证码错误',
      'lava.error.verifyCompany.isAlreadyExits': '认证已存在',
      'lava.error.verifyCancel.verifyApplicationCompleted': '认证已完成，无法取消',
      'lava.error.updateVerify.verifyInvalid': '认证无效',
      'lava.error.updateVerify.verifyApplicationCompleted': '认证已完成，无法修改',
      'lava.error.verifyPerson.isAlreadyExits': '认证已存在',
      'lava.error.sendVcode.sendTooFrequently': '验证码发送太频繁，请稍后',
      'lava.error.sendVcode.sendFailed': '验证码发送失败',
      'lava.error.vcodeInvalid': '验证码已过期',
      'lava.error.vcodeIsWrong': '验证码错误',
      'lava.error.recharge.wrongAmount': '金额错误',
      'lava.error.recharge.rechargeFailed': '充值失败',
      'lava.error.recharge.tradeOrderIsNotExist': '交易订单不存在',
      'lava.error.recharge.alipayVerifySignFailed': '支付宝支付验证签名失败',
      'lava.error.recharge.alipayRecheckFailed': '支付宝充值失败',
      'lava.error.recharge.cmbCreateSubAccountFailed': '生成子账号失败',
      'lava.error.recharge.dedicatedAccountIsNotExist': '专属账号不存在',
      'lava.error.recharge.duplicateBankCardName': '开户名称已存在',
      'lava.error.recharge.addBankCardNameFailed': '创建开户名失败',
      'lava.error.recharge.deleteBankCardNameFailed': '删除开户名失败',
      'lava.error.role.systemRolePrivilege': '不能修改系统角色的权限',
      'lava.error.objectNotFound': '对象不存在',
      'lava.error.unknownResourceType': '未知的资源类型',
      'common.error.paramIncomplete': '请求参数不完整',
      'common.error.connection': '连接错误',
      'common.error.notAdmin': '只有主账号能做此操作',
      'common.error.accessDenied': '无访问权限',
      'common.error.notLoggedIn': '用户尚未登陆',
      'lava.dataend.internalException': '内部异常',
      'lava.dataend.objectNotExisted': '对象不存在',
      'lava.dataend.typeIllegal': '数据源类型不合法',
      'lava.dataend.brandIllegal': '暂不支持此类数据源',
      'lava.dataend.sameNameExisted': '同名数据源已存在',
      'lava.dataend.engineException': '没有该数据源对应版本的驱动',
      'lava.dataend.connectionException': '连接异常',
      'lava.error.boolParamIsIllegal': '布尔类型解析错误',
      'lava.error.timeParseError': '时间类型解析错误',
      'lava.error.intParseError': '整型解析错误',
      'lava.error.createAlarmPolicy.nameIsRepeated': '告警策略名称重复',
      'lava.error.nameMustBeLessThan30AndContainNoSpaces': '名称不合法',
      'lava.error.updateAlarmPolicy.nameIsRepeated': '告警策略名称重复',
      'lava.error.alarmPolicyDoesNotExist': '告警策略不存在',
      'lava.error.bindClusterToAlarmPolicy.clusterIsNotRunning': '告警策略绑定的集群状态错误',
      'lava.error.notificationTemplateDoesNotExist': '通知模版不存在',
      'lava.error.createNotificationTemplate.nameIsRepeated': '通知模版名称重复',
      'lava.error.updateNotificationTemplate.nameIsRepeated': '通知模版名称重复',
      'lava.error.updateAlarmHistoryEndTime.eventAlarmDoesNotHaveEndTime': '告警事件没有结束时间',
      'lava.error.getAlarmHistory.alarmHistoryDoesNotExist': '告警历史不存在',
      'lava.error.createAlarmPolicy.alarmEventDoesNotExist': '告警事件不存在',
      'lava.error.alarmIndicatorPolicyDoesNotExist': '指标告警策略不存在',
      'lava.error.alarmHistoryIsProcessed': '告警历史已处理',
      'lava.error.clusterIsNotSingleAssociated': '集群不是直接关联策略',
      'lava.error.clusterIsNotInheritAssociated': '集群不是继承关联策略',
      'lava.error.clusterIsNotBothAssociated': '集群不是完全关联策略',
      'lava.error.indicatorPolicyDurationIsLessOrEqualZero': '持续时间必须大于零',
      'lava.error.createCluster.charTypeIsIllegal': '字符不合法',
      'lava.error.createClusterGroup.versionIsIllegal': '版本不合法',
      'lava.error.createClusterGroup.elasticRangeIsIllegal': '弹性区间不合法',
      'lava.error.createClusterGroup.clusterGroupAlreadyExist': '集群已存在',
      'lava.error.createClusterGroup.clusterGroupNameIsIllegal': '集群名称不合法',
      'lava.error.createClusterGroup.productIsIllegal': '产品名称不合法',
      'lava.error.createClusterGroup.masterNameIsIllegal': '主集群名不合法',
      'lava.error.createClusterGroup.vcNameIsIllegal': '计算集群名不合法',
      'lava.error.createClusterGroup.VCNameIsRepeated': '计算集群名重复',
      'lava.error.createClusterGroup.bandWidthIsIllegal': '带宽不合法',
      'lava.error.createVC.sizeDoesNotExist': '型号不存在',
      'lava.error.clusterGroupDoesNotExist': '集群不存在',
      'lava.error.vcAlreadyExist': '计算集群已存在',
      'lava.error.stopVC.VCHasStopped': '计算集群已停止',
      'lava.error.startVC.VCIsRunning': '计算集群正在运行',
      'lava.error.clusterDoesNotExist': '集群不存在',
      'lava.error.masterDoesNotExist': '主集群不存在',
      'lava.error.MasterIsNotRunning': '主集群不是运行状态',
      'lava.error.startMaster.masterIsNotStopped': '主集群不是停止状态',
      'lava.error.stopVC.VCHasNoAvailableInstanceGroup': '集群没有可用子集群实例',
      'lava.error.stopCluster.useWrongMethod': '操作错误',
      'lava.error.stopCluster.clusterIsNotRunning': '集群不是运行状态',
      'lava.error.startCluster.clusterIsNotStopped': '集群不是停止状态',
      'lava.error.clusterGroupIsNotSame': '不是相同的集群',
      'lava.error.startCluster.useWrongMethod': '操作错误',
      'lava.error.deleteCluster.useWrongMethod': '操作错误',
      'lava.error.updateVC.masterCannotBeModified': '主集群不能修改',
      'lava.error.modifyInstance.instanceIsNotExist': '子集群实例不存在',
      'lava.error.sizeNameIsIllegal': '型号不合法',
      'lava.error.createBucket.bucketNameIsIllegal': '桶名称不合法',
      'lava.error.createBucket.tenantAlreadyHasBucket': '桶已存在',
      'lava.error.getBucket.tenantDoesNotHaveBucket': '主账户没有桶',
      'lava.error.createBucket.bucketAlreadyExist': '桶已存在',
      'lava.error.createLifecycleRule.bucketDoesNotExist': '桶不存在',
      'lava.error.lifecycleRuleNotExistError': '生命周期不存在',
      'lava.error.effectiveLifecycleRule.lifecycleRuleAlreadyEnable': '生命周期已激活',
      'lava.error.uploadObject.objectAlreadyExist': '目标对象已存在',
      'lava.error.downloadObject.objectDoesNotExist': '目标对象不存在',
      'lava.error.uploadObject.localPathDoesNotExist': '本地目录不存在',
      'lava.error.downloadObject.localPathDoesNotExist': '本地目录不存在',
      'lava.error.instanceGroupIsLocked': '子集群实例被锁',
      'lava.error.clusterIsLocked': '集群被锁',
      'lava.error.elasticCreateVCI.clusterCanNotAutoStart': '集群不能自动启动',
      'lava.error.elasticCreateVCI.vciCountBeyondMaxLimit': '子集群实例数量超过最大限制',
      'lava.error.createClusterGroup.imageNotFound': '镜像不存在',
      'lava.error.getAllClusterGroupAndCluster.missNeedClusterParam': '缺少必要的集群参数',
      'lava.error.subnetNameRepeat': '子网名称重复',
      'lava.error.subnetNameAlreadyExist': '子网名称已存在',
      'lava.error.noMachineInSubnet': '子网内没有机器',
      'lava.error.ipAddressIsNotIPv4': 'IP不符合IPV4规范',
      'lava.error.ipAddressRepeat': 'IP地址重复',
      'lava.error.ipAddressAlreadyExist': 'IP地址已存在',
      'lava.error.checkMachineInfoWrong': '检测机器信息错误',
      'lava.error.machineIsInUse': '机器正在被使用',
      'lava.error.subnetIsNotExist': '子网不存在',
      'lava.error.machineIsNotExist': '目标机器不存在',
      'lava.error.machineAlreadyHasCluster': '机器已经部署此类集群',
      'lava.error.machineIsLocked': '机器被锁',
      'lava.error.clusterGroupNameAlreadyExist': '子集群实例名称已经存在',
      'lava.error.statusInCreatingOrRunning': '集群正在创建或运行中',
      'lava.error.cannotParseCheckInfoToJson': '解析JSON模版错误',
      'lava.error.manageAssistRpcInternalError': '管理RPC内部错误',
      'lava.error.cannotFindManageMachine': '无法获取管理机器',
      'lava.error.notFindUsableManageMachine': '没有找到可用的管理机器',
      'lava.error.operationTypeIsWrong': '操作错误',
      'lava.error.cannotFindClusterGroup': '找不到目标集群',
      'lava.error.cannotFindCluster': '找不到目标子集群',
      'lava.error.cannotFindInstanceGroup': '找不到目标子集群实例',
      'lava.error.cannotFindOushuMainCluster': '找不到主节点集群',
      'lava.error.rpcRunScriptFailed': '运行脚本错误',
      'lava.error.listenerNameIsRepeatInNginx': '监听名称重复',
      'lava.error.listenerNameIsAlreadyExistInNginx': '监听名称已存在',
      'lava.error.cannotFindNginxListener': '找不到监听',
      'lava.error.cannotFindKdcPrincipal': '找不到Principal',
      'lava.error.serviceUpdateConfigIsWrong': '更新集群配置错误',
      'lava.error.serviceUpdateConfigFailed': '更新集群配置失败',
      'lava.error.updateDBBlackAndWhiteListIsWrong': '更新访问配置错误',
      'lava.error.updateDBBlackAndWhiteListFailed': '更新访问配置失败',
      'lava.error.db.canNotDropWhenIsBeingAccessed': '很遗憾！不能在有人访问时进行删除，请稍后刷新页面重试',
      'lava.error.db.canNotGetSessionId': '很遗憾！获取SessionId失败，请稍后刷新页面重试',
      'lava.error.createHDFSFolderError': '创建HDFS目录失败',
      // wasp & flow
      '10110001': '映射尚未完成',
      '10100002': '未知的调度类型'
    }
  }
}
/**
 * 基于response获取错误信息的辅助函数
 * @param {(pattern: string) => string} t 当前i18n实例的translate函数
 * @returns {(Response<any>, string) => string} 可以基于Response返回errormessage的函数
 */
export const translateErrorMessage = (t: (pattern: string) => string) => {
  /**
   * @param {Response<any>} res http请求response参数
   * @param {string?} sub 可选，当该错误有多种可选message时，传入key使用对应的message，如master
   * @returns {string} 返回message
   */
  return (res: Response<any>, sub = ''): string => {
    return t(`errors['${res.meta.status_code || ''}']` + (sub ? `.${sub}` : ''))
  }
}
