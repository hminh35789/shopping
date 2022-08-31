import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div>
        <h2>Contact us</h2>
        <div className="content">
            
            <p>Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Blanditiis perspiciatis,
                 atque cumque iusto corrupti saepe voluptatum magni 
                 deserunt. Quisquam debitis voluptas expedita porro laudantium libero
                  adipisci reprehenderit accusamus, ratione sit
            </p>
        </div>
        
        <div className="container2">
            <div className="contactInfo">
                <div className="box">
                    <div className="icon">
                        <i className="fa fa-map-marker"aria-hidden="true"></i>
                    </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>7 đường số 10 <br/>phường Bình Hưng Hòa A<br/> quận Bình Tân</p>
                        </div>
                    </div>
                
                <div className="box">
                    <div className="icon">
                        <i className="fa fa-phone"aria-hidden="true"></i>
                    </div>
                        <div className="text">
                            <h3>Số điện thoại</h3>
                            <p>077-5578-609</p>
                        </div>
                    </div>
                
                <div className="box">
                    <div className="icon">
                        <i className="fa fa-envelope-o"aria-hidden="true"></i>
                    </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>hminh35789@gmail.com</p>
                        </div>
                    </div>
                    
                </div>
            
            <div className="contactForm">
                <form action="https://formspree.io/f/xqknkjlg" method="POST">
                    <h5>Send Message</h5>
                    <div className="inputBox">
                        <input type="text"name="name"required="required" autoComplete="on" />
                        <span>Họ và Tên</span>
                    </div>
                    <div className="inputBox">
                        <input type="text"name="email"required="required" />
                        <span>Email</span>
                    </div>
                    <div className="inputBox">
                        <textarea type="text"name="message"required="required"></textarea>
                        <span>Nội dung cần hỗ trợ...</span>
                    </div>
                    <div className="inputBox">
                        <input type="submit"value="Send" />
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Contact