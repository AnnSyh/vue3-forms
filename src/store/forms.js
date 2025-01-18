import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFormStore = defineStore('form', () => {
	const forms = ref([]);
  
	const fetchForms = async () => {
	  const response = await fetch('../../public/forms.json');
	  forms.value = await response.json();
	};
  
	return { forms, fetchForms };
  });