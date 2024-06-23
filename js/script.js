document.getElementById("tours-link").addEventListener("click", function () {
	document.getElementById("choose-tour").scrollIntoView({ behavior: "smooth" });
}); // скролл к турам

document.getElementById("create-tour-link").addEventListener("click", function () {
	document.getElementById("tour-form").scrollIntoView({ behavior: "smooth" });
}); // скролл к созданию тура

document.getElementById("reviews-link").addEventListener("click", function () {
	document.getElementById("reviews").scrollIntoView({ behavior: "smooth" });
}); // скролл к турам

document.getElementById("stories-link").addEventListener("click", function () {
	document.getElementById("stories").scrollIntoView({ behavior: "smooth" });
}); // скролл к созданию тура



document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('.tour-form form');

	form.addEventListener('submit', (event) => {
		event.preventDefault(); // предотвращает отправку формы
		let isValid = true;
		const name = document.getElementById('name');
		const email = document.getElementById('email');
		const phone = document.getElementById('phone');
		const dateFrom = document.getElementById('date-from');
		const dateTo = document.getElementById('date-to');
		const ageYes = form.querySelector('input[name="age"][value="yes"]');

		// Простая валидация
		if (name.value.trim() === '') {
			isValid = false;
			alert('Пожалуйста, введите ваше имя');
		}

		if (email.value.trim() === '' || !email.value.includes('@')) {
			isValid = false;
			alert('Пожалуйста, введите корректный email');
		}

		if (phone.value.trim() === '') {
			isValid = false;
			alert('Пожалуйста, введите ваш телефон');
		}

		if (dateFrom.value === '' || dateTo.value === '' || dateFrom.value > dateTo.value) {
			isValid = false;
			alert('Пожалуйста, введите корректные даты');
		}

		if (!ageYes.checked) {
			isValid = false;
			alert('Вы должны быть старше 18 лет');
		}

		if (isValid) {
			alert('Форма отправлена!');
			form.submit(); // отправляет форму, если всё корректно
		}
	});
});
