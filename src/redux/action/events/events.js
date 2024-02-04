import axios from 'axios';

export const getUpcomingEvent = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getUpcominEventsRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/event/event/upcoming`, config);

        dispatch({ type: 'getUpcominEventsSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getUpcominEventsFail',
            payload: error.response.data.message,
        });
    }
};




export const getEventCategory = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getEventCategoryRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/event/eventcategory/all/order`, config);

        dispatch({ type: 'getEventCategorySuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getEventCategoryFail',
            payload: error.response.data.message,
        });
    }
};


export const getComeBeLionPoint = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getComeBeLionPointRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/event/content/all/order`, config);

        dispatch({ type: 'getComeBeLionPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getComeBeLionPointFail',
            payload: error.response.data.message,
        });
    }
};



export const getAlbum = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getAlbumRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/event/gallery/all/order`, config);

        dispatch({ type: 'getAlbumSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getAlbumFail',
            payload: error.response.data.message,
        });
    }
};


export const getAlbumImages = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getAlbumImageRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/event/image/${id}/all`, config);

        dispatch({ type: 'getAlbumImageSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getAlbumImageFail',
            payload: error.response.data.message,
        });
    }
};



export const getEventDescription = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getEventsDescriptionRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/event/event/description/${id}`, config);

        dispatch({ type: 'getEventsDescriptionSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getEventsDescriptionFail',
            payload: error.response.data.message,
        });
    }
};