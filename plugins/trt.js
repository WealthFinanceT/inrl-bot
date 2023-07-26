const { TRT, inrl } = require('../lib/')

inrl(
	{
		pattern: 'trt ?(.*)',
		desc: 'Google transalte',
		type: 'search',
	},
	async (message, match) => {
		if (!message.reply_message.text)
			return await message.send(
				'*Reply to a text msg*\n_Example : trt ml_\ntrt en & ```reply to a text```'
			)
                if(!match) return await message.send('*_giv me a language you want to convert_*');
                const {text} = await TRT(message.quoted.text, match)
		return await message.send(text);
	}
)
