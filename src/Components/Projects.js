import line from "../line.png";
import pizza from "../pizza.png";
import calculator from "../calculatorbig.png";
import GithubLogo from "../github.png";




function Projects(props) {


    return (
        <section id="projects-div" class="projects-section">
            <div id="projects-image" >
                <img src={line} alt="line" />
            </div>
            <h2>Projects</h2>

            <div class="projects-main">
                <div>
                    <div id="project-image2" >
                        <img src={pizza} alt="pizza" />
                    </div>
                    <div id="pizza-project-div">
                        <h3>
                            Pizza Project
                        </h3>
                        <p>

                            In this project, I made a replica of the application called Yemeksepeti. It was a project with a very rich "menu", from special notes to sauce selections, from choosing your own pizza name to special size selections.. I can call this project, which is a mixture of javascript, html and css, the apple of my eye.
                        </p>
                    </div>
                    <button className="hero-github-button">
                        <img src={GithubLogo} alt="github" />
                        <a href="https://github.com/Miransan/FSWeb-S7-Challenge" >Github</a>
                    </button>
                </div>

                <div>


                    <div id="project-image3" >
                        <img src={calculator} alt="calculator" />
                    </div>
                    <div id="calculator-project-div">
                        <h3>
                            Calculator Project

                        </h3>
                        <p>
                            In this project, I made a simple calculator used in today's technology. It was a basic javascript project where I could print the result of operations to the screen as well as perform basic math operations.
                        </p>
                        <button className="hero-github-button">
                            <img src={GithubLogo} alt="github" />
                            <a href="https://github.com/Miransan/FSWeb-S10G1-Reducer" >Github</a>
                        </button>
                    </div>
                </div>


            </div>





        </section>
    );
}

export default Projects;
