import React from 'react';
import Image from 'next/image';

const PhoneCard = ({ phone }) => {
  const { id, name, regularPrice, discount, description, image } = phone;

  return (
    <div key={id} className="group relative w-full sm:w-[180px] border-2 p-2 rounded-md">
      <div className="flex justify-center h-[180px] sm:h-[150px] w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:h-40 xl:h-60">
        <div className='relative w-full h-full'>
          <Image
            alt={name}
            src={image}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
      </div>
      <h3 className="mt-4 text-sm sm:text-lg text-gray-700">
        <a href="#">
          <span className="absolute inset-0" />
          {name}
        </a>
      </h3>
      <p className="text-xs sm:text-sm text-gray-500">{description}</p>
      <div className='flex justify-between'>
        <p className="mt-1 text-xs sm:text-sm font-medium text-gray-900">${regularPrice}</p>
        <p className="mt-1 text-xs sm:text-sm font-medium text-green-900 line-through">${discount} Off</p>
      </div>
    </div>
  );
};

export default PhoneCard;
