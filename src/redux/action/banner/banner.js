
import axios from 'axios';



export const getBannerInfo = (section, subsection) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getBannerRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/banner/${section}/${subsection}/all`, config);

        dispatch({ type: 'getBannerSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getBannerFail',
            payload: error.response.data.message,
        });
    }
};
export const getSectionBannerInfo = (section, subsection) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getSectionBannerRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/banner/${section}/${subsection}/banner/order`, config);

        dispatch({ type: 'getSectionBannerSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getSectionBannerFail',
            payload: error.response.data.message,
        });
    }
};


export const getLionBannerInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getLionBannerRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/belion/banner/all`, config);

        dispatch({ type: 'getLionBannerSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getLionBannerFail',
            payload: error.response.data.message,
        });
    }
};
