import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    return (
        <div className={s.item}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>)

}
export default ProfileInfo;