import { configureStore } from '@reduxjs/toolkit';
import Counter from './Counter';

export const store = configureStore({
	reducer:{
		Counter,
		students: Counter,
	}
})