import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Loader from "../../pages/Loader/Loader";
import { getIsActive } from "../../redux/action/others/other";

export default function SubMenu({ activelink }) {
    const dispatch = useDispatch()
    const { loading, active } = useSelector((state) => state.others)
    const eventsActive = active?.find(o => o.section === 'events');
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
                        {eventsActive?.is_active && <Link to="/events" className={`${activelink == 'events' ? 'link-active' : ''}`}>{eventsActive?.title1 ? eventsActive.title1 : 'Upcoming Events'}</Link>}
                        {eventsActive?.is_active2 && <Link to="/events/photo-gallery" className={`${activelink == 'photogallery' ? 'link-active' : ''}`}>{eventsActive?.title2 ? eventsActive.title2 : 'Photo Gallery'}</Link>}
                        {eventsActive?.is_active3 && <Link to="/events/come-be-a-lion" className={`${activelink == 'comebealion' ? 'link-active' : ''}`}>{eventsActive?.title3 ? eventsActive.title3 : 'Come be a Lion'}</Link>}
                        {!eventsActive && <Link to="/events" className={`${activelink == 'events' ? 'link-active' : ''}`}>Upcoming Events</Link>}
                        {!eventsActive && <Link to="/events/photo-gallery" className={`${activelink == 'photogallery' ? 'link-active' : ''}`}>Photo Gallery</Link>}
                        {!eventsActive && <Link to="/events/come-be-a-lion" className={`${activelink == 'comebealion' ? 'link-active' : ''}`}>Come be a Lion</Link>}
                    </section>
                </>
            )}
        </>
    );
};