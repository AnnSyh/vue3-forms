<template>
	<div>

		<FormList />

		<!-- <p>App.vue</p>
		<Form
		@submit="onSubmit"
		:validation-schema="schema"
		@invalid-submit="onInvalidSubmit"
		>
		<TextInput
			name="name"
			type="text"
			label="Full Name"
			placeholder="Your Name"
			success-message="Nice to meet you!"
		/>
		<TextInput
			name="email"
			type="email"
			label="E-mail"
			placeholder="Your email address"
			success-message="Got it, we won't spam you!"
		/>
		<TextInput
			name="password"
			type="password"
			label="Password"
			placeholder="Your password"
			success-message="Nice and secure!"
		/>
		<TextInput
			name="confirm_password"
			type="password"
			label="Confirm Password"
			placeholder="Type it again"
			success-message="Glad you remembered it!"
		/>

		<button class="submit-btn" type="submit">Submit</button>
		</Form> -->
	</div>
</template>

<script>
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import TextInput from './components/TextInput.vue';


import FormList from './components/FormList.vue';

export default {
	setup() {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string().email().required(),
			password: Yup.string().min(6).required(),
			confirm_password: Yup.string()
			.required()
			.oneOf([Yup.ref('password')], 'Passwords do not match'),
		});		
	},
	methods: {
		onSubmit(values) {
			alert(JSON.stringify(values, null, 2));
		},

		onInvalidSubmit() {
			const submitBtn = document.querySelector('.submit-btn');
			submitBtn.classList.add('invalid');
			setTimeout(() => {
				submitBtn.classList.remove('invalid');
			}, 1000);
		}
	},
	components: {Form, TextInput, FormList},
}
</script>