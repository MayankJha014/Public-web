import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Loader from "../../pages/Loader/Loader";
import { getIsActive } from "../../redux/action/others/other";

export default function SubMenu({ activelink }) {
    const dispatch = useDispatch()
    const { loading, active } = useSelector((state) => state.others)
    const sponsersActive = active?.find(o => o.section === 'sponser');
    useEffect(() => {
        dispatch(getIsActive())
    }, [dispatch,]);
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <section class="heading__about">
                        {sponsersActive?.is_active && <Link to="/sponsors" className={`${activelink == 'sponsors' ? 'link-active' : ''}`}>{sponsersActive?.title1 ? sponsersActive.title1 : 'Overview'}</Link>}
                        {sponsersActive?.is_active2 && <Link to="/sponsors/global-sponsors" className={`${activelink == 'globalsponsors' ? 'link-active' : ''}`}>{sponsersActive?.title2 ? sponsersActive.title2 : 'Global Sponsors'}</Link>}
                        {sponsersActive?.is_active4 && <Link to="/sponsors/local-sponsors" className={`${activelink == 'localsponsors' ? 'link-active' : ''}`}>{sponsersActive?.title4 ? sponsersActive.title4 : 'Local Sponsors'}</Link>}
                        {sponsersActive?.is_active3 && <Link to="/sponsors/partner-with-us" className={`${activelink == 'partnerwithus' ? 'link-active' : ''}`}>{sponsersActive?.title3 ? sponsersActive.title3 : 'Partner with us'}</Link>}
                        {!sponsersActive && <Link to="/sponsors" className={`${activelink == 'sponsors' ? 'link-active' : ''}`}>Overview</Link>}
                        {!sponsersActive && <Link to="/sponsors/global-sponsors" className={`${activelink == 'globalsponsors' ? 'link-active' : ''}`}>Global Sponsors</Link>}
                        {!sponsersActive && <Link to="/sponsors/local-sponsors" className={`${activelink == 'localsponsors' ? 'link-active' : ''}`}>Local Sponsors</Link>}
                        {!sponsersActive && <Link to="/sponsors/partner-with-us" className={`${activelink == 'partnerwithus' ? 'link-active' : ''}`}>Partner with us</Link>}
                    </section>
                </>
            )}
        </>
    );
};