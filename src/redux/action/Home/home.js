import axios from 'axios';

export const getHomeAboutInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getHomeAboutInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/home/about`, config);

        dispatch({ type: 'getHomeAboutInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getHomeAboutInfoFail',
            payload: error.response.data.message,
        });
    }
};
export const getHomeWhatweDoInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getHomeWhatWeDoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/home/whatewedo`, config);

        dispatch({ type: 'getHomeWhatWeDoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getHomeWhatWeDoFail',
            payload: error.response.data.message,
        });
    }
};
export const getHomeOthersInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getHomeOtherInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/home/other`, config);

        dispatch({ type: 'getHomeOtherInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getHomeOtherInfoFail',
            payload: error.response.data.message,
        });
    }
};


export const getFooterInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getFooterInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/home/footer`, config);

        dispatch({ type: 'getFooterInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getFooterInfoFail',
            payload: error.response.data.message,
        });
    }
};

export const getHomeExtraInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getHomeExtraInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/home/extra`, config);

        dispatch({ type: 'getHomeExtraInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getHomeExtraInfoFail',
            payload: error.response.data.message,
        });
    }
};