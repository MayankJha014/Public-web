import axios from 'axios';

export const getGlobalSponserPoint = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getGlobalSponserPointRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/sponser/global/point/all/order`, config);

        dispatch({ type: 'getGlobalSponserPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getGlobalSponserPointFail',
            payload: error.response.data.message,
        });
    }
};


export const getPartnerWithOppurtunityInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getPartnerWithUsOppourtunityRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/sponser/partner/1/all/order`, config);

        dispatch({ type: 'getPartnerWithUsOppourtunitySuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getPartnerWithUsOppourtunityFail',
            payload: error.response.data.message,
        });
    }
};


export const getLocalSponserPoint = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getLocalSponserPointRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/sponser/local/all/order`, config);

        dispatch({ type: 'getLocalSponserPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getLocalSponserPointFail',
            payload: error.response.data.message,
        });
    }
};


export const getPartnerWithBenefitInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getPartnerWithUsBenefitRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/sponser/partner/2/all/order`, config);

        dispatch({ type: 'getPartnerWithUsBenefitSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getPartnerWithUsBenefitFail',
            payload: error.response.data.message,
        });
    }
};


