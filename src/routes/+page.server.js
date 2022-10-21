import { invalid } from '@sveltejs/kit';
import mailgun from 'mailgun-js';
import { env } from '../lib/variables.js';

const mg = mailgun({ apiKey: env.mailgunApiKey, domain: env.mailgunDomain });

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

		const response = await mg.messages().send({
			from: 'Portfolio Message <messages@thispankaj.com>',
			to: 'thispankajarora@gmail.com',
			'h:Reply-To': email?.toString(),
			subject: 'Message from ' + email?.toString(),
			html: createHtmlMessage(email?.toString(), phone?.toString(), message?.toString())
		});
		console.log(response);

		return { error: false };
	}
};

const createHtmlMessage = (
	/** @type {string} */ email,
	/** @type {string | undefined} */ phone,
	/** @type {string | undefined} */ message
) => {
	return `Message from: <strong>${email}</strong><br/>Phone: ${phone}<br/>Message:<br/>${message}`;
};
