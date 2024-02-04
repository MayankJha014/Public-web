import axios from 'axios';

export const getOverview = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getOverviewRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/whatwedo/overview/all/order`, config);

        dispatch({ type: 'getOverviewSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getOverviewFail',
            payload: error.response.data.message,
        });
    }
};
export const getTitle = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'gettitleRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/whatwedo/overview/category/all`, config);

        dispatch({ type: 'gettitleSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'gettitleFail',
            payload: error.response.data.message,
        });
    }
};
export const getActive = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getactiveRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/whatwedo/overview/active/all`, config);

        dispatch({ type: 'getactiveSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getactiveFail',
            payload: error.response.data.message,
        });
    }
};
export const getImages = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getImageRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/whatwedo/overview/images/all`, config);

        dispatch({ type: 'getImageSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getImageFail',
            payload: error.response.data.message,
        });
    }
};

export const getCauseExplain = (section) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getCauseExplainRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/whatwedo/overview/explain/${section}`, config);

        dispatch({ type: 'getCauseExplainSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getCauseExplainFail',
            payload: error.response.data.message,
        });
    }
};

