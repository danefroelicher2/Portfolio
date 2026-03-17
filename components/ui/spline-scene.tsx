'use client'

import { Suspense, lazy, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

function RobotSkeleton() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64 animate-pulse">
        {/* Head */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-gray-700/50 rounded-full"></div>
        {/* Body */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-32 h-40 bg-gray-700/50 rounded-lg"></div>
        {/* Left arm */}
        <div className="absolute top-32 left-4 w-12 h-32 bg-gray-700/50 rounded-lg"></div>
        {/* Right arm */}
        <div className="absolute top-32 right-4 w-12 h-32 bg-gray-700/50 rounded-lg"></div>
      </div>
    </div>
  )
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Suspense fallback={<RobotSkeleton />}>
      <div className={`transition-opacity duration-500 w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Spline
          scene={scene}
          className={className}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </Suspense>
  )
}
