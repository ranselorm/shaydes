import { useState } from "react";

const Checkbox = ({
  handleCheckboxChange,
  handleAcceptTerms,
  handleRejectTerms,
  isChecked,
  isModalOpen,
}) => {
  return (
    <div>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="checkbox" className="ml-2">
          I agree to the terms and conditions
        </label>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 px-4 md:px-0">
          <div className="bg-white p-6 rounded-lg md:w-9/12 w-full">
            <h2 className="text-lg font-bold mb-4">Terms and Conditions</h2>
            <div className="md:h-[400px] h-[70vh] overflow-y-auto">
              <p className="text-gray-800 mb-4 text-[16px]">BOOKING POLICY</p>
              <p>
                70% deposit of chosen package is made to secure date and time to
                confirm booking.
              </p>
              <p>
                The remaining 30% to be paid at least 2 WEEKS prior to event
                date
              </p>

              <p className="text-gray-800 mt-6 mb-2 text-[16px]">
                CANCELLATION AND RESCHEDULED BOOKINGS
              </p>
              <p>
                Brides who wish to cancel their events a month or less prior to
                their booked dates will be refunded ONLY 50% of payment made.
              </p>
              <p>
                Brides who wish to change their dates a month or less to the
                event date previously booked shall attract a penalty fee of
                250gh to successfully proceed with the new date booking BUT if
                54Shadyes is booked and unavailable for Bride’s new date it will
                be treated as cancellation hence bride will be refunded ONLY 50%
                of payment made.
              </p>
              <p className="text-gray-800 mt-6 mb-2 text-[16px]">
                FORCE MAJURE
              </p>
              <p>
                54 SHAYDES will not be liable or responsible for delay or
                failure to deliver its obligation caused by forces beyond our
                control such us natural or nuclear catastrophes, act of war,
                terrorism, fire, storm etc
              </p>
              <p className="text-gray-800 mt-6 mb-2 text-[16px]">
                SERVICE DELIVERY
              </p>
              <p>
                In the event where 54 shaydes is unable to deliver service due
                to situations unavoidable by her, bride will be refunded or
                there will be a replacement paid by 54 shaydes
              </p>
              <p className="text-gray-800 mt-6 mb-2 text-[16px]">
                TRANSPORTATION POLICY
              </p>
              <p>
                Transportation charges are excluded from all packages hence
                should be paid separately Transportation charges will be
                calculated after bride provides location Different days event
                packages transportation is a fee per day depending on client’s
                location
              </p>
              <p className="text-gray-800 mt-6 mb-2 text-[16px]">
                TRAVEL POLICY
              </p>
              <p>
                Brides outside Accra will pay a travel fee of 300gh - 500gh
                depending on the number of days. Kindly note that this fee is
                different from the transportation fee that will be charged.
                Brides outside Accra in area as Kumasi, Takoradi, all parts of
                the North are strictly by flight Bride is responsible for all
                transportation(in & out), flight tickets and hotel accommodation
                cost
              </p>
              <p>
                Bride must provide a decent and suitable accommodation for
                makeup artist and the choice of hotel must be decided between
                bride and makeup artist at least a week prior to the event
              </p>
              <p className="text-gray-800 mt-6 mb-2 text-[16px]">
                WORKING CONDITION
              </p>
              <p>
                Bride&apos;s room must be conducive for work, neat, not crowded,
                spacious and well ventilated (preferably AC). Make up artist
                should be provided with a table and socket for effective work.
                Bride must be ready upon arrival of makeup artist
              </p>
              <p className="text-gray-800 mt-6 mb-2 text-[16px]">
                PAYMENT DETAILS
              </p>
              <p className="flex flex-col font-semibold">
                <span>MTN Mobile Money</span>{" "}
                <span className="">Number 055 735 6925</span>
                <span>Name Registered Pamela Abaah</span>
              </p>

              <p>
                Client can also request for a bank account. All charges and
                e-levy must be added for all transactions made
              </p>
              <p className="font-bold">
                PLEASE NOTE THAT NO PAYMENT, NO RESERVED DATE PAYMENT MEANS
                BRIDE HAS AGREED TO ALL THE ABOVE TERMS AND CONDITIONS
              </p>
              <div className="mt-4 flex md:justify-end justify-center md:gap-4 gap-10 px-4 pt-8">
                <button
                  type="submit"
                  className="py-2 text-black rounded-lg w-max px-6 border border-gray-800 hover:bg-gray-800 hover:text-white transition-all"
                  onClick={handleRejectTerms}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 text-black rounded-lg w-max px-6"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #FAC97A, #E9BF5C)",
                  }}
                  onClick={handleAcceptTerms}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkbox;
