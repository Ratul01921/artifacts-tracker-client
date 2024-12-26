import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';

const MyArtifacts = () => {
    const { user } = useContext(AuthContext)
    const [artifacts, setArtifacts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetchAllArtifacts()
    }, [user])
    const fetchAllArtifacts = async () => {
        const { data } = await axios.get(
            `http://localhost:5555/artifacts/${user?.email}`, {withCredentials: true}
        )
        setArtifacts(data)
    }


    const handleDelete = async id => {
        try {
          const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          });
      
          
          if (result.isConfirmed) {
            await axios.delete(`http://localhost:5555/artifact/${id}`);
            
            Swal.fire({
              title: "Deleted!",
              text: "Data Deleted Successfully!!!",
              icon: "success"
            });
            fetchAllArtifacts();
            navigate('/allArtifacts')
          }
        } catch (err) {
          toast.error(err.message);
        }
      };

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
                        <div className="flex justify-between items-center mt-4">
                            <Link
                                to={`/update/${artifact._id}`}
                                className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='w-5 h-5 '
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                                    />
                                </svg>
                            </Link>
                            <button
                                onClick={() => handleDelete(artifact._id)}
                                className="btn text-2xl text-red-500"
                            >
                                <MdDeleteForever />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default MyArtifacts;