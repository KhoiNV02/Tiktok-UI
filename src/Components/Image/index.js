import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import style from './Image.module.scss';
import image from '~/assets/images';
const cx = classNames.bind(style);
const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = image.fallBackImage, ...props }, ref) => {
  const [fallBack, setFallBack] = useState('');
  const handleError = () => {
    setFallBack(customFallBack);
  };
  return (
    <img
      src={fallBack || src}
      alt={alt}
      ref={ref}
      {...props}
      className={cx('wrapper', className)}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallBack: PropTypes.string,
};
export default Image;
