import React, { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.post("http://localhost:4000/send/mail", {
                name,
                email,
                message,
            }, {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            });
            setName("");
            setEmail("");
            setMessage("");
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact">
            <form onSubmit={sendEmail}>
                <h1>CONTACT US</h1>

                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "15px"
                    }}
                >
                    {loading && <ClipLoader size={20} color="white" />}
                    Send Message
                </button>
            </form>
            <ToastContainer />
        </section>
    );
};

export default Contact;
