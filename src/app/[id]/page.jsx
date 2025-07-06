import Link from 'next/link'
import React from 'react'

const Single = () => {
    return (
        <div className="px-2 py-20 w-full flex justify-center">
            <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div className="lg:w-1/2">
                    <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg")' }}>
                    </div>
                </div>
                <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                    <h2 className="text-3xl text-gray-800 font-bold">
                        How to Make Eco-Friendly Lifestyle Choices
                        <span className="text-indigo-600"> tomato?</span>
                    </h2>
                    <p className="mt-4 text-gray-600">
                        To make eco-friendly lifestyle choices, start by reducing single-use plastics, opting for sustainable products, and conserving energy. Incorporate more plant-based meals into your diet, use public transportation or carpool, and support local businesses. Small changes in daily habits can lead to a significant positive impact on the environment.
                    </p>
                    <div className="mt-6 flex items-center space-x-4">
                        <div class="mt-8">
                        <Link href="/1/edit" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Edit Recipe</Link>
                    </div>
                    <div class="mt-8">
                        <Link href="/delete" class="bg-red-900 text-gray-100 px-5 py-3 font-semibold rounded">Delete Recipe</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Single
