import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopArtifacts = () => {
    const [artifacts, setArtifacts] = useState()

    useEffect(() => {
        const fetchTopArtifacts = async () => {
            try {
                const response = await fetch('https://artifacts-tracker-server.vercel.app/top-artifacts');
                const data = await response.json();
                setArtifacts(data);
            } catch (error) {
                console.error('Failed to fetch top artifacts:', error);
            }
        };
        fetchTopArtifacts();
    }, []);
    return (
        <div className='w-11/12 mx-auto my-6 bg-gray-200'>
            <div className="text-center p-6">
                <h2 className="text-4xl font-bold">
                    Most Popular Artifacts
                </h2>
                <p className="text-lg  mt-2">Discover the most iconic and historically significant artifacts.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                {artifacts?.map(({ _id, artifactImage, artifactName, historicalContext, likeCount }) => (
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
                            <p className="text-sm text-gray-600">{historicalContext}</p>
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold">Likes:</span> {likeCount}
                            </p>
                            <div className="card-actions justify-end mt-4">
                                <a href={`/artifact/${_id}`} className="btn btn-primary w-full hover:bg-blue-600">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center p-6">
                <Link
                    to="/allArtifacts"
                    className="btn btn-primary hover:bg-gray-700 "
                >
                    See All Artifact
                </Link>
            </div>
        </div>
    );
};

export default TopArtifacts;










