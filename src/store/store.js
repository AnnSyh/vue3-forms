import { createPinia, defineStore } from 'pinia';

// export const useFormStore = defineStore('formStore', {
//   state: () => ({
//     forms: [],
//   }),
//   actions: {
//     addForm(form) {
//       this.forms.push(form);
//     },
//   },
// });

export const useFormStore = defineStore('formStore', {
	state: () => ({
	  forms: [],
	}),
	actions: {
	  async fetchForms() {
		try {
		  const response = await fetch('../../public/forms.json');
		  this.forms = await response.json();
		} catch (error) {
		  console.error('Ошибка при загрузке форм:', error);
		}
	  },
	},
  });

const pinia = createPinia();
export default pinia;