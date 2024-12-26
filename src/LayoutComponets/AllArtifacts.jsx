import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllArtifacts = () => {
    const [artifacts, setArtifacts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchArtifacts = async () => {
            const response = await fetch(`http://localhost:5555/artifacts?search=${search}`);
            const data = await response.json();
            setArtifacts(data);
        };
        fetchArtifacts();
    }, [search]);

    console.log(artifacts)
    return (
        <div className='p-6'>
             <h1 className="text-4xl text-center font-bold mb-6">All Artifacts</h1>
             <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name"
                className="input input-bordered mb-4 w-1/4 ml-10 mx-auto"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {artifacts.map((artifact) => {
                    const { artifactImage, artifactName, historicalContext, likeCount, _id } = artifact;
                    return (
                        <div
                            key={_id}
                            className="card glass bg-base-200 text-black w-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        >
                            <figure>
                                <img
                                    src={artifactImage}
                                    alt={artifactName}
                                    className="w-full h-64 object-cover rounded-t-lg"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-lg font-bold">{artifactName}</h2>
                                <div className="space-y-1">
                                    <p className="text-sm text-gray-600">
                                        <span className="font-semibold">Historical Context:</span> {historicalContext}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <span className="font-semibold">Likes:</span> {likeCount}
                                    </p>
                                </div>
                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/artifact/${_id}`} className="btn btn-primary w-full hover:bg-blue-600">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AllArtifacts;