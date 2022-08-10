import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loader = () => {
  const array = Array(12).fill(0);
  return (
    <ul classname="ImageGallery">
      {array.map((el, idx) => (
        <li className="imageGalleryItem" key={idx}>
          <Skeleton style={{ width: 353 }} className="imageGalleryItem-image" />
        </li>
      ))}
    </ul>
  );
};

export default Loader;
