import React from 'react'
import Notice from './notice'

function Notices(props) {
    return (
        <div>
            {props.notices.map((notice, index) =>
                <Notice noticeName={notice.name} noticeDetails={notice.details} key={index}></Notice>
            )} 
        </div>
    )
}

export default Notices
