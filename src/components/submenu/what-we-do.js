import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Loader from "../../pages/Loader/Loader";
import { getIsActive } from "../../redux/action/others/other";

export default function SubMenu({ activelink, title, active }) {

    const dispatch = useDispatch()
    const { loading, active: Active } = useSelector((state) => state.others)
    const whatwedoActive = Active?.find(o => o.section === 'whatwedo');
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
                        {whatwedoActive?.is_active && <Link to="/what-we-do" className={`${activelink == 'whatwedo' ? 'link-active' : ''}`}>{whatwedoActive?.title1 ? whatwedoActive.title1 : 'Overview'}</Link>}
                        {!whatwedoActive && <Link to="/what-we-do" className={`${activelink == 'whatwedo' ? 'link-active' : ''}`}>Overview</Link>}
                        {title && title.map((menu, index) => (
                            <>  {active[index] && <Link to={`/what-we-do/${menu.category}`} className={`${activelink == `${menu.category}` ? 'link-active' : ''}`}>{menu.category}</Link>}
                            </>))}
                        {/* <Link to="/what-we-do/diabetes" className={`${activelink == 'diabetes' ? 'link-active' : ''}`}>Diabetes</Link>
                <Link to="/what-we-do/environment" className={`${activelink == 'environment' ? 'link-active' : ''}`}>Environment</Link>
                <Link to="/what-we-do/hunger" className={`${activelink == 'hunger' ? 'link-active' : ''}`}>Hunger</Link>
                <Link to="/what-we-do/vision" className={`${activelink == 'vision' ? 'link-active' : ''}`}>Vision</Link> */}
                    </section>
                </>
            )}
        </>
    );
};