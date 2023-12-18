'use client'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Forms.module.scss"

export default function BookTaxiForm() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <div className={`${styles.book_taxi_form} card`}>
        <p>Book Your Ride</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="number" placeholder="Phone Number" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Number of Traveller." required />
          <div className="booktaxiform__date_picker_wrapper">
            <DatePicker label="Select Date"
              id='dateofdeparture'
              className={`${styles.date_picker} px-2`}
              minDate={new Date()}
              selected={date}
              onChange={(date) => setDate(date)}
              required
            />
          </div>
          <button className="common_btn">Request Service</button>
        </form>
      </div>
      <div className={styles.info_contact}>
        <p>For more information :</p>
        <Link href="tel:9418249045">
          +91 94182-49045
        </Link>
      </div>

    </>
  );
}