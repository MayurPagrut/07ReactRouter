import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Github() {
    const {userName} = useParams();
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://api.github.com/users/Mayurpagrut")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading GitHub Profile...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        
        {/* Avatar */}
        <img
          src={data.avatar_url}
          alt="github avatar"
          className="w-32 h-32 mx-auto rounded-full border-4 border-gray-300"
        />

        {/* Name */}
        <h1 className="text-2xl font-bold mt-4">
          {data.name || data.login}
        </h1>

        {/* Bio */}
        <p className="text-gray-600 mt-2">
          {data.bio || "No bio available"}
        </p>

        {/* Stats */}
        <div className="flex justify-around mt-6">
          <div>
            <p className="text-xl font-bold">{data.followers}</p>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>
          <div>
            <p className="text-xl font-bold">{data.following}</p>
            <p className="text-gray-500 text-sm">Following</p>
          </div>
          <div>
            <p className="text-xl font-bold">{data.public_repos}</p>
            <p className="text-gray-500 text-sm">Repos</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <a
            href={data.html_url}
            target="_blank"
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            View Profile
          </a>

          <a
            href={`${data.html_url}?tab=repositories`}
            target="_blank"
            className="px-6 py-2 border border-black rounded-lg hover:bg-gray-100"
          >
            Repositories
          </a>
        </div>
      </div>
    </div>
  )
}

export default Github
