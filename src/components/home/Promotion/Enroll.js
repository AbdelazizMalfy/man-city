import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import FormField from '../../ui/FormFields';
import {validate} from '../../ui/misc';
import {firebasePromotions} from '../../../firebase';

class Enroll extends Component {

    state = {
        formError: false,
        formSuccess:'',
        formdata: {
            email:{
                element:'input',
                value:'',
                config:{
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            }
        }
    }

    onUpdateForm = (element) => {
        const newFormdata = {...this.state.formdata}
        const newElement = {...newFormdata[element.id]}

        newElement.value = element.event.target.value;

        let validData = validate(newElement)
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];

        newFormdata[element.id] = newElement;

        this.setState({
            formError: false,
            formdata : newFormdata
        })
    }



    resetFormSuccess = (type) => {
        const newFormdata = {...this.state.formdata}

        for ( let key in newFormdata){
            newFormdata[key].value='';
            newFormdata[key].valid=false;
            newFormdata[key].validationMessage='';
        }

        this.setState({
            formError:false,
            formdata:newFormdata,
            formSuccess: type ? 'Enrolled Succesfully' : 'Already on the database'
        })
        this.clearSuccessMessage();
    }

    clearSuccessMessage = () => {
        setTimeout(() => {
            this.setState({
                formSuccess:''
            })
        }, 2000);
    }

    onSubmitForm = (event) => {
        event.preventDefault();

        let dataToSubmit= {};

        let formIsValid = true;

        for ( let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }

        if(formIsValid){
            firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once('value')
            .then((snapshot) => {
                if (snapshot.val() === null){
                    firebasePromotions.push(dataToSubmit)
                    this.resetFormSuccess(true)
                } else {
                    this.resetFormSuccess(false)
                }
            })
        }else {
            this.setState({
                formError: true
            })
        }

    }

    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event) => this.onSubmitForm(event)}>
                        <div className='enroll_title'>
                            Enter your email
                        </div>
                        <div className="enroll_input">
                            <FormField
                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element) => this.onUpdateForm(element)}
                            />
                            {this.state.formError ? <div class="error_label">Something is wrong try again</div> : null}
                            <div className='success_label'>{this.state. formSuccess}</div>
                            <button onClick={(event) => this.onSubmitForm(event)}>Enroll</button>
                            <div className='enroll_discl'>
                                It is a long established fact that a reader will be distracted by the readable content of a page.
                            </div>
                        </div>
                    </form>
                </div>
            </Fade>
        )
    }
}

export default Enroll;
