"use client";
import React, { useEffect, useState } from "react";
import "./CustomToast.module.scss";

const CustomToast = ({ duration, onClose, status }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval;

        if (status === "success" || status === "failed") {
            interval = setInterval(() => {
                setProgress((prevProgress) =>
                    Math.min(prevProgress + 100 / (duration / 100), 100)
                );
            }, 100);
        }

        const timeout = setTimeout(() => {
            clearInterval(interval);
            if (status === "success" || status === "failed") {
                onClose();
            }
        }, duration);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [duration, onClose, status]);

    return (
        <div className="custom-toast">
            <div className="statusMessageContainer">
                {status === "sending" ? (
                    <div style={{ display: "flex", gap: "10px" }}>
                        <div className="spinner"></div>

                        {"Sending..."}
                    </div>
                ) : status === "success" ? (
                    <>
                        <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            fill="#07bc0c"
                            style={{ marginRight: "10px" }}
                        >
                            <path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"></path>
                        </svg>

                        {"Message Sent Successfully !"}
                    </>
                ) : status === "failed" ? (
                    <>
                        <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            fill="#e74c3c"
                            style={{ marginRight: "10px" }}
                        >
                            <path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"></path>
                        </svg>

                        {"Something Went Wrong"}
                    </>
                ) : (
                    "Something went wrong"
                )}

                {status === "success" || status === "failed" ? (
                    <button onClick={onClose} className="closeButtonContainer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8q"
                            viewBox="0 0 14 14"
                            fill="none"
                        >
                            <path d="M1 13L13 1" stroke="#AAAAAA" strokeWidth="1.2" />
                            <path d="M13 13L0.999999 1" stroke="#AAAAAA" strokeWidth="1.2" />
                        </svg>
                    </button>
                ) : (
                    ""
                )}
            </div>
            {status === "sending" ? (
                ""
            ) : (
                <div
                    className={"progress-bar-" + status}
                    style={{ width: `${progress}%` }}
                />
            )}
        </div>
    );
};

export default CustomToast;
