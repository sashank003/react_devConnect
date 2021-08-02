import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../action/profile';
import { Link, withRouter } from 'react-router-dom';

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
      });
    
      const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        description,
        current
      } = formData;

    const [toDateDisabled, toggleDisabled] = useState(false);

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    return (
        <Fragment>
            <h1 className="large text-primary">Add An Experience</h1>
            <p className="lead"><i className="fas fa-code-branch"></i> Add any school or bootcamp that you have attended</p>
            <small>* = required field</small>
            <form className="form" onSubmit={ e=> {
                e.preventDefault();
                addEducation(formData, history);
            }}>
                <div className="form-group">
                <input type="text" placeholder="* School or Bootcamp" name="school" value={school} onChange={ e => onChange(e)} required />
                </div>
                <div className="form-group">
                <input type="text" placeholder="* Degree or Certificate" name="degree" value={degree} onChange={ e => onChange(e)} required />
                </div>
                <div className="form-group">
                <input type="text" placeholder="Filed of Study" name="fieldofstudy" value={fieldofstudy} onChange={ e => onChange(e)} />
                </div>
                <div className="form-group">
                <h4>From Date</h4>
                <input type="date" name="from" value={from} onChange={ e => onChange(e)} />
                </div>
                <div className="form-group">
                <p><input type="checkbox" name="current" checked={current} value={current} onChange={ e => {
                setFormData({...formData, current: !current});
                toggleDisabled(!toDateDisabled);
                }} />{' '}Current School</p>
                </div>
                <div className="form-group">
                <h4>To Date</h4>
                <input type="date" name="to" value={to} onChange={ e => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''} />
                </div>
                <div className="form-group">
                <textarea
                    name="description"
                    value={description}
                    cols="30"
                    rows="5"
                    onChange={ e => onChange(e)} 
                    placeholder="Program Description"
                ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <Link to='/dashboard' className="btn btn-light my-1" href="dashboard.html">Go Back</Link>
            </form>
            
        </Fragment>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
}

export default connect(null, { addEducation })(withRouter(AddEducation));
