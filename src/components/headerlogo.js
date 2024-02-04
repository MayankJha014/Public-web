import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Loader from "../pages/Loader/Loader";
import { getLogoInfo } from "../redux/action/club/club";

const HeaderLogo = () => {

    const dispatch = useDispatch()


    const { loading, logo, error } = useSelector((state) => state.club)


    useEffect(() => {

        dispatch(getLogoInfo())
    }, [dispatch, error]);



    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div class="brand__logo">
                        {/* <Link to="/"><img src="/images/logo-plc.png" alt="" /></Link> */}
                        <Link to="/">
                            {/* <img src={logo?.image ? logo.image : "/images/Logo-plc.png"} alt="" ></img> */}
                            <img src={`${process.env.REACT_APP_SERVER}/${logo?.image}`} alt="" ></img>
                        </Link>
                    </div>
                </>
            )
            }
        </>
    );
};

export default HeaderLogo;