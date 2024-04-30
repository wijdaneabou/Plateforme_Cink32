const Customer = () => {

    return ( 
        <div className="customer">
            <div className="customer-content">
                <h2 className="header">Customer Testimoniais</h2>
                <h6 className="title">What Our Members Say</h6>

                <div className="customer-items">

                    {/* Client Item 1 */}
                    <div className="item">
                        <div className="stars">★★★★★</div>
                        <p className="customer-text">"CINK has transformed my career and opened new doors."</p>
                        <div className="item-author">
                            <img src="/profile-icon.webp" alt="profilIcon" className="author-avatar" />
                            <span className="author-name">John Doe</span>
                            <span className="author-position">- Developer at ABC Corp</span>
                        </div>
                        
                    </div>

                    {/* Client Item 2 */}
                    <div className="item">
                        <div className="stars">★★★★★</div>
                        <p className="customer-text">"The workshops provided valuable hands-on experience."</p>
                        <div className="item-author">
                            <img src="/profile-icon.webp" alt="profilIcon" className="author-avatar" />
                            <span className="author-name">John Smith</span> 
                            <span className="author-position">- Product Manager at XYZ Inc.</span>

                        </div>
                        
                    </div>

                    {/* Client Item 3 */}
                    <div className="item">
                        <div className="stars">★★★★★</div>
                        <p className="customer-text">"The community has been incredibly supportive and inspiring."</p>
                        <div className="item-author">
                            <img src="/profile-icon.webp" alt="profilIcon" className="author-avatar" />
                            <span className="author-name">John Smith</span>
                            <span className="author-position">- Marketing Manager at EFG Ltd.</span>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Customer;