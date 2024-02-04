import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../pages/Loader/Loader";
import { getOthersInfo } from "../redux/action/others/other";

const Section_BecomePartner = ({ data }) => {
    const dispatch = useDispatch()
    const [other, setOther] = useState('belion')

    const { loading, detail } = useSelector((state) => state.others)
    useEffect(() => {

        dispatch(getOthersInfo(other))

        // console.log(detail)
        // dispatch(getLionBannerInfo())
    }, [dispatch, other]);


    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {
                        detail?.is_active &&
                        <section class="button-section-down" >
                            <div class="section-button">
                                <div class="about-partner-with">
                                    <a href="">{detail?.description1 ? detail?.description1 : 'Partner with us'}</a>
                                </div>
                                <div class="btn-about-down">
                                    <Link to="/sponsors/partner-with-us" class="btn__more">{detail?.button ? detail?.button : `Partner with us`}</Link>
                                </div>
                            </div>
                        </section>
                    }
                </>
            )
            }
        </>

    );
};

export default Section_BecomePartner;