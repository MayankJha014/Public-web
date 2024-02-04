import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Loader from "../../pages/Loader/Loader";
import { getIsActive } from "../../redux/action/others/other";

export default function SubMenu({ activelink }) {
    const dispatch = useDispatch()
    const { loading, active } = useSelector((state) => state.others)
    const aboutActive = active?.find(o => o.section === 'about');
    const whatwedoActive = active?.find(o => o.section === 'whatwedo');
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
                        {aboutActive?.is_active && <Link to="/about" className={`${activelink == 'about' ? 'link-active' : ''}`}>{aboutActive?.title1 ? aboutActive.title1 : 'Overview'}</Link>}
                        {aboutActive?.is_active4 && <Link to="/about/mission" className={`${activelink == 'mission' ? 'link-active' : ''}`}>{aboutActive?.title4 ? aboutActive.title4 : 'Goal & Mission'}</Link>}
                        {!aboutActive && <Link to="/about" className={`${activelink == 'about' ? 'link-active' : ''}`}>Overview</Link>}
                        {!aboutActive && <Link to="/about/mission" className={`${activelink == 'mission' ? 'link-active' : ''}`}>Goal & Mission</Link>}
                        {/* <Link to="/about/our-team" className={`${activelink=='ourteam' ? 'link-active' : ''}`}>Our Team</Link> */}
                        {whatwedoActive?.is_active && <Link to="/what-we-do" className={`${activelink == 'whatwedo' ? 'link-active' : ''}`}>{whatwedoActive?.title1 ? whatwedoActive.title1 : 'What we do'}</Link>}
                        {!whatwedoActive && <Link to="/what-we-do" className={`${activelink == 'whatwedo' ? 'link-active' : ''}`}>What we do</Link>}
                        {/* <Link to="/about/testimonials" className={`${activelink=='testimonials' ? 'link-active' : ''}`}>Testimonials</Link> */}
                    </section>
                </>
            )}
        </>
    );
};