import '../App.css';

export default function About () {
    return (
        <div className="card mt-5 mx-auto mb-5 border-0">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={logo} className="img-fluid rounded-start" alt="ellexandra Cox "/>
                </div>
                <div className="dark-background col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">About</h5>
                        <p className="card-text">I am a <span>front-end web developer</span> and <span>Graphic Designer</span> from Austin, Texas.</p>
                        <p className="card-text">I love being creative, and one of the things I do is make stickers. 
                        I am really into making the website look inviting and fun at the same time. 
                        </p>
                        <p className="card-text"><small className="text-muted">Last updated 1/22/2023</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}