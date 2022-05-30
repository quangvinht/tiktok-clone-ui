import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faMagnifyingGlass,
    faMessage,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import Image from '~/components/Image';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { UploadIcon, MessageIcon, BoxIcon, SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        //menu cấp 2:
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyborad shortcuts',
    },
];

const UserMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@abc',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },

    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/loguot',
        sepatate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    //handle:
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handleee change language:
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <HeadlessTippy
                    interactive={true}
                    content="Kết quả"
                    visible={searchResult.length}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />

                                <AccountItem />

                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search accounts and video" spellCheck={false} />
                        <button className={cx('clear-button')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            {/* <Tippy delay={[0, 200]} content="Upload video" placement="bottom"> */}

                            <>
                                <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                    <Button outlineBlack leftIcon={<UploadIcon />}>
                                        Tải lên
                                    </Button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>

                                <Tippy delay={[0, 200]} content="Hộp thư" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <BoxIcon />
                                    </button>
                                </Tippy>
                            </>

                            {/* </Tippy> */}
                        </>
                    ) : (
                        <>
                            <Button
                                text
                                // large
                                // href="https://www.youtube.com/watch?v=w3WPGmi7MaQ"
                                // target="_blank"
                            >
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? UserMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://sp16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f4bb4ec452a446f3f134ac81d7fd83d4~c5_100x100.jpeg?x-expires=1653969600&x-signature=iJkBGzifAfS5%2BpcmhlHyB8%2FAw8Y%3D"
                                className={cx('user-avatar')}
                                alt="NUYEN VAN A"
                                fallback="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYYGBgYGBoaGhwYGhgaGBocGhoaGhoYGBkcIS4lHB4rHxwaJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHjQhJCE0NDQ0NDQ0NDQ0NDQxNDQxNDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0ND00NDQ0MTQ0QP/AABEIAOEA4AMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EAD4QAAEDAgMECAQFAgQHAAAAAAEAAhEDIQQSMQVBUWEGInGBkaGxwRMy4fAUQlJi0XLxFSM0sgcWM1NzotL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQEBAQEAAgICAwEBAAAAAAAAAQIRAxIhMQRBIjJRYRP/2gAMAwEAAhEDEQA/APGUIShACEIQYQhCAEoMJEQkbS4TbGZgafmGqe/GnisuyZEarX7M2V1Q6qLx8v8AKjWXZ4PLqzjrDMc++g4nTu4qfSwoHPtToMWXTVDq5aQUt6XJ4pxjE4GKbppnw9+TIYlyJ9rV1lU+zWeKJTcAHuplgGUhua51HzyTobT3qtqUwHEDcTHYDCkab7LnKndCeIxkSGkpGVLlS9hfHEVuZhzNMETBidQRoUPDn0hJJq5+Fy0XBB7U8+FxWpBwg2+5CqVlrxxFwxbTL2Fo+I4CHCJnWb6696rMbsJ1V0NblqGTljKTvuNBbetPU6OsLDVFYmGg6XmPlJJ13Bd7J2f8JwrBwqRmBDZkWgg7jOYeCuVzbznleUVWEEgiCDBB3EJorRdJKIc41GiwfkJiDmDfzc5DlnlrL152s8pEJUkJpASoQEGEIQEABCVCARd02EkACSdFytB0f2a1zXVHmIMNbF3cez+6VvFYz7XkStibJydd4BP5f5Cu5XIA7AlaVlrXXpePx+sOU2SYUoYcgSRYkibESN0iyXZz2guDpyvbkJbctBIMjvaJ5EqU+uPhim0ktDy8k2kkZRA3CJ8Vna6cZvUYNXUIXYbxUOvOXICfwdIOeGFwZIJzOBi14TcKTgq4puzFjX2Ih0ReLiQfTeifY3L631+0anhnvqvpMyuyzcEZTlO46bwuSyDB1FoOttU/susGVnvcMjXh8ZBZhcbQOAXD7uccxdLnGSIJkm5Cd5+kY9u8v+GyEQusqEl8I0NayrJAzNEXgl2luI+iabh3NYxxuHAxxsU5UYCLhdPqlzGMtDAQDvMnf4KpWOs/Pwaa4gOI3iCOI3q0pj/KpkQxzXugGQ6po4W/MM0DzVWrrGufiKdNzGjM14HMENyg8m2BV5rk/IzZOxmNu7Ma3DYoyetUNVgOuVr4nxLwvOHBeybeotfV+CBZtEtcOObNA7paV464LbLzdz9m0IQmzASpAlQREoSJUwEISFIO6TSSANTYd63GDwwY1rRuF+Z3nxWV2FSzVm/tl3hp5raNG9Tquv8AGx35cLtoQNV0DHeQL2F+JWNr0cw/RFtbH2UhoS4nBBmIZRdVbkIZmdTggZj1pmbj0iydxLWNqvZTcXNY6A477X05yO5Rqftv4t5t9YRoXQagNXSl0SEASwlyp7D4Vz3BrGlziJgesmwS+ztknb8GISQpOKwjmRmaROhsQY4EWKYlO/BSzU7L1xlQ4LpIUDhylhnOa5zWy1vzG1lHLIsRBHHXip2DxJaHNz5WvFzE3Gk8AdF1jspaxwdLjmDhM9UHq9mp1VRhbZrlVrmqw2PWDXQ7QwQNQXNuPRQnhcNkFPN5Wflz3PFtTqA1DUrNiaT4dvPVjO6NRAIleNYpha5wIiHEQdRfRewmi+uCGFmV9n59WuIIyiLhu/uE2XnvT7Ctp4ohoADmMcYMiYLT/tXRl5PmnIy6EFCpzAJUICCCEITAK5K6K5KBV90XZ1nng0eZ+i07BKznRgWfxt7rTlsN5rLb0fxZ/GOGrvJMSJAIMTEgG4ndaVwwJ5qxrvznsTGYxrcUK9OhDGwQ1ztSGwTN991IxGI+JUdVLWtLzJDdBYDvMAXUFgUlpS1q1r4/FnN7Ps40rtq5Yu2lQ3jqFZ7DeA8szRnY5mbgXNtft9VWgLomyM65qVHkx74uf9WWH2Y6jh67KwDYc11O4MuBIOWNxEKoISlEqt6mr8J8Pi145fa96bKCV2VwVLbjlclSMNSa7Pme1ha0ubm0cYJyg7tPNR6Ic5jXuEB5cBwlpAPqFfredY63nvq5SOC6K6w72h7S5uYTodDIgT3pz7Zb+qgYyoYsSASCYJHoe1Y3pM4mo2TP+W31cty7Bl/VAOYugjXLE+47IWB6RiK7m/pDR/6g+63y8v8AI+lUhCFbiCEIQQQhCYBXJXRXJQTRdGDZ/aPdaVzwbLNdGNHdo9Cr1j/VZben+N/WJDU61M5w0XISsrT8ocewErGyu33zn7qcwWT7VNbi8zMjME6I+Yk55/VJGvko9PZ+IMRRfHaz+VNyvx/k5v38EA5LoFOnZeJ/7L4/qZ/9Jp2BrjWi/uE+hS42nlxf2UFKSo1Rz2asf3scPVSuklbCNw7fw9V5q5xmDs4dlgzIIgXjREzanyfkZzZPvv8AhJQD3qyxOx2sosqtrtfZuYS2ST+mDfs1VZCPTjTx+XPknclIXJauguSUmljujjTTbUb8Nr2vbBDrFpggFp4iU38RvwaLGl0tzueCIAc5wgA7+qAuXFNPKuavOMNeLPfb9glNP/ldOTT5m3fabIjLf0KFZzDnBzGDY6348/qvPts1M1eo7i490Wju0W1xdfIxz5iAff3WArVC5znHUkk9pMldGHlfk8nIaQkSq3GQJUiEyKhCEALkrpIUEv8AoybPHYfVaDDUXPMNsN54fVZno6+HPH7Z8D9VuGxTpiNYnvIlZ6+3Xjy3OJx1QwNNh6xHa4q9wWJotMAtXn2JZXqOuYvI3rg7HrgyDPY4z5qfWc+azu9V7DharHXB8FYUiF4azF4ulo54jvC0mwultezX3PMeenFTrx/4vPk/Vj1cOsuA+6q8DtEPaDOolSBUOvNZX/refKwY8Gy5fgqT7PpscP3NaVX4jG5LhYza3SbESchyiTMD7lPM7fhOtesbSv0MwL7/AAw069QkeSrsR0SptnJiHjgHFrx538155U2pjH6vqH+mW9nJSsBsjF1Tq4D9z47InRa+rPP5G5f42tHi9j1WaOp1ByJafC6rnuymHtcw/u0PYRZcf4PjKf5id/zuPqnsNtc/JiWCdJsQe0e6i4jpx+duf2+U0bHe5jXtc12b8oNxyPPvVRUaQSDYg34gjkrekw0iH0iXsmSwGx5sO4qBtDEtqVC9tpAmbGQLyFMjr8fn9/uoqdwpZnIfZrmOGa/VMdV1uY803K4fEnfb3CqfatfLP9JHRS7XD3lY5y23SGnmougXZc8odu7isSQtsfTyvyv7OUqIQrcxEIQmkBKkCVACRyVIUBZbAqBtZoP5gW95FvOFv6xkkcI9AvNMK/K9ruDmnwIXp5h1xvAUbi834Q6tTI2d6jYN1Wq4/DlwbqZysHfqnsfhC+025b1b7AxDKLS3L1SLxpz8VE5+1Xv6UWFxDnvLHMc6GGocjzIY3V0OtF1JGHludnXaNQRDx3b1P/wNj3h7XtDZsXDrAHdE304rTYzCsFFjKTHAsFnyzMST1szZ0Mm3YqtnCk135ZzY+0YMSt3gGl4F15rWZlrAgZSfmA3HevSthfKL7lhuRv4/24x+HEG8LJ46swTYE8hJK1u1Xy10c1ka2GgB0EzckRIHC51U5q9xVVcTVvkB6okhgmBH5iQmML0ge0Ocfi5WkAuABALpyh1rTB3rYbOxVEU303scA8FpjLvGpvqs7/y7LnFrxkJ0JIzRYEs0JE+a3zZz5c99pUnC9IXPEteH8dz/AAOqm/EZUgwDPJRNo9H2uazK3JkEBwPXMfqO/XzXWGwLmD5s3qp1yfR5lv2s6dJrRAPuO5V20sICZGvHj2qWwOATVZ+5Z9bZtz9KUgnq6O4fxxRXcMrOrBbYniSc3kuNr1Mgzi5bcfwmKeNzsbeZuY5TE8bK5fh0Y8nt8VWdIquWm8fqgeYKxjitd0qPUncXNHkTbwWQK1x9OX8q/wAuEQhCtykQhCZBKkSoASFKuSgAL0vAPJa3m0ei80C9L2Y2A3sCnf0eftZ/hSR3JptFzdLq4wbREFSzhm7lz3XHVnCoo5/0qS4ui5m2gU78LCh4+wgd6PY/VTtpTVbF7yVvtmDK3u4rGYFn+YFt8O0Bo81Gq0xOQ3iBmkKlxOz5BAnkrkhd0iNIWcvKvU7GQGEe09U9xUmk+sPy6di01bCB196jvoEbgefsVc0i4VjaD3wXunknvw8CFMY0SnKlCxj6pXQ9FLUZHmq/FuhXOJpCFRY9Vn5TqcVmNaHCDode9MdItkuw9VjqDXFr2y5gvERJHiplZvy/1Ba5lA1KpJjK1gaPU+3gtJeM82y/DyXpTUGRgG9xMcgI91llsP8AiPQyYkACGluYdpN/QLILfH9Wfm17atIhCE2REJEBNJUIQgwgoQUArNR2hek4E7+C80C3+zK0sa4b2tPkJU6+jz9tZgaqtKblncJUKuqD1y6+3Xi/Cc8ql2lUAMb1OrVlXtaHBzj2IkXa72LSJeCtkG9WPFUmwcMLLTChbRKztVmyRUPcBKKVUSLwnsRSBOsKPUYyNQs+NFjmgcU2Tr9+Ki4eoSwJupiS250+9UBYMpgrjENsUzQ2i06FGIr2T+Cqrxr1RYkyVbY5+9VNTmrzGG6h1T12D9w9VsGkM6wPVOqxNVxL2xvKer1amUgvJEcp8VozzeMp/wAQdpCtiYaZDG5ZHHUj0WTUvaNqrx+4+qiLfM+GOr2hCEJpcoCEJpKhIhBlQhCARa7o5XzUwN7SR7hZFXnRuvD3N4iR2g/wlqfAn22+GerjDPsCqCk5WGFrWhc+o6M64s3ybKi2j8Vk5CCN4KvqThAlM4mmHWUxpb2Doxt8DqPsRx+7rV/403KTmssIdlX07CNVcYLZuUS4kjgTZFkEtTsWH1QTnc1v7bPPfu9VBweyix3VcWt5uc4nxO9WxIgQgAzdHD9k6k4NAA4JmuW6/fgmQwnn5JnFvjl3qfVXuZr0mmS2WO5evNRGYp05XWI1+iPxuYzGhhNlly6fv+EeqPanKjs3coOJgA7r/wB1LGir9oPgKojVV7DmrNj7sVY4kdUquwF3zwb9FLxb4aVdTK812v8A9Z/9XsFBVx0ioFtTNucAe8WPsqgraX4Za+yIKAgpk4QhCaSpEqRAhUIQgyFSsBXyPa7cDfsNiopQgnolOpIBCkUKpBj7lZ3Y2OzMAJu2x9irJlQysdZa5rU0K2l1ZMDTH2FkC9xbAMGNVzh2VzYvEd4Kni86bV72AXcAnWYimRAe0dqzFHZ1Q/nbwmCfdTW7BqmSXARyj3S9XRnNs+lz+PpNsDmI8E3U24BcNb4+qh4fo4TqSeIFgnH7Pp09wJ3bz4p8X6GcRt+ofkZPp4lMsw1Z5z1ni/5G2A7TvKmUnSfu31T+JeAAN6ljrkRKbIn7um8+g5rirXsVF+LzS4z6m1a8ffFUuJqye9PVq1yoL5lVIVqVs0Xce73XWMdoE7hqRYIOsSe1RcQ+SmSm21hhUaRvFweayFak5phwgrd1WyoeM2e2oIcOw7wqzrhWdYtBU/HbNfT1Et4j34KAtftFnHCEITQEBCECFQhCSqEQhKmR/B4ksdO7QjiFpKFeQHA81lFNwGLLDB+U+XNTqdOXjZYOtvVkTNxb73rPYZ/BW+Dqzv1Weo0lWWGxUG5j08VbUdqCLv8APuVKcPIVLimOD4B+/wC6U+W08usxt37TH6o7So3xM5tJ57lSbIwbnDrTHYtTRoBoH3Kmn/6XUc0mZG3UbE1AbTdOYuru+qrnPN5Mb/vmkz1XNXQ++v1UR7l296ivduVJK8q02bgDGd47Bw5qNgcLfM5X1SzY+wg+KnHviVVPCn1Tnfyb6piqxHS51HZTToop+nTTvw0HxXVsMCIIssxtXYJEuYO7+FuCxM1aVkTXBcvKEIQuhzhAQlQAhCEjgSpEqYKlCQICRr/YlYluXh6FaHCG0rHbJcQ+x3H2K09CsIjjqo19rz9L5lQR9dyVlNriCYJ4qpbX3TyTbMWc2uhU8V1uKJY1ogC334rt9Zvos/hsad/BSHV4Nr8UrkeyViXyf5+9VAqviZKKuK3/AHZVteuSYH32pcDqrW3LvDU5uUzRpcVPptRTkT8KnMZiPyjU/cqF8UjROYdsuvqkKcZh4Eb1FrsurgM38FVYl3WSOOWhdymg+6cBQopTT05CHMS6OPIEIQutyBKkSoAQhCDCVIiUAq7a0kwLlcBXWzsJFzqfJTbxUnTuzsHlubk6/wAKaQQZFinGCEjys7bWkhk1SmvjGU8U25gSlFytMNihAk8z6ad3mpX40/eipqSkUyn7F6p/xCbLtjITNKE+1ynqpEqkAnmS4hrQSXGABck7gFEa/wA9PotDQIwbPiPAOJeP8thv8Np/O7939uKDt4Z2hghRLGEzVIzVINmTGVnbEk9oXOF+ZQWVC4lziS4mSTcknUlTcE64SqVqRDe5Z7Ev65V9Uf1SszjKnWKSjrXKSwKvoPlWVM2Sq4cYxduYhhSuepU8WQhC7XCEqEIMIQhABQhCAdw/zjtWkw2gQhRpWT6SpohChrDZ071zxQhI66pKQzVCEJSqad3oQg4sti/6ij/5B7qZ0p/1dTsZ/tCRCBpCb8vh6qfg9QhCmlFhiPkcsxi/mQhJUGGVpTQhKtD4XJQhTQ//2Q=="
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
