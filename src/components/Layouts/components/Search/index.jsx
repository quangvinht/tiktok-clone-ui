import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

export default function Search() {
    //2way binding cho ô tìm kiếm:
    const [searchValue, setSearchValue] = useState('');

    //Kết quả tìm hiếm để hiển thị ra:
    const [searchResult, setSearchResult] = useState([]);

    //show result:
    const [showResult, setShowResult] = useState(true);

    //Loading:llúc đầu chưa tìm kiếm thì ko loading
    const [loading, setLoading] = useState(false);

    //Lấy dom element:
    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);

        inputRef.current.focus();
    };

    const hanndleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        //Nếu ko có kết quả trong ô input:
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        //Sau khi get api thì cho nó loading...
        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((response) => response.json())
            .then((res) => {
                setSearchResult(res.data);
                //Khi đã có kết quả thì dừng loading...
                setLoading(false);
            })
            .catch((err) => {
                //nếu có lỗi thì cũng dừng loading...
                setLoading(false);
            });
    }, [searchValue]);

    return (
        <HeadlessTippy
            interactive
            onClickOutside={hanndleHideResult}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder="Search accounts and video"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue &&
                    (loading ? (
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    ) : (
                        <button className={cx('clear-button')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    ))}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}
