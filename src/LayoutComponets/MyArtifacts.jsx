import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const MyArtifacts = () => {
    const { user } = useContext(AuthContext)
    const [artifacts, setArtifacts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetchAllArtifacts()
    }, [user])
    const fetchAllArtifacts = async () => {
        const { data } = await axios.get(
            `http://localhost:5555/artifacts/${user?.email}`
        )
        setArtifacts(data)
    }

    // delete functionality
    const handleDelete = async id => {
        try {
            const { data } = await axios.delete(
                `http://localhost:5555/artifact/${id}`
            )
            console.log(data)
            toast.success('Data Deleted Successfully!!!')
            fetchAllArtifacts()
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }
    const handleUpdate = id => {
        console.log(id)
    }

    if (artifacts?.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <img
                    src="https://i.ibb.co.com/9YRRPmp/7466140.png"
                    alt="No Data"
                    className="w-1/2 max-w-md mb-5"
                />
                <h2 className="text-xl font-semibold text-gray-600">
                    You haven’t added any artifacts yet!
                </h2>
                <p className="text-gray-500">
                    Start adding artifacts to showcase your collection.
                </p>
                <button
                    onClick={() => navigate('/addArtifacts')}
                    className="btn btn-primary mt-5"
                >
                    Add Your First Artifact
                </button>
            </div>
        );
    }

    return (
        <div className="container w-11/12 mx-auto mt-10">
            <h1 className="text-2xl font-semibold mb-5">My Artifacts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {artifacts.map((artifact) => (
                    <div key={artifact._id} className="card bg-base-200 shadow-md p-5">
                        <img
                            src={artifact.artifactImage}
                            alt={artifact.artifactName}
                            className="w-full h-64 object-cover mb-3 rounded"
                        />
                        <h2 className="text-xl font-bold">{artifact.artifactName}</h2>
                        <p className="text-sm text-gray-600 mb-2">{artifact.historicalContext}</p>
                        <p className="text-sm font-semibold">Type: {artifact.artifactType}</p>
                        <p className="text-sm font-semibold">Added By: {artifact.addedBy.name}</p>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => handleUpdate(artifact._id)}
                                className="btn btn-primary btn-sm"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => handleDelete(artifact._id)}
                                className="btn btn-error btn-sm"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default MyArtifacts;