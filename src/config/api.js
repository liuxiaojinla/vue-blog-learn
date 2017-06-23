// 配置API接口地址
const root = 'https://cnodejs.org/api/v1';

// 引用superagent
const request = require('superagent');
// 自定义判断元素类型JS
function toType(obj) {
	return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 参数过滤函数
function param_filter(o) {
	const keys = Object.keys(o);
	for (let [key, value] of Object.entries(o)) {
		if (Object.is(value, null)) {
			delete o[key];
		}
	}
	return o
}

/**
 * 接口处理函数
 * @param {String} url
 * @param {String} method
 * @param {Object} params
 * @param {Function} success
 * @param {Function} failure
 * @private
 */
function _request(url, method, params, success, failure = null) {
	let r = request(method, url).type('text/plain');
	if (params) {
		params = param_filter(params);
		if (method === 'POST' || method === 'PUT') {
			toType(params) === 'object' ? params = JSON.stringify(params) : params;
			r = r.send(params)
		} else if (method === 'GET' || method === 'DELETE') {
			r = r.query(params)
		}
	}
	r.end(function (err, res) {
		if (res.body.success) {
			if (success && success instanceof Function) {
				success.call(null, res.body.data, res);
				return;
			}
			throw new Error('The "success" argument must be a Function object');
		} else {
			console.error(err);
			if (failure) {
				if (failure instanceof Function) {
					failure.call(null, err, res);
					return;
				}
				throw new Error('The "failure" argument must be a Function object');
			}
		}
	});
}

// 返回在vue模板中的调用接口
export default {
	get: function (url, success, failure = null) {
		return _request(root + '/' + url, 'GET', null, success, failure)
	},
	post: function (url, params, success, failure = null) {
		return _request(root + '/' + url, 'POST', params, success, failure)
	},
	put: function (url, params, success, failure = null) {
		return _request(root + '/' + url, 'PUT', params, success, failure)
	},
	delete: function (url, success, failure = null) {
		return _request(root + '/' + url, 'DELETE', null, success, failure)
	},
}