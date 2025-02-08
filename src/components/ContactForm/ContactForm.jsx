import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ai0hnpm",   
        "template_9fh46bf",  
        formData,
        "eW133eRhfbd_n4vkG"    
      )
      .then(
        () => {
          alert("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Something went wrong: " + error.text);
        }
      );
  };

  return (
    <div id='contact' className="max-w-lg mx-auto p-6 bg-transparent border border-quaternary  rounded-lg shadow-lg  ">
      <h2 className="text-quaternary text-4xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-2 border rounded-lg h-52"
          required
        />
        <button
          type="submit"
          className="bg-attention text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
