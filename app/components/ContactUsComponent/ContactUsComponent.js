'use client'
import styles from "./ContactUsComponent.module.scss";
// import Pagebanner from "../Pagebanner/Pagebanner";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function ContactUsComponent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phoneNumber: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    };

    const sendMail = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message,
                phoneNumber: formData.phoneNumber
            })
        });

        if (response.status === 200) {
            setFormData({ name: '', email: '', message: '', phoneNumber: '' });
            toast.success('Message Sent Successfully!', {
            });
        } else {
            toast.error('Something Went Wrong!', {
            });
        }
    };


    return (
        <>
            {/* <Pagebanner
        title="Contact Us"
        imgUrl="/images/about/about-top-banner.png"
        imgAlt="Sightseeings-top-banner-image"
        description='Lorem ipsum dolor sit amet consectetur. Dui libero rhoncus vitae sit id sodales nunc sit aliquam. Consectetur consectetur eget vel adipiscing id dui congue cras.'
      /> */}
            <section className={styles.footer_sec}>
                <div className="container">
                    <div className="common_margin">
                        <div className={styles.contact_main}>
                            <div className={styles.contact_main_left}>
                                <div className={`${styles.contact_main_left_details}`}>
                                    <h4 className="text-white"> Get In Touch</h4>
                                    <div className={styles.contact_main_left_details_child}>
                                        <Image
                                            src="/icons/phone.svg"
                                            width={16}
                                            height={16}
                                            alt="Phone Icon"
                                        />
                                        <Link href="tel:8219454140" className={styles.contact_links}>
                                            82194-54140
                                        </Link>
                                    </div>
                                    <div className={styles.contact_main_left_details_child}>
                                        <Image
                                            src="/icons/mail.svg"
                                            width={16}
                                            height={16}
                                            alt="Mail Icon"
                                        />
                                        <Link href="mailto:rahul@asianclassictravels.com" className={styles.contact_links}>
                                            rahul@asianclassictravels.com
                                        </Link>
                                    </div>
                                    <div className={styles.contact_main_left_details_child}>
                                        <Image
                                            src="/icons/locatn.svg"
                                            width={16}
                                            height={16}
                                            alt="Location Icon"
                                        />
                                        <Link href="https://maps.app.goo.gl/kGgCUqjXfRjm8Wtf8" className={styles.contact_links}>
                                            101 Kitchener Road, Jln Besar, #03-32 A, Singapore 208511
                                        </Link>
                                    </div>
                                    <div className="d_flex gap_10">
                                        <Link href="https://www.facebook.com/asianclassic?fref=ts" className={styles.round_icons}>
                                            <Image
                                                src="/icons/ri_facebook-fill.svg"
                                                width={20}
                                                height={20}
                                                alt="Facebook Icon"
                                            />
                                        </Link>
                                        <Link href="https://www.instagram.com/act_dmc_singapore/" className={styles.round_icons}>
                                            <Image
                                                src="/icons/insta.svg"
                                                width={18}
                                                height={20}
                                                alt="Instagram Icon"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.contact_main_right}>
                                <form
                                    className={styles.contact_form}
                                    onSubmit={sendMail}
                                >
                                    <div className={styles.form_group}>
                                        <label htmlFor="name">
                                            Name:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            id="name"
                                            name="name"
                                            placeholder="Full Name"
                                            required
                                        />
                                    </div>
                                    <div className={styles.form_group}>
                                        <label htmlFor="phone " >
                                            Phone Number:
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            placeholder="77788-89990"
                                            required
                                        />
                                    </div>
                                    <div className={styles.form_group}>
                                        <label htmlFor="email">
                                            Email Address:
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            id="email"
                                            name="email"
                                            placeholder="example@email.com"
                                            required
                                        />
                                    </div>
                                    <div className={styles.form_group}>
                                        <label htmlFor="message">
                                            Message:
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="4"
                                            placeholder="Write Your Message..."
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="common_btn justify_content_center">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <iframe
                    className={styles.map_frame}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.777492578274!2d103.85551797365203!3d1.3087597986788229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c7652d782f%3A0xcd94f0ef21378665!2sSingapore%20DMC%20%2F%2F%20Asian%20Classic%20Travels!5e0!3m2!1sen!2sin!4v1690533191556!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </>
    );
}

export default ContactUsComponent;

