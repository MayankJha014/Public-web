import axios from 'axios';


export const createContact = (descBody) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'createContactRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/others/contact/add`, descBody, config);

        dispatch({ type: 'createContactSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createContactFail',
            payload: error.response.data.message,
        });
    }
};

