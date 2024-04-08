import React, { useState } from 'react';
import shivimg from '../images/Shiv_img.jpg'
import gallery1 from '../images/Gallery1.jpg'
import gallery2 from '../images/Gallery2.jpg'
import gallery3 from '../images/Gallery3.jpg'
import gallery5 from '../images/Gallery5.jpg'
import gallery4 from '../images/Gallery4.jpg'
import gallery6 from '../images/Gallery6.jpg'
import gallery7 from '../images/Gallery7.jpg'
import gallery8 from '../images/Gallery8.jpg'
import gallery9 from '../images/Gallery9.jpg'
import gallery10 from '../images/Gallery10.jpg'
import gallery12 from '../images/Gallery12.jpg'
import ImageModal from './Imagemodel';
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:w-11/12 mx-auto py-10">
        <div className="grid gap-4">
          <div>
            <img
              className="h-[250px] lg:h-[317px] max-w-full rounded-lg object-cover object-center gallery-img"
              src={gallery1}
              alt="gallery-photo"
              onClick={() => openModal(gallery1)}
              data-aos="zoom-in" data-aos-duration="1500"
            />
          </div>
          <div>
            <img
              className="h-[250px] lg:h-[650px] w-full rounded-lg object-cover object-center gallery-img "
              src={shivimg}
              alt="gallery-photo"
              onClick={() => openModal(shivimg)}
              data-aos="zoom-in" data-aos-duration="1500"

            />
          </div>
          <div>
            <img
              className="h-[250px] lg:h-[500px] lg:w-full max-w-full rounded-lg object-cover object-center gallery-img"
              src={gallery2}
              alt="gallery-photo"
              onClick={() => openModal(gallery2)}
              data-aos="zoom-in" data-aos-duration="1500"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-[250px] md:h-[330px] lg:h-[660px] w-full rounded-lg object-cover object-center gallery-img"
              src={gallery5}
              alt="gallery-photo"
              onClick={() => openModal(gallery5)}
              data-aos="zoom-in" data-aos-duration="1500"
            />
          </div>
          <div>
            <img
              className="h-[250px] lg:h-[430px] max-w-full rounded-lg object-cover object-center gallery-img"
              src={gallery3}
              alt="gallery-photo"
              onClick={() => openModal(gallery3)}
              data-aos="zoom-in" data-aos-duration="1500"
            />
          </div>
          <div>
            <img
              className="h-[250px] lg:h-[300px] lg:w-full max-w-full rounded-lg object-cover object-center gallery-img"
              src={gallery4}
              alt="gallery-photo"
              onClick={() => openModal(gallery4)}
              data-aos="zoom-in" data-aos-duration="1500"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-[250px] md:h-[250px] lg:h-[370px] max-w-full rounded-lg object-cover object-center gallery-img"
              src={gallery6}
              alt="gallery-photo"
              onClick={() => openModal(gallery6)}
              data-aos="zoom-in" data-aos-duration="1500"
            />
          </div>
          <div>
            <img
              className="h-[250px] max-w-full md:h-[325px] lg:h-[650px] rounded-lg object-cover object-center gallery-img "
              src={gallery7}
              alt="gallery-photo"
              onClick={() => openModal(gallery7)}
              data-aos="zoom-in" data-aos-duration="1500"
            />
          </div>
          <div>
            <img
              className="h-[250px] max-w-full md:h-[180px] lg:h-[360px] rounded-lg object-cover object-center gallery-img"
              src={gallery8}
              alt="gallery-photo"
              onClick={() => openModal(gallery8)}
              data-aos="zoom-in" data-aos-duration="1500"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-[250px] w-full lg:h-[660px] lg:w-full rounded-lg object-cover object-center gallery-img"
              src={gallery9}
              alt="gallery-photo"
              onClick={() => openModal(gallery9)}
              data-aos="zoom-in" data-aos-duration="1500"
            />
          </div>
          <div>
            <img
              className="h-[250px] md:h-[185px] lg:h-[500px] max-w-full rounded-lg object-cover object-center gallery-img"
              src={gallery10}
              alt="gallery-photo"
              onClick={() => openModal(gallery10)}
              data-aos="zoom-in" data-aos-duration="1500"
            />
          </div>
          <div>
            <img
              className="h-[250px] md:h-[150px] lg:h-[300px] max-w-full rounded-lg object-cover object-center gallery-img"
              src={gallery12}
              alt="gallery-photo"
              onClick={() => openModal(gallery12)}
              data-aos="zoom-in" data-aos-duration="500"
            />
          </div>
        </div>
      </div>
      {/* Modal */}
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};
export default Gallery;
