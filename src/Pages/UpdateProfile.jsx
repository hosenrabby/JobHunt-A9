
import { FaUserEdit } from "react-icons/fa";
import Button from "../Shared/Button";
import { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router";

const UpdateProfile = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { user, setUser, userUpdateProfile } = use(AuthContext)

    const handleSubmit = (e) => {
        setError('')
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const phone = e.target.phone.value
        const photo = e.target.photo.value
        const updatedataObj =
        {
            displayName: name,
            email: email,
            phoneNumber: phone,
            photoURL: photo
        }
        userUpdateProfile(updatedataObj).then(() => {
            setUser({ ...user, updatedataObj })
            navigate('/profile')
        }).catch(() => {
            setError('Invalid Credintial')
        })
    };

    return (
        <section className="py-12 bg-base-100">
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-500 flex items-center gap-2 mb-6">
                    <FaUserEdit /> Update Profile
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        {error && <span className='text-red-600'>{error}</span>}
                    </div>
                    <div>
                        <label className="label">Full Name</label>
                        <input type="text" name="name" placeholder="John Doe" defaultValue={user ? user.displayName : ''} className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label">Email Address</label>
                        <input type="email" name="email" placeholder="john@example.com" defaultValue={user ? user.email : ''} className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label">Phone Number</label>
                        <input type="tel" name="phone" placeholder="+8801234567890" defaultValue={user ? user.phoneNumber : ''} className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="label">Profile Photo URL</label>
                        <input type="text" name="photo" placeholder="photo URL" defaultValue={user ? user.photoURL : ''} className="input input-bordered w-full" />
                    </div>

                    <div className="text-center">
                        <Button label={'Save Changes'}></Button>
                        <Link to={'/profile'}><button className="btn btn-outline btn-error">Cancle</button></Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UpdateProfile;
