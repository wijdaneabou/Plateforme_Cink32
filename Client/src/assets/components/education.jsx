const Education = () => {
    return ( 
        <div className="education-content">
        <h6 className="title">Empowering</h6>    
        <h2>Unlock Your Potential with CINK's Tech Education</h2>
            <div className="sections">
                
                <div className="section">
                    <img src="/pic1.jpeg" alt="Comprehensive Learning Solutions"/>
                    <p className="title_u">Comprehensive Learning Solutions</p>
                    <p>Choose from an in-depth learning portfolio to learn critical tech and software skills at your pace</p>
                </div>

                <div className="section">
                    <img src="/pic-2.jpeg" alt="Interactive Events and Workshops"/>
                    <p className="title_u">Interactive Events and Workshops</p>
                    <p>Hands-on sessions with industry leaders to enhance your practical skills</p>
                </div>

                <div className="section">
                    <img src="/pic3.jpeg" alt="Community Engagement"/>
                    <p className="title_u">Community Engagement</p>
                    <p>Connect, collaborate and create with fellow developers and tech enthusiasts in community groups</p>
                </div>
            </div>
            <div className="buttons">
            <button className="button">Join</button>
            <a href="#" className="learn-more">Learn More →</a> 
            </div>
      </div>
    );
     
}
 
export default Education;