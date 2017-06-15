/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : feihu

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-06-15 18:00:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `name` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `price` varchar(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('电风扇2', '../img/bimg2.jpg', '98');
INSERT INTO `list` VALUES ('电风扇1', '../img/bimg3.jpg', '99');
INSERT INTO `list` VALUES ('电风扇3', '../img/bimg4.jpg', '97');
INSERT INTO `list` VALUES (' 杜嘉班纳时尚商务三眼钢带石英男士手表', '../img/list/list1.jpg', '349');
INSERT INTO `list` VALUES (' 俞兆林女士黑白色系船袜5双装 ', '../img/list/list2.jpg', '35');
INSERT INTO `list` VALUES (' Midea/美的 PSS5032 5L 智能电压力锅 ', '../img/list/list3.jpg', '269');
INSERT INTO `list` VALUES (' yoice优益  YC-108 自动抽水壶泡茶套装 ', '../img/list/list4.jpg', '199');
INSERT INTO `list` VALUES (' JDHOE 星品优汇 畅想美食刀叉五件套 ', '../img/list/list5.jpg', '149');
INSERT INTO `list` VALUES (' 摩亚 创意卡通印花 棉麻抱枕 抱枕/靠垫两用 多功能午睡枕 45cm*45cm(枕芯+枕套)  黑猫 ', '../img/list/list6.jpg', '39');
INSERT INTO `list` VALUES (' 摩亚 唯美水洗冰丝凉席 闺蜜派对  1.5*1.95M ', '../img/list/list7.jpg', '109');
INSERT INTO `list` VALUES (' Babycare体温枪FR800 ', '../img/list/list8.jpg', '189');
INSERT INTO `list` VALUES (' 好孩子用品婴儿专用 湿巾组合 U6201（海洋水润湿巾80P*4+口手专用湿巾30P） ', '../img/list/list9.jpg', '45');
INSERT INTO `list` VALUES (' 赞宝贝 益智摇铃组合 V301 ', '../img/list/list10.jpg', '19.80');
INSERT INTO `list` VALUES (' HASKY-LR-M2-Z强光手电筒LED可充电迷你家用户外骑行防水远射 ', '../img/list/list11.jpg', '59');
INSERT INTO `list` VALUES (' ALIWEILIAN 爱丽威廉  双肩包女包旅行背包学生书包双肩女包 ', '../img/list/list12.jpg', '128');
INSERT INTO `list` VALUES (' 师夷家 男士清爽润肤全效四件套 ', '../img/list/list13.jpg', '109');
INSERT INTO `list` VALUES (' 多芬Dove 沐浴乳 深层营润1kg+丰盈宠肤300g ', '../img/list/list14.jpg', '69');
INSERT INTO `list` VALUES (' mistine 4D 双头睫毛膏 ', '../img/list/list15.jpg', '79');
INSERT INTO `list` VALUES (' 牛厨零食 泡椒味鸭脖 200g/袋（两袋装） ', '../img/list/list16.jpg', '42.60');
INSERT INTO `list` VALUES (' 鹿予桂花味牛轧糖150gX2 ', '../img/list/list17.jpg', '48');
INSERT INTO `list` VALUES (' 鹿予桂花味牛轧糖150gX2 ', '../img/list/list18.jpg', '128');
INSERT INTO `list` VALUES (' 大头果湖南正宗酱板鸭湖南特产顺益湘酱板鸭250g特辣酱板鸭   ', '../img/list/list19.jpg', '28');
INSERT INTO `list` VALUES (' 相宜本草 红景天养白套装 ', '../img/list/list20.jpg', '188');
INSERT INTO `list` VALUES (' 德国司顿 300ml随手杯梦幻不锈钢真空保温杯 STY056-V ', '../img/list/list21.jpg', '69');
INSERT INTO `list` VALUES (' 李贝儿  SC130B  高档欧式多功能婴儿床 ', '../img/list/list22.jpg', '399');
INSERT INTO `list` VALUES (' 好孩子用品 双层不锈钢保温奶瓶婴儿宽口径宝宝奶瓶吸管杯5件套组合装 WD0013 ', '../img/list/list23.jpg', '119');
INSERT INTO `list` VALUES (' 浪莎纯棉床品套件初见系列 混搭印花四件套 1.5-1.8米 贝壳往事 ', '../img/list/list24.jpg', '199');
INSERT INTO `list` VALUES (' 南极人 背心男士螺纹打底衫 （黑色，白色，灰色）3件装 XL号 ', '../img/list/list25.jpg', '69');
INSERT INTO `list` VALUES (' 迈特宝 新款男式潮流大头工装休闲鞋 A10 棕色 44码 ', '../img/list/list26.jpg', '89');
INSERT INTO `list` VALUES (' 俞兆林女士黑白色系船袜5双装 ', '../img/list/list27.jpg', '35');

-- ----------------------------
-- Table structure for register
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of register
-- ----------------------------
