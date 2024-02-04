import axios from 'axios';

export const getResource = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getResourceRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/resource/${id}/all/order`, config);

        dispatch({ type: 'getResourceSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getResourceFail',
            payload: error.response.data.message,
        });
    }
};




export const getCollateralPDF = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getCollateralPDFRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/resource/collateral/pdf/all`, config);

        dispatch({ type: 'getCollateralPDFSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getCollateralPDFall',
            payload: error.response.data.message,
        });
    }
};
