/*
Navicat MySQL Data Transfer

Source Server         : localhost_server
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : db_crudionic

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-06-10 08:54:43
*/

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS master_user;
CREATE TABLE `master_user` (
  `user_id` int(11) NOT NULL auto_increment,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `modelo_car`varchar(50) NOT NULL,
  `placa` varchar(8) NOT NULL,
  `status` char(1) DEFAULT NULL,
  
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_user
-- ----------------------------

INSERT INTO `master_user` VALUES ('1', 'm', '121','Honda - City','p5lav31', 'y');

