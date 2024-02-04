import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Loader from "../../pages/Loader/Loader";
import { getIsActive } from "../../redux/action/others/other";

export default function SubMenu({ activelink }) {
    const dispatch = useDispatch()
    const { loading, active } = useSelector((state) => state.others)
    const resourceActive = active?.find(o => o.section === 'resource');
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
                        {resourceActive?.is_active && <Link to="/resources" className={`${activelink == 'resources' ? 'link-active' : ''}`}>{resourceActive?.title1 ? resourceActive.title1 : 'Overview'}</Link>}
                        {resourceActive?.is_active2 && <Link to="/resources/operational-resources" className={`${activelink == 'operationalresources' ? 'link-active' : ''}`}>{resourceActive?.title2 ? resourceActive.title2 : 'Operational Resources'}</Link>}
                        {resourceActive?.is_active3 && <Link to="/resources/collaterals" className={`${activelink == 'collaterals' ? 'link-active' : ''}`}>{resourceActive?.title3 ? resourceActive.title3 : 'Collaterals'}</Link>}
                        {!resourceActive && <Link to="/resources" className={`${activelink == 'resources' ? 'link-active' : ''}`}>Overview</Link>}
                        {!resourceActive && <Link to="/resources/operational-resources" className={`${activelink == 'operationalresources' ? 'link-active' : ''}`}>Operational Resources</Link>}
                        {!resourceActive && <Link to="/resources/collaterals" className={`${activelink == 'collaterals' ? 'link-active' : ''}`}>Collaterals</Link>}
                    </section>
                </>
            )}
        </>
    );
};