import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddArtifacts = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;


        const artifactName = form.artifactName?.value || '';
        const artifactImage = form.artifactImage?.value || '';
        const artifactType = form.artifactType?.value || '';
        const historicalContext = form.historicalContext?.value || '';
        const createdAt = form.createdAt?.value || '';
        const discoveredAt = form.discoveredAt?.value || '';
        const discoveredBy = form.discoveredBy?.value || '';
        const presentLocation = form.presentLocation?.value || '';



        const formData = {
            artifactName,
            artifactImage,
            artifactType,
            historicalContext,
            createdAt,
            discoveredAt,
            discoveredBy,
            presentLocation,
            addedBy: {
                email: user?.email,
                name: user?.displayName,
            },
            likeCount: 0,
        };
        try {

            await axios.post(`http://localhost:5555/add-artifact`, formData)

            toast.success('Data Added Successfully!!!')
            navigate('/allArtifacts')
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
        console.log(formData)
    };

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
            <section className="p-6 mx-auto bg-white rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Add Artifact</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label className="label">Artifact Name</label>
                            <input
                                name="artifactName"
                                type="text"
                                placeholder="Enter Artifact Name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">Artifact Image URL</label>
                            <input
                                name="artifactImage"
                                type="text"
                                placeholder="Enter Image URL"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">Artifact Type</label>
                            <select
                                name="artifactType"
                                className="select select-bordered w-full"
                            >
                                <option value="Tools">Tools</option>
                                <option value="Weapons">Weapons</option>
                                <option value="Documents">Documents</option>
                                <option value="Writings">Writings</option>
                            </select>
                        </div>

                        <div>
                            <label className="label">Historical Context</label>
                            <input
                                name="historicalContext"
                                type="text"
                                placeholder="Enter Historical Context"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">Created At</label>
                            <input
                                name="createdAt"
                                type="text"
                                placeholder="e.g., 100 BC"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">Discovered At</label>
                            <input
                                name="discoveredAt"
                                type="text"
                                placeholder="e.g., 1799"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">Discovered By</label>
                            <input
                                name="discoveredBy"
                                type="text"
                                placeholder="Enter Discoverer Name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">Present Location</label>
                            <input
                                name="presentLocation"
                                type="text"
                                placeholder="Enter Present Location"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Display logged-in user's name and email */}
                        <div>
                            <label className="label">Artifact Adder (Name)</label>
                            <input
                                type="text"
                                value={user?.displayName || 'Loading...'}
                                disabled={true}
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">Artifact Adder (Email)</label>
                            <input
                                type="email"
                                value={user?.email || 'Loading...'}
                                disabled={true}
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button type="submit" className="btn btn-primary w-full sm:w-auto">
                            Add Artifact
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddArtifacts;