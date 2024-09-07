import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const Form = () => {
    const validate = yup.object().shape({
        name : yup.string().required('نام ضروری است'),
        family : yup.string().required(),
        age : yup.number().positive().min(5).max(18).required(),
        email : yup.string().email().required(),
        password: yup.string().min(6).max(8).required(),
        confirmPassword : yup.string().oneOf([yup.ref("password")], 'پسورد یکسان نیست.').required()

    })
    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(validate)})

    const onFormSubmit = (data) => {
        console.log(data)
    }

    return (
    <div className="container mt-5">
        <form className="row g-3 needs-validation" novalidate onSubmit={handleSubmit(onFormSubmit)}>
            <div className="mb-3 col-md-6">
                <label for="exampleInputName1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" {...register("name")}/>
                <div className="text-danger"> {errors.name?.message} </div>
            </div>

            <div className="mb-3 col-md-6">
                <label for="exampleInputFamily1" className="form-label">Family</label>
                <input type="text" className="form-control" id="exampleInputFamily1" aria-describedby="familyHelp" {...register("family")}/>
                <div className="text-danger"> {errors.family?.message} </div>
            </div>
            <div className="mb-3 col-md-6">
                <label for="exampleInputAge" className="form-label">Age</label>
                <input type="number" className="form-control" id="exampleInputAge1" aria-describedby="ageHelp" {...register("age")}/>
                <div className="text-danger"> {errors.age?.message} </div>
            </div>
            <div className="mb-3 col-md-6">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email")}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                <div className="text-danger"> {errors.email?.message} </div>
            </div>
            <div className="mb-3 col-md-6">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" {...register("password")}/>
                <div className="text-danger"> {errors.password?.message} </div>
            </div>
            <div className="mb-3 col-md-6">
                <label for="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputConfirmPassword1" {...register("confirmPassword")}/>
                <div className="text-danger"> {errors.confirmPassword?.message} </div>
            </div>
            <div className="mb-3 form-check col-md-6">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register("checkOut")}/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
    );

}