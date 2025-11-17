function Contact() {
    return (
        <>
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact_left">
                            <h1 className="sub_title">Contact Me</h1>
                            <p><i className="fa-solid fa-envelope"></i>hoangchisi444@gmail.com</p>
                            <p><i className="fa-solid fa-phone-volume"></i>+84 123 456 789</p>
                            <div className="social_icons">
                                <a href=""><i className="fa-brands fa-facebook"></i></a>
                                <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                <a href=""><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>  
                        <div className="contact_right">
                            <form>
                                <input type="text" name="Name" placeholder="Your Name" required/>
                                <input type="email" name="Email" placeholder="Your email" required/>
                                <textarea name="Message" rows={6} placeholder="Your message"></textarea>
                                <button type="submit" className="btn btn2">Submit</button>
                            </form>
                        </div>  
                    </div>  
                </div>
            </div>
        </>)
}
export default Contact