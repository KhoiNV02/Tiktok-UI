import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Components/popper';
import AccountItem from '~/Components/AccountItem';
import * as searchService from '~/Services/searchService';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import { useDebounce } from '~/hook';
const cx = classNames.bind(style);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef();
  const debouncedValue = useDebounce(searchValue, 500);
  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchService.search(debouncedValue);
      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);
  return (
    <div>
      <Tippy
        interactive={true}
        visible={searchResult.length > 0 && showResult}
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Account</h4>
              {searchResult.map((item) => (
                <AccountItem data={item} key={item.id} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            placeholder="Tìm kiếm"
            ref={searchRef}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onFocus={() => {
              setShowResult(true);
            }}
          />
          {!!searchValue && !loading && (
            <button
              className={cx('clear-button')}
              onClick={() => {
                setSearchValue('');
                setSearchResult([]);
                searchRef.current.focus();
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

          <button className={cx('searh-button')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
