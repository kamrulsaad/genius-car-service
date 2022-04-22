import React from 'react';
import Helmet from 'react-helmet';

const PageTitle = ({ page }) => {
    return (
        <Helmet>
            <title>{page} - Genius Car Service</title>
        </Helmet>
    );
};

export default PageTitle;