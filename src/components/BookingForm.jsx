import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker-custom.css"; // Custom styles for the DatePicker

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  ); // Default to one day after check-in
  const [room, setRoom] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [services, setServices] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const handleCheckInChange = (date) => {
    setCheckIn(date);

    // Automatically adjust Check Out if it's earlier than Check In
    if (date >= checkOut) {
      const newCheckOut = new Date(date);
      newCheckOut.setDate(newCheckOut.getDate() + 1); // Add one day to Check In
      setCheckOut(newCheckOut);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4">
      <div className="bg-gray-900 text-white p-8 md:p-12 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
          Make Your Reservation
        </h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Select your desired services, dates, and any special requests to
          experience the ultimate luxury escape.
        </p>

        <form className="space-y-6">
          {/* Row 1: Check In and Check Out */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="check-in"
                className="block text-sm font-medium mb-1"
              >
                Check In
              </label>
              <DatePicker
                selected={checkIn}
                onChange={handleCheckInChange}
                dateFormat="dd/MM/yyyy"
                className="w-full bg-gray-800 text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                calendarClassName="custom-datepicker"
                minDate={new Date()} // Prevent selecting past dates
              />
            </div>

            <div>
              <label
                htmlFor="check-out"
                className="block text-sm font-medium mb-1"
              >
                Check Out
              </label>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                dateFormat="dd/MM/yyyy"
                className="w-full bg-gray-800 text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                calendarClassName="custom-datepicker"
                minDate={new Date(checkIn.getTime() + 24 * 60 * 60 * 1000)} // Ensure Check Out is at least one day after Check In
              />
            </div>
          </div>

          {/* Row 2: Room, Adults, and Children */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label htmlFor="room" className="block text-sm font-medium mb-1">
                Room
              </label>
              <select
                id="room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="w-full bg-gray-800 text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="adults"
                className="block text-sm font-medium mb-1"
              >
                Adults
              </label>
              <select
                id="adults"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full bg-gray-800 text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="children"
                className="block text-sm font-medium mb-1"
              >
                Children
              </label>
              <select
                id="children"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full bg-gray-800 text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Desired Services */}
          <div>
            <label
              htmlFor="services"
              className="block text-sm font-medium mb-1"
            >
              Desired Services
            </label>
            <select
              id="services"
              value={services}
              onChange={(e) => setServices(e.target.value)}
              className="w-full bg-gray-800 text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Select Service</option>
              <option value="Luxury Suite">Luxury Suite</option>
              <option value="Spa Treatment">Spa Treatment</option>
              <option value="Both">Both</option>
            </select>
          </div>

          {/* Row 4: Special Requests */}
          <div>
            <label
              htmlFor="special-requests"
              className="block text-sm font-medium mb-1"
            >
              Special Requests
            </label>
            <textarea
              id="special-requests"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              rows="3"
              className="w-full bg-gray-800 text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Add any special requests here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-md hover:bg-yellow-600 transition">
            Reserve Your Stay{" "}
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
