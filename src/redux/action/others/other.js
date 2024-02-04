
import axios from 'axios';

export const getAllBannerInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getAllBannerRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/banner/all`, config);

        dispatch({ type: 'getAllBannerSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getAllBannerFail',
            payload: error.response.data.message,
        });
    }
};

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

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/event/content/all`, config);

        dispatch({ type: 'getComeBeLionPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getComeBeLionPointFail',
            payload: error.response.data.message,
        });
    }
};




export const getForm = () => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
            },
            // withCredentials: true,
        };
        dispatch({ type: 'getMemberFormRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/member/one`, config);

        dispatch({ type: 'getMemberFormSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getMemberFormFail',
            payload: error.response.data.message,
        });
    }
};



export const getTitleInfo = (section) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getTitleRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/title/${section}/all`, config);

        dispatch({ type: 'getTitleSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getTitleFail',
            payload: error.response.data.message,
        });
    }
};


export const getIsActive = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getTitleAllRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/title/all`, config);

        dispatch({ type: 'getTitleAllSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getTitleAllFail',
            payload: error.response.data.message,
        });
    }
};


export const getDownload = (file) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getDownloadRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/download/${file}`, config);

        dispatch({ type: 'getDownloadSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getDownloadFail',
            payload: error.response.data.message,
        });
    }
};


export const getActivePageInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getActivePageRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/activepage`, config);

        dispatch({ type: 'getActivePageSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getActivePageFail',
            payload: error.response.data.message,
        });
    }
};

export const getOthersInfo = (other) => async dispatch => {
    try {
        // console.log(other)
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getOtherInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/${other}`, config);

        dispatch({ type: 'getOtherInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getOtherInfoFail',
            payload: error.response.data.message,
        });
    }
};

export const getDonate = () => async dispatch => {
    try {
        // console.log(other)
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getDonateInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/donate/all`, config);

        dispatch({ type: 'getDonateInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getDonateInfoFail',
            payload: error.response.data.message,
        });
    }
};