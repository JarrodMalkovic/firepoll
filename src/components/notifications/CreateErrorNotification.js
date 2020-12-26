import { store } from 'react-notifications-component';

function createErrorNotification(title, text) {
	store.addNotification({
		title: title,
		message: text,
		type: 'danger',
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

export { createErrorNotification };
