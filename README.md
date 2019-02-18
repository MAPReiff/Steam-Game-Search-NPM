# Steam Searcher

[![NPM][npm-image]][npm-url]

Steam Searcher is a module for getting information on Steam Games. What ever game you search for, this will pull the first result from the Steam API, and return it as a JSON.

## Installation

```bash
npm install steam-searcher
```

## Usage Example

```javascript
var steam = require('steam-searcher')

steam.find({ search: 'Hitman 2' }, function (err, game) {
    if (err) console.log(err);
    //game is the data as a JSON.
    console.log(game.name)  
});
```
## Example Game JSON Data
```bash
{
	type: 'game',
	name: 'HITMAN™ 2',
	steam_appid: 863550,
	required_age: 0,
	is_free: false,
	controller_support: 'full',
	dlc: [957690, 960831, 960832],
	detailed_description: '<h1>HITMAN™ 2</h1><p><img src="https://steamcdn-a.akamaihd.net/steam/apps/863550/extras/Hitman2_D_Alpha.png?t=1549278592" ></p><br><h1>About the Game</h1><img src="https://steamcdn-a.akamaihd.net/steam/apps/863550/extras/Hitman2_A.png?t=1549278592" ><br><br>Travel the globe and track your targets across exotic sandbox locations in HITMAN™ 2. From sun-drenched streets to dark and dangerous rainforests, nowhere is safe from the world\'s most creative assassin, Agent 47.<br><br>Prepare to experience the ultimate spy thriller story; your mission is to eliminate the elusive Shadow Client and unravel his militia, but when 47 learns his target\'s true identity and the truth about his past, it changes everything.<br><br>HITMAN™ 2 introduces new ways to play, new game modes and new features, including the new Sniper Assassin mode with franchise first co-op play.',
	about_the_game: '<img src="https://steamcdn-a.akamaihd.net/steam/apps/863550/extras/Hitman2_A.png?t=1549278592" ><br><br>Travel the globe and track your targets across exotic sandbox locations in HITMAN™ 2. From sun-drenched streets to dark and dangerous rainforests, nowhere is safe from the world\'s most creative assassin, Agent 47.<br><br>Prepare to experience the ultimate spy thriller story; your mission is to eliminate the elusive Shadow Client and unravel his militia, but when 47 learns his target\'s true identity and the truth about his past, it changes everything.<br><br>HITMAN™ 2 introduces new ways to play, new game modes and new features, including the new Sniper Assassin mode with franchise first co-op play.',
	short_description: 'Travel the globe and track your targets across exotic sandbox locations in HITMAN™ 2. From sun-drenched streets to dark and dangerous rainforests, nowhere is safe from the world’s most creative assassin, Agent 47 in the ultimate spy thriller story.',
	supported_languages: 'English<strong>*</strong>, French, Italian, German, Spanish - Spain, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Spanish - Latin America, Traditional Chinese<br><strong>*</strong>languages with full audio support',
	header_image: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/header.jpg?t=1549278592',
	website: 'http://www.hitman.com/',
	pc_requirements: {
		minimum: '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> OS 64-bit Windows 7<br></li><li><strong>Processor:</strong> Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce GTX 660 / Radeon HD 7870<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 60 GB available space</li></ul>',
		recommended: '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> OS 64-bit Windows 10<br></li><li><strong>Processor:</strong> Intel CPU Core i7 4790 4 GHz<br></li><li><strong>Memory:</strong> 16 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GPU GeForce GTX 1070 / AMD GPU Radeon RX Vega 56 8GB<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 60 GB available space</li></ul>'
	},
	mac_requirements: [],
	linux_requirements: [],
	legal_notice: 'HITMAN™ 2 © 2018 IO Interactive A/S. IO Interactive, IOI logos, HITMAN 2, HITMAN 2 logos, and WORLD OF ASSASSINATION are trademarks or registered trademarks owned by or exclusively licensed to IO Interactive A/S. Distributed by Warner Bros. Home Entertainment Inc. All other trademarks are the property of their respective owners. All rights reserved.',
	developers: ['IO Interactive A/S'],
	publishers: ['Warner Bros Interactive Entertainment'],
	price_overview: {
		currency: 'USD',
		initial: 5999,
		final: 3779,
		discount_percent: 37,
		initial_formatted: '$59.99',
		final_formatted: '$37.79'
	},
	packages: [272196, 272962, 272964, 272966],
	package_groups: [{
		name: 'default',
		title: 'Buy HITMAN™ 2',
		description: '',
		selection_text: 'Select a purchase option',
		save_text: '',
		display_type: 0,
		is_recurring_subscription: 'false',
		subs: [Array]
	}],
	platforms: {
		windows: true,
		mac: false,
		linux: false
	},
	metacritic: {
		score: 82,
		url: 'https://www.metacritic.com/game/pc/hitman-2?ftag=MCD-06-10aaa1f'
	},
	categories: [{
			id: 2,
			description: 'Single-player'
		},
		{
			id: 36,
			description: 'Online Multi-Player'
		},
		{
			id: 38,
			description: 'Online Co-op'
		},
		{
			id: 22,
			description: 'Steam Achievements'
		},
		{
			id: 28,
			description: 'Full controller support'
		},
		{
			id: 23,
			description: 'Steam Cloud'
		}
	],
	genres: [{
		id: '1',
		description: 'Action'
	}],
	screenshots: [{
			id: 0,
			path_thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_425ab1fa29823f7dd675cc62e5cb36260462a578.600x338.jpg?t=1549278592',
			path_full: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_425ab1fa29823f7dd675cc62e5cb36260462a578.1920x1080.jpg?t=1549278592'
		},
		{
			id: 1,
			path_thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_5aeac044627931658333a44bf288ee5eb5dc4c41.600x338.jpg?t=1549278592',
			path_full: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_5aeac044627931658333a44bf288ee5eb5dc4c41.1920x1080.jpg?t=1549278592'
		},
		{
			id: 2,
			path_thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_983b6e18f733cd7a2dee82a6676c95d1c35e3baa.600x338.jpg?t=1549278592',
			path_full: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_983b6e18f733cd7a2dee82a6676c95d1c35e3baa.1920x1080.jpg?t=1549278592'
		},
		{
			id: 3,
			path_thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_125a77369fad60ed898a789c99981e2b929dd297.600x338.jpg?t=1549278592',
			path_full: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_125a77369fad60ed898a789c99981e2b929dd297.1920x1080.jpg?t=1549278592'
		},
		{
			id: 4,
			path_thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_c4b4b10f866ff2e7bcdea480971fec585d87519a.600x338.jpg?t=1549278592',
			path_full: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_c4b4b10f866ff2e7bcdea480971fec585d87519a.1920x1080.jpg?t=1549278592'
		},
		{
			id: 5,
			path_thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_fba5f4f7abb11ef4723b7cc37e5d756216ae824d.600x338.jpg?t=1549278592',
			path_full: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_fba5f4f7abb11ef4723b7cc37e5d756216ae824d.1920x1080.jpg?t=1549278592'
		},
		{
			id: 6,
			path_thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_64f9fb0758ffced895e03f2e0ae44ad23cdae053.600x338.jpg?t=1549278592',
			path_full: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_64f9fb0758ffced895e03f2e0ae44ad23cdae053.1920x1080.jpg?t=1549278592'
		},
		{
			id: 7,
			path_thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_c44192283b504647348b5f207eb2e810d9431a92.600x338.jpg?t=1549278592',
			path_full: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_c44192283b504647348b5f207eb2e810d9431a92.1920x1080.jpg?t=1549278592'
		},
		{
			id: 8,
			path_thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_5f8a4e71cacd41f8732c638b4b708afcb2a5fb26.600x338.jpg?t=1549278592',
			path_full: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_5f8a4e71cacd41f8732c638b4b708afcb2a5fb26.1920x1080.jpg?t=1549278592'
		},
		{
			id: 9,
			path_thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_e812f2aa4f582512312b6daef1e2b7e869bbb620.600x338.jpg?t=1549278592',
			path_full: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/ss_e812f2aa4f582512312b6daef1e2b7e869bbb620.1920x1080.jpg?t=1549278592'
		}
	],
	movies: [{
			id: 256738783,
			name: 'HITMAN 2 Accolades Trailer',
			thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/256738783/movie.293x165.jpg?t=1545171866',
			webm: [Object],
			highlight: true
		},
		{
			id: 256719138,
			name: 'HITMAN 2 Announce Trailer',
			thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/256719138/movie.293x165.jpg?t=1539275080',
			webm: [Object],
			highlight: true
		},
		{
			id: 256730311,
			name: 'HITMAN 2 - Colombia Trailer',
			thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/256730311/movie.293x165.jpg?t=1541082769',
			webm: [Object],
			highlight: true
		},
		{
			id: 256719232,
			name: 'HITMAN Sniper Assassin',
			thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/256719232/movie.293x165.jpg?t=1539275068',
			webm: [Object],
			highlight: true
		},
		{
			id: 256720426,
			name: 'HITMAN 2 Miami Gameplay Trailer',
			thumbnail: 'https://steamcdn-a.akamaihd.net/steam/apps/256720426/movie.293x165.jpg?t=1539275084',
			webm: [Object],
			highlight: true
		}
	],
	recommendations: {
		total: 3605
	},
	achievements: {
		total: 118,
		highlighted: [
			[Object],
			[Object],
			[Object],
			[Object],
			[Object],
			[Object],
			[Object],
			[Object],
			[Object],
			[Object]
		]
	},
	release_date: {
		coming_soon: false,
		date: 'Nov 13, 2018'
	},
	support_info: {
		url: 'http://support.wbgames.com',
		email: 'support@wbgames.com or Wbgames.intsupport@warnerbros.com'
	},
	background: 'https://steamcdn-a.akamaihd.net/steam/apps/863550/page_bg_generated_v6b.jpg?t=1549278592',
	content_descriptors: {
		ids: [2, 5],
		notes: 'This Game may contain content not appropriate for all ages, or may not be appropriate for viewing at work: Frequent Violence or Gore, General Mature Content.'
	}
}
```

## Notes
- If you want to get DLC information, you need to run steam.find again, with the search being one of the values in the DLC array
- This uses the Steam Store search API
- This uses the Steam Store app details API

## License

Licensed under The MIT License (MIT)  
For the full copyright and license information, please view the LICENSE.txt file.

[npm-url]: http://npmjs.org/package/steam-searcher
[npm-image]: https://badge.fury.io/js/steam-searcher.svg
