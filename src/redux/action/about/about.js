import axios from 'axios';


export const getOverviewPoint = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getOverviewPointRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/about/overview/all/order`, config);

        dispatch({ type: 'getOverviewPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getOverviewPointFail',
            payload: error.response.data.message,
        });
    }
};


export const getMissionandDream = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getMissonAndDreamRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/about/dreams/all`, config);

        dispatch({ type: 'getMissonAndDreamSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getMissonAndDreamFail',
            payload: error.response.data.message,
        });
    }
};

export const getDreamsPoint = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getDreamsPointRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/about/dreams/point/all/sequence`, config);

        dispatch({ type: 'getDreamsPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getDreamsPointFail',
            payload: error.response.data.message,
        });
    }
};

export const getTestimonial = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getTestimonialRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/about/testimonial/all`, config);

        dispatch({ type: 'getTestimonialSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getTestimonialFail',
            payload: error.response.data.message,
        });
    }
};

export const getTeamInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getTeamInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/about/team/all`, config);

        dispatch({ type: 'getTeamInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getTeamInfoFail',
            payload: error.response.data.message,
        });
    }
};
