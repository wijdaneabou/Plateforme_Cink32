const Customer = () => {

    return ( 
        <div className="customer">
            <div className="customer-content">
                <h1 className="header">Customer Testimoniais</h1>
                <h6 className="title">What Our Members Say</h6>

                <div className="customer-items">

                    {/* Client Item 1 */}
                    <div className="item">
                        <div className="stars">★★★★★</div>
                        <p>"CINK has transformed my career and opened new doors."</p>
                        <span className="author">- Jane Doe, Developer at ABC Corp</span>
                    </div>

                    {/* Client Item 2 */}
                    <div className="item">
                        <div className="stars">★★★★★</div>
                        <p>"The workshops provided valuable hands-on experience."</p>
                        <span className="author">- John Smith, Product Manager at XYZ Inc.</span>
                    </div>

                    {/* Client Item 3 */}
                    <div className="item">
                        <div className="stars">★★★★★</div>
                        <p>"The community has been incredibly supportive and inspiring."</p>
                        <span className="author">- Max Johnson, Marketing Manager at EFG Ltd.</span>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Customer;