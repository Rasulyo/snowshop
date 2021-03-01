import React from 'react';

const SimpleMap = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58277.25829711045!2d74.57829139378096!3d42.47443236043149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38993f4fd2b81247%3A0x9ac16bf3d8aa7a5d!2sPik%20Semionova%20Tien-Shanskogo!5e0!3m2!1sru!2skg!4v1614059208478!5m2!1sru!2skg"
                width="100%" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
        </div>
    );
};

export default SimpleMap;