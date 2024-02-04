import { configureStore } from '@reduxjs/toolkit';
import { AboutReducer } from './reducer/about/about';
import { BannerReducer } from './reducer/banner/baner';
import { clubReducer } from './reducer/club/clubReducer';
import { ContactReducer } from './reducer/contact/contact';
import { DescriptionReducer } from './reducer/description/description';
import { EventReducer } from './reducer/events/events';
import { HomeReducer } from './reducer/Home/home';
import { OtherReducer } from './reducer/others/others';
import { ResourceReducer } from './reducer/resources/resource';
import { SponserReducer } from './reducer/sponser/sponserReducer';
import { WhatWeDoReducer } from './reducer/whatwedo/whatwedo';
const store = configureStore({
    reducer: {
        about: AboutReducer,
        club: clubReducer,
        whatwedo: WhatWeDoReducer,
        event: EventReducer,
        description: DescriptionReducer,
        banner: BannerReducer,
        sponser: SponserReducer,
        resource: ResourceReducer,
        home: HomeReducer,
        others: OtherReducer,
        contact: ContactReducer

    },
});

export default store;

