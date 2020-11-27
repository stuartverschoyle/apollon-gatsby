import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  getInitialState = () => {
    return {
      value: 'select'
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(img/contact-us_hero-image@2x.jpg)`,
          backgroundPosition: `center top`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
            maxWidth: '1110px',
            margin: '0 auto',
            width: 'inherit'
          }}
        >
          <div className="breadcrumb">
          <Link to="/">HOME &gt;</Link><Link to="/contact">CONTACT US</Link>
          </div>
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: 'white'
            }}
          >
            Contact Us
          </h1>
        </div>
      </div>
      <section className="section section--gradient highlights">
        <div className="container over-hero">                        
          <div className="content">       
            <div className="content columns">
              <div className="column is-6 is-offset-3 news">
            
              <section className="section">
                <div className="container">
                  <div className="content">
                    <form
                      name="contact"
                      method="post"
                      action="/contact/thanks/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={this.handleSubmit}
                    >
                      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                      <input type="hidden" name="form-name" value="contact" />
                      <div hidden>
                        <label>
                          Don’t fill this out:{' '}
                          <input name="bot-field" onChange={this.handleChange} />
                        </label>
                      </div>
                      <label className="label" htmlFor={'interest'}>
                        Your interest in Apollon
                      </label>
                      <div className="control select"  style={{width:"100%", marginBottom: "20px"}}>
                        <select onBlur={this.handleChange} name={'interest'} id={'interest'} style={{width:"100%"}}>
                          <option value="none">Please select one</option>
                          <option value="Share Dealling Enquiries">Share Dealling Enquiries</option>
                          <option value="General Enquiries">General Enquiries</option>
                          <option value="Treatment at Doc's Place International">Treatment at Doc's Place International</option>
                          <option value="Where to buy Apollon Products">Where to buy Apollon Products</option>
                        </select>
                      </div>
                      <div className="content columns">
                        <div className="column is-6">
                          <div className="field">
                          <label className="label" htmlFor={'firstname'}>
                            First name
                          </label>
                          <div className="control">
                            <input
                              className="input"
                              type={'text'}
                              name={'firstname'}
                              onChange={this.handleChange}
                              id={'firstname'}
                              required={true}
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div className="field">
                          <label className="label" htmlFor={'lastname'}>
                            Last name
                          </label>
                          <div className="control">
                            <input
                              className="input"
                              type={'text'}
                              name={'lastname'}
                              onChange={this.handleChange}
                              id={'lastname'}
                              required={true}
                              placeholder="Last Name"
                            />
                          </div>
                        </div>                           
                        </div>
                        <div className="column is-6">
                          <div className="field">
                          <label className="label" htmlFor={'email'}>
                            Email
                          </label>
                          <div className="control">
                            <input
                              className="input"
                              type={'email'}
                              name={'email'}
                              onChange={this.handleChange}
                              id={'email'}
                              required={true}
                              placeholder="Emaill"
                            />
                          </div>
                        </div>
                        <div className="field">
                          <label className="label" htmlFor={'phone'}>
                            Phone Number
                          </label>
                          <div className="control">
                            <input
                              className="input"
                              type={'number'}
                              name={'phone'}
                              onChange={this.handleChange}
                              id={'phone'}
                              required={true}
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>                           
                        </div>
                      </div>
                     
                      <div className="field">
                        <label className="label" htmlFor={'message'}>
                          Your Message
                        </label>
                        <div className="control">
                          <textarea
                            className="textarea"
                            name={'message'}
                            onChange={this.handleChange}
                            id={'message'}
                            required={true}
                            placeholder="Type in your message"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <button className="btn btnInvert is-link" style={{width:"262px"}} type="submit">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
              </div>
            </div>
          </div>
        </div>
      </section>  
  
      </Layout>     

    )
  }
}
