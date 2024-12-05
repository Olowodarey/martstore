'use client';

import { useEffect, useState } from 'react';
import { getPhone } from "../_lib/data-service"; // Fetch all phones function
import PhoneCard from './PhoneCard';

export default function Phone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const phones = await getPhone(); // Fetch all phone details
        setProducts(phones);
      } catch (error) {
        console.error('Failed to load phones:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Grab the best deals on Smartphones</h2>
          <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
            View all
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products.map((phone) => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
              
            {/* mobile */}

        <div className="mt-8 text-sm md:hidden">
          <a href="#" className="font-medium hover:text-indigo-500">
            view all
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
