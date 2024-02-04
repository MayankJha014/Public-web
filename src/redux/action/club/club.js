import axios from 'axios';

export const getClubInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getClubInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/info`, config);

        dispatch({ type: 'getClubInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getClubInfoFail',
            payload: error.response.data.message,
        });
    }
};



export const getLogoInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getLogoInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/home/detail`, config);

        dispatch({ type: 'getLogoInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getLogoInfoFail',
            payload: error.response.data.message,
        });
    }
};



