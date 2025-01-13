// src/components/PersonalInfo.js
import React from 'react';
import profilePic from '../img/profil.PNG'; // Resim yolunu burada güncelledik

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <img src={profilePic} alt="Alaattin Ozan Şahin" className="profile-img" />
      <h1>Alaattin Ozan Şahin</h1>
      <p><b>"Software Developer"</b></p>
      <p className="bio">
        Merhaba ben Alaattin Ozan, Yazılım mühendisliği alanındaki bilgi ve becerilerimi kullanarak, teknolojik yeniliklere katkı sağlayan projelerde yer almayı, ekiplerle birlikte yaratıcı çözümler üretmeyi ve sürekli gelişimle kariyerimi ilerletmeyi hedefliyorum.
      </p>
      <br />
      <p><b>İletişim Bilgileri:</b></p>
      <p>Email: alaattinozan@hotmail.com</p>
      <p>Telefon: 537 817 32 82</p>
    </div>
  );
};

export default PersonalInfo;
