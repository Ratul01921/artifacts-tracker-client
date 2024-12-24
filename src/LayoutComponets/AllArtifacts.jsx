import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllArtifacts = () => {
    const artifacts = useLoaderData();

    console.log(artifacts)
    return (
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
                                className="w-full h-48 object-cover rounded-t-lg"
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
    );
};

export default AllArtifacts;