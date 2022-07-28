import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://hotels.sletat.ru/i/f/14997_33.jpg" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;