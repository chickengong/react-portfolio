import '../App.css';
import image1 from "../assets/images/my-fit-nutrition.jpg";
import image2 from "../assets/images/quipspot.jpg";
import image3 from "../assets/images/the-office.jpg";

export default function Projects () {
    return (
        <div>
            <h2 className="projects-header mt-4 mb-4">Projects</h2>
            <div className="projects row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 my-auto mx-auto mt-4">
                <div className="col">
                    <div className="card border-0">
                        <a href="https://chickengong.github.io/TheOfficeQuiz/" target="_blank" rel="noreferrer">
                            <img src={image1} className="card-img-top" alt="the Office Quiz"/>
                        </a>
                        <div className="card-body dark-background">
                            <h5 className="card-title dark-background">the Office Quiz</h5>
                            <p>
                                <button className="button btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                    Description
                                </button>
                            </p>
                            <div className="collapse" id="collapse1">
                                <div className="card card-body">
                                Using HTML, CSS, and Javascript
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <a href="https://chickengong.github.io/project-1-kool-cats-1/" target="_blank" rel="noreferrer">
                            <img src={image2} className="card-img-top" alt="Quipspot"/>
                        </a>
                        <div className="card-body dark-background">
                            <h5 className="card-title dark-background">Quipspot</h5>
                            <p>
                                <button className="button btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    Description
                                </button>
                            </p>
                            <div className="collapse" id="collapse2">
                                <div className="card card-body">
                                Using Bulma CSS, HTML, jQuery
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <a href="https://github.com/chickengong/Project-2-Late-Night-Coders" target="_blank" rel="noreferrer">
                            <img src={image3} className="card-img-top" alt="My Fit Nutrition "/>
                        </a>
                        <div className="card-body dark-background">
                            <h5 className="card-title dark-background">My Fit Nutrition</h5>
                            <p>
                                <button className="button btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    Description
                                </button>
                            </p>
                            <div className="collapse" id="collapse3">
                                <div className="card card-body">
                               Applications we used ws MySQL, Express.js, Sequelize, Chart.js and handlebars.js 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>  
    )
}