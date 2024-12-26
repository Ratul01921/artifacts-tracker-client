import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from "react-toastify";

const UpdateArtifact = () => {
    const navigate = useNavigate()
  const { id } = useParams()
  const [artifact, setArtifact] = useState({
    artifactName: '',
    artifactImage: '',
    artifactType: '',
    historicalContext: '',
    createdAt: '',
    discoveredAt: '',
    discoveredBy: '',
    presentLocation: ''
  })

  useEffect(() => {
    fetchArtifactData()
  }, [id])

  const fetchArtifactData = async () => {
    const { data } = await axios.get(
      `https://artifacts-tracker-server.vercel.app/artifact/${id}`
    )
    setArtifact(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const artifactName = form.artifactName.value
    const artifactImage = form.artifactImage.value
    const artifactType = form.artifactType.value
    const historicalContext = form.historicalContext.value
    const createdAt = form.createdAt.value
    const discoveredAt = form.discoveredAt.value
    const discoveredBy = form.discoveredBy.value
    const presentLocation = form.presentLocation.value

    const formData = {
      artifactName,
      artifactImage,
      artifactType,
      historicalContext,
      createdAt,
      discoveredAt,
      discoveredBy,
      presentLocation,
    }

    try {
      await axios.put(
        `https://artifacts-tracker-server.vercel.app/update-artifact/${id}`,
        formData
      )
      form.reset()
      toast.success('Artifact Updated Successfully!!!')
      navigate('/myArtifacts')
    } catch (err) {
      toast.error(err.message)
    }
  }



    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className='p-2 md:p-6 mx-auto bg-white rounded-md shadow-md'>
                <h2 className='text-lg font-semibold text-gray-700 capitalize'>
                    Update Artifact
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700' htmlFor='artifactName'>
                                Artifact Name
                            </label>
                            <input
                                id='artifactName'
                                name='artifactName'
                                defaultValue={artifact.artifactName}
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='artifactImage'>
                                Artifact Image URL
                            </label>
                            <input
                                id='artifactImage'
                                name='artifactImage'
                                defaultValue={artifact.artifactImage}
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='artifactType'>
                                Artifact Type
                            </label>
                            <select
                                name='artifactType'
                                id='artifactType'
                                defaultValue={artifact.artifactType}
                                className='border p-2 rounded-md'
                            >
                                <option value='Tools'>Tools</option>
                                <option value='Weapons'>Weapons</option>
                                <option value='Documents'>Documents</option>
                                <option value='Writings'>Writings</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='historicalContext'>
                                Historical Context
                            </label>
                            <textarea
                                name='historicalContext'
                                id='historicalContext'
                                defaultValue={artifact.historicalContext}
                                cols='30'
                                rows='4'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            ></textarea>
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='createdAt'>
                                Created At
                            </label>
                            <input
                                id='createdAt'
                                name='createdAt'
                                defaultValue={artifact.createdAt}
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='discoveredAt'>
                                Discovered At
                            </label>
                            <input
                                id='discoveredAt'
                                name='discoveredAt'
                                defaultValue={artifact.discoveredAt}
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='discoveredBy'>
                                Discovered By
                            </label>
                            <input
                                id='discoveredBy'
                                name='discoveredBy'
                                defaultValue={artifact.discoveredBy}
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='presentLocation'>
                                Present Location
                            </label>
                            <input
                                id='presentLocation'
                                name='presentLocation'
                                defaultValue={artifact.presentLocation}
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>
                    </div>

                    <div className='flex justify-end mt-6'>
                        <button
                            type='submit'
                            className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                        >
                            Update Artifact
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateArtifact;
