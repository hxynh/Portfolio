import classes from "./styles/Contact.module.css";
import {toast} from "react-toastify";

export default function Contact() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries()); 
        try {
            const response = await fetch('/api/sendEmail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
      
            if (response.ok) {
              toast.success('Email sent successfully!')
              console.log('Email sent successfully!!');
            } else {
              toast.error('Failed to send email!')
              console.error('Failed to send email');
            }
        } catch (error) {
            toast.error(error);
            console.error('Error:', error);
        }
    };
    

  return (
    <form className={classes.contactForm} onSubmit={handleSubmit} >
            <h1 className={classes.formHeader}>Let's have a chat</h1>
            <p>
                <label htmlFor="name">Name: * </label>
                <input name="name" type="text" id="name"    placeholder="Your name" required/>
            </p>
            <p>
                <label htmlFor="email">E-mail: *</label>
                <input name="email" type="email" id="email" placeholder="Your email address" required/>
            </p>
            <p>
                <label htmlFor="tel">Phone Number (optional): </label>
                <input name="tel" type="tel" id="tel" placeholder="Your phone number" />
            </p>
            <p>
                <label htmlFor="message">Message (optional): </label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="What would you like to chat about?"></textarea>
            </p>
            <button className={classes.submitBtn}>Submit</button>
        </form>
  )
}
