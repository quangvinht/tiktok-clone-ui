import { useEffect, useState } from 'react';
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

import * as userService from '~/services/userService';
import { useCallback } from 'react';

const cx = classNames.bind(styles);

const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        const getApiSuggestedUser = async () => {
            // const params = { page: 2, per_page: 5 };

            const response = await userService.getSuggested({ page: 1, perPage: PER_PAGE });

            // setSuggestedUser((prev) => [...prev, ...response]);
            setSuggestedUser(response);
        };
        getApiSuggestedUser();

        // userService
        //     .getSuggested(2, 5)
        //     .then((data) => {
        //         setSuggestedUser(data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }, []);

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
            <SuggestedAccounts lable={'Suggested Accounts'} data={suggestedUser} />
            <SuggestedAccounts lable={'Following Accounts'} />
        </aside>
    );
}

export default Sidebar;
