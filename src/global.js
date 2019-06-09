/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 全局Index.js入口
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date: 2016-01-18 17:19:07
 * @version 0.1 | 2017-02-28 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2019-06-09 12:54:54
*/

import React from 'react';
import { notification, Button, message } from 'antd';
import { formatMessage } from 'umi/locale';

export function config() {
	return {
		onError(err) {
			err.preventDefault();
			message.error(err.message);
		},
		initialState: {
			global: {
				text: 'Hey mukuashi@PhotoArtLife！',
			},
		},
	};
}

// Notify user if offline now
window.addEventListener('sw.offline', () => {
	message.warning(formatMessage({ id: 'app.pwa.offline' }));
});

// Pop up a prompt on the page asking the user if they want to use the latest version
window.addEventListener('sw.updated', e => {
	const key = `open${ Date.now() }`;
	const btn = (
		<Button type="primary" onClick={() => notification.close(key)}>
			{formatMessage({ id: 'app.pwa.serviceworker.updated.ok' })}
		</Button>
	);
	notification.open({
		message: formatMessage({ id: 'app.pwa.serviceworker.updated' }),
		description: formatMessage({ id: 'app.pwa.serviceworker.updated.hint' }),
		btn,
		key,
		onClose: async () => {
			// Check if there is sw whose state is waiting in ServiceWorkerRegistration
			// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
			const worker = e.detail && e.detail.waiting;
			if (!worker) {
				return Promise.resolve();
			}
			// Send skip-waiting event to waiting SW with MessageChannel
			await new Promise((resolve, reject) => {
				const channel = new MessageChannel();
				channel.port1.onmessage = event => {
					if (event.data.error) {
						reject(event.data.error);
					} else {
						resolve(event.data);
					}
				};
				worker.postMessage({ type: 'skip-waiting' }, [channel.port2]);
			});
			// Refresh current page to use the updated HTML and other assets after SW has skiped waiting
			window.location.reload(true);
			return true;
		},
	});
});
