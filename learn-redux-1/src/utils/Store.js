import { configureStore } from '@reduxjs/toolkit';
import PersonRedux from ' ./PersonRedux';

export default configureStore ( {
    reducer: {
        personal : PersonRedux
    }
})