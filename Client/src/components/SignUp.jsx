import React ,{useState} from 'react'
import '../styles/Form.css';
import '../styles/index.css';
import img from '../assets/img.jpeg';
import Logo from '../assets/Logo.png'
import GoogleIcon from '../assets/google.png'; 
import GoogleButton from './GoogleButton'
export default function Form() {
  const [successMessage, setSuccessMessage] = useState('');
    const [formData, setFormData] =useState ({
        firstName: '',
        lastName: '',
        cin:'',
        tel:'',
        email: '',
        password: '',
        confirmPassword: ''
      });
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
            setErrorMessage('Veuillez remplir tous les champs.');
            return;
        }
    
        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMessage('Veuillez saisir une adresse e-mail valid.');
            return;
        }
    
        // Vérification de la correspondance des mots de passe
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Les mots de passe ne correspondent pas.');
            return;
        }
    
        try {
          const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('Inscription réussie');
            setSuccessMessage('Inscription réussie!');
            setFormData({
              firstName: '',
              lastName: '',
              cin: '',
              tel: '',
              email: '',
              password: '',
              confirmPassword: ''
            });
            setTimeout(() => {
              setSuccessMessage('');
            }, 5000);
          } else {
            const error = await response.json();
            setErrorMessage(data.message || 'Une erreur est survenue lors de l\'inscription.');
            setTimeout(() => {
              setErrorMessage('');
            }, 5000);
            console.error('Erreur lors de l\'inscription :', error.message);
            
          }
        } catch (error) {
          
          setErrorMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
          console.error('Erreur lors de la requête :', error);
          
        }
      };
    
  return (
    <>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"></link>
    </head>
    <section>
    {successMessage && <div className="success-message"> {successMessage}</div>}
     {errorMessage && <div className="error-message"><i className="fas fa-exclamation-triangle"></i> &nbsp; {errorMessage}</div>}
        <div className="signup-page">
            <div className="col-1">
                <div className="logo-container">
                     <img src={Logo} alt="CINK Logo" />
                </div>
                <h2><b>Sign up</b></h2>
                <span id='txt' className="txt">Sign up to your account</span>
                <form id='form' className='flex flex-col ' onSubmit={handleSubmit}>
                <div className={`form-floating ${formData.firstName ? 'filled' : ''}`}>
  <input
    type="text"
    id="firstName"
    name="firstName"
    value={formData.firstName}
    onChange={handleInputChange}
    required
  />
  <label htmlFor="firstName">First Name</label>
</div>
                    <div className={`form-floating ${formData.lastName ? 'filled' : ''}`}>
                        <input 
                        type="text"   
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleInputChange} required  />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className={`form-floating ${formData.cin ? 'filled' : ''}`}>
                        <input type="text"  
                        id="cin " 
                        name="cin"  
                        value={formData.cin} 
                        onChange={handleInputChange} required/>
                        <label htmlFor="cin">CIN</label>
                    </div>
                    <div className={`form-floating ${formData.email ? 'filled' : ''}`}>
                        <input type="email"   
                        id="email" name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} required/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={`form-floating ${formData.tel ? 'filled' : ''}`}>
                        <input type="tel"   id="tel" name="tel" value={formData.tel} onChange={handleInputChange} required />
                        <label htmlFor="tel">Num Téléphone</label>
                    </div>
                    <div className={`form-floating ${formData.password ? 'filled' : ''}`}>
                        <input type="password"  id="password" name="password" value={formData.password} onChange={handleInputChange} required />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className={`form-floating ${formData.confirmPassword ? 'filled' : ''}`}>
                        <input type="password"   id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
                        <label htmlFor="confirmPassword">Password Confirmation</label>
                    </div>
                    <button  className='btn' type="submit">Sign Up</button>
                    <div className="horizontal-line-container">
                        <div className="horizontal-line"></div>
                        <span className="or">or</span>
                        <div className="horizontal-line"></div>
                    </div>
                    <GoogleButton />

                </form>
            </div>
            <div className="col-2">
                <img src={img} alt="" />
                    <div className="overlay-text">
                        <h2>Welcome!</h2>
                        <p>If you already have an account, please sign in.</p>
                        <button>Sign in</button>
                    </div>
             </div>
        </div>
    </section>
    </>
  )
}
