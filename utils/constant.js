// 依次使用tinyjpg和tinypng两个域名
const IMG_REGEXP = /\.(jpe?g|png)$/;

const PLUGIN_NAME = "tinyimg-webpack-plugin";

const TINYIMG_URL = [
    "tinyjpg.com",
    "tinypng.com"
];

module.exports = {
    IMG_REGEXP,
    PLUGIN_NAME,
    TINYIMG_URL
};