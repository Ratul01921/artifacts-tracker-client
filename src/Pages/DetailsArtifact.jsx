import React from 'react';
import { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const DetailsArtifact = () => {
    const artifact = useLoaderData()
    console.log(artifact)
    const [likeCount, setLikeCount] = useState(artifact.likeCount);

    const handleLike = async () => {
      setLikeCount(likeCount + 1);
      try {
        const response = await fetch(`http://localhost:5555/artifacts/${artifact._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ likeCount: likeCount + 1 }),
        });
  
        if (response.ok) {
          toast.success('Like successfully');
        } else {
          toast.error('Error updating like count');
        }
      } catch (error) {
        toast.error('Error:', error);
      }
    }
    return (
        <div className="card glass bg-base-200 text-black my-8 w-96 md:w-1/2 mx-auto shadow-xl">
            <figure>
                <img
                    src={artifact.artifactImage}
                    alt={artifact.artifactName}
                    className="w-full h-96 object-cover rounded-t-lg"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">{artifact.artifactName}</h2>
                <div className="space-y-1">
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Type:</span> {artifact.artifactType}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Historical Context:</span> {artifact.historicalContext}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Created At:</span> {artifact.createdAt}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Discovered At:</span> {artifact.discoveredAt}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Discovered By:</span> {artifact.discoveredBy}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Present Location:</span> {artifact.presentLocation}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Added By:</span> {artifact.addedBy.name} ({artifact.addedBy.email})
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Likes:</span> {likeCount}
                    </p>
                </div>
                <div className="card-actions  mt-4">
                    <button onClick={handleLike} className="btn text-4xl hover:bg-blue-600">
                    <AiFillLike />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsArtifact;