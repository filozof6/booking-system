'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateFrom: null as Date | null,
    dateTo: null as Date | null,
    phone: '',
    numberOfGuests: 1,
    numberOfBathrooms: 1,
    numberOfBedrooms: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-2xl shadow-md"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Book Your Stay
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="dateFrom" className="block text-sm font-medium text-gray-700 mb-1">
            Date From
          </label>
          <DatePicker
            selected={formData.dateFrom}
            onChange={(date) => setFormData(prev => ({ ...prev, dateFrom: date }))}
            selectsStart
            startDate={formData.dateFrom}
            endDate={formData.dateTo}
            minDate={new Date()}
            placeholderText="Select start date"
            className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="dateTo" className="block text-sm font-medium text-gray-700 mb-1">
            Date To
          </label>
          <DatePicker
            selected={formData.dateTo}
            onChange={(date) => setFormData(prev => ({ ...prev, dateTo: date }))}
            selectsEnd
            startDate={formData.dateFrom}
            endDate={formData.dateTo}
            minDate={formData.dateFrom || new Date()}
            placeholderText="Select end date"
            className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Guests
          </label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            min="1"
            value={formData.numberOfGuests}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="numberOfBedrooms" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Bedrooms
          </label>
          <input
            type="number"
            id="numberOfBedrooms"
            name="numberOfBedrooms"
            min="1"
            value={formData.numberOfBedrooms}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="numberOfBathrooms" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Bathrooms
          </label>
          <input
            type="number"
            id="numberOfBathrooms"
            name="numberOfBathrooms"
            min="1"
            value={formData.numberOfBathrooms}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold text-base rounded-xl hover:bg-blue-700 transition"
        >
          Submit Reservation
        </button>
      </div>
    </form>
  );
}
