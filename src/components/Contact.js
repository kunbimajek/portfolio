import React from 'react';
import VisibilitySensor from "react-visibility-sensor";

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <VisibilitySensor>
                {({ isVisible }) => (
                    <div className={isVisible ? "animate animated mb-20" : "animate mb-20"}>
                        <span>Work</span>&nbsp;
                        <span>w</span><span>i</span><span>t</span><span>h</span>&nbsp;<span>m</span><span>e</span>
                    </div>
                )}
                </VisibilitySensor>
                <p className="mb-50">Think I might be the right person for your next adventure? I'd love to hear about your project</p>
                <a href="mailto:kunbimajek03@gmail.com" className="btn pulse">Drop a message</a>
            </div>
        </section>
    )
}

export default Contact;