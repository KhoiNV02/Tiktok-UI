import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import style from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/Components/popper';
import MenuItems from './MenuItems';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
const cx = classNames.bind(style);
function Menu({ children, items = [], hideOnclick = false, onChange = () => {} }) {
  const [history, setHistory] = useState([{ data: items }]);
  var current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      var isParent = !!item.children;
      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        ></MenuItems>
      );
    });
  };
  return (
    <Tippy
      delay={[0, 700]}
      offset={[12, 8]}
      interactive
      hideOnClick={hideOnclick}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <HeaderMenu
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => history.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnclick: PropTypes.bool,
  onChange: PropTypes.func,
};
export default Menu;
