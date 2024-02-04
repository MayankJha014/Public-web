import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../pages/Loader/Loader";
import { getLionBannerInfo } from "../redux/action/banner/banner";
import { getForm } from "../redux/action/others/other";
import axios from 'axios'
import fileDownload from 'js-file-download'

const Section_ComeBeaLion = ({ detail }) => {
    const dispatch = useDispatch()


    // const { loading, lionbanner } = useSelector((state) => state.banner)
    const { loading } = useSelector((state) => state.others)
    const saveFile = async (e) => {
        e.preventDefault()
        window.open(`${process.env.REACT_APP_SERVER}/${detail?.image}`, '_blank');
        axios({
            url: `${process.env.REACT_APP_SERVER}/v1/others/download/${detail?.image}`,
            method: "GET",
            responseType: "blob"
        }).then((res) => {
            var tmp = `${detail?.image}`.split(".");
            fileDownload(res.data, `club.${tmp.pop()}`)
        })
    }


    useEffect(() => {

        dispatch(getForm())
        // dispatch(getLionBannerInfo())
    }, [dispatch,]);



    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <section class="team" style={{ backgroundImage: detail?.document ? `url(${process.env.REACT_APP_SERVER}/${detail.document})` : `url('../images/banner-events.jpg')` }}>
                        <div class="main__shadow_team mt-5 py-5">
                            <div class="container">
                                <div class="center__view py-4">
                                    {/* <h1 class="text-white">Come, be a Lion!</h1> */}
                                    <h1 class="text-white">{detail?.heading}</h1>
                                    <p class="text-white">{detail?.subheading}</p>
                                    {/* <a href="/docs/member-application-form-2023.pdf" class="btn__more" target={"_blank"}>Download Form</a> */}
                                    {/* <a href={detail?.document ? `http://localhost:3000/${detail.document}` : "/docs/member-application-form-2023.pdf"} class="btn__more" target={"_blank"}>Download Form</a> */}
                                    <a href={detail?.image ? `${process.env.REACT_APP_SERVER}/${detail.image}` : "/docs/member-application-form-2023.pdf"} class="btn__more" target={"_blank"} onClick={(e) => saveFile(e)}>Download Form</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )
            }
        </>
    );
};

export default Section_ComeBeaLion;