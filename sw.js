/*
 * @Author: Escher1108
 * @Website: https://jkgblog.com
 * @Date: 2022-02-21 21:51:35
 * @LastEditTime: 2022-02-21 21:52:38
 * @LastEditors: Do not edit
 * @FilePath: \11800\sw.js
 * @Description: 耶斯莫拉
 */
'use strict';
importScripts('/sw-toolbox.js');
toolbox.precache(["index.html","./H5/static/index.a5c69d49.css"]);
toolbox.router.get('./H5/static//images/ *',toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});