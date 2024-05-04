import '../styles/Latest.scss';
const Education = () => {
    return ( 
        <div className="education-content">
        <h6 className="title">Empowering</h6>    
        <h2 style={{color:"#064576" ,fontFamily: 'Inter, sans-serif'}}>Unlock Your Potential with CINK's Tech Education</h2>
            <div className="sections">
                
                <div className="sect">
                    <img src="/pic1.jpeg" alt="Comprehensive Learning Solutions"/>
                    <p className="title_u" style={{fontFamily: 'Inter, sans-serif'}}>Comprehensive Learning Solutions</p>
                    <p style={{fontFamily: 'Inter, sans-serif'}}>Choose from an in-depth learning portfolio to learn critical tech and software skills at your pace</p>
                </div>

                <div className="sect">
                    <img src="/pic-2.jpeg" alt="Interactive Events and Workshops"/>
                    <p className="title_u" style={{fontFamily: 'Inter, sans-serif'}}>Interactive Events and Workshops</p>
                    <p style={{fontFamily: 'Inter, sans-serif'}}>Hands-on sessions with industry leaders to enhance your practical skills</p>
                </div>
             
                <div className="sect" >
                    <img src="/pic3.jpeg" alt="Community Engagement" />
                    <p className="title_u">Community Engagement</p>
                    <p>Connect, collaborate and create with fellow developers and tech enthusiasts in community groups</p>
                </div>
               
            </div>
            <div className="buttons">
            <button className="button" style={{fontFamily: 'Inter, sans-serif'}}>Join</button>
            <a href="#" className="learn-more" style={{fontFamily: 'Inter, sans-serif'}}>Learn More →</a> 
            </div>
      </div>
    );
     
}
 
export default Education;