<template>
	<div>
		<h1>Список Форм</h1>
		<p>FormList.vue</p>

		<Form v-for="form in formStore.forms" :key="form.id">
			<div class="form-title">{{form.templateName}}</div>
			 <div v-for="field in form.fields" :key="field.name">
				<!-- <label :for="field.name">{{ field.label }}</label> -->
				<TextInput
					:label="field.label" 
					:name="field.name"
					:type="field.type"
					:id="field.name"
					:placeholder="field.placeholder"
					:required="field.validation?.required"
				 />
			 </div>
			 <button class="submit-btn" type="submit">Submit</button>

		</Form>
	</div>
</template>
  
<script>
import { useFormStore } from '../store/forms';
import { onMounted } from 'vue';

import { Form } from 'vee-validate';
import * as Yup from 'yup';
import TextInput from '../components/TextInput.vue';

export default {
  setup() {
    const formStore = useFormStore();

	const schema = Yup.object().shape({
	  name: Yup.string().required(),
	  email: Yup.string().email().required(),
	  password: Yup.string().min(6).required(),
	  confirm_password: Yup.string()
		  .required()
		  .oneOf([Yup.ref('password')], 'Passwords do not match'),
	  });

    onMounted(() => {
      formStore.fetchForms();

    });

    return { formStore };
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
	components: {Form, TextInput},
};
</script>

<style>
	.form-title{
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 1rem;
	}
</style>