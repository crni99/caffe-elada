import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

    const { t } = useTranslation();

    return (
        <div className="container d-flex justify-content-center align-items-center px-5" style={{ height: '85vh' }}>
            <div class="card text-center p-3">
                <div class="card-header">
                    <h1 class="card-title">{t('NotFoundPage.title')}</h1>
                </div>
                <div class="card-body">
                    <p class="card-text">{t('NotFoundPage.subTitle')}</p>
                </div>
                <div class="card-footer text-muted">
                    <Link to="/" className="btn custom-button fw-bold p-3 text-decoration-none mt-3 mb-3 card-button" >{t('NotFoundPage.returnToHomeButton')}</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
