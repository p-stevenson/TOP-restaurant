import './style.css';

if (process.env.NODE_ENV !== 'production') {
	console.log('DEV MODE');
} else if (process.env.NODE_ENV !== 'develompent') {
	console.log('PRODUCTION MODE');
}

