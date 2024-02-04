import React from 'react'
import axios from 'axios'
import fileDownload from "js-file-download";
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';

const CollateralPDF = ({ pdf }) => {
    const { loading } = useSelector((state) => state.resource)

    const saveFile = async (e, doc) => {
        e.preventDefault()
        // window.open(`${process.env.REACT_APP_SERVER}/${pdf?.pdf}`, '_blank');
        axios({
            url: `${process.env.REACT_APP_SERVER}/v1/others/download/${doc}`,
            // url: `${process.env.REACT_APP_SERVER}/v1/others/download/${pdf?.pdf}`,
            method: "GET",
            responseType: "blob"
        }).then((res) => {
            // var tmp = `${pdf?.pdf}`.split(".");
            var tmp = `${doc}`.split(".");
            // fileDownload(res.data, `${pdf?.title}.${tmp.pop()}`)
            fileDownload(res.data, `${doc}.${tmp.pop()}`)
        })
    }

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {

                        <div className="container mt-5">
                            <div className="row ">
                                {pdf && pdf.map((document, index) => (
                                    <div key={document.id} className="col-lg-3" >
                                        <div className="card">
                                            <div className="card-body">
                                                <img src={`${process.env.REACT_APP_SERVER}/${document.image}`} class="download-padfe-page " />
                                                <h3 className="text-center mt-2 ">{document.title}</h3>
                                                <a class="btn__more" target={"_blank"} onClick={(e) => saveFile(e, document.pdf)}>Download form</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div></div>

                    }
                </>
            )
            }
        </>
    )
}

export default CollateralPDF