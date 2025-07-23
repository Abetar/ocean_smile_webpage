'use client'

import React from 'react'
import { Baby } from 'lucide-react'
import { FaTooth } from 'react-icons/fa'
import Image from 'next/image'

interface DentalServiceCardProps {
  title: string
  description: string
  imageSrc: string
  isPediatric?: boolean
}

const DentalServiceCard: React.FC<DentalServiceCardProps> = ({
  title,
  description,
  imageSrc,
  isPediatric = false,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full sm:w-[280px] flex flex-col items-center text-center hover:shadow-lg transition-all">
      <div className="relative w-24 h-24 mb-4">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain rounded-full border"
        />
        {isPediatric && (
          <Baby className="absolute -top-2 -right-2 bg-blue-100 text-blue-800 p-1 rounded-full" size={20} />
        )}
      </div>
      <h3 className="font-bold text-blue-800 text-lg flex items-center gap-2">
        <FaTooth className="text-blue-800" />
        {title}
      </h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  )
}

export default DentalServiceCard
