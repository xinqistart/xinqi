/*
 Navicat Premium Dump SQL

 Source Server         : 123.60.158.243
 Source Server Type    : MySQL
 Source Server Version : 80400 (8.4.0)
 Source Host           : 123.60.158.243:3306
 Source Schema         : xinqi_pro_config

 Target Server Type    : MySQL
 Target Server Version : 80400 (8.4.0)
 File Encoding         : 65001

 Date: 13/11/2025 21:04:01
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for config_info
-- ----------------------------
DROP TABLE IF EXISTS `config_info`;
CREATE TABLE `config_info` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'data_id',
  `group_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `content` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'content',
  `md5` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'md5',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `src_user` text CHARACTER SET utf8mb3 COLLATE utf8mb3_bin COMMENT 'source user',
  `src_ip` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'source ip',
  `app_name` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `tenant_id` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT '' COMMENT '租户字段',
  `c_desc` varchar(256) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `c_use` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `effect` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `type` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `c_schema` text CHARACTER SET utf8mb3 COLLATE utf8mb3_bin,
  `encrypted_data_key` text CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '秘钥',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `uk_configinfo_datagrouptenant` (`data_id`,`group_id`,`tenant_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1189 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin ROW_FORMAT=DYNAMIC COMMENT='config_info';

-- ----------------------------
-- Records of config_info
-- ----------------------------
BEGIN;
INSERT INTO `config_info` (`id`, `data_id`, `group_id`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `app_name`, `tenant_id`, `c_desc`, `c_use`, `effect`, `type`, `c_schema`, `encrypted_data_key`) VALUES (1, 'dynamic_routes', 'DEFAULT_GROUP', 'routes:\n# xinqi-auth\n- id: xinqi-auth\n  predicates:\n  - name: Path\n    args: \n      _genkey_0: /auth/**\n  filters:\n  - name: ValidateCodeGatewayFilter\n    args: {}\n  - name: PasswordDecoderFilter\n    args: {}\n  uri: lb://xinqi-auth\n  order: 0\n# xinqi-upms-admin\n- id: xinqi-upms-admin\n  predicates:\n  - name: Path\n    args: \n      _genkey_0: /upms/**\n  filters: \n  - name: RequestRateLimiter\n    args: \n      # 限流策略\n      key-resolver: \'#{@remoteAddrKeyResolver}\'\n      # 令牌桶每秒填充率\n      redis-rate-limiter.burstCapacity: 20\n      # 令牌桶容量\n      redis-rate-limiter.replenishRate: 20\n  uri: lb://xinqi-upms-admin\n  order: 0\n# xinqi-codegen\n- id: xinqi-codegen\n  predicates:\n  - name: Path\n    args: \n      _genkey_0: /gen/**\n  filters: []\n  uri: lb://xinqi-codegen\n  order: 0\n# xinqi-weixin-admin\n- id: xinqi-weixin-admin\n  predicates:\n  - name: Path\n    args: \n      _genkey_0: /weixin/**\n  filters: []\n  uri: lb://xinqi-weixin-admin\n  order: 0\n# xinqi-mall-admin\n- id: xinqi-mall-admin\n  predicates:\n  - name: Path\n    args: \n      _genkey_0: /mall/**\n  filters: []\n  uri: lb://xinqi-mall-admin\n  order: 0\n# xinqi-mall-api\n- id: xinqi-mall-api\n  predicates:\n  - name: Path\n    args: \n      _genkey_0: /mallapi/**\n  filters: []\n  uri: lb://xinqi-mall-api\n  order: 0\n# xinqi-pay-admin\n- id: xinqi-pay-admin\n  predicates:\n  - name: Path\n    args: \n      _genkey_0: /pay/**\n  filters: []\n  uri: lb://xinqi-pay-admin\n  order: 0\n# xinqi-live-admin\n- id: xinqi-live-admin\n  predicates:\n  - name: Path\n    args: \n      _genkey_0: /live/**\n  filters: []\n  uri: lb://xinqi-live-admin\n  order: 0', '438c8ef7936a3f4b6703db7caea3ed8a', '2019-07-30 14:26:08', '2025-05-23 09:30:06', 'nacos', '117.43.122.159', '', '', '动态路由配置', '', '', 'yaml', '', '');
INSERT INTO `config_info` (`id`, `data_id`, `group_id`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `app_name`, `tenant_id`, `c_desc`, `c_use`, `effect`, `type`, `c_schema`, `encrypted_data_key`) VALUES (2, 'application-dev.yml', 'DEFAULT_GROUP', '# 全局配置\nxinqi:\n  # mysql全局配置\n  mysql:\n    host: 127.0.0.1\n    port: 3306\n    username: root\n    password: d71d5965ce8f788a\n  is-demo: 1\n# 加解密根密码\njasypt:\n  encryptor:\n    # 根密码，改完密码要把joolun_upms.sys_datasource数据库表清空，否则代码生成器无法启动\n    password: xinqi\nspring:\n  servlet:\n    multipart:\n      # 缓存文件存放路径\n      location: /data/tmp\n      # 单个文件的大小\n      max-file-size: 10MB\n      # 上传文件的总大小\n      max-request-size: 100MB\n  data:\n    # redis 相关\n    redis:\n      host: 127.0.0.1\n      port: 6379\n      password: null\n      database: 4\n  # 分布式锁klock配置\n  klock:\n    address: redis://${spring.data.redis.host}:${spring.data.redis.port}\n    # redis没有密码就不要配置password，否则会报错\n    # password: ${spring.data.redis.password}\n    database: ${spring.data.redis.database}\n  # elasticsearch配置\n  elasticsearch:\n    uris: 127.0.0.1:9200\n    username: elastic\n    password: 123456\n    connection-timeout: 10s\n# logging日志\nlogging:\n  level:\n    com.alibaba.nacos.client.naming: error\n# 暴露监控端点\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: \'*\'\n# feign 配置\nfeign:\n  sentinel:\n    enabled: true\n  okhttp:\n    enabled: true\n  httpclient:\n    enabled: false\n  client:\n    config:\n      default:\n        connectTimeout: 30000\n        readTimeout: 30000\n  compression:\n    request:\n      enabled: true\n    response:\n      enabled: true\n# 请求处理的超时时间\nribbon:\n  ReadTimeout: 10000\n  ConnectTimeout: 10000\n# mybaits-plus配置\nmybatis-plus:\n  # MyBatis Mapper所对应的XML文件位置\n  mapper-locations: classpath:/mapper/*Mapper.xml\n  # 自定义TypeHandler\n  type-handlers-package: com.xinqi.cloud.common.core.mybatis.typehandler\n  global-config:\n    sql-parser-cache: true\n    # 关闭MP3.0自带的banner\n    banner: false\n    db-config:\n      # 主键类型\n      id-type: auto\n# springdoc-openapi 项目配置\nspringdoc:\n  info:\n    title: xinqi-pro API\n    description: xinqi快速开发平台-采用目前最流行的微服务前后端分离框架\n    version: 1.0\n  swagger-ui:\n    path: /swagger-ui.html\n    tags-sorter: alpha\n    operations-sorter: alpha\n  api-docs:\n    path: /v3/api-docs\n  group-configs:\n  - group: default\n    paths-to-match: /**\n    packages-to-scan: com.xinqi.cloud\n# spring security 配置\nsecurity:\n  oauth2:\n    client:\n      # 无需token访问的url,如果子模块重写这里的配置就会被覆盖\n      release-urls:\n      - /actuator/**\n      - /v3/api-docs/**\n    resource:\n      loadBalanced: true\n      token-info-uri: http://xinqi-auth/oauth2/check_token\n# 第三方登录配置\nthirdparty:\n  # 微信登录\n  wx:\n    appId: wxca90d5fea89f7bff\n    appSecret: xxxxxxxxxxxxxxxxxxxxx\n  # QQ登录\n  qq:\n    appId: 101888362\n    appKey: xxxxxxxxxxxxxxxxxxxxxx\n   # GOOGLE登录\n  google:\n    clientId: 10188836334\n    clientSecret: dfdsafefdsfds\n  # facebook登录\n  facebook:\n    clientId: 1018883633w4\n    clientSecret: dfdsafefwdsfds\nbase:\n  # 文件存放目录配置（用来存放微信支付证书，https证书）\n  home-dir:\n    windows: C:/joolun-file/\n    linux: /mnt/install/joolun-file/\n  # 你的nginx配置文件目录\n  nginx:\n    confDir: C:/nginx/conf.d/\n  # 前端h5相关配置\n  h5portal:\n    # 前端h5移动端、pc端默认域名\n    domain:\n      pc: pro-pc.xinqi.com\n      mobile: pro-mall.xinqi.com\n    # 前端h5移动端、pc端打包目录\n    path:\n      pc: /mnt/install/xinqi-pro/h5-pc/\n      mobile: /mnt/install/xinqi-pro/h5/\n  # 商城相关配置\n  mall:\n    notifyHost: http://test.xq.com\n    userDefaultAvatar: https://xingqires.oss-cn-shanghai.aliyuncs.com/-1/material/d7e42a6b-fd5c-4bbe-aa01-e9787eed9bd7.png\nim:\n  secret: xxxxxxxxxxx\n  url: im.xq.com\ngetui:\n  appId: xxxxxxxxxxxxxxxx\n  appKey: xxxxxxxxxxxxxxxxxxx\n  masterSecret: xxxxxxxxxxxxxxxxx\n  domain: https://restapi.getui.com/v2\n', '173bd0511b4c6e017ad9975553361430', '2019-07-28 23:14:26', '2025-10-23 15:24:51', NULL, '192.168.0.61', '', '', NULL, NULL, NULL, 'yaml', NULL, '');
INSERT INTO `config_info` (`id`, `data_id`, `group_id`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `app_name`, `tenant_id`, `c_desc`, `c_use`, `effect`, `type`, `c_schema`, `encrypted_data_key`) VALUES (1126, 'xinqi-auth-dev.yml', 'DEFAULT_GROUP', '# 数据源\nspring:\n  datasource:\n    dynamic:\n      primary: master\n      strict: false\n      datasource:\n        master:\n          username: ${xinqi.mysql.username}\n          password: ${xinqi.mysql.password}\n          url: jdbc:mysql://${xinqi.mysql.host}:${xinqi.mysql.port}/xinqi_pro_upms?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8&allowMultiQueries=true&allowPublicKeyRetrieval=true\n  freemarker:\n    allow-request-override: false\n    allow-session-override: false\n    cache: true\n    charset: UTF-8\n    check-template-location: true\n    content-type: text/html\n    enabled: true\n    expose-request-attributes: false\n    expose-session-attributes: false\n    expose-spring-macro-helpers: true\n    prefer-file-system-access: true\n    suffix: .ftl\n    template-loader-path: classpath:/templates/', '1094dce314a2bb62e1d437ad71214ab0', '2025-05-12 05:56:52', '2025-05-23 09:29:27', NULL, '117.43.122.159', '', '', '认证授权配置', NULL, NULL, 'yaml', NULL, '');
INSERT INTO `config_info` (`id`, `data_id`, `group_id`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `app_name`, `tenant_id`, `c_desc`, `c_use`, `effect`, `type`, `c_schema`, `encrypted_data_key`) VALUES (1130, 'xinqi-upms-admin-dev.yml', 'DEFAULT_GROUP', '# spring security 配置\nsecurity:\n  oauth2:\n    client:\n      client-id: admin\n      client-secret: admin\n      scope: server\n      # 无需token访问的url\n      release-urls:\n        - /actuator/**\n        - /v3/api-docs/**\n        - /user/register\n        - /druid/**\n        - /user/count\n        - /tenant/outside/**\n        - /tenantapply/addedit\n        - /tenantapply/one\n        - /tenant/count\n        - /file/upload/out\n        - /tenantpackagerecharge/notify-ali/**\n        - /tenantpackagerecharge/notify-wx/**\n        - /agreementconfig/type/**\n        - /phone/code\n        - /email/code/**\n        - /user/info/phone/**\n        - /user/info/thirdparty/**\n        - /initConfig/**\n# 数据源\nspring:\n  datasource:\n    dynamic:\n      primary: master\n      strict: false\n      datasource:\n        master:\n          username: ${xinqi.mysql.username}\n          password: ${xinqi.mysql.password}\n          url: jdbc:mysql://${xinqi.mysql.host}:${xinqi.mysql.port}/xinqi_pro_upms?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8&allowMultiQueries=true&allowPublicKeyRetrieval=true\n# Logger Config sql日志\nlogging:\n  level:\n    com.xinqi.cloud.upms.admin.mapper: debug\nbase:\n  # 租户表维护\n  tenant:\n    column: tenant_id\n    tables:\n      - sys_user\n      - sys_role\n      - sys_organ\n      - sys_log\n      - sys_log_login\n      - sys_config_storage\n      - sys_config_editor\n      - sys_organ_relation\n      - sys_role_menu\n      - sys_user_role\n      - sys_config_sms\n      - agreement_config\n  # 店铺数据权限控制\n  shop:\n    datascope:\n      mappers:\n        - column: shop_id\n          value: ShopUserMapper\n  # 供应商数据权限控制\n  supplier:\n    datascope:\n      mappers:\n        - column: supplier_id\n          value: SupplierUserMapper\n  # 数据权限配置\n  datascope:\n    column: organ_id\n    mapperIds:\n      - com.xinqi.cloud.upms.admin.mapper.SysUserMapper.getUserVosPage \n  # 分表配置\n  shardingtable:\n    tables:\n      - sys_log\n      - sys_log_login\n# 邮箱配置\nemail:\n  mailSmtpHost: smtpdm.aliyun.com\n  mailSmtpUsername: system@joolun.com\n  mailSmtpPassword: JLjl1868133519\n  siteName: JooLun', '7d80cb3d4a78869fd9b2f9b475f8c665', '2025-05-12 06:04:14', '2025-05-23 16:33:51', 'nacos', '183.218.240.41', '', '', '用户权限管理配置', '', '', 'yaml', '', '');
INSERT INTO `config_info` (`id`, `data_id`, `group_id`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `app_name`, `tenant_id`, `c_desc`, `c_use`, `effect`, `type`, `c_schema`, `encrypted_data_key`) VALUES (1132, 'xinqi-codegen-dev.yml', 'DEFAULT_GROUP', '# spring security 配置\nsecurity:\n  oauth2:\n    client:\n      client-id: admin\n      client-secret: admin\n      scope: server\n# 数据源配置\nspring:\n  datasource:\n    type: com.alibaba.druid.pool.DruidDataSource\n    druid:\n      driver-class-name: com.mysql.cj.jdbc.Driver\n      username: ${xinqi.mysql.username}\n      password: ${xinqi.mysql.password}\n      url: jdbc:mysql://${xinqi.mysql.host}:${xinqi.mysql.port}/xinqi_pro_upms?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8&allowMultiQueries=true&allowPublicKeyRetrieval=true\n  resources:\n    static-locations: classpath:/static/,classpath:/views/\n# Logger config sql日志\nlogging:\n  level:\n    com.xinqi.cloud.codegen.mapper: debug\nbase:\n  tenant:\n    column: tenant_id\n    tables:\n      - sys_datasource', '9e3dea5d756745fc37e20f7615fd00fa', '2025-05-12 06:07:06', '2025-05-23 15:32:35', 'nacos', '117.43.122.159', '', '', '代码生成配置', '', '', 'yaml', '', '');
INSERT INTO `config_info` (`id`, `data_id`, `group_id`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `app_name`, `tenant_id`, `c_desc`, `c_use`, `effect`, `type`, `c_schema`, `encrypted_data_key`) VALUES (1133, 'xinqi-mall-admin-dev.yml', 'DEFAULT_GROUP', '# spring security 配置\nsecurity:\n  oauth2:\n    client:\n      client-id: admin\n      client-secret: admin\n      scope: server\n      # 无需token访问的url\n      release-urls:\n      - /actuator/**\n      - /v3/api-docs/**\n      - /api/**\n      - /shopapply/addedit\n      - /shopinfo/count\n      - /shopapply/one\n      - /orderrefunds/notify-refunds/**\n      - /shopdeposit/notify-ali/**\n      - /shopdeposit/notify-wx/**\n      - /ordercashier/notify-wx/**\n      - /ordercashier/notify-ali/**\n# 数据源配置\nspring:\n  datasource:\n    # 分库信息\n    sharding:\n      enabled: true\n      dbname: xinqi_pro_mall\n      dbusername: ${xinqi.mysql.username}\n      dbpassword: ${xinqi.mysql.password}\n      url: jdbc:mysql://${xinqi.mysql.host}:${xinqi.mysql.port}/{}?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8&allowMultiQueries=true&allowPublicKeyRetrieval=true\n    # 多数据源，只设置主数据源，其他租户数据源，后期动态加载\n    dynamic:\n      primary: master\n      strict: false\n      datasource:\n        master:\n          username: ${xinqi.mysql.username}\n          password: ${xinqi.mysql.password}\n          url: jdbc:mysql://${xinqi.mysql.host}:${xinqi.mysql.port}/xinqi_pro_upms?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8&allowMultiQueries=true&allowPublicKeyRetrieval=true\n  \n  resources:\n    static-locations: classpath:/static/,classpath:/views/\n# Logger Config sql日志\nlogging:\n  level:\n    com.xinqi.cloud.mall.admin.mapper: debug\nbase:\n  # 租户表维护\n  tenant:\n    column: tenant_id\n    tables:\n    - goods_category\n    - goods_spu\n    - goods_spu_spec\n    - goods_sku\n    - goods_sku_spec_value\n    - goods_spec\n    - goods_spec_value\n    - goods_appraises\n    - shopping_cart\n    - order_info\n    - order_item\n    - order_logistics\n    - order_logistics_detail\n    - user_address\n    - user_collect\n    - material\n    - material_group\n    - order_refunds\n    - user_info\n    - points_record\n    - points_config\n    - coupon_info\n    - coupon_goods\n    - coupon_user\n    - freight_templat\n    - bargain_info\n    - bargain_user\n    - bargain_cut\n    - ensure\n    - ensure_goods\n    - groupon_info\n    - groupon_user\n    - shop_info\n    - seckill_hall\n    - seckill_hall_info\n    - seckill_info\n    - goods_category_shop\n    - page_devise\n    - shop_apply\n    - article_category\n    - article_info\n    - user_footprint\n    - sign_config\n    - sign_record\n    - user_shop\n    - distribution_config\n    - user_record\n    - distribution_user\n    - distribution_order\n    - distribution_order_item\n    - user_withdraw_record\n    - user_grade_config\n    - active_background\n    - active_background_relation\n    - active_border\n    - active_border_relation\n    - config_logistics\n    - user_bill\n    - order_bill\n    - shop_logistics_account\n    - supplier\n    - supplier_logistics_account\n    - order_profit_sharing\n    - shop_store\n    - user_info_label\n    - user_shop_label\n    - freight_templat_charge\n    - goods_recommend\n    - balance_config\n    - balance_recharge_config\n    - user_balance\n    - user_balance_record\n    - user_points\n    - shop_deposit_config\n    - shop_deposit\n    - vip_type\n    - vip_cost\n    - vip_rights\n    - vip_user_recharge\n    - vip_user\n    - goods_brand\n    - supplier_goods_sku\n    - supplier_goods_sku_spec_value\n    - supplier_goods_spu\n    - supplier_goods_spu_spec\n    - live_config\n    - live_room\n    - live_room_spu\n  # 店铺数据权限控制\n  shop:\n    datascope:\n      mappers:\n      - column: id\n        value: ShopInfoMapper\n      - column: shop_id\n        value: GoodsSpuMapper\n      - column: shop_id\n        value: OrderInfoMapper\n      - column: shop_id\n        value: GoodsAppraisesMapper\n      - column: shop_id\n        value: OrderRefundsMapper\n      - column: shop_id\n        value: CouponInfoMapper\n      - column: shop_id\n        value: CouponUserMapper\n      - column: shop_id\n        value: FreightTemplatMapper\n      - column: shop_id\n        value: BargainInfoMapper\n      - column: shop_id\n        value: BargainUserMapper\n      - column: shop_id\n        value: BargainCutMapper\n      - column: shop_id\n        value: GrouponInfoMapper\n      - column: shop_id\n        value: GrouponUserMapper\n      - column: shop_id\n        value: PointsRecordMapper\n      - column: shop_id\n        value: MaterialGroupMapper\n      - column: shop_id\n        value: MaterialMapper\n      - column: shop_id\n        value: SeckillInfoMapper\n      - column: shop_id\n        value: GoodsCategoryShopMapper\n      - column: shop_id\n        value: PageDeviseMapper\n      - column: shop_id\n        value: UserShopMapper\n      - column: shop_id\n        value: OrderBillMapper\n      - column: shop_id\n        value: ShopLogisticsAccountMapper\n      - column: shop_id\n        value: ShopStoreMapper\n      - column: shop_id\n        value: DistributionOrderMapper\n      - column: shop_id\n        value: UserShopLabelMapper\n      - column: shop_id\n        value: ShopStoreMapper\n      - column: shop_id\n        value: OrderProfitSharingMapper\n  # 供应商数据权限控制\n  supplier:\n    datascope:\n      mappers:\n      - column: id\n        value: SupplierMapper\n      - column: supplier_id\n        value: OrderItemMapper\n      - column: supplier_id\n        value: SupplierLogisticsAccountMapper\n      - column: supplier_id\n        value: OrderRefundsMapper\n      - column: supplier_id\n        value: SupplierGoodsSpuMapper\n      - column: shop_id\n        value: FreightTemplatMapper\n      - column: shop_id\n        value: MaterialGroupMapper\n      - column: shop_id\n        value: MaterialMapper', 'f2cd8fb573257322ac2659675371a03a', '2025-05-12 06:07:22', '2025-05-23 15:16:01', 'nacos', '117.43.122.159', '', '', '', '', '', 'yaml', '', '');
INSERT INTO `config_info` (`id`, `data_id`, `group_id`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `app_name`, `tenant_id`, `c_desc`, `c_use`, `effect`, `type`, `c_schema`, `encrypted_data_key`) VALUES (1134, 'xinqi-mall-api-dev.yml', 'DEFAULT_GROUP', '# spring security 配置\nsecurity:\n  oauth2:\n    client:\n      client-id: api\n      client-secret: api\n      scope: server\n      # 无需token访问的url\n      release-urls:\n        - /**\n# 数据源配置\nspring:\n  datasource:\n    # 分库信息\n    sharding:\n      enabled: true\n      dbname: xinqi_pro_mall\n      dbusername: ${xinqi.mysql.username}\n      dbpassword: ${xinqi.mysql.password}\n      url: jdbc:mysql://${xinqi.mysql.host}:${xinqi.mysql.port}/{}?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8&allowMultiQueries=true&allowPublicKeyRetrieval=true\n    # 多数据源，只设置主数据源，其他租户数据源，后期动态加载\n    dynamic:\n      primary: master\n      strict: true\n      datasource:\n        master:\n          username: ${xinqi.mysql.username}\n          password: ${xinqi.mysql.password}\n          url: jdbc:mysql://${xinqi.mysql.host}:${xinqi.mysql.port}/xinqi_pro_upms?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8&allowMultiQueries=true&allowPublicKeyRetrieval=true\n  resources:\n    static-locations: classpath:/static/,classpath:/views/\n# Logger Config sql日志\nlogging:\n  level:\n    com.xinqi.cloud.mall.api.mapper: debug    \n# 租户表维护\nbase:\n  tenant:\n    column: tenant_id\n    tables:\n      - goods_category\n      - goods_spu\n      - goods_spu_spec\n      - goods_sku\n      - goods_sku_spec_value\n      - goods_spec\n      - goods_spec_value\n      - goods_appraises\n      - shopping_cart\n      - order_info\n      - order_item\n      - order_logistics\n      - order_logistics_detail\n      - user_address\n      - user_collect\n      - material\n      - material_group\n      - order_refunds\n      - user_info\n      - points_record\n      - points_config\n      - coupon_info\n      - coupon_goods\n      - coupon_user\n      - freight_templat\n      - bargain_info\n      - bargain_user\n      - bargain_cut\n      - ensure\n      - ensure_goods\n      - groupon_info\n      - groupon_user\n      - shop_info\n      - seckill_hall\n      - seckill_hall_info\n      - seckill_info\n      - goods_category_shop\n      - page_devise\n      - article_category\n      - article_info\n      - user_footprint\n      - sign_config\n      - sign_record\n      - user_shop\n      - distribution_config\n      - user_record\n      - distribution_user\n      - distribution_order\n      - distribution_order_item\n      - user_withdraw_record\n      - user_grade_config\n      - active_background\n      - active_background_relation\n      - active_border\n      - active_border_relation\n      - config_logistics\n      - user_bill\n      - order_bill\n      - shop_logistics_account\n      - supplier\n      - supplier_logistics_account\n      - order_profit_sharing\n      - shop_store\n      - user_info_label\n      - user_shop_label\n      - freight_templat_charge\n      - goods_recommend\n      - balance_config\n      - balance_recharge_config\n      - user_balance\n      - user_balance_record\n      - user_points\n      - shop_deposit_config\n      - shop_deposit\n      - vip_type\n      - vip_cost\n      - vip_rights\n      - vip_user_recharge\n      - vip_user\n      - goods_brand\n      - live_config\n      - live_room\n      - live_room_spu\nxxl:\n  job:\n    # 开关\n    enabled: false\n    admin:\n      # xxl_job后台访问地址\n      addresses: http://127.0.0.1:8080/xxl-job-admin\n    executor:\n      appname: xinqi-pro-mall-api\n      port: 9998', '01911353972bf2db74b2279ba23bca64', '2025-05-12 06:07:33', '2025-05-23 15:31:22', 'nacos', '117.43.122.159', '', '', '商城api模块', '', '', 'yaml', '', '');
INSERT INTO `config_info` (`id`, `data_id`, `group_id`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `app_name`, `tenant_id`, `c_desc`, `c_use`, `effect`, `type`, `c_schema`, `encrypted_data_key`) VALUES (1138, 'xinqi-pay-admin-dev.yml', 'DEFAULT_GROUP', '# spring security 配置\nsecurity:\n  oauth2:\n    client:\n      client-id: admin\n      client-secret: admin\n      scope: server\n      # 无需token访问的url\n      release-urls:\n        - /actuator/**\n        - /v3/api-docs/**\n        - /aliopenauth/redirect\n# 数据源配置\nspring:\n  datasource:\n    # 分库信息\n    sharding:\n      enabled: true\n      dbname: xinqi_pro_mall\n      dbusername: ${xinqi.mysql.username}\n      dbpassword: ${xinqi.mysql.password}\n      url: jdbc:mysql://${xinqi.mysql.host}:${xinqi.mysql.port}/{}?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8&allowMultiQueries=true&allowPublicKeyRetrieval=true\n    # 多数据源，只设置主数据源，其他租户数据源，后期动态加载\n    dynamic:\n      primary: master\n      strict: false\n      datasource:\n        master:\n          username: ${xinqi.mysql.username}\n          password: ${xinqi.mysql.password}\n          url: jdbc:mysql://${xinqi.mysql.host}:${xinqi.mysql.port}/xinqi_pro_upms?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8&allowMultiQueries=true&allowPublicKeyRetrieval=true\n# Logger Config sql日志\nlogging:\n  level:\n    com.joolun.cloud.pay.admin.mapper: debug    \n# 租户表维护\nbase:\n  tenant:\n    column: tenant_id\n    tables:\n      - pay_config\n      - pay_apply_form\n  #店铺数据权限控制\n  shop:\n    datascope:\n      mappers:\n        - column: shop_id\n          value: PayApplyFormMapper', '3f48ee19bc2e5018ebbb75dcc5bf96f7', '2025-05-12 06:23:01', '2025-05-23 09:29:27', NULL, '117.43.122.159', '', '', '支付模块', NULL, NULL, 'yaml', NULL, '');
INSERT INTO `config_info` (`id`, `data_id`, `group_id`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `app_name`, `tenant_id`, `c_desc`, `c_use`, `effect`, `type`, `c_schema`, `encrypted_data_key`) VALUES (1140, 'xinqi-weixin-admin-dev.yml', 'DEFAULT_GROUP', '# spring security 配置\nsecurity:\n  oauth2:\n    client:\n      client-id: admin\n      client-secret: admin\n      scope: server\n      # 无需token访问的url\n      release-urls:\n        - /actuator/**\n        - /v3/api-docs/**\n        - /portal/**\n        - /ws/**\n        - /open/notify/**\n        - /open/auth/**\n        - /api/**\n# 数据源配置\nspring:\n  datasource:\n    dynamic:\n      primary: master\n      strict: false\n      datasource:\n        master:\n          username: ${xinqi.mysql.username}\n          password: ${xinqi.mysql.password}\n          url: jdbc:mysql://${xinqi.mysql.host}:${xinqi.mysql.port}/xinqi_pro_wx?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8&allowMultiQueries=true&allowPublicKeyRetrieval=true\n  resources:\n    static-locations: classpath:/static/,classpath:/views/\n# Logger Config sql日志\nlogging:\n  level:\n    com.joolun.cloud.weixin.admin.mapper: debug\nbase:\n  # 租户表维护\n  tenant:\n    column: tenant_id\n    tables:\n      - wx_app\n      - wx_menu\n      - wx_menu_rule\n      - wx_user\n      - wx_auto_reply\n      - wx_msg\n      - wx_mass_msg\n      - wx_template_msg\n      - wxma_code_audit\n      - wxma_code_commit\n      - wx_fast_regist\n      - wxma_nickname_audit\n      - wx_auth_audit\n  # 店铺数据权限控制\n  shop:\n    datascope:\n      mappers:\n        - column: shop_id\n          value: WxAppMapper\n        - column: shop_id\n          value: WxFastRegistMapper\n  # 分表配置\n  shardingtable:\n    tables:\n      - wx_user\n      - wx_msg\n# 微信第三方平台配置，请自行申请(https://open.weixin.qq.com/)\nwx:\n  component:\n    appId: wxee91e6b8e30b575d\n    appSecret: 5a3c3cc379b1385937bc98d43a03f164\n    token: gh_26fd6cdbd78b\n    aesKey: DYnwvIfD47b7QkIKrO6a3OKgI172VrRaXLil48JEjr0\n    # 第三方联系电话，如实填写系统平台管理员电话\n    phone: 18525851621', 'f543e7bc8971d210055635624d3aea8c', '2025-05-12 06:24:46', '2025-05-23 09:29:27', NULL, '117.43.122.159', '', '', '微信公众号配置', NULL, NULL, 'yaml', NULL, '');
INSERT INTO `config_info` (`id`, `data_id`, `group_id`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `app_name`, `tenant_id`, `c_desc`, `c_use`, `effect`, `type`, `c_schema`, `encrypted_data_key`) VALUES (1141, 'xinqi-live-admin-dev.yml', 'DEFAULT_GROUP', '# spring security 配置\nsecurity:\n  oauth2:\n    client:\n      client-id: admin\n      client-secret: admin\n      scope: server\n      # 无需token访问的url\n      release-urls:\n      - /actuator/**\n      - /v3/api-docs/**\n      - /ws/**\n# 数据源配置\nspring:\n  datasource:\n    # 分库信息\n    sharding:\n      enabled: true\n      dbname: xinqi_pro_mall\n      dbusername: ${xinqi.mysql.username}\n      dbpassword: ${xinqi.mysql.password}\n      url: jdbc:mysql://${xinqi.mysql.host}:${xinqi.mysql.port}/{}?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8&allowMultiQueries=true&allowPublicKeyRetrieval=true\n    # 多数据源，只设置主数据源，其他租户数据源，后期动态加载\n    dynamic:\n      primary: master\n      strict: false\n      datasource:\n        master:\n          username: ${xinqi.mysql.username}\n          password: ${xinqi.mysql.password}\n          url: jdbc:mysql://${xinqi.mysql.host}:${xinqi.mysql.port}/xinqi_pro_upms?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8&allowMultiQueries=true&allowPublicKeyRetrieval=true\n  \n  resources:\n    static-locations: classpath:/static/,classpath:/views/\n# Logger Config sql日志\nlogging:\n  level:\n    com.joolun.cloud.live.admin.mapper: debug\nbase:\n  # 租户表维护\n  tenant:\n    column: tenant_id\n    tables:\n    - live_config\n    - live_room\n    - live_room_spu\n  # 店铺数据权限控制\n  shop:\n    datascope:\n      mappers:\n      - column: shop_id\n        value: LiveRoomMapper', '41e500f992466a1504588372a2e3586d', '2025-05-12 06:25:07', '2025-05-23 09:29:27', NULL, '117.43.122.159', '', '', '直播', NULL, NULL, 'yaml', NULL, '');
INSERT INTO `config_info` (`id`, `data_id`, `group_id`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `app_name`, `tenant_id`, `c_desc`, `c_use`, `effect`, `type`, `c_schema`, `encrypted_data_key`) VALUES (1142, 'xinqi-monitor-dev.yml', 'DEFAULT_GROUP', 'spring:\n  # 安全配置\n  security:\n    user:\n      name: xinqi\n      password: xinqi\n  boot:\n    admin:\n      ui:\n        title: \'xinqi服务状态监控\'', '924ed58732883f9875a9d26ca87a40d7', '2025-05-12 06:25:28', '2025-05-23 09:29:27', NULL, '117.43.122.159', '', '', '监控中心', NULL, NULL, 'yaml', NULL, '');
INSERT INTO `config_info` (`id`, `data_id`, `group_id`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `app_name`, `tenant_id`, `c_desc`, `c_use`, `effect`, `type`, `c_schema`, `encrypted_data_key`) VALUES (1147, 'xinqi-gateway-dev.yml', 'DEFAULT_GROUP', 'security:\n  encode:\n    # 前端密码密钥，必须16位，和joolun-pro-ui、joolun-pro-app配置文件\\src\\config\\env.js中的securityKey相对应\n    key: \'1234567891234567\'\n# 不校验验证码终端\ngateway:\n  ignore-clients:\n    - swagger\n    - api\n  encode-key:\n    - joolun-auth\n\n# knife4j 网关聚合\nknife4j:\n  gateway:\n    enabled: true\n    # 指定服务发现的模式聚合微服务文档，并且是默认 default 分组\n    strategy: discover\n    discover:\n      enabled: true\n      # OpenAPI 3.0 规范 \n      version: openapi3\n      # 需要排除的微服务\n      excluded-services:\n        - xinqi-auth', '39002acabbb0b5ea4aa18c56dd7b9088', '2025-05-16 02:31:27', '2025-05-23 15:31:52', 'nacos', '117.43.122.159', '', '', '网关配置', '', '', 'yaml', '', '');
INSERT INTO `config_info` (`id`, `data_id`, `group_id`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `app_name`, `tenant_id`, `c_desc`, `c_use`, `effect`, `type`, `c_schema`, `encrypted_data_key`) VALUES (1154, 'xinqi-gateway-flow-rules', 'SENTINEL_GROUP', '[\n    {\n        \"resource\": \"xinqi-auth\",\n        \"count\": 500,\n        \"grade\": 1,\n        \"limitApp\": \"default\",\n        \"strategy\": 0,\n        \"controlBehavior\": 0\n    },{\n        \"resource\": \"xinqi-upms-admin\",\n        \"count\": 1000,\n        \"grade\": 1,\n        \"limitApp\": \"default\",\n        \"strategy\": 0,\n        \"controlBehavior\": 0\n    },{\n        \"resource\": \"xinqi-weixin-admin\",\n        \"count\": 1000,\n        \"grade\": 1,\n        \"limitApp\": \"default\",\n        \"strategy\": 0,\n        \"controlBehavior\": 0\n    },{\n        \"resource\": \"xinqi-mall-admin\",\n        \"count\": 1000,\n        \"grade\": 1,\n        \"limitApp\": \"default\",\n        \"strategy\": 0,\n        \"controlBehavior\": 0\n    },{\n        \"resource\": \"xinqi-mall-api\",\n        \"count\": 1000,\n        \"grade\": 1,\n        \"limitApp\": \"default\",\n        \"strategy\": 0,\n        \"controlBehavior\": 0\n    },{\n        \"resource\": \"xinqi-pay-admin\",\n        \"count\": 1000,\n        \"grade\": 1,\n        \"limitApp\": \"default\",\n        \"strategy\": 0,\n        \"controlBehavior\": 0\n    },{\n        \"resource\": \"xinqi-live-admin\",\n        \"count\": 1000,\n        \"grade\": 1,\n        \"limitApp\": \"default\",\n        \"strategy\": 0,\n        \"controlBehavior\": 0\n    }\n]', '294055b749a62877e49bab3b7a833995', '2025-05-22 03:51:26', '2025-05-23 09:29:27', NULL, '117.43.122.159', '', '', 'sentinal流控规则', NULL, NULL, 'json', NULL, '');
COMMIT;

-- ----------------------------
-- Table structure for config_info_aggr
-- ----------------------------
DROP TABLE IF EXISTS `config_info_aggr`;
CREATE TABLE `config_info_aggr` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'data_id',
  `group_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'group_id',
  `datum_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'datum_id',
  `content` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '内容',
  `gmt_modified` datetime NOT NULL COMMENT '修改时间',
  `app_name` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `tenant_id` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT '' COMMENT '租户字段',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `uk_configinfoaggr_datagrouptenantdatum` (`data_id`,`group_id`,`tenant_id`,`datum_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin ROW_FORMAT=DYNAMIC COMMENT='增加租户字段';

-- ----------------------------
-- Records of config_info_aggr
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for config_info_beta
-- ----------------------------
DROP TABLE IF EXISTS `config_info_beta`;
CREATE TABLE `config_info_beta` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'data_id',
  `group_id` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'group_id',
  `app_name` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'app_name',
  `content` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'content',
  `beta_ips` varchar(1024) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'betaIps',
  `md5` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'md5',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `src_user` text CHARACTER SET utf8mb3 COLLATE utf8mb3_bin COMMENT 'source user',
  `src_ip` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'source ip',
  `tenant_id` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT '' COMMENT '租户字段',
  `encrypted_data_key` text CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '秘钥',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `uk_configinfobeta_datagrouptenant` (`data_id`,`group_id`,`tenant_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin ROW_FORMAT=DYNAMIC COMMENT='config_info_beta';

-- ----------------------------
-- Records of config_info_beta
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for config_info_tag
-- ----------------------------
DROP TABLE IF EXISTS `config_info_tag`;
CREATE TABLE `config_info_tag` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'data_id',
  `group_id` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'group_id',
  `tenant_id` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT '' COMMENT 'tenant_id',
  `tag_id` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'tag_id',
  `app_name` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'app_name',
  `content` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'content',
  `md5` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'md5',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `src_user` text CHARACTER SET utf8mb3 COLLATE utf8mb3_bin COMMENT 'source user',
  `src_ip` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'source ip',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `uk_configinfotag_datagrouptenanttag` (`data_id`,`group_id`,`tenant_id`,`tag_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin ROW_FORMAT=DYNAMIC COMMENT='config_info_tag';

-- ----------------------------
-- Records of config_info_tag
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for config_tags_relation
-- ----------------------------
DROP TABLE IF EXISTS `config_tags_relation`;
CREATE TABLE `config_tags_relation` (
  `id` bigint NOT NULL COMMENT 'id',
  `tag_name` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'tag_name',
  `tag_type` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'tag_type',
  `data_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'data_id',
  `group_id` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'group_id',
  `tenant_id` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT '' COMMENT 'tenant_id',
  `nid` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`nid`) USING BTREE,
  UNIQUE KEY `uk_configtagrelation_configidtag` (`id`,`tag_name`,`tag_type`) USING BTREE,
  KEY `idx_tenant_id` (`tenant_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin ROW_FORMAT=DYNAMIC COMMENT='config_tag_relation';

-- ----------------------------
-- Records of config_tags_relation
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for group_capacity
-- ----------------------------
DROP TABLE IF EXISTS `group_capacity`;
CREATE TABLE `group_capacity` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `group_id` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL DEFAULT '' COMMENT 'Group ID，空字符表示整个集群',
  `quota` int unsigned NOT NULL DEFAULT '0' COMMENT '配额，0表示使用默认值',
  `usage` int unsigned NOT NULL DEFAULT '0' COMMENT '使用量',
  `max_size` int unsigned NOT NULL DEFAULT '0' COMMENT '单个配置大小上限，单位为字节，0表示使用默认值',
  `max_aggr_count` int unsigned NOT NULL DEFAULT '0' COMMENT '聚合子配置最大个数，，0表示使用默认值',
  `max_aggr_size` int unsigned NOT NULL DEFAULT '0' COMMENT '单个聚合数据的子配置大小上限，单位为字节，0表示使用默认值',
  `max_history_count` int unsigned NOT NULL DEFAULT '0' COMMENT '最大变更历史数量',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `uk_group_id` (`group_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin ROW_FORMAT=DYNAMIC COMMENT='集群、各Group容量信息表';

-- ----------------------------
-- Records of group_capacity
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for his_config_info
-- ----------------------------
DROP TABLE IF EXISTS `his_config_info`;
CREATE TABLE `his_config_info` (
  `id` bigint unsigned NOT NULL,
  `nid` bigint unsigned NOT NULL AUTO_INCREMENT,
  `data_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `group_id` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `app_name` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'app_name',
  `content` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `md5` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `src_user` text CHARACTER SET utf8mb3 COLLATE utf8mb3_bin,
  `src_ip` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `op_type` char(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `tenant_id` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT '' COMMENT '租户字段',
  `encrypted_data_key` text CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '秘钥',
  PRIMARY KEY (`nid`) USING BTREE,
  KEY `idx_gmt_create` (`gmt_create`) USING BTREE,
  KEY `idx_gmt_modified` (`gmt_modified`) USING BTREE,
  KEY `idx_did` (`data_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=672 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin ROW_FORMAT=DYNAMIC COMMENT='多租户改造';

-- ----------------------------
-- Records of his_config_info
-- ----------------------------
BEGIN;
INSERT INTO `his_config_info` (`id`, `nid`, `data_id`, `group_id`, `app_name`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `op_type`, `tenant_id`, `encrypted_data_key`) VALUES (2, 670, 'application-dev.yml', 'DEFAULT_GROUP', '', '# joolun全局配置\nxinqi:\n  # mysql全局配置\n  mysql:\n    host: 127.0.0.1\n    port: 3306\n    username: root\n    password: d71d5965ce8f788a\n  is-demo: 1\n# 加解密根密码\njasypt:\n  encryptor:\n    # 根密码，改完密码要把joolun_upms.sys_datasource数据库表清空，否则代码生成器无法启动\n    password: xinqi\nspring:\n  servlet:\n    multipart:\n      # 缓存文件存放路径\n      location: /data/tmp\n      # 单个文件的大小\n      max-file-size: 10MB\n      # 上传文件的总大小\n      max-request-size: 100MB\n  data:\n    # redis 相关\n    redis:\n      host: 127.0.0.1\n      port: 6379\n      password: \n      database: 4\n  # 分布式锁klock配置\n  klock:\n    address: redis://${spring.data.redis.host}:${spring.data.redis.port}\n    # redis没有密码就不要配置password，否则会报错\n    # password: ${spring.data.redis.password}\n    database: ${spring.data.redis.database}\n  # elasticsearch配置\n  elasticsearch:\n    uris: 127.0.0.1:9200\n    username: elastic\n    password: 123456\n    connection-timeout: 10s\n# logging日志\nlogging:\n  level:\n    com.alibaba.nacos.client.naming: error\n# 暴露监控端点\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: \'*\'\n# feign 配置\nfeign:\n  sentinel:\n    enabled: true\n  okhttp:\n    enabled: true\n  httpclient:\n    enabled: false\n  client:\n    config:\n      default:\n        connectTimeout: 30000\n        readTimeout: 30000\n  compression:\n    request:\n      enabled: true\n    response:\n      enabled: true\n# 请求处理的超时时间\nribbon:\n  ReadTimeout: 10000\n  ConnectTimeout: 10000\n# mybaits-plus配置\nmybatis-plus:\n  # MyBatis Mapper所对应的XML文件位置\n  mapper-locations: classpath:/mapper/*Mapper.xml\n  # 自定义TypeHandler\n  type-handlers-package: com.xinqi.cloud.common.core.mybatis.typehandler\n  global-config:\n    sql-parser-cache: true\n    # 关闭MP3.0自带的banner\n    banner: false\n    db-config:\n      # 主键类型\n      id-type: auto\n# springdoc-openapi 项目配置\nspringdoc:\n  info:\n    title: xinqi-pro API\n    description: xinqi快速开发平台-采用目前最流行的微服务前后端分离框架\n    version: 1.0\n  swagger-ui:\n    path: /swagger-ui.html\n    tags-sorter: alpha\n    operations-sorter: alpha\n  api-docs:\n    path: /v3/api-docs\n  group-configs:\n    - group: \'default\'\n      paths-to-match: \'/**\'\n      packages-to-scan: com.xinqi.cloud\n# spring security 配置\nsecurity:\n  oauth2:\n    client:\n      # 无需token访问的url,如果子模块重写这里的配置就会被覆盖\n      release-urls:\n        - /actuator/**\n        - /v3/api-docs/**\n    resource:\n      loadBalanced: true\n      token-info-uri: http://xinqi-auth/oauth2/check_token\n# 第三方登录配置\nthirdparty:\n  # 微信登录\n  wx:\n    appId: wxca90d5fea89f7bff\n    appSecret: xxxxxxxxxxxxxxxxxxxxx\n  # QQ登录\n  qq:\n    appId: 101888362\n    appKey: xxxxxxxxxxxxxxxxxxxxxx\n   # GOOGLE登录\n  google:\n    clientId: 10188836334\n    clientSecret: dfdsafefdsfds\n  # facebook登录\n  facebook:\n    clientId: 1018883633w4\n    clientSecret: dfdsafefwdsfds         \nbase:\n  # 文件存放目录配置（用来存放微信支付证书，https证书）\n  home-dir:\n    windows: C:/joolun-file/\n    linux: /mnt/install/joolun-file/\n  # 你的nginx配置文件目录\n  nginx:\n    confDir: C:/nginx/conf.d/\n  # 前端h5相关配置\n  h5portal:\n    # 前端h5移动端、pc端默认域名\n    domain:\n      pc: pro-pc.xinqi.com\n      mobile: pro-mall.xinqi.com\n    # 前端h5移动端、pc端打包目录\n    path:\n      pc: /mnt/install/xinqi-pro/h5-pc/\n      mobile: /mnt/install/xinqi-pro/h5/\n  # 商城相关配置\n  mall:\n    # 支付、物流回调地址，即后台外网地址，要保证外网能访问\n    notifyHost: http://test.joolun.com\n    # 商城用户默认头像\n    userDefaultAvatar: http://minio.joolun.com/joolun/1/material/32f19366-3c43-4002-9a82-c984a2d20bbf.png\n# IM配置\nim:\n  # IM域名，不要带http协议前缀\n  url: im.xinqi.com\n  # IM的secret\n  secret: xxxxxxxxxxx\n# 个推配置\ngetui:\n  appId: xxxxxxxxxxxxxxxx\n  appKey: xxxxxxxxxxxxxxxxxxx\n  masterSecret: xxxxxxxxxxxxxxxxx\n  domain: https://restapi.getui.com/v2', '8ae6fe9cf07a000302f945c50b5b332d', '2025-10-23 23:24:34', '2025-10-23 15:24:34', NULL, '192.168.0.61', 'U', '', '');
INSERT INTO `his_config_info` (`id`, `nid`, `data_id`, `group_id`, `app_name`, `content`, `md5`, `gmt_create`, `gmt_modified`, `src_user`, `src_ip`, `op_type`, `tenant_id`, `encrypted_data_key`) VALUES (2, 671, 'application-dev.yml', 'DEFAULT_GROUP', '', '# joolun全局配置\nxinqi:\n  # mysql全局配置\n  mysql:\n    host: 127.0.0.1\n    port: 3306\n    username: root\n    password: d71d5965ce8f788a\n  is-demo: 1\n# 加解密根密码\njasypt:\n  encryptor:\n    # 根密码，改完密码要把joolun_upms.sys_datasource数据库表清空，否则代码生成器无法启动\n    password: xinqi\nspring:\n  servlet:\n    multipart:\n      # 缓存文件存放路径\n      location: /data/tmp\n      # 单个文件的大小\n      max-file-size: 10MB\n      # 上传文件的总大小\n      max-request-size: 100MB\n  data:\n    # redis 相关\n    redis:\n      host: 127.0.0.1\n      port: 6379\n      password: null\n      database: 4\n  # 分布式锁klock配置\n  klock:\n    address: redis://${spring.data.redis.host}:${spring.data.redis.port}\n    # redis没有密码就不要配置password，否则会报错\n    # password: ${spring.data.redis.password}\n    database: ${spring.data.redis.database}\n  # elasticsearch配置\n  elasticsearch:\n    uris: 127.0.0.1:9200\n    username: elastic\n    password: 123456\n    connection-timeout: 10s\n# logging日志\nlogging:\n  level:\n    com.alibaba.nacos.client.naming: error\n# 暴露监控端点\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: \'*\'\n# feign 配置\nfeign:\n  sentinel:\n    enabled: true\n  okhttp:\n    enabled: true\n  httpclient:\n    enabled: false\n  client:\n    config:\n      default:\n        connectTimeout: 30000\n        readTimeout: 30000\n  compression:\n    request:\n      enabled: true\n    response:\n      enabled: true\n# 请求处理的超时时间\nribbon:\n  ReadTimeout: 10000\n  ConnectTimeout: 10000\n# mybaits-plus配置\nmybatis-plus:\n  # MyBatis Mapper所对应的XML文件位置\n  mapper-locations: classpath:/mapper/*Mapper.xml\n  # 自定义TypeHandler\n  type-handlers-package: com.xinqi.cloud.common.core.mybatis.typehandler\n  global-config:\n    sql-parser-cache: true\n    # 关闭MP3.0自带的banner\n    banner: false\n    db-config:\n      # 主键类型\n      id-type: auto\n# springdoc-openapi 项目配置\nspringdoc:\n  info:\n    title: xinqi-pro API\n    description: xinqi快速开发平台-采用目前最流行的微服务前后端分离框架\n    version: 1.0\n  swagger-ui:\n    path: /swagger-ui.html\n    tags-sorter: alpha\n    operations-sorter: alpha\n  api-docs:\n    path: /v3/api-docs\n  group-configs:\n  - group: default\n    paths-to-match: /**\n    packages-to-scan: com.xinqi.cloud\n# spring security 配置\nsecurity:\n  oauth2:\n    client:\n      # 无需token访问的url,如果子模块重写这里的配置就会被覆盖\n      release-urls:\n      - /actuator/**\n      - /v3/api-docs/**\n    resource:\n      loadBalanced: true\n      token-info-uri: http://xinqi-auth/oauth2/check_token\n# 第三方登录配置\nthirdparty:\n  # 微信登录\n  wx:\n    appId: wxca90d5fea89f7bff\n    appSecret: xxxxxxxxxxxxxxxxxxxxx\n  # QQ登录\n  qq:\n    appId: 101888362\n    appKey: xxxxxxxxxxxxxxxxxxxxxx\n   # GOOGLE登录\n  google:\n    clientId: 10188836334\n    clientSecret: dfdsafefdsfds\n  # facebook登录\n  facebook:\n    clientId: 1018883633w4\n    clientSecret: dfdsafefwdsfds\nbase:\n  # 文件存放目录配置（用来存放微信支付证书，https证书）\n  home-dir:\n    windows: C:/joolun-file/\n    linux: /mnt/install/joolun-file/\n  # 你的nginx配置文件目录\n  nginx:\n    confDir: C:/nginx/conf.d/\n  # 前端h5相关配置\n  h5portal:\n    # 前端h5移动端、pc端默认域名\n    domain:\n      pc: pro-pc.xinqi.com\n      mobile: pro-mall.xinqi.com\n    # 前端h5移动端、pc端打包目录\n    path:\n      pc: /mnt/install/xinqi-pro/h5-pc/\n      mobile: /mnt/install/xinqi-pro/h5/\n  # 商城相关配置\n  mall:\n    # 支付、物流回调地址，即后台外网地址，要保证外网能访问\n    notifyHost: http://test.joolun.com\n    # 商城用户默认头像\n    userDefaultAvatar: http://minio.joolun.com/joolun/1/material/32f19366-3c43-4002-9a82-c984a2d20bbf.png\n# IM配置\nim:\n  secret: xxxxxxxxxxx\n  url: im.xq.com\ngetui:\n  appId: xxxxxxxxxxxxxxxx\n  appKey: xxxxxxxxxxxxxxxxxxx\n  masterSecret: xxxxxxxxxxxxxxxxx\n  domain: https://restapi.getui.com/v2\n', '610b15eeefaf1e6c3179934edf5edc12', '2025-10-23 23:24:51', '2025-10-23 15:24:51', NULL, '192.168.0.61', 'U', '', '');
COMMIT;

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
  `role` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `resource` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `action` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  UNIQUE KEY `uk_role_permission` (`role`,`resource`,`action`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of permissions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  UNIQUE KEY `idx_user_role` (`username`,`role`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of roles
-- ----------------------------
BEGIN;
INSERT INTO `roles` (`username`, `role`) VALUES ('nacos', 'ROLE_ADMIN');
COMMIT;

-- ----------------------------
-- Table structure for tenant_capacity
-- ----------------------------
DROP TABLE IF EXISTS `tenant_capacity`;
CREATE TABLE `tenant_capacity` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `tenant_id` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL DEFAULT '' COMMENT 'Tenant ID',
  `quota` int unsigned NOT NULL DEFAULT '0' COMMENT '配额，0表示使用默认值',
  `usage` int unsigned NOT NULL DEFAULT '0' COMMENT '使用量',
  `max_size` int unsigned NOT NULL DEFAULT '0' COMMENT '单个配置大小上限，单位为字节，0表示使用默认值',
  `max_aggr_count` int unsigned NOT NULL DEFAULT '0' COMMENT '聚合子配置最大个数',
  `max_aggr_size` int unsigned NOT NULL DEFAULT '0' COMMENT '单个聚合数据的子配置大小上限，单位为字节，0表示使用默认值',
  `max_history_count` int unsigned NOT NULL DEFAULT '0' COMMENT '最大变更历史数量',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `uk_tenant_id` (`tenant_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin ROW_FORMAT=DYNAMIC COMMENT='租户容量信息表';

-- ----------------------------
-- Records of tenant_capacity
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for tenant_info
-- ----------------------------
DROP TABLE IF EXISTS `tenant_info`;
CREATE TABLE `tenant_info` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id',
  `kp` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT 'kp',
  `tenant_id` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT '' COMMENT 'tenant_id',
  `tenant_name` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT '' COMMENT 'tenant_name',
  `tenant_desc` varchar(256) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'tenant_desc',
  `create_source` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'create_source',
  `gmt_create` bigint NOT NULL COMMENT '创建时间',
  `gmt_modified` bigint NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `uk_tenant_info_kptenantid` (`kp`,`tenant_id`) USING BTREE,
  KEY `idx_tenant_id` (`tenant_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin ROW_FORMAT=DYNAMIC COMMENT='tenant_info';

-- ----------------------------
-- Records of tenant_info
-- ----------------------------
BEGIN;
INSERT INTO `tenant_info` (`id`, `kp`, `tenant_id`, `tenant_name`, `tenant_desc`, `create_source`, `gmt_create`, `gmt_modified`) VALUES (1, '1', '55c524e4-b061-4808-9d1f-bbaa2d844650', 'xinqi-pro', '方壶pro', 'nacos', 1747030162887, 1747030162887);
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`username`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('56JXAJ', '$2a$10$RAABZLDpir30H6lVtVSmqevnpuxX2Qrpi0RwD0XhVzjKP4bOwMMn2', 1);
INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('8ZDN3Q', '$2a$10$1TIoIvQdsFa4X4gHWrLw5.rOZ3GtjWfaBuiN/QxwB246BSYgmCOZi', 1);
INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('9305A0', '$2a$10$Ts6CzN1GT1eBu4PnpQ4MzeXAh6Fczg9XopYxzsZqYCvkym5ip1p9a', 1);
INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('nacos', '$2a$10$qEtwob.oKDCVp8/5tZkS2O3AanieBwJO6UE.3XJ3r9tnlz4Teghmi', 1);
INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('nacos_admin', '$2a$10$3Cz3j7AyhS3/TnjKf/GI1OCKGF.3OZM3H5vzqtLrLj7Iv4E2dNfQe', 1);
INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('nacos297534', '$2a$10$CLlsenfZU1v95AQRorrFROF5xmXgkVe99cRTtFqmtAykRax5FVElK', 1);
INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('UCM59G', '$2a$10$toGb4JZZnmgrqH347C3aGeyXTvfP/NQIE97ipZ.bD3UJuFrJ4ngKa', 1);
INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('X4OETZ', '$2a$10$XCTeegnVsIKOKeI0F7WX5OU65u9kUlkr1uj3FkNFFdIwCxTuQTO8u', 1);
INSERT INTO `users` (`username`, `password`, `enabled`) VALUES ('XUAYWF', '$2a$10$iyLb6LX6J9kFdBIrC3MwF.aJJ2hGacpebgKT8S8f5FnYsurgzLJY6', 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
