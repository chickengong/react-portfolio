import page1 from "../assets/images/resume-p1.png";
import page2 from "../assets/images/resume-p2.png";
import resumeDoc from "../assets/docs/web-developer-resume.docx.pdf";

import "../App.css"

export default function Resume () {
    return (
        <section id="resume" className="resume container-fluid mt-4">
            <h2 className="mb-4">Resume</h2>
            <div className="row row-cols-1 row-cols-md-2">
                <img src={page1} className="img-fluid mb-4" alt="resume page one"></img>
                <img src={page2} className="img-fluid mb-4" alt="resume page two"></img>
                
            </div>
            <div className="download-btn text-center mt-2">
                <a href={resumeDoc} rel="noreferrer" target="_blank">
                    <button className="button btn btn-primary">
                        Download Resume
                    </button>
                </a>
            </div>
            
        </section>
    )
}
