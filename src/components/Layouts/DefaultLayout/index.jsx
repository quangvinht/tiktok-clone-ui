import React from 'react';
import Header from '~/components/Layouts/DefaultLayout/Header';
import Sidebar from '~/components/Layouts/DefaultLayout/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
