import { MouseEvent } from 'react';

import { TEST_ID } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'store';
import { currentProductSelector, productImgSelector, productsActions } from 'store/products';

import cl from './galleryProduct.module.css';

const { preview, bigImg } = TEST_ID.productCardPage;

export const GalleryProduct = () => {
  const dispatch = useAppDispatch();
  const productImg = useAppSelector(productImgSelector);
  const { title, images } = useAppSelector(currentProductSelector);

  const handelPreviewClick = (e: MouseEvent<HTMLImageElement>) => {
    if (e.target instanceof HTMLImageElement) {
      const src = e.target.src;
      dispatch(productsActions.setProductImg(src));
    }
  };

  return (
    <div className={cl.galleryWrap}>
      <picture className={cl.imgWrap}>
        <img className={cl.img} src={productImg} alt={title} data-test-id={bigImg} />
      </picture>
      <div className={cl.previewContainer}>
        {images.map((el) => (
          <img
            key={el}
            className={cl.preview}
            src={el}
            alt={title}
            onClick={handelPreviewClick}
            data-test-id={preview}
          />
        ))}
      </div>
    </div>
  );
};
