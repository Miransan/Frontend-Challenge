import line from "../line.png";

function Profile(props) {


    return (
        <section class="profile-section">
        <div id="profile-image" >
            <img src={line} alt="line" />
        </div>
        <h2>Profile</h2>
        <div id="profile-main">
            <div>
                <h3>
                    Profile
                </h3>
                <p>
                Date of birth: 27th of January
                </p>
                <br/>
                <p>
                Place of residence: Istanbul
               </p>
               <br/>
               <p>
               Education status: OZYEGIN UNIVERSITY ENTREPRENEURSHIP DEPARTMENT
FACULTY OF BUSINESS, 2021
               </p>
               <br/>
               <p>
               Preferred role: Front-end developer, Software developer
               </p>
            </div>
    
            <div>
                <h3 >
                    About Me
    
                </h3>
                <p>
                    I graduated from my university mastering with a set of skills such as
                    Presentation, Teamwork and Problem Solving. I experienced those
                    qualities in different fields of work areas while i was studying and in
                    my professional life. </p> 
                    <br/>
                    <p>I have a high motivation of learning and being a
                    teamplayer in the environment that i am working. I am confident
                    about solving problems at minimum time with full eficiency.        
                        </p>
            </div>
    
    
    
        </div>
    
    
    
    
    
    </section>
    
    );
}

export default Profile;






