import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const LikeArtifacts = () => {
    const [likedArtifacts, setLikedArtifacts] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        const fetchLikedArtifacts = async () => {
            try {
                if (!user || !user.email) {
                    console.error('User is not logged in or email is missing');
                    return;
                }
                const response = await fetch(`https://artifacts-tracker-server.vercel.app/artifacts/likes/${user.email}`);
                const data = await response.json();
                setLikedArtifacts(data);
            } catch (error) {
                console.error('Error fetching liked artifacts', error);
            }
        };

        fetchLikedArtifacts();
    }, [user]);

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-2xl font-bold text-center mb-6">Liked Artifacts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                {likedArtifacts?.map(({ _id, artifactImage, artifactName, historicalContext, likeCount }) => (
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
                            <p className="text-sm text-gray-600">{historicalContext || "No context available"}</p>
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold">Likes:</span> {likeCount || 0}
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
        </div>
    );
};

export default LikeArtifacts;
