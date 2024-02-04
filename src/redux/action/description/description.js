import axios from 'axios';

export const getDescriptionPoint = (section, subsection) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getDescriptionRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/description/${section}/${subsection}/all`, config);

        dispatch({ type: 'getDescriptionSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getDescriptionFail',
            payload: error.response.data.message,
        });
    }
};


