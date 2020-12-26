import { store } from 'react-notifications-component';

function createSuccessNotification(title, text) {
	store.addNotification({
		title: title,
		message: text,
		type: 'success',
		insert: 'top',
		container: 'top-right',
		animationIn: ['animate__animated', 'animate__fadeIn'],
		animationOut: ['animate__animated', 'animate__fadeOut'],
		dismiss: {
			duration: 5000,
			onScreen: true,
		},
	});
}

export { createSuccessNotification };
