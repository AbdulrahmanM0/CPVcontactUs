import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Col } from 'reactstrap';

export default function Form() {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      company: '',
      jobtitle: '',
      reason: '',
    },
    validationSchema: Yup.object({
      // name: Yup.string().required('Name is required'),
      // phone: Yup.string()
      //   .matches(/^[0-9]+$/, 'Phone must be a valid number')
      //   .required('Phone is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      // company: Yup.string().required('Company is required'),
      // jobtitle: Yup.string().required('Job Title is required'),
      reason: Yup.string().required('Reason is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission logic here
      axios.post('https://admin.cpvarabia.com/Care/contact.php').then(
        response => console.log(response).catch(error => console.log(error))
      )
      console.log(values);
    },
  });

  return (
    <div className="form-component">
      <form onSubmit={formik.handleSubmit} className='form-content'>
        <Col bg={8} md={10} className='m-auto mb-3'> 
        <TextField
          label="Name"
          variant="standard"
          className='w-100 inputF'
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        </Col>

        <Col bg={8} md={10} className='m-auto mb-3'> 
        <TextField
          label="Phone"
          variant="standard"
          className='w-100 inputF'
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        </Col>

        <Col bg={8} md={10} className='m-auto mb-3'> 
        <TextField
          label="Email"
          variant="standard"
          className='w-100 inputF'
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        </Col>

        <Col bg={8} md={10} className='m-auto mb-3'> 
        <TextField
          label="Company"
          variant="standard"
          className='w-100 inputF'
          id="company"
          name="company"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.company}
          error={formik.touched.company && Boolean(formik.errors.company)}
          helperText={formik.touched.company && formik.errors.company}
        />
        </Col>

        <Col bg={8} md={10} className='m-auto mb-3'> 
        <TextField
          label="Job Title"
          variant="standard"
          className='w-100 inputF'
          id="jobtitle"
          name="jobtitle"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.jobtitle}
          error={formik.touched.jobtitle && Boolean(formik.errors.jobtitle)}
          helperText={formik.touched.jobtitle && formik.errors.jobtitle}
        />
        </Col>
        
        <Col bg={8} md={10} className='m-auto mb-3'> 
        <TextField
          label="Reason"
          className='w-100 inputT'
          id="reason"
          name="reason"
          rows={4}
          multiline
          variant="filled"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.reason}
          error={formik.touched.reason && Boolean(formik.errors.reason)}
          helperText={formik.touched.reason && formik.errors.reason}
        />
        </Col>

        <div className='mb-3'></div>

        <Col>
        <Button type="submit" className='w-50 d-block m-auto' variant="contained" color="primary">
          Submit
        </Button>
        </Col>
      </form>
    </div>
  );
}
