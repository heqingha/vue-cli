import $ from 'jquery';
import { rdMin } from 'UTIL/random';
import { errHandler, paths } from './config';

/**
 * Request 请求接口定义
 * @param  {String} options.method 请求方法，默认为 get。支持 post、put、patch、delete 等
 * @param  {String} options.url    请求路径，基于 rootPath 地址。例：欲请求 http://localhost:9000/user，仅需要填写 /user 即可
 * @param  {Object} options.body   请求体。后端 Express 使用 req.body 获取该对象
 * @return {Promise}
 *
 * 使用例子 request({ method: 'post', url: 'XXX', body: {Object} })
 * 最简单的例子 xhr({ url: '/user' })
 */
const xhr = ({ url, body = null, method = 'post', contentType = 'application/x-www-form-urlencoded' }) => {
    const csrfType = url + '_' + rdMin(0, 999);
    const defer = $.Deferred();
    $.when(
        $.ajax({
            type: 'post',
            url: paths.basePath + '/logincs/getCsrfTokenKey',
            data: { 'csrfType': csrfType },
            dataType: 'json'
        })
    ).then(function (res) {
        if (res.result === 'success') {
            /**
             * 安全改造需要添加字段【csrfType、csrfToken】
             * 若参数body是字符串，则先序列化，然后添加以上参数，再转为字符串；若参数body是对象就直接添加参数，无需再转字符串
             */
            let isString = (typeof body === 'string');
            body = isString ? JSON.parse(body) : body;
            body = Object.assign({}, body, {
                "csrfType": csrfType,
                "csrfToken": res.code ? res.code : "api no code"
            });
            body = isString ? JSON.stringify(body) : body;

            $.ajax({
                type: method,
                url: url,
                dataType: 'json',
                data: body,
                // contentType: contentType
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
                }
                // xhrFields: { // 跨域允许带上 cookie
                //   withCredentials: [域名]
                // },
                // crossDomain: true
            }).done(defer.resolve).fail(errHandler);
        } else {
            errHandler(res);
        }
    })
    return defer.promise();
}

export default xhr;