import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import {
    HomeIcon,
    UsergruopIcon,
    LiveIcon,
    HomeActiveIcon,
    UsergruopActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UsergruopIcon />}
                    activeIcon={<UsergruopActiveIcon />}
                />

                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts lable={'Suggested Accounts'} />
            <SuggestedAccounts lable={'Following Accounts'} />
        </aside>
    );
}

export default Sidebar;
