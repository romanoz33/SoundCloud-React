import React, { useRef, useEffect } from "react";
import atomize from "@quarkly/atomize";

const defaultHTML = () => `<div style="display:flex;justify-content:center;align-items:center;"><img width='150px' src='https://uploads.quarkly.io/5fec82f77dc2c5001e0334de/images/soundcloud-4-189743.png?v=2021-01-03T09:45:49.835Z'> </div>`;

const SoundCloud = ({
	children,
	type,
	url,
	...props
}) => {
	const ref = useRef(null);
	const params = {
		w: '100%',
		f: '&visual=true'
	};
	useEffect(() => {
		ref.current.innerHTML = defaultHTML();
	}, []);
	useEffect(() => {
		switch (type) {
			case 'small':
				params.h = '86';
				params.f = '';
				break;

			case 'standart':
				params.h = '166';
				params.f = '';
				break;

			default:
				params.h = '300';
		}

		const res = () => fetch('https://soundcloud.com/oembed?format=json&url=' + encodeURI(url) + '&iframe=true').then(response => {
			return response.json();
		}).then(data => {
			let id = data.html.match(/\d{7,}/g)[0];
			let playlist = data.html.match(/(playlists)+/i);

			if (playlist !== null) {
				ref.current.innerHTML = `<iframe width="${params.w}" height="${params.h}" src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/playlists/${id}${params.f}"></iframe>`;
			} else {
				ref.current.innerHTML = `<iframe width="${params.w}" height="${params.h}" src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${id}${params.f}"></iframe>`;
			}
		}).catch(error => {
			//alert('Неверная ссылка')
			console.log('Неверная ссылка');
		});

		if (url !== undefined) res();
	}, [{
		type
	}, {
		url
	}]);
	return <div {...props} ref={ref} />;
};

export default atomize(SoundCloud)({
	name: "SoundCloud",
	normalize: true,
	mixins: true,
	propInfo: {
		type: {
			description: {
				en: 'Widget types '
			},
			control: 'radio-group',
			variants: ['small', 'standart', 'visual'],
			weight: 1
		},
		url: {
			description: {
				en: 'Track or playlist url'
			},
			control: 'input',
			weight: 1
		}
	}
}, {
	type: 'standart'
});