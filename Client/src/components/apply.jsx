import '../styles/Latest.scss';
const Apply = () => {
    
    return ( 
        <div className="apply">
            <div className="apply-content">

                    <h6 className="title" style={{ fontFamily: 'Inter, sans-serif' }}>Empowerment</h6>
        <h2 style={{ color: "#064576", fontFamily: 'Inter, sans-serif' }}>Unlock Your Potential with CINK's Innovative Offerings</h2>
        <p  style={{ fontFamily: 'Inter, sans-serif', fontWeight:"bolder" }}>Discover a world of digital possibilities with CINK's comprehensive courses, 
        interactive workshops, and vibrant community. Join us to gain the skills, 
        knowledge, and connections needed to thrive in the tech industry.</p>


               
                <div className="buttons"  style={{ fontFamily: 'Inter, sans-serif' }}>
                    <button className="explore-button"  style={{ fontFamily: 'Inter, sans-serif',fontWeight:"bolder" }}>Explore</button>
                    <a href='#' style={{ fontFamily: 'Inter, sans-serif', textDecoration:"none", color:'black', fontWeight:"bolder"}}>Join </a>
                </div>

            </div>

            <div className="image-container">
                <img src="/img.jpg" alt="img1" />
            </div>

        </div>
        

    );
}
 
export default Apply;