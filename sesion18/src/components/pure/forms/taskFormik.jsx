import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Models
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const TaskFormik = ({ add, length }) => {

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: ''
    }

    const errorMessage = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    const normalStyle = {
        backgroundColor: '#007bff',
        color: 'white',
        fontWeight: 'bold'
    }

    const urgentStyle = {
        backgroundColor: '#ffc107',
        color: 'white',
        fontWeight: 'bold'
    }

    const blockingStyle = {
        backgroundColor: '#dc3545',
        color: 'white',
        fontWeight: 'bold'
    }

    const registerSchema = Yup.object().shape(
        {
            name: Yup.string()
                .required('Task name is required'),
            description: Yup.string()
                .required('Task description is required'),
            level: Yup.string()
                .required('Level is required'),
        }
    )

    return (
        <div>
            <Formik
                initialValues = {initialValues}
                // *** Yup Validation Schema ***
                validationSchema = {registerSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise ((r) => setTimeout(r, 1000));
                    // ** We save the data in the localstorage
                    localStorage.setItem('credential', values);
                    const taskStr = JSON.stringify(values);
                    const array = [];
                    JSON.parse(taskStr, (key, value) => {
                        if(typeof value === 'string') {
                            array.push(value);
                        }
                    })

                    console.log(array);
                    let task = new Task(array[0], array[1], false, array[2])
                    add(task);
                }}
            >

                {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
                    <Form className='d-flex justify-content-center align-items-center mb-4'>

                        <div className='form-outline flex-fill mt-4'>
                            <Field id="name" type="text" name="name" placeholder="Task Name" className='form-control form-control-lg mb-2'/>
                            
                            {/* Name Errors */}
                            {
                                errors.name && touched.name && 
                                (
                                    <ErrorMessage className='mb-2' style={errorMessage} name="name" component='div'></ErrorMessage>
                                )
                            }

                            <Field id="description" type="text" name="description" placeholder="Task Description" className='form-control form-control-lg mb-2'/>

                            {/* Email Errors */}
                            {
                                errors.description && touched.description && 
                                (
                                    <ErrorMessage className='mb-2' style={errorMessage} name="description" component='div'></ErrorMessage>
                                )
                            }

                        <select className='form-select form-select-lg mb-2'
                            name="level"
                            value={values.level}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value="" label="Select Priority Level" />
                            <option style={normalStyle} value="Normal" label = { LEVELS.NORMAL } />
                            <option style={urgentStyle} value="Urgent" label = { LEVELS.URGENT } />
                            <option style={blockingStyle} value="Blocking" label = { LEVELS.BLOCKING } />
                        </select>
                        
                            {/* Level Errors */}
                            {
                                errors.level && touched.level && 
                                (
                                    <ErrorMessage className='mb-2' style={errorMessage} name="level" component='div'></ErrorMessage>
                                )
                            }
                            <div class="d-grid gap-2">
                                <button type='submit' className='btn btn-success'>
                                    {length > 0 ? 'Add New Task' : 'Create your First Task' }
                                </button>
                                {isSubmitting ? (<p>Inserting task...</p>): null}
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default TaskFormik;