import { invalid } from '@sveltejs/kit';
import mailgun from 'mailgun-js';
import { ENV } from '../lib/variables.js';

/** @type {mailgun.Mailgun} */
let _mailgunInstance;

/** @type {import('./$types').Actions} */
export const actions = {
	sendMessage: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const phone = data.get('phone');
		const email = data.get('email');
		const message = data.get('message');
		console.log('sendMessage', name, phone, email, message);

		if (!name || !email) {
			return invalid(400, { error: true });
		}

		const response = withMailGun((mailgun) =>
			mailgun.messages().send({
				from: 'Portfolio Message <messages@thispankaj.com>',
				to: 'thispankajarora@gmail.com',
				'h:Reply-To': email?.toString(),
				subject: 'Message from ' + email?.toString(),
				html: createHtmlMessage(email?.toString(), phone?.toString(), message?.toString())
			})
		);
		console.log(response);

		return { error: false };
	}
};

const withMailGun = (
	/** @type {(mailgun: mailgun.Mailgun) => Promise<any>} */ executeWithMailGun
) => {
	if (!ENV.mailgunApiKey || !ENV.mailgunDomain) {
		return null;
	}
	if (!_mailgunInstance) {
		_mailgunInstance = mailgun({ apiKey: ENV.mailgunApiKey, domain: ENV.mailgunDomain });
	}
	return executeWithMailGun(_mailgunInstance);
};

const createHtmlMessage = (
	/** @type {string} */ email,
	/** @type {string | undefined} */ phone,
	/** @type {string | undefined} */ message
) => {
	return `Message from: <strong>${email}</strong><br/>Phone: ${phone}<br/>Message:<br/>${message}`;
};
