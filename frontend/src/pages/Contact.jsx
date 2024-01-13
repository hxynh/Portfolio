import classes from "./styles/Contact.module.css";

export default function Contact() {
  return (
    <form className={classes.contactForm} >
            <h1 className={classes.formHeader}>Let's have a chat</h1>
            <p>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name"    placeholder="Your name *" required/>
            </p>
            <p>
                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" placeholder="Your email address *" required/>
            </p>
            <p>
                <label htmlFor="tel">Phone Number: </label>
                <input type="tel" id="tel" placeholder="Your phone number" />
            </p>
            <p>
                <label htmlFor="message">Message: </label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="What would you like to chat about?"></textarea>
            </p>
            <button className={classes.submitBtn}>Submit</button>
        </form>
  )
}
