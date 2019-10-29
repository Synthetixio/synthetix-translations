# synthetix-translations

[![CircleCI](https://circleci.com/gh/Synthetixio/synthetix-translations.svg?style=svg)](https://circleci.com/gh/Synthetixio/synthetix-translations) [![npm version](https://badge.fury.io/js/synthetix-translations.svg)](https://badge.fury.io/js/synthetix-translations)
[![Discord](https://img.shields.io/discord/413890591840272394.svg?color=768AD4&label=discord&logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg)](https://discordapp.com/channels/413890591840272394/)
[![Twitter Follow](https://img.shields.io/twitter/follow/synthetix_io.svg?label=synthetix_io&style=social)](https://twitter.com/synthetix_io)

Internationalization repository for Synthetix dApps.

## Translator Instructions

1. Fork this repo using the fork button on the top right ^^^.
2. Copy the `/en/translation.json` e.g. synthetix-mintr/en/translation.json
3. Rename it into your langage folder `{APP_NAME}/{LANG-CODE}/translation.json` e.g. synthetix-mintr/es/translation.json
4. Translate English to your language
5. Submit PR back to this repo

Before submitting a translation, please make sure to respect the following repository architecture:
`{APP_NAME}/{LANG-CODE}/translation.json`
Where {APP_NAME} is the DAPP repo name i.e. synthetix-mintr, synthetix-exchange
{LANG-CODE} is the language code for your language to translate.

Examples:

```
synthetix-mintr/en/translation.json
synthetix-mintr/fr/translation.json
```

Please make sure to use the latest version of the english (en) file as a reference before starting the translation.

`translation.json` follows a simple key:value format which has to be respected in order to be published.

```
	"home": {
		"intro": {
			"title": "What would you like to do?",
			"subtitle": "Click any button below to view more info, confirm or change the amount before submitting."
		},
	},
```

With the example above, a new translation should look like:

```
	"home": {
		"intro": {
			"title": "YOUR_TRANSLATION",
			"subtitle": "YOUR_TRANSLATION"
		},
	},
```

To be merged and published to the `synthetix-translations` node package, a translation will have to cover every key:value.

## For developers

`extractLanguages.js` is a node script which looks for every translation file in the dApp folders specified at the top of the file and concats them into a `translations.json` file at the root of the project.

To generate a new build use the command `npm run build`.
