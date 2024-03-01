import { useState } from 'react';
import classNames from 'classnames/bind';

import Tip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faQuestionCircle,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
//components
import Image from '~/Components/Image';
import Menu from '~/Components/popper/Menu';
import Button from '~/Components/Button';

//tài nguyên
import style from './header.module.scss';
import image from '~/assets/images';

import { InboxIcon, MessageIcon, UploadIcon } from '~/Components/icons';
import Search from '../Search';
const cx = classNames.bind(style);

const MenuItems = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'Language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  { icon: <FontAwesomeIcon icon={faQuestionCircle} />, title: 'Feedback and help', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard Shortcuts' },
];
function Header() {
  const [logged, setLogged] = useState(false);

  const handleMenuChange = (item) => {};
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MenuItems,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={image.logo}></img>
        </div>
        <Search> </Search>
        <div className={cx('actions')}>
          {logged ? (
            <>
              <Tip content="Upload video" placement="bottom">
                <button className={cx('action-button')}>
                  <UploadIcon />
                </button>
              </Tip>
              <Tip content="Message" placement="bottom">
                <button className={cx('action-button')}>
                  <MessageIcon></MessageIcon>
                </button>
              </Tip>

              <Tip content="Notation" placement="bottom">
                <button className={cx('action-button')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tip>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={logged ? userMenu : MenuItems} onChange={handleMenuChange}>
            {logged ? (
              <Image
                className={cx('user-avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c9f14092fbcdc46eb2eaaae3cdaf5302.jpeg?lk3s=a5d48078&x-expires=1709272800&x-signature=8CWmwGwcOHPNZQSi8N2ESMfPriE%3D"
              ></Image>
            ) : (
              <button className={cx('more-button')}>
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
